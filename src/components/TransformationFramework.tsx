import React, { useState } from 'react';
import MetricCard from './MetricCard';
import { transformationFramework, type TransformationTabId } from '../data/productPageData';
import { successMetricsData } from '../data/successMetricsData';
import './TransformationFramework.css';

const TransformationFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TransformationTabId>('mindset');
  const selectedTab = transformationFramework.tabs.find((tab) => tab.id === activeTab) ?? transformationFramework.tabs[0];

  return (
    <section className="transformation-framework-section" id="transformation">
      <div className="framework-container">
        <div className="section-header">
          <h2>{transformationFramework.title}</h2>
          <p>{transformationFramework.subtitle}</p>
          <p className="framework-subtitle">{transformationFramework.body}</p>
        </div>

        <div className="framework-tabs">
          {transformationFramework.tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="framework-content">
          {selectedTab.id === 'mindset' && (
            <div className="mindset-content">
              <div className="transformation-comparison">
                {selectedTab.sections.map((section) => (
                  <div key={section.title} className={`comparison-card ${section.type}`}>
                    <h3>{section.title}</h3>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="transformation-actions">
                <h3>{selectedTab.actionsHeading}</h3>
                <div className="actions-grid">
                  {selectedTab.actions.map((action) => (
                    <div key={action.title} className="action-item">
                      <strong>{action.title}:</strong> {action.body}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab.id === 'pathway' && (
            <div className="pathway-content">
              <div className="pathway-stages">
                {selectedTab.stages.map((stage, index) => (
                  <div key={stage.stage} className="stage-card">
                    <div className="stage-header">
                      <div className="stage-number">{index + 1}</div>
                      <div className="stage-info">
                        <h3>{stage.stage}</h3>
                        <div className="stage-theme">{stage.theme}</div>
                      </div>
                    </div>
                    <div className="stage-participants">
                      <strong>Key Players:</strong>
                      <div className="participants-list">
                        {stage.who.map((person) => (
                          <span key={person} className="participant">{person}</span>
                        ))}
                      </div>
                    </div>
                    <div className="stage-goal">
                      <strong>Goal:</strong> {stage.goal}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab.id === 'metrics' && (
            <div className="metrics-content">
              <div className="metrics-intro">
                <p>{selectedTab.intro}</p>
              </div>
              <div className="success-metrics-container">
                <div className="metrics-grid-home">
                  {successMetricsData.map((cardData) => (
                    <MetricCard key={cardData.id} data={cardData} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TransformationFramework;
