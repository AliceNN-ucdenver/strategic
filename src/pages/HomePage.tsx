import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import chiefArchitectImage from '../assets/chief_architect.png';
import './HomePage.css';

const implementationVideos = [
  {
    id: 'looking-glass',
    label: 'Looking Glass',
    eyebrow: 'Governance & Architecture',
    title: 'Governance at the speed of AI',
    description:
      'The Looking Glass is the mirror behind the metaphor: portfolio, platform, BAR, CALM, ADRs, scoring evidence, and AI-assisted drift analysis brought into one governed architecture surface.',
    proof: ['Governance mesh scoring', 'CALM architecture evidence', 'AI-assisted drift analysis'],
    videoUrl: 'https://www.youtube.com/embed/Ua_4Msx2DYQ',
    watchUrl: 'https://youtu.be/Ua_4Msx2DYQ',
  },
  {
    id: 'cheshire-cat',
    label: 'Cheshire Cat',
    eyebrow: 'Code & Security',
    title: 'Repository guardrails that stay behind',
    description:
      "The Cheshire Cat turns the Chief Archeologist's guidance into repo-level constraints: scaffolding, OWASP prompt packs, structured issues, scorecards, and fitness functions that make secure AI delivery repeatable after the conversation ends.",
    proof: ['Security-first scaffolding', 'RCTRO issue generation', 'Fitness-function scorecards'],
    videoUrl: 'https://www.youtube.com/embed/WtSRfwKrcFU',
    watchUrl: 'https://youtu.be/WtSRfwKrcFU?si=eapuXusdWhIa8Mor',
  },
];

const HomePage: React.FC = () => {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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

      <section className="implementation-proof" aria-labelledby="implementation-proof-heading">
        <div className="implementation-proof-container">
          <div className="implementation-proof-header">
            <div>
              <span className="implementation-proof-kicker">Maintainability.ai in Practice</span>
              <h2 id="implementation-proof-heading">Wonderland is the map. The machinery is real.</h2>
            </div>
            <p>
              These are not fairy-tale decorations. They are named instruments for operating architecture
              at AI speed: the Looking Glass reveals the portfolio truth, while the Cheshire Cat leaves
              deterministic guardrails in the repository so agents can move quickly without drifting from
              security, architecture, and delivery intent.
            </p>
          </div>

          <div className="video-feature-grid">
            {implementationVideos.map((video) => (
              <article className={`video-feature-card ${video.id}`} key={video.id}>
                <div className="video-frame">
                  <iframe
                    src={video.videoUrl}
                    title={`${video.label} demo video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="video-feature-content">
                  <span className="video-eyebrow">{video.eyebrow}</span>
                  <h3>
                    {video.label}: {video.title}
                  </h3>
                  <p>{video.description}</p>
                  <ul>
                    {video.proof.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href={video.watchUrl} target="_blank" rel="noreferrer" className="video-link">
                    Watch the demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
