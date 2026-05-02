import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AssessmentModal.css'

interface AssessmentModalProps {
  isOpen: boolean
  onClose: () => void
}

const AssessmentModal = ({ isOpen, onClose }: AssessmentModalProps) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  if (!isOpen) return null

  const ratingOptions = [
    { value: 1, label: '1-2', description: 'Technical metrics only' },
    { value: 3, label: '3-4', description: 'Some business tracking' },
    { value: 5, label: '5-6', description: 'Regular value measurement' },
    { value: 7, label: '7-8', description: 'Clear revenue attribution' },
    { value: 9, label: '9-10', description: 'Strategic business driver' }
  ]

  return (
    <div className="assessment-modal-overlay" onClick={onClose}>
      <div className="assessment-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="assessment-close-button" onClick={onClose}>×</button>

        <h2>Strategic Architecture Assessment</h2>
        <p className="assessment-modal-subtitle">
          Discover your organization's maturity across the 12 Stars Constellation
        </p>
        
        <div className="sample-question">
          <div className="question-content">
            <h3>Sample Assessment Question</h3>
            <p>
              <strong>Business Value Compass:</strong> "How do you currently measure the success of your architectural initiatives?"
            </p>
            
            <div className="rating-grid">
              {ratingOptions.map((option) => (
                <div
                  key={option.value}
                  className={`rating-option ${selectedRating === option.value ? 'selected' : ''}`}
                  onClick={() => setSelectedRating(option.value)}
                >
                  <div className="rating-value">{option.label}</div>
                  <div className="rating-description">{option.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="assessment-modal-footer">
          <p className="assessment-coming-soon">
            Full assessment coming soon.
          </p>
          <p>
            The full assessment includes 60+ questions across all 12 stars, providing
            personalized transformation roadmaps and implementation guidance.
          </p>
          <Link className="cta-button" to="/contact" onClick={onClose}>
            Contact Us for a Guided Review
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AssessmentModal
