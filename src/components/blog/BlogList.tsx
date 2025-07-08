import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAllPosts, getAllTags } from '../../utils/blog'
import BlogCard from './BlogCard'
import './BlogList.css'

const BlogList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  
  const allPosts = getAllPosts()
  const allTags = getAllTags()

  // Initialize state from URL parameters
  useEffect(() => {
    const tagParam = searchParams.get('tag')
    const featuredParam = searchParams.get('featured')
    
    if (tagParam) {
      setSelectedTag(tagParam)
    }
    if (featuredParam === 'true') {
      // Handle featured filter if needed
    }
  }, [searchParams])

  const filteredPosts = useMemo(() => {
    let posts = allPosts

    // Filter by tag
    if (selectedTag) {
      posts = posts.filter(post => post.tags && post.tags.includes(selectedTag))
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(term)))
      )
    }

    return posts
  }, [allPosts, selectedTag, searchTerm])

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  // Handle tag selection
  const handleTagChange = (tag: string) => {
    setSelectedTag(tag)
    if (tag) {
      setSearchParams({ tag })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="blog-list-page">
      {/* Blog Header */}
      <div className="blog-header">
        <div className="blog-hero">
          <h1 className="blog-title">Digital Excavations</h1>
          <p className="blog-subtitle">
            Archaeological insights from the Chief Archeologist's expeditions through 
            enterprise technology landscapes, legacy system discoveries, and AI transformation journeys.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="blog-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-container">
            <select
              value={selectedTag}
              onChange={(e) => handleTagChange(e.target.value)}
              className="tag-filter"
            >
              <option value="">All Topics</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && !selectedTag && !searchTerm && (
        <section className="featured-section">
          <h2 className="section-title">Featured Discoveries</h2>
          <div className="featured-grid">
            {featuredPosts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="posts-section">
        <div className="section-header">
          <h2 className="section-title">
            {selectedTag ? `${selectedTag.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Articles` : 'All Articles'}
          </h2>
          <span className="posts-count">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="posts-grid">
            {(selectedTag || searchTerm ? filteredPosts : regularPosts).map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="no-posts">
            <h3>No articles found</h3>
            <p>Try adjusting your search terms or filters.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default BlogList
