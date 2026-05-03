import React from 'react'
import PageLayout from '../components/PageLayout'
import BlogList from '../components/blog/BlogList'
import { useScrollToTop } from '../hooks/usePageLifecycle'

const BlogPage: React.FC = () => {
  useScrollToTop()

  return (
    <PageLayout className="blog-page">
      <BlogList />
    </PageLayout>
  )
}

export default BlogPage
