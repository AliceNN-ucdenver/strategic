import React, { useState } from 'react';
import './ArchitectureChallenge.css';

const ArchitectureChallenge: React.FC = () => {
  const [activeView, setActiveView] = useState<'traditional' | 'modern'>('traditional');
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

  const scrollToFramework = () => {
    // Always go to product page, then scroll to transformation section
    if (window.location.pathname !== '/product') {
      window.location.href = `${basename}/product#transformation`;
    } else {
      const element = document.getElementById('transformation');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleStartAssessment = () => {
    // Always go to homepage first, then scroll to assessment section
    if (window.location.pathname !== '/') {
      window.location.href = `${basename}/#assessment`;
    } else {
      const element = document.getElementById('assessment');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const traditionalApproachData = {
    title: "Traditional Approach Is Failing",
    icon: "⚠️",
    description: "Organizations approach technology like overeager developers—focusing on individual projects without considering the broader ecosystem",
    costs: [
      { icon: "💸", label: "Mounting Technical Debt", impact: "High" },
      { icon: "🔗", label: "Increasing System Complexity", impact: "High" },
      { icon: "📈", label: "Rising Operational Costs", impact: "Medium" },
      { icon: "🎯", label: "Difficulty Attracting Talent", impact: "High" },
      { icon: "⏱️", label: "Slower Time to Market", impact: "Critical" },
      { icon: "📉", label: "Reduced Competitive Advantage", impact: "Critical" }
    ]
  };

  const modernApproachData = {
    title: "Modern Urban Planning Approach",
    icon: "🏙️",
    description: "Thoughtful city planners establish comprehensive plans considering infrastructure, sustainability, and community needs",
    benefits: [
      { icon: "🚀", label: "Accelerated Innovation", impact: "High" },
      { icon: "🔄", label: "Sustainable Architecture", impact: "High" },
      { icon: "💰", label: "Optimized Resource Allocation", impact: "Medium" },
      { icon: "⭐", label: "Enhanced Talent Attraction", impact: "High" },
      { icon: "⚡", label: "Rapid Market Response", impact: "Critical" },
      { icon: "🏆", label: "Sustained Competitive Edge", impact: "Critical" }
    ]
  };

  return (
    <div className="architecture-challenge">
      <div className="challenge-header">
        <h3>The Modern Enterprise Architecture Challenge</h3>
        <p className="challenge-subtitle">
          Today's enterprises face a critical inflection point. In a world where software defines competitive advantage, 
          traditional approaches are failing to deliver the speed and resilience businesses require.
        </p>
      </div>

      <div className="approach-toggle">
        <button 
          className={`toggle-btn ${activeView === 'traditional' ? 'active' : ''}`}
          onClick={() => setActiveView('traditional')}
        >
          <span className="toggle-icon">⚠️</span>
          Traditional Approach
        </button>
        <button 
          className={`toggle-btn ${activeView === 'modern' ? 'active' : ''}`}
          onClick={() => setActiveView('modern')}
        >
          <span className="toggle-icon">🏙️</span>
          Modern Approach
        </button>
      </div>

      <div className="approach-visualization">
        {activeView === 'traditional' ? (
          <div className="approach-content traditional">
            <div className="approach-header">
              <div className="approach-icon">{traditionalApproachData.icon}</div>
              <div className="approach-info">
                <h4>{traditionalApproachData.title}</h4>
                <p>{traditionalApproachData.description}</p>
              </div>
            </div>
            <div className="costs-grid">
              <h5>The Cost of Inaction</h5>
              <div className="impact-items">
                {traditionalApproachData.costs.map((cost, index) => (
                  <div key={index} className={`impact-item ${cost.impact.toLowerCase()}`}>
                    <div className="impact-icon">{cost.icon}</div>
                    <div className="impact-content">
                      <span className="impact-label">{cost.label}</span>
                      <span className={`impact-severity ${cost.impact.toLowerCase()}`}>
                        {cost.impact} Impact
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="approach-content modern">
            <div className="approach-header">
              <div className="approach-icon">{modernApproachData.icon}</div>
              <div className="approach-info">
                <h4>{modernApproachData.title}</h4>
                <p>{modernApproachData.description}</p>
              </div>
            </div>
            <div className="benefits-grid">
              <h5>The Urban Planning Advantage</h5>
              <div className="impact-items">
                {modernApproachData.benefits.map((benefit, index) => (
                  <div key={index} className={`impact-item benefit ${benefit.impact.toLowerCase()}`}>
                    <div className="impact-icon">{benefit.icon}</div>
                    <div className="impact-content">
                      <span className="impact-label">{benefit.label}</span>
                      <span className={`impact-severity benefit ${benefit.impact.toLowerCase()}`}>
                        {benefit.impact} Benefit
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="challenge-cta">
        <div className="cta-content">
          <h4>Ready to Transform Your Architecture Approach?</h4>
          <p>Move from reactive building inspector to proactive urban planner</p>
        </div>
        <div className="cta-actions">
          <button className="cta-btn primary" onClick={handleStartAssessment}>Start Assessment</button>
          <button className="cta-btn secondary" onClick={scrollToFramework}>View Framework</button>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureChallenge;
