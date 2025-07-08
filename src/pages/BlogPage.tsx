import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogList from '../components/blog/BlogList'

const BlogPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="blog-page">
      <Header />
      <BlogList />
      <Footer />
    </div>
  )
}

export default BlogPage
