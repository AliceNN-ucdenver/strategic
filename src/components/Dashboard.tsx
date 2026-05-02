import React from 'react';
import { metricsData, portfolioOverview } from '../data/metricsData';
import MetricCard from './MetricCard';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <section className="portfolio-dashboard" id="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header fade-in">
          <div>
            <span className="dashboard-kicker">Example Operating Cockpit</span>
            <h2>Governance Health Across the Product City</h2>
            <p>
              A more concrete view of the product-to-architecture operating model: value flow,
              governance evidence, agentic delivery readiness, and engineering community health.
            </p>
          </div>
          <div className="dashboard-quote">
            The Chief Archeologist does not just draw the map. The map becomes executable:
            BARs, CALM models, threat models, policy checks, and product metrics all feeding the same cockpit.
          </div>
        </div>

        <div className="governance-cockpit fade-in" aria-label="Governance cockpit preview">
          <div className="cockpit-panel cockpit-map">
            <span className="panel-label">Portfolio Map</span>
            <h3>Business capability to code</h3>
            <div className="capability-map">
              <div className="map-row">
                <span>Portfolio</span>
                <strong>Modernization runway</strong>
              </div>
              <div className="map-row">
                <span>Platform</span>
                <strong>Governance mesh</strong>
              </div>
              <div className="map-row active">
                <span>BAR</span>
                <strong>Customer data platform</strong>
              </div>
              <div className="map-row">
                <span>Repos</span>
                <strong>7 services · 3 policy gaps</strong>
              </div>
            </div>
          </div>

          <div className="cockpit-panel cockpit-score">
            <span className="panel-label">Governance Score</span>
            <div className="score-ring" aria-label="83 percent governance health">
              <strong>83%</strong>
              <span>healthy</span>
            </div>
            <div className="score-breakdown">
              <div><span>Architecture</span><strong>88</strong></div>
              <div><span>Security</span><strong>92</strong></div>
              <div><span>Risk</span><strong>76</strong></div>
              <div><span>Ops</span><strong>81</strong></div>
            </div>
          </div>

          <div className="cockpit-panel cockpit-flow">
            <span className="panel-label">Agentic SDLC Flow</span>
            <h3>Idea to governed change</h3>
            <ol className="flow-list">
              <li>RCTRO issue generated</li>
              <li>Prompt packs attached</li>
              <li>Agent implementation reviewed</li>
              <li>Policy and fitness checks enforced</li>
            </ol>
          </div>
        </div>

        {/* Portfolio Overview Summary */}
        <div className="portfolio-overview fade-in">
          <h3>Current Portfolio Signals</h3>
          <div className="overview-grid">
            {portfolioOverview.stats.map((stat, index) => (
              <div key={index} className="overview-stat">
                <div className={`stat-number ${stat.status}`}>{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Business Impact Insights */}
          <div className="business-insights">
            <h4>Executive Readout</h4>
            <div className="insights-grid">
              <div className="insight-column">
                <strong className="strengths">Strengths:</strong>
                <ul>
                  {portfolioOverview.insights.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div className="insight-column">
                <strong className="focus-areas">Focus Areas:</strong>
                <ul>
                  {portfolioOverview.insights.focusAreas.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
              <div className="insight-column">
                <strong className="strategic-impact">Strategic Impact:</strong>
                <ul>
                  {portfolioOverview.insights.strategicImpact.map((impact, index) => (
                    <li key={index}>{impact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid fade-in">
          {metricsData.map((cardData) => (
            <MetricCard key={cardData.id} data={cardData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
