import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SubscriptionModal from './SubscriptionModal'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goToProduct = () => {
    // Go to product page and scroll to top
    window.location.href = basename + '/product';
  };

  const openSubscriptionForm = () => {
    setIsSubscriptionModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/" className="logo">
          ChiefArcheologist.com
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          <li><Link to="/" className="nav-link-btn" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/framework" className="nav-link-btn">Framework</Link></li>
          <li><button onClick={goToProduct} className="nav-link-btn">Product</button></li>
          <li><Link to="/blog" className="nav-link-btn">Blog</Link></li>
          <li><Link to="/resources" className="nav-link-btn">Articles</Link></li>
        </ul>

        {/* Desktop CTA Button */}
        <button onClick={openSubscriptionForm} className="cta-button desktop-cta">Subscribe</button>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/" className="nav-link-btn" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/framework" className="nav-link-btn" onClick={closeMobileMenu}>Framework</Link></li>
            <li><button onClick={() => { goToProduct(); closeMobileMenu(); }} className="nav-link-btn">Product</button></li>
            <li><Link to="/blog" className="nav-link-btn" onClick={closeMobileMenu}>Blog</Link></li>
            <li><Link to="/resources" className="nav-link-btn" onClick={closeMobileMenu}>Articles</Link></li>
            <li><button onClick={() => { openSubscriptionForm(); closeMobileMenu(); }} className="cta-button mobile-cta">Subscribe</button></li>
          </ul>
        </div>
      </nav>
      
      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen} 
        onClose={() => setIsSubscriptionModalOpen(false)} 
      />
    </header>
  )
}

export default Header
