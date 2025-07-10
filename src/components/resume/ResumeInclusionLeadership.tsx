import React from 'react';

const ResumeInclusionLeadership: React.FC = () => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">🤝 Inclusion Leadership</h3>
      
      <div className="resume-experience-item">
        <div className="resume-company-header">
          <div className="resume-company-logo">WAI</div>
          <div>
            <div className="resume-job-title">Mentor</div>
            <div className="resume-company-name">Women in AI - Canada</div>
          </div>
          <div className="resume-date-location">Ongoing</div>
        </div>
        <div className="resume-job-description">
          <div className="resume-key-achievement">
            <strong>AI Career Mentorship:</strong> Active mentor in Women in AI Canada program, providing guidance and support to women pursuing careers in artificial intelligence and machine learning.
          </div>
          <ul>
            <li>Mentor women professionals transitioning into <strong>AI and machine learning careers</strong></li>
            <li>Provide technical guidance on <strong>AI technologies, career development, and industry navigation</strong></li>
            <li>Support <strong>inclusive AI community building</strong> across Canadian technology sector</li>
          </ul>
        </div>
      </div>
      
      <div className="resume-experience-item">
        <div className="resume-company-header">
          <div className="resume-company-logo">A.B</div>
          <div>
            <div className="resume-job-title">Artificial Intelligence Committee Member</div>
            <div className="resume-company-name">AnitaB.org</div>
          </div>
          <div className="resume-date-location">May 2022 - May 2024</div>
        </div>
        <div className="resume-job-description">
          <div className="resume-key-achievement">
            <strong>AI Diversity & Inclusion:</strong> Committee member focused on nurturing more women to pursue AI careers with mission to build inclusive and responsible AI products.
          </div>
          <ul>
            <li>Developed initiatives to increase <strong>women's participation in AI</strong> across academic and industry settings</li>
            <li>Championed <strong>responsible AI development</strong> and ethical AI practices in technology organizations</li>
            <li>Mentored women pursuing careers in <strong>artificial intelligence and machine learning</strong></li>
          </ul>
        </div>
      </div>

      <div className="resume-experience-item">
        <div className="resume-company-header">
          <div className="resume-company-logo">A.B</div>
          <div>
            <div className="resume-job-title">Co-Chair, Mentoring Committee</div>
            <div className="resume-company-name">AnitaB.org</div>
          </div>
          <div className="resume-date-location">October 2019 - January 2022</div>
        </div>
        <div className="resume-job-description">
          <div className="resume-key-achievement">
            <strong>Program Leadership:</strong> Co-chaired mentoring platform launch, recruited and trained mentors, built sustainable mentorship programs for women in technology.
          </div>
          <ul>
            <li>Successfully launched <strong>mentoring platform</strong> connecting women in technology with industry leaders</li>
            <li>Recruited and trained <strong>hundreds of mentors</strong> across technology disciplines</li>
            <li>Built sustainable program infrastructure supporting <strong>women's career advancement</strong> in computing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResumeInclusionLeadership;
