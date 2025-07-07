import React from 'react';
import type { MetricCard as MetricCardType } from '../data/metricsData';
import './MetricCard.css';

interface MetricCardProps {
  data: MetricCardType;
}

const MetricCard: React.FC<MetricCardProps> = ({ data }) => {
  return (
    <div className="metric-card" id={data.id}>
      <div className="metric-header">
        <div className="metric-icon">{data.icon}</div>
        <div>
          <div className="metric-title">{data.title}</div>
          <div className="metric-subtitle">{data.subtitle}</div>
        </div>
      </div>
      
      <div className="conversation-starter">
        <strong>Conversation Starter:</strong> {data.conversationStarter}
      </div>
      
      <div className="pillar-description">
        {data.pillarDescription}
      </div>
      
      <div className="metric-items">
        {data.metrics.map((metric, index) => (
          <div 
            key={metric.id} 
            className={`metric-item ${metric.status}`}
            style={index > 0 ? { marginTop: '1.5rem' } : {}}
          >
            <div className="metric-content">
              <div className="metric-label">
                <span>{metric.label}</span>
                <span className={`metric-value ${metric.status}`}>{metric.value}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className={`progress-fill ${metric.status}`} 
                  style={{ width: `${metric.percentage}%` }}
                ></div>
              </div>
              <div className={`metric-target ${metric.status}`}>{metric.target}</div>
            </div>
            <div className="metric-description">
              {metric.description.join(' • ')}
              <br />
              <strong>Business Impact:</strong> {metric.businessImpact.join(' • ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricCard;
