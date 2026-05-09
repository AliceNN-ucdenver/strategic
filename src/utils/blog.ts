import type { BlogPost } from '../types/blog'

type BlogPostModule = {
  frontmatter: Omit<BlogPost, 'slug'>
}

const postModules = import.meta.glob<BlogPostModule['frontmatter']>('../content/posts/*.mdx', {
  eager: true,
  import: 'frontmatter',
})

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = []

  for (const path in postModules) {
    const frontmatter = postModules[path]
    const slug = path
      .replace('../content/posts/', '')
      .replace('.mdx', '')
    
    posts.push({
      slug,
      ...frontmatter,
    })
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter(post => {
    return isPostPublished(post.date)
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

export function getLocalPostDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export function isFutureDatedPost(dateString: string): boolean {
  const postDate = getLocalPostDate(dateString)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return postDate > today
}

export function isPostPublished(dateString: string): boolean {
  return !isFutureDatedPost(dateString)
}
