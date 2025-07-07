import React, { useState } from 'react';
import './StarGrid.css';

interface StarDetail {
  title: string;
  purpose: string;
  assessmentQuestion: string;
  strategicGuidance: {
    title: string;
    strategicApproach: string;
    tacticalApproach: string;
  };
  whatGoesWrong: string;
  whatGoesRight: string;
  implementationSteps: string[];
  valueMetrics: string;
  businessImpact?: string;
}

interface StarGridProps {
  stars: StarDetail[];
}

const StarGrid: React.FC<StarGridProps> = ({ stars }) => {
  const [expandedStar, setExpandedStar] = useState<number | null>(null);

  const handleStarClick = (index: number) => {
    setExpandedStar(expandedStar === index ? null : index);
  };

  return (
    <div className="stars-grid">
      {/* Star Tabs */}
      <div className="star-tabs">
        {stars.map((star, index) => (
          <button
            key={index}
            className={`star-tab ${expandedStar === index ? 'active' : ''}`}
            onClick={() => handleStarClick(index)}
          >
            <span className="star-icon">⭐</span>
            <span className="star-title">{star.title.replace('⭐ ', '')}</span>
            <span className="expand-indicator">
              {expandedStar === index ? '−' : '+'}
            </span>
          </button>
        ))}
      </div>

      {/* Expanded Star Detail */}
      {expandedStar !== null && (
        <div className="star-detail expanded">
          <div className="star-header">
            <h4>{stars[expandedStar].title}</h4>
            <button 
              className="close-button"
              onClick={() => setExpandedStar(null)}
            >
              ✕
            </button>
          </div>
          
          <p><strong>Purpose:</strong> {stars[expandedStar].purpose}</p>
          
          <div className="assessment-question">
            <h5>🎯 Key Assessment Question</h5>
            <p>"{stars[expandedStar].assessmentQuestion}"</p>
          </div>

          <div className="strategic-guidance">
            <h5>{stars[expandedStar].strategicGuidance.title}</h5>
            <div className="guidance-comparison">
              <div className="strategic-approach">
                <strong>Strategic Approach:</strong> {stars[expandedStar].strategicGuidance.strategicApproach}
              </div>
              <div className="tactical-approach">
                <strong>Tactical Approach:</strong> {stars[expandedStar].strategicGuidance.tacticalApproach}
              </div>
            </div>
          </div>

          <div className="outcomes-section">
            <div className="what-goes-wrong">
              <h5>⚠️ What Goes Wrong Without This</h5>
              <p>{stars[expandedStar].whatGoesWrong}</p>
            </div>

            <div className="what-goes-right">
              <h5>✅ What Goes Right When Implemented</h5>
              <p>{stars[expandedStar].whatGoesRight}</p>
            </div>
          </div>

          <div className="implementation-guide">
            <h5>📋 Implementation Steps</h5>
            <ol>
              {stars[expandedStar].implementationSteps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ol>
          </div>

          {stars[expandedStar].businessImpact && (
            <div className="business-impact">
              <h5>💰 Business Impact</h5>
              <p>{stars[expandedStar].businessImpact}</p>
            </div>
          )}

          <div className="value-metrics">
            <strong>Business Outcomes:</strong> {stars[expandedStar].valueMetrics}
          </div>
        </div>
      )}
    </div>
  );
};

export default StarGrid;
