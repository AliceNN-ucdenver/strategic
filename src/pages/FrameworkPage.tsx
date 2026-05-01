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

  const openAssessmentModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAssessmentModalOpen(true)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const titleOffset = 100;
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
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerHeight = 80;
          const titleOffset = 100;
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
    <div className="framework-page">
      <Header />

      {/* Hero: brand statement + the constellation as the cluster map */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>From Technical Compliance to Strategic Advantage</h1>
            <p className="subtitle">
              Transform your enterprise with a constellation of twelve strategic practices, guiding AI transformation, product thinking, and security-left integration without the bottlenecks of traditional architecture review.
            </p>
            <div className="hero-buttons">
              <a href="#constellation" className="btn-primary" onClick={handleExploreConstellation}>Explore the Constellation</a>
              <a href="#assessment" className="btn-secondary" onClick={handleDiscoverMaturity}>Take the Maturity Assessment</a>
            </div>
            <p className="hero-hint">
              Or click any cluster in the constellation to dive in.
            </p>
          </div>
          <Constellation />
        </div>
      </section>

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
