import React from 'react'
import PageLayout from '../components/PageLayout'
import chiefArchitectImage from '../assets/chief_architect-700.jpg'
import { useScrollToTop } from '../hooks/usePageLifecycle'
import './ContactPage.css'

const ContactPage: React.FC = () => {
  useScrollToTop()

  return (
    <PageLayout className="site-page contact-page">
      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-hero">
            <div className="editorial-hero editorial-hero--card contact-profile">
              <img 
                src={chiefArchitectImage} 
                alt="Chief Archeologist" 
                className="contact-avatar"
                width="180"
                height="180"
                loading="eager"
                decoding="async"
              />
              <div className="contact-intro">
                <span className="eyebrow eyebrow--pill contact-kicker">Strategic Architecture Advisory</span>
                <h1 className="editorial-hero__title contact-title">Connect with Shawn McCarthy</h1>
                <h2 className="contact-role">Chief Archeologist & Strategic Architecture Leader</h2>
                <p className="contact-subtitle">
                  Bring the map, the artifacts, and the messy questions. We can excavate what your systems
                  are really telling you, then turn that evidence into a practical architecture path for AI-era change.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-methods">
            <div className="contact-grid">
              <div className="surface-card interactive-surface contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>Email</h3>
                  <p>For strategic consultations and architecture discussions</p>
                  <a href="mailto:smccarthy@iasaoffice.org" className="contact-link">
                    smccarthy@iasaoffice.org
                  </a>
                </div>
              </div>

              <div className="surface-card interactive-surface contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36162C2.3051 3.09849 2.44748 2.85669 2.63814 2.65162C2.8288 2.44655 3.05956 2.28271 3.31739 2.17052C3.57522 2.05833 3.85179 2.00026 4.13 2H7.13C7.48296 1.99522 7.82613 2.12722 8.08859 2.36733C8.35106 2.60744 8.51644 2.93604 8.55 3.29C8.61402 3.99433 8.75313 4.68936 8.96 5.36C9.0537 5.64 9.06267 5.94207 8.98549 6.22793C8.90831 6.51379 8.74909 6.76986 8.53 6.96L7.39 8.1C8.81007 10.6135 10.8865 12.6899 13.4 14.11L14.54 12.97C14.7301 12.7509 14.9862 12.5917 15.2721 12.5145C15.5579 12.4373 15.86 12.4463 16.14 12.54C16.8106 12.7469 17.5057 12.886 18.21 12.95C18.5676 12.9844 18.8981 13.1527 19.1388 13.4188C19.3795 13.6849 19.5103 14.0320 19.5 14.39V17.39C19.5 17.89 19.1 18.42 18.82 18.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>Phone</h3>
                  <p>For urgent consultations and direct conversations</p>
                  <a href="tel:+13039008613" className="contact-link">
                    (303) 900-8613
                  </a>
                </div>
              </div>

              <div className="surface-card interactive-surface contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.7 8.9C9.7 8.45 10.8 8.22 12 8.22C13.2 8.22 14.3 8.45 15.3 8.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M7.75 15.2C6.65 14.85 5.7 14.35 4.9 13.7C4.75 10.9 5.35 8.4 6.7 6.2C7.75 5.72 8.83 5.38 9.95 5.18L10.45 6.15C11.47 6 12.53 6 13.55 6.15L14.05 5.18C15.17 5.38 16.25 5.72 17.3 6.2C18.65 8.4 19.25 10.9 19.1 13.7C18.3 14.35 17.35 14.85 16.25 15.2L15.4 13.75C13.2 14.45 10.8 14.45 8.6 13.75L7.75 15.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                    <circle cx="9.5" cy="11.25" r="1" fill="currentColor"/>
                    <circle cx="14.5" cy="11.25" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h3>Discord</h3>
                  <p>For community discussions and quick messages</p>
                  <a href="https://discordapp.com/users/shawnemccarthy" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Message on Discord
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-band cta-band--card contact-cta">
            <div className="cta-content">
              <span className="eyebrow eyebrow--pill cta-kicker">Start with the evidence</span>
              <h2>Ready to make the architecture visible?</h2>
              <p>
                Whether you are modernizing legacy systems, defining AI governance, or building the
                maintainability signals leadership has been missing, the work starts by reading the
                terrain with discipline and imagination.
              </p>
              <div className="cta-actions">
                <a href="mailto:smccarthy@iasaoffice.org" className="contact-action-button primary">
                  Start the Conversation
                </a>
                <a href="tel:+13039008613" className="contact-action-button secondary">
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>

          <div className="contact-expertise">
            <div className="expertise-grid">
              <div className="surface-card expertise-item">
                <span className="expertise-mark">01</span>
                <h4>Digital Archeology</h4>
                <p>Excavating value from legacy systems and enterprise technology landscapes</p>
              </div>
              <div className="surface-card expertise-item">
                <span className="expertise-mark">02</span>
                <h4>Strategic Navigation</h4>
                <p>Guiding organizations through AI transformation and architectural evolution</p>
              </div>
              <div className="surface-card expertise-item">
                <span className="expertise-mark">03</span>
                <h4>ATLAS Program</h4>
                <p>Revolutionary architect development through teaching hospital methodologies</p>
              </div>
              <div className="surface-card expertise-item">
                <span className="expertise-mark">04</span>
                <h4>IASA Leadership</h4>
                <p>Advancing the architecture profession through global education initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  )
}

export default ContactPage
