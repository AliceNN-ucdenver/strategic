import React from 'react';

const ResumeLeadershipBoard: React.FC = () => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">🌟 Leadership & Board Positions</h3>
      <div className="resume-two-column">
        <div>
          <div className="resume-experience-item">
            <div className="resume-job-title">Board Member</div>
            <div className="resume-company-name">Chief Architect Forum</div>
            <div className="resume-date-location">November 2024 - Present</div>
            <div className="resume-job-description">
              <p>Global leadership in Business Technology Architecture advancement and cross-industry collaboration.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="resume-experience-item">
            <div className="resume-job-title">Advisory Board Member</div>
            <div className="resume-company-name">University of Colorado Denver</div>
            <div className="resume-date-location">May 2014 - Present</div>
            <div className="resume-job-description">
              <p>Strategic guidance on AI/ML curriculum development and industry partnerships.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeLeadershipBoard;
