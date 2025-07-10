import React from 'react';
import './AssessmentSection.css';

interface AssessmentSectionProps {
  onOpenModal: (e: React.MouseEvent) => void;
}

const AssessmentSection: React.FC<AssessmentSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="assessment" id="assessment">
      <div className="assessment-container">
        <h2>The Strategic Architecture Constellation Assessment</h2>
        <p>Discover your organization's maturity across architecture, product transformation, and security integration</p>
        
        <div className="assessment-preview">
          <div className="sample-question">
            <h4>Sample Question: Business Value Compass</h4>
            <p>"How do you currently measure the success of your architectural initiatives?"</p>
            <div className="question-scale">
              <div className="scale-point"><span>1-2: Technical metrics only</span></div>
              <div className="scale-point"><span>3-4: Some business tracking</span></div>
              <div className="scale-point"><span>5-6: Regular value measurement</span></div>
              <div className="scale-point"><span>7-8: Clear revenue attribution</span></div>
              <div className="scale-point"><span>9-10: Strategic business driver</span></div>
            </div>
          </div>
          
          <div className="sample-question">
            <h4>Sample Question: Innovation Velocity</h4>
            <p>"How quickly can your architecture enable new AI capabilities from concept to production?"</p>
            <div className="question-scale">
              <div className="scale-point"><span>1-2: &gt;1 year</span></div>
              <div className="scale-point"><span>3-4: 6-12 months</span></div>
              <div className="scale-point"><span>5-6: 3-6 months</span></div>
              <div className="scale-point"><span>7-8: 1-3 months</span></div>
              <div className="scale-point"><span>9-10: &lt;30 days</span></div>
            </div>
          </div>
        </div>
        
        <a href="#" className="btn-primary" onClick={onOpenModal}>
          Begin Your Transformation Journey
        </a>
      </div>
    </section>
  );
};

export default AssessmentSection;
