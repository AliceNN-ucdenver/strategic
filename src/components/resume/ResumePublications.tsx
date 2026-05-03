import React from 'react';
import type { WebResume } from '../../utils/resumeSelectors';

interface ResumePublicationsProps {
  publications: WebResume['publications'];
}

const ResumePublications: React.FC<ResumePublicationsProps> = ({ publications }) => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">Research Publications & Patents</h3>

      {publications.map((publication) => (
        <div className="resume-publication-item" key={publication.title}>
          <div className="resume-publication-title">{publication.title}</div>
          <div className="resume-publication-details">
            {publication.details} | <a href={publication.url}>Read Full Article</a>
          </div>
          <div className="resume-publication-description">
            {publication.description}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResumePublications;
