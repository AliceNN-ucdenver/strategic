import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FrameworkPage from './pages/FrameworkPage'
import ProductPage from './pages/ProductPage'
import ResourcesPage from './pages/ResourcesPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import './App.css'

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
  
  return (
    <Router basename={basename}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/framework" element={<FrameworkPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
