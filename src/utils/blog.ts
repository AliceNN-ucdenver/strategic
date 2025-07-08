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

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find(post => post.slug === slug) || null
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.featured)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
