import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './AssessmentSection.css';

interface AssessmentSectionProps {
  onOpenModal: (e: React.MouseEvent<HTMLElement>) => void;
}

const sampleQuestions = [
  {
    id: 'value',
    title: 'Business Value Compass',
    question: 'How do you currently measure the success of your architectural initiatives?',
    options: [
      { label: '1-2: Technical metrics only', value: 2 },
      { label: '3-4: Some business tracking', value: 4 },
      { label: '5-6: Regular value measurement', value: 6 },
      { label: '7-8: Clear revenue attribution', value: 8 },
      { label: '9-10: Strategic business driver', value: 10 }
    ]
  },
  {
    id: 'velocity',
    title: 'Innovation Velocity',
    question: 'How quickly can your architecture enable new AI capabilities from concept to production?',
    options: [
      { label: '1-2: >1 year', value: 2 },
      { label: '3-4: 6-12 months', value: 4 },
      { label: '5-6: 3-6 months', value: 6 },
      { label: '7-8: 1-3 months', value: 8 },
      { label: '9-10: <30 days', value: 10 }
    ]
  }
]

const AssessmentSection: React.FC<AssessmentSectionProps> = ({ onOpenModal }) => {
  const [selectedScores, setSelectedScores] = useState<Record<string, number>>({})
  const answeredCount = Object.keys(selectedScores).length

  const readinessMessage = useMemo(() => {
    if (answeredCount === 0) return 'Try the two-question preview, then open the full constellation assessment.'
    if (answeredCount < sampleQuestions.length) return 'One signal captured. Add the second to see the preview come into focus.'

    const average = Object.values(selectedScores).reduce((total, score) => total + score, 0) / answeredCount
    if (average >= 7) return 'You are showing launchpad signals. The full assessment can identify which stars are ready to scale.'
    if (average >= 5) return 'You are in the transition zone. The full assessment can pinpoint the highest-leverage next moves.'
    return 'You are seeing band-aid signals. The full assessment can expose where friction is hiding.'
  }, [answeredCount, selectedScores])

  return (
    <section className="assessment" id="assessment">
      <div className="assessment-container">
        <h2>The Strategic Architecture Constellation Assessment</h2>
        <p>Discover your organization's maturity across architecture, product transformation, and security integration</p>
        
        <div className="assessment-preview">
          {sampleQuestions.map((sample) => (
            <div className="assessment-sample-question" key={sample.id}>
              <h4>Sample Question: {sample.title}</h4>
              <p>"{sample.question}"</p>
              <div className="question-scale" role="group" aria-label={`${sample.title} score preview`}>
                {sample.options.map((option) => {
                  const isSelected = selectedScores[sample.id] === option.value

                  return (
                    <button
                      type="button"
                      key={option.label}
                      className={`scale-point ${isSelected ? 'selected' : ''}`}
                      aria-pressed={isSelected}
                      onClick={() => setSelectedScores((current) => ({
                        ...current,
                        [sample.id]: option.value
                      }))}
                    >
                      <span>{option.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="assessment-preview-result" aria-live="polite">
            <span>{answeredCount}/{sampleQuestions.length} preview signals captured</span>
            <strong>{readinessMessage}</strong>
          </div>
        </div>
        
        <div className="assessment-actions">
          <button type="button" className="btn-primary" onClick={onOpenModal}>
            Preview Full Assessment
          </button>
          <p>
            Full assessment coming soon. For now, <Link to="/contact">contact us</Link> to discuss a guided review.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
