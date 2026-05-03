import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { getBasePath } from './config/site'
import './App.css'

const FrameworkPage = lazy(() => import('./pages/FrameworkPage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))
const ResumeOnlyPage = lazy(() => import('./pages/ResumeOnlyPage'))

function App() {
  const basename = getBasePath()
  
  return (
    <Router basename={basename}>
      <div className="App">
        <Suspense fallback={<div className="route-loading" role="status">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/framework" element={<FrameworkPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/resume-print" element={<ResumeOnlyPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
