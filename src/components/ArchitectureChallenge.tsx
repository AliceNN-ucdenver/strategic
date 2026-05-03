import React, { useState } from 'react';
import { createSitePath } from '../config/site';
import { architectureChallenge, type ArchitectureChallengeView } from '../data/productPageData';
import { scrollToElementId } from '../hooks/usePageLifecycle';
import './ArchitectureChallenge.css';

const ArchitectureChallenge: React.FC = () => {
  const [activeView, setActiveView] = useState<'traditional' | 'modern'>('traditional');
  const activeApproach = architectureChallenge.views.find((view) => view.id === activeView) ?? architectureChallenge.views[0];

  const scrollToFramework = () => {
    if (!scrollToElementId('transformation')) {
      window.location.assign(createSitePath('/product', 'transformation'));
    }
  };

  const handleStartAssessment = () => {
    if (!scrollToElementId('assessment')) {
      window.location.assign(createSitePath('/framework', 'assessment'));
    }
  };

  const renderApproach = (approach: ArchitectureChallengeView) => {
    const isModern = approach.id === 'modern';

    return (
      <div className={`approach-content ${approach.id}`}>
        <div className="approach-header">
          <div className="approach-icon">{approach.icon}</div>
          <div className="approach-info">
            <h4>{approach.title}</h4>
            <p>{approach.description}</p>
          </div>
        </div>
        <div className={isModern ? 'benefits-grid' : 'costs-grid'}>
          <h5>{approach.impactHeading}</h5>
          <div className="impact-items">
            {approach.impactItems.map((item) => (
              <div key={item.label} className={`impact-item ${isModern ? 'benefit' : ''} ${item.impact.toLowerCase()}`}>
                <div className="impact-icon">{item.icon}</div>
                <div className="impact-content">
                  <span className="impact-label">{item.label}</span>
                  <span className={`impact-severity ${isModern ? 'benefit' : ''} ${item.impact.toLowerCase()}`}>
                    {item.impact} {isModern ? 'Benefit' : 'Impact'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="architecture-challenge">
      <div className="challenge-header">
        <h3>{architectureChallenge.title}</h3>
        <p className="challenge-subtitle">{architectureChallenge.subtitle}</p>
      </div>

      <div className="approach-toggle">
        {architectureChallenge.views.map((view) => (
          <button
            key={view.id}
            className={`toggle-btn ${activeView === view.id ? 'active' : ''}`}
            onClick={() => setActiveView(view.id)}
          >
            <span className="toggle-icon">{view.icon}</span>
            {view.label}
          </button>
        ))}
      </div>

      <div className="approach-visualization">
        {renderApproach(activeApproach)}
      </div>

      <div className="challenge-cta">
        <div className="cta-content">
          <h4>{architectureChallenge.cta.title}</h4>
          <p>{architectureChallenge.cta.body}</p>
        </div>
        <div className="cta-actions">
          <button className="cta-btn primary" onClick={handleStartAssessment}>{architectureChallenge.cta.primaryLabel}</button>
          <button className="cta-btn secondary" onClick={scrollToFramework}>{architectureChallenge.cta.secondaryLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureChallenge;
