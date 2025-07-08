export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  featured: boolean
  readTime: string
  image?: string
  content?: string
}

export interface BlogPostMatter {
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  featured: boolean
  readTime: string
  image?: string
}
