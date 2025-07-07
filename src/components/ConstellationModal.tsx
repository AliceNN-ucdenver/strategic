import React from 'react'
import './ConstellationModal.css'

interface ClusterData {
  title: string
  stars: string[]
  description: string
  details: StarDetail[]
}

interface StarDetail {
  name: string
  purpose: string
  assessmentQuestion: string
  strategicGuidance: {
    title: string
    strategic: string
    tactical: string
  }
  whatGoesWrong: string
  whatGoesRight: string
  implementationSteps: string[]
  valueMetrics: string
}

interface ConstellationModalProps {
  cluster?: ClusterData
  star?: StarDetail
  onClose: () => void
  onStarClick?: (star: StarDetail) => void
}

const ConstellationModal: React.FC<ConstellationModalProps> = ({ 
  cluster, 
  star, 
  onClose, 
  onStarClick 
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const startAssessment = () => {
    // Create assessment modal
    const assessmentContent = `
      <div style="text-align: center;">
        <h3 style="color: #667eea; margin-bottom: 1rem;">Strategic Architecture Assessment</h3>
        <p style="margin-bottom: 2rem; color: #64748b;">
          Discover your organization's maturity across AI architecture, product transformation, and security integration
        </p>
        <div style="background: #f8fafc; padding: 2rem; border-radius: 15px; margin: 2rem 0;">
          <h4 style="margin-bottom: 1rem;">Sample Question: Business Value Compass</h4>
          <p style="margin-bottom: 1rem;">"How do you currently measure the success of your architectural initiatives?"</p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;">
            <button style="padding: 0.5rem 1rem; border: none; border-radius: 5px; background: #667eea; color: white; cursor: pointer;">1-2: Technical metrics only</button>
            <button style="padding: 0.5rem 1rem; border: none; border-radius: 5px; background: #667eea; color: white; cursor: pointer;">3-4: Some business tracking</button>
            <button style="padding: 0.5rem 1rem; border: none; border-radius: 5px; background: #667eea; color: white; cursor: pointer;">5-6: Regular value measurement</button>
            <button style="padding: 0.5rem 1rem; border: none; border-radius: 5px; background: #667eea; color: white; cursor: pointer;">7-8: Clear revenue attribution</button>
            <button style="padding: 0.5rem 1rem; border: none; border-radius: 5px; background: #667eea; color: white; cursor: pointer;">9-10: Strategic business driver</button>
          </div>
        </div>
        <p style="color: #64748b; margin-bottom: 2rem;">
          Complete assessment covers all 12 strategic stars across 4 clusters with personalized recommendations.
        </p>
        <button onclick="alert('Assessment feature coming soon!')" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1rem 2rem; border: none; border-radius: 50px; font-weight: 600; cursor: pointer;">
          Start Full Assessment
        </button>
      </div>
    `
    
    const assessmentModal = document.createElement('div')
    assessmentModal.className = 'modal-overlay'
    assessmentModal.innerHTML = `
      <div class="modal-content" style="max-width: 700px;">
        <div style="position: absolute; top: 1rem; right: 1rem; cursor: pointer; font-size: 1.5rem; color: #64748b;" onclick="this.closest('.modal-overlay').remove()">×</div>
        ${assessmentContent}
      </div>
    `
    document.body.appendChild(assessmentModal)
  }

  if (star) {
    return (
      <div className="modal-overlay" onClick={handleBackdropClick}>
        <div className="modal-content star-modal">
          <button className="modal-close" onClick={onClose}>×</button>
          
          <h2 className="star-title">⭐ {star.name}</h2>
          <p className="star-purpose"><strong>Purpose:</strong> {star.purpose}</p>
          
          <div className="assessment-question">
            <h3>🎯 Key Assessment Question:</h3>
            <p>"{star.assessmentQuestion}"</p>
          </div>

          <div className="strategic-guidance">
            <h3>{star.strategicGuidance.title}:</h3>
            <div className="guidance-comparison">
              <div className="strategic-approach">
                <strong>Strategic Approach:</strong> {star.strategicGuidance.strategic}
              </div>
              <div className="tactical-approach">
                <strong>Tactical Approach:</strong> {star.strategicGuidance.tactical}
              </div>
            </div>
          </div>

          <div className="what-goes-wrong">
            <h3>⚠️ What Goes Wrong Without This:</h3>
            <p>{star.whatGoesWrong}</p>
          </div>

          <div className="what-goes-right">
            <h3>✅ What Goes Right When Implemented:</h3>
            <p>{star.whatGoesRight}</p>
          </div>

          <div className="implementation-guide">
            <h3>📋 Implementation Steps:</h3>
            <ol>
              {star.implementationSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="value-metrics">
            <h3>💰 Value Metrics:</h3>
            <p>{star.valueMetrics}</p>
          </div>

          <div className="modal-actions">
            <button onClick={startAssessment} className="assess-button">
              Assess This Star
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (cluster) {
    return (
      <div className="modal-overlay" onClick={handleBackdropClick}>
        <div className="modal-content cluster-modal">
          <button className="modal-close" onClick={onClose}>×</button>
          
          <h2 className="cluster-title">{cluster.title}</h2>
          <p className="cluster-description">{cluster.description}</p>
          
          <div className="cluster-stars">
            {cluster.stars.map((star, index) => (
              <div 
                key={index} 
                className="star-item"
                onClick={() => onStarClick && onStarClick(cluster.details[index])}
              >
                {star}
              </div>
            ))}
          </div>
          
          <div className="modal-actions">
            <button onClick={startAssessment} className="assess-button">
              Assess This Cluster
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default ConstellationModal
