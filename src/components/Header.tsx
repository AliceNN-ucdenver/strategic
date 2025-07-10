import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Framework section is now on framework page
    if (sectionId === 'framework') {
      if (window.location.pathname !== '/framework') {
        window.location.href = basename + '/framework#framework';
      } else {
        const element = document.getElementById('framework');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else {
      // Assessment and other sections are on framework page
      if (window.location.pathname !== '/framework') {
        window.location.href = basename +`/framework#${sectionId}`;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          console.log(`Element with ID "${sectionId}" not found`);
        }
      }
    }
  };

  const goToProduct = () => {
    // Go to product page and scroll to top
    window.location.href = basename + '/product';
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
        <button onClick={() => scrollToSection('assessment')} className="cta-button desktop-cta">Get Started</button>

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
            <li><button onClick={() => { scrollToSection('assessment'); closeMobileMenu(); }} className="cta-button mobile-cta">Get Started</button></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
