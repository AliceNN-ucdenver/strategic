import React from 'react';
import type { WebResume } from '../../utils/resumeSelectors';

interface ResumeCertificationsProps {
  certifications: WebResume['certifications'];
}

const ResumeCertifications: React.FC<ResumeCertificationsProps> = ({ certifications }) => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">NVIDIA & AI Certifications</h3>
      <div className="resume-ambassador-description">
        <p>
          <strong>
            <a href={certifications.intro.url} target="_blank" rel="noopener noreferrer">
              {certifications.intro.label}
            </a>:
          </strong>{' '}
          {certifications.intro.description}
        </p>
      </div>
      {certifications.categories.map((category) => (
        <div className="resume-cert-category" key={category.title}>
          <h4 className="resume-cert-category-title">{category.title}</h4>
          <div className="resume-certifications-grid">
            {category.items.map((item) => (
              <div className="resume-cert-item" key={`${category.title}-${item.badge}-${item.label}`}>
                <span className="resume-nvidia-highlight">{item.badge}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResumeCertifications;
