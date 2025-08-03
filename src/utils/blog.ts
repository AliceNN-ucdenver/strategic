import type { BlogPost } from '../types/blog'

// Import all MDX files from content/posts
const postModules = import.meta.glob('../content/posts/*.mdx', { eager: true })

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = []

  for (const path in postModules) {
    const mod = postModules[path] as any
    const slug = path
      .replace('../content/posts/', '')
      .replace('.mdx', '')
    
    if (mod.frontmatter) {
      posts.push({
        slug,
        ...mod.frontmatter,
      })
    }
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPublishedPosts(): BlogPost[] {
  const today = new Date()
  today.setHours(23, 59, 59, 999) // Set to end of day to include today's posts
  
  return getAllPosts().filter(post => {
    const postDate = new Date(post.date)
    postDate.setHours(0, 0, 0, 0) // Set to start of day for accurate comparison
    
    // Only include posts with dates <= today (exclude future-dated posts)
    return postDate <= today
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts() // Use getAllPosts to allow access to future posts
  return posts.find(post => post.slug === slug) || null
}

export function getFeaturedPosts(): BlogPost[] {
  return getPublishedPosts().filter(post => post.featured) // Use published posts for listings
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getPublishedPosts().filter(post => post.tags.includes(tag)) // Use published posts for listings
}

export function getAllTags(): string[] {
  const posts = getPublishedPosts() // Use published posts for tag listings
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

export function formatDate(dateString: string): string {
  // Parse date string and ensure it's treated as local date
  const [year, month, day] = dateString.split('-').map(Number)
  const date = new Date(year, month - 1, day) // month is 0-indexed
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
