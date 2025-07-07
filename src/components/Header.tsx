import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
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
    // Framework section is now on product page
    if (sectionId === 'framework') {
      if (window.location.pathname !== '/') {
        window.location.href = basename + '/#framework';
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
      // Assessment and other sections are on homepage
      if (window.location.pathname !== '/') {
        window.location.href = basename +`/#${sectionId}`;
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

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/" className="logo">
          StrategicArchitecture.io
        </Link>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('framework')} className="nav-link-btn">Framework</button></li>
          <li><button onClick={() => scrollToSection('assessment')} className="nav-link-btn">Assessment</button></li>
          <li><button onClick={goToProduct} className="nav-link-btn">Product</button></li>
          <li><Link to="/resources" className="nav-link-btn">Resources</Link></li>
        </ul>
        <button onClick={() => scrollToSection('assessment')} className="cta-button">Get Started</button>
      </nav>
    </header>
  )
}

export default Header
