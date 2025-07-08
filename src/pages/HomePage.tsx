import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import chiefArchitectImage from '../assets/chief_architect.png';
import './HomePage.css';

const HomePage: React.FC = () => {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <div className="home-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-image">
            <img src={chiefArchitectImage} alt="Chief Architect" className="architect-photo" />
            <div className="image-accent"></div>
            
            <div className="story-text">
              <p className="story-paragraph">
                While others see technical debt, I see architectural artifacts that tell the story of business evolution. 
                Each system migration is an expedition into uncharted territory, where strategic architecture becomes 
                the compass guiding organizations through their most ambitious modernization journeys.
              </p>
            </div>
            
            <div className="cta-section">
              <div className="cta-text">
                <h3>Ready to Modernize Your Architecture?</h3>
                <p>Discover how strategic architecture can transform your technology landscape</p>
              </div>
              <div className="cta-buttons">
                <a href={`${basename}/framework`} className="btn-primary">Explore Framework</a>
                <a href={`${basename}/product`} className="btn-secondary">View Methodology</a>
              </div>
            </div>
          </div>
          <div className="hero-text">
            <div className="title-section">
              <h1>I am the Chief Archeologist</h1>
              <p className="subtitle">
                Unearthing Legacy Systems, Architecting Tomorrow
              </p>
            </div>
            
            <div className="bio-content">
              <p className="intro-paragraph">
                For over two decades, I've been on a quest through the digital ruins of enterprise technology. 
                Like an archeologist uncovering ancient civilizations, I excavate layers of legacy systems, 
                carbon-date mainframe fossils from the computing Jurassic era, and decode the mysterious 
                COBOL hieroglyphics that still power our modern world. <br /><br />

                But this isn't just about preserving the past. As we stand at the dawn of the AI revolution, 
                I'm pioneering the future of enterprise architecture. Gone are the days of being a mere 
                compliance officer or technical gatekeeper. Today's architects are strategic catalysts, 
                transforming technology debt into competitive gold and turning architectural vision into 
                measurable business triumph.
              </p>
              
              <div className="experience-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🏛️</span>
                  <div className="highlight-content">
                    <h3>20+ Years</h3>
                    <p>Modernizing enterprise architecture across Fortune 500 companies</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🚀</span>
                  <div className="highlight-content">
                    <h3>AI Transformation</h3>
                    <p>Leading strategic AI implementations that drive measurable business outcomes</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">📚</span>
                  <div className="highlight-content">
                    <h3>Thought Leadership</h3>
                    <p>Published in InfoWorld, CIO, and industry publications on strategic architecture</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏛️</span>
                  <div className="highlight-content">
                    <h3>Chief Architect Forum</h3>
                    <p>Board member contributing to strategic architecture community and industry standards</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🎓</span>
                  <div className="highlight-content">
                    <h3>PhD Researcher</h3>
                    <p>Researching global events' impact on market sentiment, building on prior work in financial market prediction using emotion analysis and news co-occurrence networks</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🧠</span>
                  <div className="highlight-content">
                    <h3>Nvidia Deep Learning Instructor</h3>
                    <p>Graduate instructor specializing in AI/ML applications for enterprise architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
