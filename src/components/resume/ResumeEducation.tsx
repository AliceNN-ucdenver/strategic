import React from 'react';
import type { WebResume } from '../../utils/resumeSelectors';

interface ResumeEducationProps {
  education: WebResume['education'];
}

const ResumeEducation: React.FC<ResumeEducationProps> = ({ education }) => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">Education & Credentials</h3>
      {education.map((item) => (
        <div className="resume-education-item" key={item.degree}>
          <div className="resume-education-content">
            <h4>{item.degree}</h4>
            <p>{item.institution}</p>
            <span>{item.details}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResumeEducation;
