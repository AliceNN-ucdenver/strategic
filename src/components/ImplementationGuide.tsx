import React from 'react';
import { implementationGuide } from '../data/productPageData';
import './ImplementationGuide.css';

const ImplementationGuide: React.FC = () => {
  return (
    <section className="implementation-steps" id="implementation">
      <div className="guide-container">
        <div className="section-header fade-in">
          <h2>{implementationGuide.title}</h2>
          <p>{implementationGuide.body}</p>
        </div>
        
        <div className="implementation-phases">
          {implementationGuide.phases.map((phase) => (
            <div key={phase.number} className="phase-card fade-in">
              <div className="phase-header">
                <div className="phase-number">{phase.number}</div>
                <div className="phase-info">
                  <h3>{phase.title}</h3>
                  <p className="phase-subtitle">{phase.subtitle}</p>
                </div>
              </div>
              <div className="phase-content">
                <ul className="phase-items">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="guiding-principles fade-in">
          <h3>{implementationGuide.principlesHeading}</h3>
          <div className="principles-grid">
            {implementationGuide.principles.map((principle) => (
              <div key={principle.number} className="principle-card">
                <div className="principle-icon">{principle.number}</div>
                <h4>{principle.title}</h4>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationGuide;
