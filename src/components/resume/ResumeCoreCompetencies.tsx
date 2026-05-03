import React from 'react';

const ResumeCoreCompetencies: React.FC = () => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">Core Competencies</h3>
      <div className="resume-skills-grid">
        <div className="resume-skill-category">
          <h4>Enterprise Architecture</h4>
          <p>Solution Architecture, API Strategy, System Discovery & Cataloging, Portfolio Health Management, Technology Enablement Platforms</p>
        </div>
        <div className="resume-skill-category">
          <h4>Risk & Governance</h4>
          <p>DevSecOps Integration, Application Security, Regulatory Compliance, End-to-End Testing, Risk Management Transformation</p>
        </div>
        <div className="resume-skill-category">
          <h4>AI & Innovation</h4>
          <p>Large Language Models, Generative AI, Predictive AI, AI Ethics, Neural Networks, Financial AI Research</p>
        </div>
        <div className="resume-skill-category">
          <h4>Thought Leadership</h4>
          <p>Industry Publications (InfoWorld, CIO.com), IASA Board Leadership, Enterprise Transformation Strategy, Research & Innovation</p>
        </div>
        <div className="resume-skill-category">
          <h4>Education & Mentorship</h4>
          <p>Graduate Instruction, Curriculum Development, Professional Mentorship, Student Leadership, Inclusion Advocacy</p>
        </div>
        <div className="resume-skill-category">
          <h4>Global Operations</h4>
          <p>International Team Leadership, Cross-Cultural Management, Regulatory Compliance, Digital Transformation</p>
        </div>
      </div>
    </section>
  );
};

export default ResumeCoreCompetencies;
