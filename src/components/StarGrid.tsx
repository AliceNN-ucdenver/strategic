import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Star } from '../data/clusters';
import './StarGrid.css';

interface StarGridProps {
  stars: Star[];
}

type DetailPanel = 'overview' | 'paths' | 'playbook';

interface FieldGuide {
  frameworkLens: string;
  maturitySignals: string[];
  actionPlan: {
    week: string;
    month: string;
    quarter: string;
  };
}

const fieldGuides: Record<string, FieldGuide> = {
  'Business Value Compass': {
    frameworkLens: 'Core vs. Context, the integration trap, and value-line measurement from strategy through delivery.',
    maturitySignals: ['Revenue attribution is visible before funding', 'Integration work is treated as context unless it differentiates', 'Executives can trace technical decisions to business outcomes'],
    actionPlan: {
      week: 'Map three active architecture initiatives to the business outcome they claim to improve.',
      month: 'Create a value scorecard that links technical decisions to revenue, risk, cost, or market-speed signals.',
      quarter: 'Run quarterly portfolio reviews that retire integration-trap work and reallocate capacity to differentiating capabilities.'
    }
  },
  'Strategic Vision Mapping': {
    frameworkLens: 'Persistent strategic vision, scenario planning, and the disciplined strategic no.',
    maturitySignals: ['Teams can repeat the architectural north star', 'Roadmaps preserve coherence through reorgs and vendor shifts', 'Leadership trusts architecture to shape strategy, not just implement it'],
    actionPlan: {
      week: 'Write the current architectural north star in one paragraph and test whether three stakeholders recognize it.',
      month: 'Build a visual strategy map that connects capabilities, investments, and business outcomes.',
      quarter: 'Establish C-suite strategy sessions and scenario-planning rituals for emerging technology futures.'
    }
  },
  'Ecosystem Intelligence': {
    frameworkLens: 'Ecosystem identity, competitive intelligence, scenario planning, and resilience measurement.',
    maturitySignals: ['Partner and dependency maps are current', 'Competitive moves are anticipated rather than discovered late', 'Market signals influence architecture before disruption forces the issue'],
    actionPlan: {
      week: 'Map the ecosystem around one strategic capability: partners, platforms, competitors, regulators, and dependencies.',
      month: 'Stand up a lightweight competitive architecture intelligence review.',
      quarter: 'Run scenario planning against two plausible market disruptions and update architecture priorities.'
    }
  },
  'Innovation Acceleration Engine': {
    frameworkLens: 'Always-ready platforms, self-service golden paths, and innovation portfolio flow.',
    maturitySignals: ['New ideas start from reusable platform capability', 'Teams can prototype without waiting on environments or approvals', 'Delivery telemetry shows cycle time improving across teams'],
    actionPlan: {
      week: 'Identify the three setup tasks repeated by every new initiative.',
      month: 'Ship one self-service golden path that removes the highest-friction setup tax.',
      quarter: 'Measure concept-to-production cycle time and expand platform patterns to the next priority capability.'
    }
  },
  'Pattern Recognition Mastery': {
    frameworkLens: 'The Big-5 duplication pattern, fitness functions, composition blueprints, and institutional memory.',
    maturitySignals: ['Duplicate commodity capabilities are visible at portfolio level', 'Reference architectures are reused, not admired', 'Fitness functions catch architectural drift before review boards do'],
    actionPlan: {
      week: 'Inventory duplicated reporting, messaging, document, workflow, and integration capabilities.',
      month: 'Create one composition blueprint and reference implementation for the highest-cost duplicate pattern.',
      quarter: 'Shift budget from duplicated commodity work into strategic platform capability.'
    }
  },
  'Talent Magnetism Force': {
    frameworkLens: 'System-changing leadership, measurable trust, toil removal, and governance as enablement.',
    maturitySignals: ['Senior talent spends time on consequential work', 'Toil reduction is measured as a leadership metric', 'Values and governance are encoded into systems, not enforced through heroics'],
    actionPlan: {
      week: 'Ask top engineers where the system wastes their judgment and energy.',
      month: 'Remove one high-friction toil source with a self-service platform or policy change.',
      quarter: 'Create visible career and influence paths for architects who improve the operating system.'
    }
  },
  'Business-Technology Synthesis': {
    frameworkLens: 'Business canvas, semantic kitchen, service-dominant logic, and the composable highway from intent to execution.',
    maturitySignals: ['Business and technology share the same vocabulary for outcomes', 'Architecture encodes business meaning into reusable capabilities', 'Executives seek architecture input before strategy hardens'],
    actionPlan: {
      week: 'Find one place where business intent is lost in translation before delivery.',
      month: 'Create a shared business-technology canvas for a strategic capability.',
      quarter: 'Turn that shared language into capability APIs, roadmaps, and accountability metrics.'
    }
  },
  'Autonomous Governance Design': {
    frameworkLens: 'Core vs. context governance, policy as code, golden paths, Team Topologies, and governance maturity ladders.',
    maturitySignals: ['Routine decisions are automated', 'Novel decisions are protected for architect judgment', 'Governance platform teams measure developer experience and compliance strength together'],
    actionPlan: {
      week: 'Audit governance friction and classify decisions as routine context or strategic core.',
      month: 'Pilot policy as code in the highest-volume governance domain.',
      quarter: 'Establish a governance platform team and extend golden paths across architecture, risk, operations, and security.'
    }
  },
  'Innovation Incubation Labs': {
    frameworkLens: 'Dedicated lab clock, lab court, hypothesis pipeline, neuroscience of curiosity, and graduation criteria.',
    maturitySignals: ['Experiments have protected time and explicit hypotheses', 'Learning is captured even when experiments fail', 'Validated capabilities have a clear path to production'],
    actionPlan: {
      week: 'Define one impossible question worth testing outside normal production constraints.',
      month: 'Create the lab operating model: decision rights, timebox, funding, and success criteria.',
      quarter: 'Graduate one validated capability or kill one weak option with documented learning.'
    }
  },
  'Resilience Engineering': {
    frameworkLens: 'Digital immune systems, architectural fitness functions, steady-state definition, chaos practice, and learning from stress.',
    maturitySignals: ['Steady state is defined in measurable terms', 'Failures are rehearsed before production forces them', 'Stress events improve the system rather than only generating postmortems'],
    actionPlan: {
      week: 'Define steady state for one business-critical flow.',
      month: 'Encode resilience fitness functions and run a controlled failure exercise.',
      quarter: 'Build a repeatable chaos practice and feed every stress lesson back into architecture.'
    }
  },
  'Adaptive Learning Systems': {
    frameworkLens: 'Contrariwise validation, feedback loops, A/B learning, ensembles, retrospectives, and assumption testing.',
    maturitySignals: ['Systems test conclusions against alternatives', 'Telemetry changes architectural decisions', 'Learning loops improve both product behavior and operating model'],
    actionPlan: {
      week: 'Identify one architectural assumption that has never been tested against its opposite.',
      month: 'Instrument the feedback loop and run a controlled contrariwise experiment.',
      quarter: 'Codify what the system learned into decision rules, patterns, or platform behavior.'
    }
  },
  'Future-Proof Foundation Design': {
    frameworkLens: 'Evolution-ready foundations, modular boundaries, abstraction layers, technology adoption gates, and business-model optionality.',
    maturitySignals: ['New technology can be adopted without rewriting core business logic', 'Boundaries protect business capability from vendor churn', 'Modernization is incremental rather than existential'],
    actionPlan: {
      week: 'Identify the technology choices most tightly coupled to core business logic.',
      month: 'Design one abstraction or modular boundary that preserves future optionality.',
      quarter: 'Create an evolution roadmap with adoption gates for emerging technologies and business models.'
    }
  }
};

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
