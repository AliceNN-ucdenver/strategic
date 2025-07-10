import React from 'react';

const ResumeEducation: React.FC = () => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">🎓 Education & Credentials</h3>
      <div className="resume-education-item">
        <div className="resume-education-content">
          <h4>PhD Candidate, Computer Science and Information Systems</h4>
          <p>University of Colorado Denver</p>
          <span>Expected December 2026 | <strong>Thesis:</strong> "Fin-ALICE Framework" - Integrating causal inference, emotional sentiment analysis, and dynamic co-occurrence networks for enhanced financial forecasting</span>
        </div>
      </div>
      <div className="resume-education-item">
        <div className="resume-education-content">
          <h4>M.S., Computer Science and Engineering</h4>
          <p>University of Colorado Denver</p>
          <span>2004 - 2009 | GPA: 4.0 | <strong>AI Focus:</strong> Intelligent Agents, Neural Networks, Linguistic Geometry, Expert Systems</span>
        </div>
      </div>
      <div className="resume-education-item">
        <div className="resume-education-content">
          <h4>B.S., Computer Science and Engineering</h4>
          <p>University of Colorado Denver</p>
          <span>1999 - 2003 | GPA: 3.99 | Minor in Mathematics | Golden Key National Honor Society</span>
        </div>
      </div>
    </section>
  );
};

export default ResumeEducation;
