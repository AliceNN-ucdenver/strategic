import React, { useState } from 'react';
import type { Star } from '../data/clusters';
import './StarGrid.css';

interface StarGridProps {
  stars: Star[];
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
            {star.character && (
              <span className="star-tab-character">
                <span className="star-tab-emoji">{star.characterEmoji}</span>
                <span className="star-tab-charname">{star.character}</span>
              </span>
            )}
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

          <div className="assessment-question">
            <h5>🎯 Key Assessment Question</h5>
            <p>"{stars[expandedStar].assessmentQuestion}"</p>
          </div>

          {/* The Two Paths — unified comparison: approach + its consequence per column */}
          <div className="two-paths">
            <div className="two-paths-header">
              <span className="two-paths-label">The Two Paths</span>
              <h5 className="two-paths-title">{stars[expandedStar].strategicGuidance.title}</h5>
            </div>
            <div className="two-paths-grid">
              <div className="path-card path-tactical">
                <div className="path-header">
                  <span className="path-icon">⚠</span>
                  <span className="path-name">Tactical Path</span>
                </div>
                <div className="path-section">
                  <div className="path-section-label">The Approach</div>
                  <p>{stars[expandedStar].strategicGuidance.tacticalApproach}</p>
                </div>
                <div className="path-divider">
                  <span className="path-divider-arrow">↓</span>
                </div>
                <div className="path-section">
                  <div className="path-section-label">This Leads To</div>
                  <p>{stars[expandedStar].whatGoesWrong}</p>
                </div>
              </div>

              <div className="path-card path-strategic">
                <div className="path-header">
                  <span className="path-icon">✓</span>
                  <span className="path-name">Strategic Path</span>
                </div>
                <div className="path-section">
                  <div className="path-section-label">The Approach</div>
                  <p>{stars[expandedStar].strategicGuidance.strategicApproach}</p>
                </div>
                <div className="path-divider">
                  <span className="path-divider-arrow">↓</span>
                </div>
                <div className="path-section">
                  <div className="path-section-label">This Leads To</div>
                  <p>{stars[expandedStar].whatGoesRight}</p>
                  <p className="path-outcomes">
                    <span className="path-outcomes-label">Outcomes:</span>{' '}
                    {stars[expandedStar].valueMetrics}
                  </p>
                </div>
              </div>
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
        </div>
      )}
    </div>
  );
};

export default StarGrid;
