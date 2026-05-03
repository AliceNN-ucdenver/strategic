import React from 'react';
import { dashboardPreview, portfolioOverview } from '../data/dashboardData';
import { metricsData } from '../data/metricsData';
import MetricCard from './MetricCard';
import { DashboardHeader, DashboardPreview, PortfolioOverview } from './product/DashboardPreview';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <section className="portfolio-dashboard" id="dashboard">
      <div className="dashboard-container">
        <DashboardHeader data={dashboardPreview} />
        <DashboardPreview data={dashboardPreview} />
        <PortfolioOverview data={portfolioOverview} />

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
