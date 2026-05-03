import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Star } from '../data/clusters';
import { fieldGuides } from '../data/fieldGuides';
import './StarGrid.css';

interface StarGridProps {
  stars: Star[];
}

type DetailPanel = 'overview' | 'paths' | 'playbook';

const stripDecorativePrefix = (value: string) => value.replace(/^[^A-Za-z0-9]+/, '').trim();
const getStarName = (star: Star) => stripDecorativePrefix(star.title);

const StarGrid: React.FC<StarGridProps> = ({ stars }) => {
  const [expandedStar, setExpandedStar] = useState<number | null>(null);
  const [activeDetailPanel, setActiveDetailPanel] = useState<DetailPanel>('overview');

  const handleStarClick = (index: number) => {
    setExpandedStar(expandedStar === index ? null : index);
    setActiveDetailPanel('overview');
  };

  const selectedStar = expandedStar !== null ? stars[expandedStar] : null;
  const selectedStarName = selectedStar ? getStarName(selectedStar) : '';
  const selectedFieldGuide = selectedStar ? fieldGuides[selectedStarName] : undefined;
  const selectedGuidanceTitle = selectedStar ? stripDecorativePrefix(selectedStar.strategicGuidance.title) : '';
  const valueMetricChips = selectedStar?.valueMetrics.split(',').map(metric => metric.trim()).filter(Boolean) ?? [];

  return (
    <div className="stars-grid">
      {/* Star Tabs */}
      <div className="star-tabs">
        {stars.map((star, index) => (
          <button
            key={index}
            className={`star-tab ${expandedStar === index ? 'active' : ''}`}
            onClick={() => handleStarClick(index)}
            aria-expanded={expandedStar === index}
            aria-controls={`star-detail-${index}`}
          >
            <span className="star-icon" aria-hidden="true" />
            <span className="star-title">{getStarName(star)}</span>
            {star.character && (
              <span className="star-tab-character">
                <span className="star-tab-emoji" aria-hidden="true" />
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
      {selectedStar && (
        <div className="star-detail expanded" id={`star-detail-${expandedStar}`}>
          <div className="star-header">
            <div>
              <span className={`guide-status guide-status-${selectedStar.articleStatus ?? 'upcoming'}`}>
                {selectedStar.articleStatus === 'published' ? 'Published guide' : 'Guide in progress'}
              </span>
              <h4>{selectedStarName}</h4>
            </div>
            <button
              className="close-button"
              onClick={() => setExpandedStar(null)}
              aria-label={`Close ${selectedStar.title} details`}
            >
              ✕
            </button>
          </div>

          <div className="star-detail-tabs" role="tablist" aria-label={`${selectedStar.title} detail views`}>
            <button
              type="button"
              className={activeDetailPanel === 'overview' ? 'active' : ''}
              onClick={() => setActiveDetailPanel('overview')}
              role="tab"
              aria-selected={activeDetailPanel === 'overview'}
            >
              Overview
            </button>
            <button
              type="button"
              className={activeDetailPanel === 'paths' ? 'active' : ''}
              onClick={() => setActiveDetailPanel('paths')}
              role="tab"
              aria-selected={activeDetailPanel === 'paths'}
            >
              Decision Paths
            </button>
            <button
              type="button"
              className={activeDetailPanel === 'playbook' ? 'active' : ''}
              onClick={() => setActiveDetailPanel('playbook')}
              role="tab"
              aria-selected={activeDetailPanel === 'playbook'}
            >
              Playbook
            </button>
          </div>

          {activeDetailPanel === 'overview' && (
            <div className="star-overview" role="tabpanel">
              <div className="article-thesis">
                <span>Article Thesis</span>
                <p>{selectedStar.articleHook ?? selectedStar.purpose}</p>
              </div>

              <div className="overview-grid">
                <div className="overview-card">
                  <span>Purpose</span>
                  <p>{selectedStar.purpose}</p>
                </div>
                <div className="overview-card assessment-question">
                  <span>Key Assessment</span>
                  <p>"{selectedStar.assessmentQuestion}"</p>
                </div>
              </div>

              <div className="metric-chip-panel">
                <span>Value Signals</span>
                <div className="metric-chip-list">
                  {valueMetricChips.map((metric) => (
                    <span key={metric} className="metric-chip">{metric}</span>
                  ))}
                </div>
              </div>

              <div className="expanded-card-actions">
                {selectedStar.articleStatus === 'published' && selectedStar.articleSlug ? (
                  <Link to={`/blog/${selectedStar.articleSlug}`} className="guide-link">
                    Read the Full Guide
                  </Link>
                ) : (
                  <span className="guide-link disabled">Full Guide In Progress</span>
                )}
              </div>
            </div>
          )}

          {activeDetailPanel === 'paths' && (
            <div className="two-paths" role="tabpanel">
              <div className="two-paths-header">
                <span className="two-paths-label">The Two Paths</span>
                <h5 className="two-paths-title">{selectedGuidanceTitle}</h5>
              </div>
              <div className="two-paths-grid">
                <div className="path-card path-tactical">
                  <div className="path-header">
                    <span className="path-icon" aria-hidden="true" />
                    <span className="path-name">Tactical Path</span>
                  </div>
                  <div className="path-section">
                    <div className="path-section-label">The Approach</div>
                    <p>{selectedStar.strategicGuidance.tacticalApproach}</p>
                  </div>
                  <div className="path-divider">
                    <span className="path-divider-arrow">↓</span>
                  </div>
                  <div className="path-section">
                    <div className="path-section-label">This Leads To</div>
                    <p>{selectedStar.whatGoesWrong}</p>
                  </div>
                </div>

                <div className="path-card path-strategic">
                  <div className="path-header">
                    <span className="path-icon" aria-hidden="true" />
                    <span className="path-name">Strategic Path</span>
                  </div>
                  <div className="path-section">
                    <div className="path-section-label">The Approach</div>
                    <p>{selectedStar.strategicGuidance.strategicApproach}</p>
                  </div>
                  <div className="path-divider">
                    <span className="path-divider-arrow">↓</span>
                  </div>
                  <div className="path-section">
                    <div className="path-section-label">This Leads To</div>
                    <p>{selectedStar.whatGoesRight}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDetailPanel === 'playbook' && (
            <div className="playbook-panel" role="tabpanel">
              <div className="framework-lens">
                <span>Framework Lens</span>
                <p>{selectedFieldGuide?.frameworkLens ?? selectedStar.purpose}</p>
              </div>

              <div className="maturity-signals">
                <h5>Maturity Signals</h5>
                <ul>
                  {(selectedFieldGuide?.maturitySignals ?? selectedStar.implementationSteps.slice(0, 3)).map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </div>

              <div className="action-plan">
                <h5>Action Plan</h5>
                <div className="action-plan-grid">
                  <div>
                    <span>This Week</span>
                    <p>{selectedFieldGuide?.actionPlan.week ?? selectedStar.implementationSteps[0]}</p>
                  </div>
                  <div>
                    <span>This Month</span>
                    <p>{selectedFieldGuide?.actionPlan.month ?? selectedStar.implementationSteps[1]}</p>
                  </div>
                  <div>
                    <span>This Quarter</span>
                    <p>{selectedFieldGuide?.actionPlan.quarter ?? selectedStar.implementationSteps[2]}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StarGrid;
