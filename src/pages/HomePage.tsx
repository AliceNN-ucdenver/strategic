import Header from '../components/Header'
import Constellation from '../components/Constellation'
import AssessmentModal from '../components/AssessmentModal'
import ArchitectureGuide from '../components/ArchitectureGuide'
import AssessmentSection from '../components/AssessmentSection'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { useScrollAnimations } from '../hooks/useScrollAnimations'
import './HomePage.css'

const HomePage = () => {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false)
  useScrollAnimations()

  const openAssessmentModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAssessmentModalOpen(true)
  }

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
  }

  const handleDiscoverMaturity = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection('assessment')
  }

  const handleExploreConstellation = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection('constellation')
  }

  // Handle URL hash navigation
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash) {
      // Small delay to ensure the page has rendered
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
  }, []);

  return (
    <div className="home-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>From Technical Compliance to Strategic Advantage</h1>
            <p className="subtitle">
              Transform your enterprise with the Strategic Architecture Constellation - guiding AI transformation, 
              product thinking, and security-left integration through curious exploration rather than authoritarian control
            </p>
            <div className="hero-buttons">
              <a href="#assessment" className="btn-primary" onClick={handleDiscoverMaturity}>Discover Your Architecture Maturity</a>
              <a href="#constellation" className="btn-secondary" onClick={handleExploreConstellation}>Explore the Constellation</a>
            </div>
          </div>
          <Constellation />
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="framework">
        <div className="features-container">
          <div className="section-header fade-in">
            <h2>The Strategic Architecture Framework</h2>
            <p>Transform your architecture practice with our comprehensive framework spanning AI transformation, product thinking, and security integration</p>
          </div>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">🌟</div>
              <h3>Architecture Constellation</h3>
              <p>12 strategic stars organized in 4 clusters: Navigation, Velocity, Enablement, and Sustainability. Navigate AI as transformation enabler vs. band-aid solution with measurable business outcomes.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">🏙️</div>
              <h3>Product Transformation</h3>
              <p>Urban planning approach to enterprise architecture, moving from project-centric to product-oriented delivery with comprehensive portfolio health metrics.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">🛡️</div>
              <h3>Security-Left Integration</h3>
              <p>Transform from Queen of Hearts compliance to Cheshire Cat guidance, embedding security throughout the development lifecycle with automated guardrails.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">🎯</div>
              <h3>Business Value Focus</h3>
              <p>Move beyond technical metrics to track AI revenue attribution ({'>'}15%), innovation velocity ({'<'}90 days), and architectural leverage (10:1 ROI).</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">🚀</div>
              <h3>Strategic Enablement</h3>
              <p>Escape the order-taking trap and become the strategic business enabler your organization needs for competitive advantage in the AI era.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">🌐</div>
              <h3>Community Learning</h3>
              <p>Join a thriving community of strategic architects sharing patterns, success stories, and implementation guidance across global enterprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Constellation Guide */}
      <ArchitectureGuide />

      {/* Assessment Section */}
      <AssessmentSection onOpenModal={openAssessmentModal} />

      {/* Footer */}
      <Footer />

      {/* Assessment Modal */}
      <AssessmentModal 
        isOpen={isAssessmentModalOpen} 
        onClose={() => setIsAssessmentModalOpen(false)} 
      />
    </div>
  )
}

export default HomePage
