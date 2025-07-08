import React from 'react'
import { Link } from 'react-router-dom'
import type { BlogPost } from '../../types/blog'
import { formatDate } from '../../utils/blog'
import './BlogCard.css'

interface BlogCardProps {
  post: BlogPost
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="blog-card">
      <div className="blog-card-content">
        <div className="blog-card-header">
          <div className="blog-card-meta">
            <time className="blog-card-date">{formatDate(post.date)}</time>
            <span className="blog-card-read-time">{post.readTime}</span>
          </div>
          {post.featured && (
            <span className="blog-card-featured">Featured</span>
          )}
        </div>
        
        <h2 className="blog-card-title">
          <Link to={`/blog/${post.slug}`} className="blog-card-link">
            {post.title}
          </Link>
        </h2>
        
        <p className="blog-card-excerpt">{post.excerpt}</p>
        
        <div className="blog-card-footer">
          <div className="blog-card-tags">
            {post.tags.slice(0, 3).map(tag => (
              <Link 
                key={tag} 
                to={`/blog?tag=${tag}`} 
                className="blog-card-tag"
                onClick={(e) => e.stopPropagation()}
              >
                {tag.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            ))}
          </div>
          
          <Link to={`/blog/${post.slug}`} className="blog-card-read-more">
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
