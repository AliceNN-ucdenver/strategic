import React from 'react';
import './ImplementationGuide.css';

const ImplementationGuide: React.FC = () => {
  return (
    <section className="implementation-steps" id="implementation">
      <div className="guide-container">
        <div className="section-header fade-in">
          <h2>Practical Implementation Guide</h2>
          <p>Start by establishing some guiding principles as a reference point but also helping teams through their transformation. Teams should know good enough is acceptable and continuous improvement is encouraged. Make the best recommendations/decisions based on the information at hand.</p>
        </div>
        
        <div className="implementation-phases">
          {/* Phase 1 */}
          <div className="phase-card fade-in">
            <div className="phase-header">
              <div className="phase-number">01</div>
              <div className="phase-info">
                <h3>Phase 1: Foundation Building</h3>
                <p className="phase-subtitle">Just as cities begin with basic infrastructure, we start with:</p>
              </div>
            </div>
            <div className="phase-content">
              <ul className="phase-items">
                <li>Architecture maturity assessment</li>
                <li>Just enough current state knowledge</li>
                <li>Business capability mapping</li>
                <li>Quick win identification</li>
                <li>Baseline metrics establishment</li>
                <li>Initial product domain definition</li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="phase-card fade-in">
            <div className="phase-header">
              <div className="phase-number">02</div>
              <div className="phase-info">
                <h3>Phase 2: Transformation Launch</h3>
                <p className="phase-subtitle">Like developing new city districts, we focus on:</p>
              </div>
            </div>
            <div className="phase-content">
              <ul className="phase-items">
                <li>Cross-functional team building</li>
                <li>Measurement framework implementation</li>
                <li>Cultural transformation initiation</li>
                <li>Pilot program launches</li>
                <li>Feedback mechanism establishment</li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="phase-card fade-in">
            <div className="phase-header">
              <div className="phase-number">03</div>
              <div className="phase-info">
                <h3>Phase 3: Scale and Optimize</h3>
                <p className="phase-subtitle">Similar to expanding successful urban development patterns:</p>
              </div>
            </div>
            <div className="phase-content">
              <ul className="phase-items">
                <li>Pattern replication</li>
                <li>Framework refinement</li>
                <li>Automation enhancement</li>
                <li>Business integration deepening</li>
                <li>Governance evolution</li>
                <li>Redefining product domains as you learn/mature</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="guiding-principles fade-in">
          <h3>Guiding Principles</h3>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">🎯</div>
              <h4>Good Enough is Acceptable</h4>
              <p>Focus on progress over perfection. Start with viable solutions and iterate based on learning and feedback.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">🔄</div>
              <h4>Continuous Improvement</h4>
              <p>Embrace an evolutionary approach where frameworks and processes improve through practical application and team insights.</p>
            </div>
            <div className="principle-card">
              <div className="principle-icon">💡</div>
              <h4>Information-Based Decisions</h4>
              <p>Make the best recommendations and decisions based on available information, acknowledging uncertainty while maintaining forward momentum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationGuide;
