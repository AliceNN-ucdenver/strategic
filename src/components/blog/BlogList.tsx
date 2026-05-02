import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getPublishedPosts } from '../../utils/blog'
import BlogCard from './BlogCard'
import './BlogList.css'

const topicFilters = [
  { id: '', label: 'All Articles', tags: [] },
  { id: 'wonderland-series', label: 'Wonderland Series', tags: ['wonderland-series'] },
  {
    id: 'architecture',
    label: 'Architecture',
    tags: [
      'strategic-architecture',
      'Software Architecture',
      'architecture-leadership',
      'architecture-standards',
      'business-architecture',
      'architecture-patterns',
      'evolutionary-architecture',
      'btabok',
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    tags: [
      'ai-engineering',
      'ai-architecture',
      'nvidia',
      'nemotron',
      'multi-agent',
      'document-intelligence',
      'dgx-spark',
      'nemo-agent-toolkit',
    ],
  },
  {
    id: 'career',
    label: 'Career',
    tags: [
      'Career Development',
      'Professional Growth',
      'professional-development',
      'architecture-education',
      'talent-magnetism',
      'Leadership',
    ],
  },
  {
    id: 'transformation',
    label: 'Transformation',
    tags: [
      'transformation',
      'Transformation',
      'business-strategy',
      'Business Value',
      'innovation-acceleration',
      'innovation-incubation',
      'platform-engineering',
      'business-technology-synthesis',
      'ecosystem-intelligence',
    ],
  },
]

const normalizeTag = (tag: string) => tag.toLowerCase()
const formatTopicLabel = (tag: string) =>
  tag.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())

const BlogList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState<boolean>(false)
  
  const allPosts = getPublishedPosts() // Use published posts for blog list

  // Initialize state from URL parameters
  useEffect(() => {
    const tagParam = searchParams.get('tag')
    const featuredParam = searchParams.get('featured')
    
    if (tagParam) {
      setSelectedTag(tagParam)
    }
    if (featuredParam === 'true') {
      setShowFeaturedOnly(true)
    } else {
      setShowFeaturedOnly(false)
    }
  }, [searchParams])

  const filteredPosts = useMemo(() => {
    let posts = allPosts

    // Filter by featured status first
    if (showFeaturedOnly) {
      posts = posts.filter(post => post.featured)
    }

    // Filter by tag
    if (selectedTag) {
      const selectedTopic = topicFilters.find(topic => topic.id === selectedTag)
      const selectedTopicTags = selectedTopic?.tags.map(normalizeTag)

      posts = posts.filter(post => {
        const postTags = (post.tags || []).map(normalizeTag)

        if (selectedTopicTags && selectedTopicTags.length > 0) {
          return selectedTopicTags.some(tag => postTags.includes(tag))
        }

        return postTags.includes(normalizeTag(selectedTag))
      })
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
  }, [allPosts, selectedTag, searchTerm, showFeaturedOnly])

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  // Handle tag selection
  const handleTopicChange = (tag: string) => {
    setSelectedTag(tag)
    setShowFeaturedOnly(false) // Clear featured filter when selecting a tag
    if (tag) {
      setSearchParams({ tag })
    } else {
      setSearchParams({})
    }
  }

  const handleFeaturedChange = () => {
    setSelectedTag('')
    setShowFeaturedOnly(true)
    setSearchParams({ featured: 'true' })
  }

  const selectedTopic = topicFilters.find(topic => topic.id === selectedTag)
  const sectionLabel = showFeaturedOnly
    ? 'Featured Discoveries'
    : selectedTopic
      ? selectedTopic.label
      : selectedTag
        ? formatTopicLabel(selectedTag)
        : 'All Articles'
  const sectionTitle = showFeaturedOnly
    ? sectionLabel
    : selectedTag
      ? `${sectionLabel} Articles`
      : 'More Articles'
  const displayedPosts = selectedTag || searchTerm || showFeaturedOnly ? filteredPosts : regularPosts

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

          <div className="topic-filter-group" aria-label="Article topics">
            {topicFilters.map(topic => (
              <button
                key={topic.id || 'all'}
                type="button"
                className={`topic-filter-button ${selectedTag === topic.id && !showFeaturedOnly ? 'active' : ''}`}
                onClick={() => handleTopicChange(topic.id)}
                aria-pressed={selectedTag === topic.id && !showFeaturedOnly}
              >
                {topic.label}
              </button>
            ))}
            <button
              type="button"
              className={`topic-filter-button ${showFeaturedOnly ? 'active' : ''}`}
              onClick={handleFeaturedChange}
              aria-pressed={showFeaturedOnly}
            >
              Featured
            </button>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && !selectedTag && !searchTerm && !showFeaturedOnly && (
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
            {sectionTitle}
          </h2>
          <span className="posts-count">
            {displayedPosts.length} {displayedPosts.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {displayedPosts.length > 0 ? (
          <div className="posts-grid">
            {displayedPosts.map(post => (
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
