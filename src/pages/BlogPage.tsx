import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogList from '../components/blog/BlogList'

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <Header />
      <BlogList />
      <Footer />
    </div>
  )
}

export default BlogPage
