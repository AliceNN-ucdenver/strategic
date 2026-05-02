import Header from '../components/Header'
import Constellation from '../components/Constellation'
import AssessmentModal from '../components/AssessmentModal'
import ArchitectureGuide from '../components/ArchitectureGuide'
import AssessmentSection from '../components/AssessmentSection'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { useScrollAnimations } from '../hooks/useScrollAnimations'
import './FrameworkPage.css'

const FrameworkPage = () => {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false)
  useScrollAnimations()

  const openAssessmentModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setIsAssessmentModalOpen(true)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleSeeStrategicChoice = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection('strategic-choice')
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
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100);
    }
  }, []);

  return (
    <div className="framework-page">
      <Header />

      {/* Hero: brand statement + the constellation as the cluster map */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <div className="framework-eyebrow">Chief Archeologist Framework</div>
            <h1>From Technical Compliance to Strategic Advantage</h1>
            <p className="subtitle">
              Use the twelve-star constellation to excavate what is really happening across architecture, product thinking, AI delivery, and security-left governance, then turn that evidence into a practical transformation path.
            </p>
            <div className="framework-proof-points" aria-label="Framework proof points">
              <span>12 strategic stars</span>
              <span>Four operating clusters</span>
              <span>Assessment-backed maturity</span>
            </div>
            <div className="hero-buttons">
              <a href="#strategic-choice" className="btn-primary" onClick={handleSeeStrategicChoice}>See the Strategic Choice</a>
              <a href="#constellation" className="btn-secondary" onClick={handleExploreConstellation}>Explore the Constellation</a>
            </div>
            <p className="hero-hint">
              Ready to benchmark? <a href="#assessment" onClick={handleDiscoverMaturity}>Take the maturity assessment</a>.
            </p>
          </div>
          <div className="framework-hero-map">
            <div className="framework-map-shell">
              <div className="framework-map-header">
                <span>Constellation Map</span>
                <strong>Four clusters · twelve stars</strong>
              </div>
              <Constellation />
            </div>
          </div>
        </div>
      </section>

      <section className="framework-thesis" aria-label="Framework narrative">
        <div className="framework-thesis-container">
          <div>
            <span className="framework-section-kicker">How to Read the Framework</span>
            <h2>The constellation is an excavation map.</h2>
            <p>
              Each star names a capability you can observe, assess, and improve. The page moves from the strategic choice, to the operating clusters, to an assessment path that helps teams decide where to act first.
            </p>
          </div>
          <div className="framework-thesis-points">
            <div>
              <span>01</span>
              <strong>Name the strategic choice before prescribing the solution</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Trace the four clusters as one operating model</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Use the assessment to prioritize the next transformation move</strong>
            </div>
          </div>
        </div>
      </section>

      <nav className="framework-journey-nav" aria-label="Framework page sections">
        <a href="#strategic-choice" onClick={handleSeeStrategicChoice}>
          <span className="journey-index">01</span>
          <span className="journey-label">Strategic Choice</span>
        </a>
        <a href="#constellation" onClick={handleExploreConstellation}>
          <span className="journey-index">02</span>
          <span className="journey-label">Four Clusters</span>
        </a>
        <a href="#assessment" onClick={handleDiscoverMaturity}>
          <span className="journey-index">03</span>
          <span className="journey-label">Assessment</span>
        </a>
      </nav>

      {/* Architecture Constellation Guide: Strategic Choice + Cluster Deep Dives */}
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

export default FrameworkPage
