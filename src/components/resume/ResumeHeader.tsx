import React from 'react';
import chiefArchitectImage from '../../assets/chief_architect.png';

const ResumeHeader: React.FC = () => {
  return (
    <header className="resume-header">
      <div className="resume-profile-section">
        <img src={chiefArchitectImage} alt="Shawn McCarthy" className="resume-profile-photo" />
        <div className="resume-header-content">
          <h1>Shawn McCarthy</h1>
          <h2>Vice President, Chief Architect, Global Architecture, Risk and Governance</h2>
          <div className="resume-gallup-strengths">
            <strong>Gallup Strengths:</strong> Strategic • Achiever • Learner • Activator • Relator • Maximizer
          </div>
        </div>
      </div>
      <div className="resume-contact-info">
        <span>📧 smccarthy@iasaoffice.org</span>
        <span>🔗 <a href="https://linkedin.com/in/shawnemccarthy">linkedin.com/in/shawnemccarthy</a></span>
        <span>🌐 <a href="https://chiefarcheologist.com">chiefarcheologist.com</a></span>
        <span>📍 Denver, Colorado</span>
      </div>
    </header>
  );
};

export default ResumeHeader;
