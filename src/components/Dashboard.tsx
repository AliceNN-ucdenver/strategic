import React from 'react';
import { metricsData, portfolioOverview } from '../data/metricsData';
import MetricCard from './MetricCard';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <section className="portfolio-dashboard" id="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header fade-in">
          <h2>Portfolio Health Dashboard</h2>
          <p>Real-time insights into your technology ecosystem's health across the four critical pillars</p>
          <div className="dashboard-quote">
            "Think of portfolio health as a state-level planning function. Just as state urban development offices monitor 
            the health of different cities, our dashboard provides comprehensive insights that guide business units toward optimal outcomes."
          </div>
        </div>

        {/* Portfolio Overview Summary */}
        <div className="portfolio-overview fade-in">
          <h3>Portfolio Health Summary</h3>
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
            <h4>Key Insights & Recommendations</h4>
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
