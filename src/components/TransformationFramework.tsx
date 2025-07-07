import React, { useState } from 'react';
import MetricCard from './MetricCard';
import { successMetricsData } from '../data/successMetricsData';
import './TransformationFramework.css';

const TransformationFramework: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mindset');

  const frameworkData = {
    mindset: {
      title: "From Order-Taker to Strategic Partner",
      icon: "🔄",
      sections: [
        {
          title: "Current State: Feature Factory",
          type: "current",
          items: [
            "Receives predetermined solutions",
            "Implements without questioning fit", 
            "Focuses on technical feasibility",
            "Measures delivery speed",
            "Maintains system stability"
          ]
        },
        {
          title: "Future State: Innovation Partner",
          type: "future",
          items: [
            "Co-creates strategic options",
            "Challenges and refines approaches",
            "Drives business possibility", 
            "Measures value creation",
            "Enables competitive advantage"
          ]
        }
      ]
    },
    pathway: {
      title: "Strategic AI Design Pathway",
      icon: "🛤️",
      stages: [
        {
          stage: "Strategy & Vision",
          theme: "Digital Advantage",
          who: ["Enterprise architects", "Business strategists", "AI ethics specialists"],
          goal: "Define clear value metrics for AI initiatives that balance innovation with risk"
        },
        {
          stage: "Design & Development", 
          theme: "Pattern Design",
          who: ["Solution architects", "Developers", "Data scientists"],
          goal: "Accelerate development while maintaining architectural integrity"
        },
        {
          stage: "Integration & Deployment",
          theme: "Interoperability", 
          who: ["Technology architects", "DevOps", "Platform engineers"],
          goal: "Create a cohesive ecosystem that enables seamless AI integration"
        },
        {
          stage: "Continuous Evolution",
          theme: "Strategic Alignment",
          who: ["Enterprise architects", "Product owners", "Business analysts"], 
          goal: "Maintain alignment between architecture and evolving business needs"
        }
      ]
    },
    metrics: {
      title: "Revolutionary Success Metrics",
      icon: "📊",
      categories: [
        {
          name: "Strategic Value Creation",
          color: "blue",
          metrics: [
            { name: "AI Revenue Attribution", desc: "% of revenue directly traceable to AI-enabled capabilities", target: ">15%" },
            { name: "Innovation Velocity Index", desc: "Time from AI concept to production value", target: "<90 days" },
            { name: "Architectural Leverage Ratio", desc: "Business outcomes per architectural investment dollar", target: "10:1 ROI" }
          ]
        },
        {
          name: "Ecosystem Health", 
          color: "green",
          metrics: [
            { name: "AI Democratization Score", desc: "% of non-technical staff successfully deploying AI", target: ">40%" },
            { name: "Cross-Pollination Rate", desc: "AI patterns reused across business domains", target: ">70%" },
            { name: "Ecosystem Resilience Index", desc: "System adaptability during disruptions", target: ">85%" }
          ]
        },
        {
          name: "Future Readiness",
          color: "purple", 
          metrics: [
            { name: "Technical Debt Decay Rate", desc: "Speed of legacy modernization via AI", target: "-25% annually" },
            { name: "Capability Half-Life", desc: "Time before patterns need updates", target: ">18 months" },
            { name: "Talent Magnetism Score", desc: "Quality of AI talent attracted and retained", target: "Top 20%" }
          ]
        }
      ]
    }
  };

  const tabs = [
    { id: 'mindset', label: 'Transformation Mindset', icon: '🔄' },
    { id: 'pathway', label: 'Design Pathway', icon: '🛤️' },
    { id: 'metrics', label: 'Success Metrics', icon: '📊' }
  ];

  return (
    <section className="transformation-framework-section" id="transformation">
      <div className="framework-container">
        <div className="section-header">
          <h2>From Fixed Frameworks to Strategic Enablers</h2>
          <p>Architecting AI Transformation Beyond Traditional Approaches</p>
          <p className="framework-subtitle">
            Move from rigid architectural governance to distributed frameworks that empower innovation while maintaining necessary guardrails.
          </p>
        </div>

        <div className="framework-tabs">
          {tabs.map((tab) => (
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
          {activeTab === 'mindset' && (
            <div className="mindset-content">
              <div className="transformation-comparison">
                {frameworkData.mindset.sections.map((section, index) => (
                  <div key={index} className={`comparison-card ${section.type}`}>
                    <h3>{section.title}</h3>
                    <ul>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="transformation-actions">
                <h3>🎯 Key Transformation Actions</h3>
                <div className="actions-grid">
                  <div className="action-item">
                    <strong>Embed in Strategy:</strong> Place architects in business strategy sessions from day one
                  </div>
                  <div className="action-item">
                    <strong>Establish Authority:</strong> Create architecture review boards with veto power on strategic initiatives
                  </div>
                  <div className="action-item">
                    <strong>Create Innovation Labs:</strong> Prototype future capabilities before business requests them
                  </div>
                  <div className="action-item">
                    <strong>Measure Value:</strong> Implement outcome-based metrics tied to business results
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pathway' && (
            <div className="pathway-content">
              <div className="pathway-stages">
                {frameworkData.pathway.stages.map((stage, index) => (
                  <div key={index} className="stage-card">
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
                        {stage.who.map((person, personIndex) => (
                          <span key={personIndex} className="participant">{person}</span>
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

          {activeTab === 'metrics' && (
            <div className="metrics-content">
              <div className="metrics-intro">
                <p>Revolutionary metrics that reflect architecture's role as a strategic business accelerator, moving beyond traditional IT measures.</p>
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
