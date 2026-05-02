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
            behavior: 'auto'
          });
          const hashElements = [
            ...(element.classList.contains('fade-in') ? [element] : []),
            ...Array.from(element.querySelectorAll<HTMLElement>('.fade-in'))
          ];
          hashElements.forEach((hashElement) => {
            hashElement.style.opacity = '1';
            hashElement.style.transform = 'translateY(0)';
          });
          requestAnimationFrame(animateOnScroll);
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

  const handleHeroScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <div className="product-page">
      <Header />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <div className="product-eyebrow">Chief Archeologist Product Studio</div>
            <h1>From Project to Product to Governed Agentic Delivery</h1>
            <p className="subtitle">
              Keep the city-planning discipline of product architecture, then make the roads, zoning laws,
              security checks, and AI agents visible in one architecture-first operating cockpit.
            </p>
            <div className="hero-proof-points" aria-label="Product proof points">
              <span>Product thinking</span>
              <span>Autonomous governance</span>
              <span>Maintainability.ai implementation</span>
            </div>
            <div className="hero-buttons">
              <a href="#dashboard" className="btn-primary" onClick={(e) => handleHeroScroll(e, 'dashboard')}>View Governance Cockpit</a>
              <a href="#transformation" className="btn-secondary" onClick={(e) => handleHeroScroll(e, 'transformation')}>Explore Operating Model</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="urban-container" aria-label="Architecture operating stack">
              <div className="product-stack-visual">
                <div className="stack-header">
                  <span>Operating Map</span>
                  <strong>Architecture as the control plane</strong>
                </div>
                <button className="stack-layer product-layer" onClick={() => scrollToSection('business-value')}>
                  <span className="layer-code">01</span>
                  <span>
                    <strong>Product Value Flow</strong>
                    <small>OKRs, capabilities, and customer outcomes</small>
                  </span>
                </button>
                <button className="stack-layer governance-layer" onClick={() => scrollToSection('technical-foundation')}>
                  <span className="layer-code">02</span>
                  <span>
                    <strong>Governance Mesh</strong>
                    <small>BARs, CALM, ADRs, STRIDE, risk evidence</small>
                  </span>
                </button>
                <button className="stack-layer agent-layer" onClick={() => scrollToSection('devsecops-maturity')}>
                  <span className="layer-code">03</span>
                  <span>
                    <strong>Agentic SDLC</strong>
                    <small>Prompt packs, reviews, fitness functions</small>
                  </span>
                </button>
                <button className="stack-layer community-layer" onClick={() => scrollToSection('engineering-community')}>
                  <span className="layer-code">04</span>
                  <span>
                    <strong>Engineering Community</strong>
                    <small>Enablement, autonomy, and talent magnetism</small>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-thesis" aria-label="Product narrative">
        <div className="product-thesis-container">
          <div>
            <span className="product-section-kicker">The Through-Line</span>
            <h2>The Chief Archeologist lens still matters.</h2>
            <p>
              The product story starts by excavating the real system: business capability, architecture
              artifacts, risk evidence, operational dependencies, and the human workflows that hold it all
              together. Maintainability.ai turns that excavation into an executable map for modern AI delivery.
            </p>
          </div>
          <div className="thesis-points">
            <div>
              <span>Old world</span>
              <strong>Projects, review boards, and static diagrams</strong>
            </div>
            <div>
              <span>Product world</span>
              <strong>Value streams, reusable platforms, and portfolio health</strong>
            </div>
            <div>
              <span>Agentic world</span>
              <strong>Architecture-aware agents governed by executable constraints</strong>
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
