import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import chiefArchitectImage from '../assets/chief_architect.png'
import './ContactPage.css'

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <Header />
      
      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-hero">
            <div className="contact-profile">
              <img 
                src={chiefArchitectImage} 
                alt="Chief Archeologist" 
                className="contact-avatar"
              />
              <div className="contact-intro">
                <h1 className="contact-title">Connect with Shawn McCarthy</h1>
                <h2 className="contact-role">Chief Archeologist & Strategic Architecture Leader</h2>
                <p className="contact-subtitle">
                  From excavating digital archaeology to navigating the stars of enterprise transformation,
                  let's explore how strategic architecture can unlock your organization's potential.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-methods">
            <div className="contact-grid">
              <div className="contact-card">
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

              <div className="contact-card">
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

              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37A19.791 19.791 0 0 0 15.478 3C15.214 3.568 14.907 4.308 14.687 4.9A18.297 18.297 0 0 0 8.956 4.9C8.736 4.308 8.423 3.568 8.156 3A19.734 19.734 0 0 0 3.317 4.37C.533 8.845.061 13.219.387 17.535A19.874 19.874 0 0 0 6.36 20.98C7.743 19.265 8.944 17.425 9.926 15.49A12.82 12.82 0 0 1 7.64 14.49C8.053 14.2 8.454 13.893 8.84 13.571C12.535 15.3 16.565 15.3 20.217 13.571C20.603 13.893 21.004 14.2 21.417 14.49A12.77 12.77 0 0 1 19.131 15.49C20.113 17.425 21.314 19.265 22.697 20.98A19.841 19.841 0 0 0 28.67 17.535C29.062 12.668 27.993 8.328 24.374 4.37ZM8.695 15.058C7.414 15.058 6.36 13.9 6.36 12.498S7.389 9.938 8.695 9.938C10.001 9.938 11.055 11.098 11.03 12.498C11.03 13.9 10.001 15.058 8.695 15.058ZM19.36 15.058C18.079 15.058 17.025 13.9 17.025 12.498S18.054 9.938 19.36 9.938C20.666 9.938 21.72 11.098 21.695 12.498C21.695 13.9 20.666 15.058 19.36 15.058Z" fill="currentColor"/>
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

          <div className="contact-cta">
            <div className="cta-content">
              <h2>Ready to Navigate Your Architecture Journey?</h2>
              <p>
                Whether you're excavating legacy systems or charting new digital territories, 
                strategic architecture illuminates the path forward. Let's explore how the 
                constellation of possibilities can transform your organization's future.
              </p>
              <div className="cta-actions">
                <a href="mailto:smccarthy@iasaoffice.org" className="cta-button primary">
                  Start the Conversation
                </a>
                <a href="tel:+13039008613" className="cta-button secondary">
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>

          <div className="contact-expertise">
            <div className="expertise-grid">
              <div className="expertise-item">
                <h4>🏛️ Digital Archeology</h4>
                <p>Excavating value from legacy systems and enterprise technology landscapes</p>
              </div>
              <div className="expertise-item">
                <h4>⭐ Strategic Navigation</h4>
                <p>Guiding organizations through AI transformation and architectural evolution</p>
              </div>
              <div className="expertise-item">
                <h4>🎯 ATLAS Program</h4>
                <p>Revolutionary architect development through teaching hospital methodologies</p>
              </div>
              <div className="expertise-item">
                <h4>🔬 IASA Leadership</h4>
                <p>Advancing the architecture profession through global education initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
