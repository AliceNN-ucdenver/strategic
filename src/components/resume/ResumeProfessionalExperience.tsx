import React from 'react';
import type { WebResume } from '../../utils/resumeSelectors';

interface ResumeProfessionalExperienceProps {
  roles: WebResume['roles'];
}

const ResumeProfessionalExperience: React.FC<ResumeProfessionalExperienceProps> = ({ roles }) => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">Professional Experience</h3>
      {roles.map((role) => (
        <div className="resume-experience-item" key={`${role.company}-${role.title}`}>
          <div className="resume-company-header">
            <div className="resume-company-logo">{role.logo}</div>
            <div>
              <div className="resume-job-title">{role.title}</div>
              <div className="resume-company-name">{role.company}</div>
            </div>
            <div className="resume-date-location">{role.date}</div>
          </div>
          <div className="resume-job-description">
            {role.highlight && (
              <div className="resume-key-achievement">
                <strong>{role.highlight.label}:</strong> {role.highlight.text}
              </div>
            )}
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResumeProfessionalExperience;
