import React from 'react';
import type { DashboardPreviewData, PortfolioOverviewData } from '../../data/dashboardData';

interface DashboardPreviewProps {
  data: DashboardPreviewData;
}

interface PortfolioOverviewProps {
  data: PortfolioOverviewData;
}

export const DashboardHeader: React.FC<DashboardPreviewProps> = ({ data }) => (
  <div className="dashboard-header fade-in">
    <div>
      <span className="dashboard-kicker">{data.header.kicker}</span>
      <h2>{data.header.title}</h2>
      <p>{data.header.body}</p>
    </div>
    <div className="dashboard-quote">{data.header.quote}</div>
  </div>
);

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({ data }) => (
  <div className="governance-cockpit fade-in" aria-label="Governance cockpit preview">
    <div className="cockpit-panel cockpit-map">
      <span className="panel-label">{data.capabilityMap.label}</span>
      <h3>{data.capabilityMap.title}</h3>
      <div className="capability-map">
        {data.capabilityMap.rows.map((row) => (
          <div key={`${row.label}-${row.value}`} className={`map-row ${row.active ? 'active' : ''}`.trim()}>
            <span>{row.label}</span>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
    </div>

    <div className="cockpit-panel cockpit-score">
      <span className="panel-label">{data.governanceScore.label}</span>
      <div className="score-ring" aria-label={data.governanceScore.ariaLabel}>
        <strong>{data.governanceScore.score}</strong>
        <span>{data.governanceScore.status}</span>
      </div>
      <div className="score-breakdown">
        {data.governanceScore.breakdown.map((item) => (
          <div key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>

    <div className="cockpit-panel cockpit-flow">
      <span className="panel-label">{data.flow.label}</span>
      <h3>{data.flow.title}</h3>
      <ol className="flow-list">
        {data.flow.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  </div>
);

export const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({ data }) => (
  <div className="portfolio-overview fade-in">
    <h3>{data.heading}</h3>
    <div className="overview-grid">
      {data.stats.map((stat) => (
        <div key={stat.label} className="overview-stat">
          <div className={`stat-number ${stat.status}`}>{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>

    <div className="business-insights">
      <h4>{data.insightsHeading}</h4>
      <div className="insights-grid">
        <div className="insight-column">
          <strong className="strengths">Strengths:</strong>
          <ul>
            {data.insights.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>
        <div className="insight-column">
          <strong className="focus-areas">Focus Areas:</strong>
          <ul>
            {data.insights.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div className="insight-column">
          <strong className="strategic-impact">Strategic Impact:</strong>
          <ul>
            {data.insights.strategicImpact.map((impact) => (
              <li key={impact}>{impact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
