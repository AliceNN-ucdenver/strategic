import React, { lazy, Suspense, useMemo } from 'react'
import type { ComponentType } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import PageLayout from '../components/PageLayout'
import { getPostBySlug, formatDate } from '../utils/blog'
import ImageZoom from '../components/ImageZoom'
import { useScrollToTop } from '../hooks/usePageLifecycle'
import './BlogPostPage.css'

type MdxPostModule = {
  default: ComponentType
}

const postModules = import.meta.glob<MdxPostModule>('../content/posts/*.mdx')

// Custom components for MDX
const mdxComponents = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => <h1 className="blog-h1" {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="blog-h2" {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="blog-h3" {...props} />,
  p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="blog-paragraph" {...props} />,
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => <blockquote className="blog-blockquote" {...props} />,
  code: (props: React.ComponentPropsWithoutRef<'code'>) => <code className="blog-inline-code" {...props} />,
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => <pre className="blog-code-block" {...props} />,
  a: (props: React.ComponentPropsWithoutRef<'a'>) => <a className="blog-link" {...props} />,
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <ul className="blog-content-list" {...props} />,
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <ol className="blog-content-list" {...props} />,
  li: (props: React.ComponentPropsWithoutRef<'li'>) => <li className="blog-content-list-item" {...props} />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <ImageZoom {...props} />,
  strong: (props: React.ComponentPropsWithoutRef<'strong'>) => <strong className="blog-strong" {...props} />,
  table: (props: React.ComponentPropsWithoutRef<'table'>) => <table className="blog-table" {...props} />,
  thead: (props: React.ComponentPropsWithoutRef<'thead'>) => <thead className="blog-table-head" {...props} />,
  tbody: (props: React.ComponentPropsWithoutRef<'tbody'>) => <tbody className="blog-table-body" {...props} />,
  tr: (props: React.ComponentPropsWithoutRef<'tr'>) => <tr className="blog-table-row" {...props} />,
  th: (props: React.ComponentPropsWithoutRef<'th'>) => <th className="blog-table-header" {...props} />,
  td: (props: React.ComponentPropsWithoutRef<'td'>) => <td className="blog-table-cell" {...props} />,
}

type MissingPostProps = {
  title: string
  message: string
}

const MissingPost = ({ title, message }: MissingPostProps) => (
  <PageLayout className="blog-post-page">
    <div className="blog-post-container">
      <div className="blog-post-content">
        <div className="post-not-found">
          <h1>{title}</h1>
          <p>{message}</p>
          <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
        </div>
      </div>
    </div>
  </PageLayout>
)

type ArticleBodyProps = {
  slug: string
}

const ArticleBody = ({ slug }: ArticleBodyProps) => {
  const postPath = `../content/posts/${slug}.mdx`
  const loadPost = postModules[postPath]
  const PostComponent = useMemo(() => (loadPost ? lazy(loadPost) : null), [loadPost])

  if (!PostComponent) {
    return <div className="blog-article-loading">Article unavailable</div>
  }

  return (
    <Suspense fallback={<div className="blog-article-loading">Loading article...</div>}>
      <MDXProvider components={mdxComponents}>
        <PostComponent />
      </MDXProvider>
    </Suspense>
  )
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  useScrollToTop(slug)
  
  if (!slug) {
    return <Navigate to="/blog" replace />
  }

  // Get post metadata
  const post = getPostBySlug(slug)
  
  if (!post) {
    return (
      <MissingPost
        title="Post Not Found"
        message="The blog post you're looking for doesn't exist."
      />
    )
  }

  const postPath = `../content/posts/${slug}.mdx`

  if (!postModules[postPath]) {
    return (
      <MissingPost
        title="Content Not Available"
        message="The content for this post could not be loaded."
      />
    )
  }

  return (
    <PageLayout className="site-page blog-post-page">
      <article className="blog-post-container">
        <header className="editorial-hero editorial-hero--band blog-post-header">
          <div className="editorial-hero__inner blog-post-header-inner">
            <Link to="/blog" className="back-to-blog">
              ← Back to Digital Excavations
            </Link>

            <div className={`post-hero-split ${post.image ? 'has-image' : 'no-image'}`}>
              {post.image && (
                <div className="post-header-image">
                  <img src={post.image} alt={post.title} />
                </div>
              )}

              <div className="post-hero-copy">
                <div className="post-meta">
                  <time className="post-date">{formatDate(post.date)}</time>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                
                <h1 className="editorial-hero__title post-title">{post.title}</h1>
                
                <p className="editorial-hero__subtitle post-excerpt">{post.excerpt}</p>
                
                <div className="post-tags">
                  {post.tags.slice(0, 6).map(tag => (
                    <Link 
                      key={tag} 
                      to={`/blog?tag=${tag}`} 
                      className="post-tag"
                    >
                      {tag}
                    </Link>
                  ))}
                  {post.tags.length > 6 && (
                    <span className="post-tag post-tag-more">+{post.tags.length - 6} more</span>
                  )}
                </div>
                
                <div className="post-divider"></div>
              </div>
            </div>
          </div>
        </header>

        <div className="blog-post-layout">
          <aside className="blog-post-rail" aria-label="Article details">
            <div className="rail-panel">
              <span className="rail-kicker">Field Notes</span>
              <dl className="rail-meta">
                <div>
                  <dt>Published</dt>
                  <dd>{formatDate(post.date)}</dd>
                </div>
                <div>
                  <dt>Reading Time</dt>
                  <dd>{post.readTime}</dd>
                </div>
                <div>
                  <dt>Author</dt>
                  <dd>{post.author}</dd>
                </div>
              </dl>
              <div className="rail-tags">
                {post.tags.slice(0, 5).map(tag => (
                  <Link key={tag} to={`/blog?tag=${tag}`}>
                    {tag.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="blog-post-content">
            <div className="blog-post-body">
              <ArticleBody slug={slug} />
            </div>
          </div>
        </div>

        <footer className="blog-post-footer">
          <div className="blog-post-footer-inner">
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
          </div>
        </footer>
      </article>
    </PageLayout>
  )
}

export default BlogPostPage
