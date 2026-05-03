import React from 'react';
import type { WebResume } from '../../utils/resumeSelectors';

interface ResumeCoreCompetenciesProps {
  competencies: WebResume['competencies'];
}

const ResumeCoreCompetencies: React.FC<ResumeCoreCompetenciesProps> = ({ competencies }) => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">Core Competencies</h3>
      <div className="resume-skills-grid">
        {competencies.map((competency) => (
          <div className="resume-skill-category" key={competency.title}>
            <h4>{competency.title}</h4>
            <p>{competency.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeCoreCompetencies;
