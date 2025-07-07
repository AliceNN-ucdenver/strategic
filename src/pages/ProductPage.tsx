import React, { useEffect } from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import ImplementationGuide from '../components/ImplementationGuide';
import TransformationFramework from '../components/TransformationFramework';
import Footer from '../components/Footer';
import ArchitectureChallenge from '../components/ArchitectureChallenge';
import './ProductPage.css';

const ProductPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts (unless there's a hash)
    const hash = window.location.hash.substring(1);
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Handle URL hash navigation
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerHeight = 80; // Account for header height
          const titleOffset = 100; // Extra offset to ensure title is visible
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight - titleOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }

    // Scroll-triggered animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          setTimeout(() => {
            (element as HTMLElement).style.opacity = '1';
            (element as HTMLElement).style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for header height
      const titleOffset = 100; // Extra offset to ensure title is visible
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - titleOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="product-page">
      <Header />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>From Project to Product: Urban Planning for Enterprise</h1>
            <p className="subtitle">
              Transform your enterprise architecture from building inspector to urban planner - creating sustainable 
              technology ecosystems that enable continuous innovation and business growth
            </p>
            <div className="hero-buttons">
              <a href="#dashboard" className="btn-primary">View Portfolio Health</a>
              <a href="#transformation" className="btn-secondary">Explore Framework</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="urban-container">
              <div className="city-grid">
                <div className="city-district" onClick={() => scrollToSection('business-value')}>
                  <span className="district-icon">🎯</span>
                  <div className="district-label">Business Value</div>
                </div>
                <div className="city-district" onClick={() => scrollToSection('technical-foundation')}>
                  <span className="district-icon">🏗️</span>
                  <div className="district-label">Technical Foundation</div>
                </div>
                <div className="city-district" onClick={() => scrollToSection('devsecops-maturity')}>
                  <span className="district-icon">⚡</span>
                  <div className="district-label">DevSecOps Maturity</div>
                </div>
                <div className="city-district" onClick={() => scrollToSection('engineering-community')}>
                  <span className="district-icon">👥</span>
                  <div className="district-label">Engineering Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Enterprise Architecture Challenge */}
      <section className="challenge-section">
        <ArchitectureChallenge />
      </section>

      {/* AI Transformation Decision Framework */}
      <TransformationFramework />

      {/* Architecture Health Dashboard */}
      <Dashboard />

      {/* Implementation Guide */}
      <ImplementationGuide />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
