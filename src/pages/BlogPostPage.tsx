import React, { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getPostBySlug, formatDate } from '../utils/blog'
import './BlogPostPage.css'

// Import all MDX files dynamically
const postModules = import.meta.glob('../content/posts/*.mdx', { eager: true })

// Custom components for MDX
const mdxComponents = {
  h1: (props: any) => <h1 className="blog-h1" {...props} />,
  h2: (props: any) => <h2 className="blog-h2" {...props} />,
  h3: (props: any) => <h3 className="blog-h3" {...props} />,
  p: (props: any) => <p className="blog-paragraph" {...props} />,
  blockquote: (props: any) => <blockquote className="blog-blockquote" {...props} />,
  code: (props: any) => <code className="blog-inline-code" {...props} />,
  pre: (props: any) => <pre className="blog-code-block" {...props} />,
  a: (props: any) => <a className="blog-link" {...props} />,
  ul: (props: any) => <ul className="blog-content-list" {...props} />,
  ol: (props: any) => <ol className="blog-content-list" {...props} />,
  li: (props: any) => <li className="blog-content-list-item" {...props} />,
  img: (props: any) => <img className="blog-image" {...props} />,
  strong: (props: any) => <strong style={{ color: '#667eea', fontWeight: 600 }} {...props} />,
  table: (props: any) => <table className="blog-table" {...props} />,
  thead: (props: any) => <thead className="blog-table-head" {...props} />,
  tbody: (props: any) => <tbody className="blog-table-body" {...props} />,
  tr: (props: any) => <tr className="blog-table-row" {...props} />,
  th: (props: any) => <th className="blog-table-header" {...props} />,
  td: (props: any) => <td className="blog-table-cell" {...props} />,
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])
  
  if (!slug) {
    return <Navigate to="/blog" replace />
  }

  // Get post metadata
  const post = getPostBySlug(slug)
  
  if (!post) {
    return (
      <div className="blog-post-page">
        <Header />
        <div className="blog-post-container">
          <div className="blog-post-content">
            <div className="post-not-found">
              <h1>Post Not Found</h1>
              <p>The blog post you're looking for doesn't exist.</p>
              <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Get the MDX component for this post
  const postPath = `../content/posts/${slug}.mdx`
  const PostComponent = (postModules[postPath] as any)?.default

  if (!PostComponent) {
    return (
      <div className="blog-post-page">
        <Header />
        <div className="blog-post-container">
          <div className="blog-post-content">
            <div className="post-not-found">
              <h1>Content Not Available</h1>
              <p>The content for this post could not be loaded.</p>
              <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      <Header />
      
      <article className="blog-post-container">
        <div className="blog-post-content">
          {/* Post Header */}
          <header className="blog-post-header">
            <Link to="/blog" className="back-to-blog">
              ← Back to Digital Excavations
            </Link>
            
            {/* Header Image */}
            {post.image && (
              <div className="post-header-image">
                <img src={post.image} alt={post.title} />
              </div>
            )}
            
            <div className="post-meta">
              <time className="post-date">{formatDate(post.date)}</time>
              <span className="post-read-time">{post.readTime}</span>
            </div>
            
            <h1 className="post-title">{post.title}</h1>
            
            <p className="post-excerpt">{post.excerpt}</p>
            
            <div className="post-tags">
              {post.tags.map(tag => (
                <Link 
                  key={tag} 
                  to={`/blog?tag=${tag}`} 
                  className="post-tag"
                >
                  {tag}
                </Link>
              ))}
            </div>
            
            <div className="post-divider"></div>
          </header>

          {/* Post Content */}
          <div className="blog-post-body">
            <MDXProvider components={mdxComponents}>
              <PostComponent />
            </MDXProvider>
          </div>

          {/* Post Footer */}
          <footer className="blog-post-footer">
            <div className="post-divider"></div>
            
            <div className="post-author">
              <div className="author-info">
                <h3>About the Author</h3>
                <p>
                  <strong>{post.author}</strong> has spent over two decades excavating the digital ruins 
                  of enterprise technology, translating ancient COBOL hieroglyphics into modern business value, 
                  and pioneering AI transformation strategies for Fortune 500 companies.
                </p>
              </div>
            </div>
            
            <div className="post-navigation">
              <Link to="/blog" className="nav-button">
                ← Back to All Articles
              </Link>
              <Link to="/blog?featured=true" className="nav-button">
                View Featured Posts →
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export default BlogPostPage
