import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SubscriptionModal from './SubscriptionModal'
import { primaryNavItems, siteBrand } from '../config/site'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          {siteBrand.name}
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          {primaryNavItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="nav-link-btn">
                {item.label}
              </Link>
            </li>
          ))}
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
            {primaryNavItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="nav-link-btn" onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
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
