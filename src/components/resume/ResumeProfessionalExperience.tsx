import React from 'react';

const ResumeProfessionalExperience: React.FC = () => {
  return (
    <section className="resume-section">
      <h3 className="resume-section-title">🏆 Professional Experience</h3>
      
      <div className="resume-experience-item">
        <div className="resume-company-header">
          <div className="resume-company-logo">MFC</div>
          <div>
            <div className="resume-job-title">Vice President, Chief Architect, Global Architecture, Risk and Governance</div>
            <div className="resume-company-name">Manulife Financial Corporation</div>
          </div>
          <div className="resume-date-location">March 2020 - Present</div>
        </div>
        <div className="resume-job-description">
          <div className="resume-key-achievement">
            <strong>Enterprise Leadership:</strong> Leading 72-person global architecture practice managing ~655 applications across North America, Asia, and Europe for Canada's largest insurance company (28th largest fund manager globally).
          </div>
          <ul>
            <li>Transformed fragmented architecture function into <strong>federated, outcome-driven capability</strong> deeply embedded in business strategy</li>
            <li><strong>Forrester 2025 EA Awards Finalist (North America):</strong> Recognized for pioneering Project Atlas—an industry-leading program transforming architect development and practice maturity</li>
            <li>Evolved from <strong>Disposition-based Application Roadmaps to Strategic Business Blueprints</strong> across Global Retail, Global Retirement, and Institutional lines of business</li>
            <li>Lead team of <strong>20 enterprise architects, 12 application security professionals, and 40 information risk specialists</strong></li>
            <li>Manage technology strategy for world's 28th largest fund manager with strong presence in Canada, Asia, and United States</li>
            <li>Drive solution architecture and organizational development across multinational enterprise operations</li>
            <li>Champion regulatory compliance and risk management across diverse international markets</li>
          </ul>
        </div>
      </div>

      <div className="resume-experience-item">
        <div className="resume-company-header">
          <div className="resume-company-logo">UCD</div>
          <div>
            <div className="resume-job-title">Graduate Instructor & Advisory Board Member</div>
            <div className="resume-company-name">University of Colorado Denver</div>
          </div>
          <div className="resume-date-location">January 2015 - Present</div>
        </div>
        <div className="resume-job-description">
          <div className="resume-key-achievement">
            <strong>AI Education Pioneer:</strong> State-approved continuing education provider specializing in AI ethics for professional development in the financial services industry.
          </div>
          <ul>
            <li>Designed and delivered <strong>Generative AI course</strong> covering LLMs, transformer architectures, and AI ethics</li>
            <li><strong>Colorado State-Approved CE Educator:</strong> "Generative AI Deep Learning Ethics" presentation approved for 1 CE credit for licensed insurance producers - official recognition for specialized expertise in AI + Ethics + Insurance</li>
            <li>Instructor for <strong>Web API Technologies</strong> with focus on cloud deployment, DevSecOps, and test automation</li>
            <li>Faculty advisor for <strong>AI Student Association</strong> - fostering next-generation AI talent</li>
            <li>Advisory board leadership: expand community presence, develop industry partnerships</li>
          </ul>
        </div>
      </div>

      <div className="resume-experience-item">
        <div className="resume-company-header">
          <div className="resume-company-logo">AI4F</div>
          <div>
            <div className="resume-job-title">Artificial Intelligence Researcher</div>
            <div className="resume-company-name">AI4Finance-Foundation</div>
          </div>
          <div className="resume-date-location">July 2023 - Present</div>
        </div>
        <div className="resume-job-description">
          <ul>
            <li>Contribute to open-source AI research focused on <strong>large-scale financial AI systems</strong></li>
            <li>Develop novel frameworks integrating <strong>emotional sentiment analysis</strong> with temporal convolutional networks</li>
          </ul>
        </div>
      </div>

      <div className="resume-experience-item">
        <div className="resume-company-header">
          <div className="resume-company-logo">CS</div>
          <div>
            <div className="resume-job-title">Managing Director - Platform and Application Architecture</div>
            <div className="resume-company-name">Charles Schwab</div>
          </div>
          <div className="resume-date-location">September 2016 - March 2020</div>
        </div>
        <div className="resume-job-description">
          <div className="resume-key-achievement">
            <strong>Architecture Practice & Talent Development:</strong> Established centralized application architecture practice for 1,200+ applications and pioneered N.E.R.D. program to accelerate next-generation engineering talent development.
          </div>
          <ul>
            <li>Led centralized solution architecture team focused on <strong>digital experience architecture</strong> (Schwab.com, Mobile, Trading, Digital Messaging, CI/CD, Wealth Management)</li>
            <li>Developed comprehensive <strong>Technology Strategy Blueprints</strong> providing 3-5 year technical roadmaps with qualitative/quantitative assessments</li>
            <li>Pioneered <strong>Platform Technology Strategy</strong> across mobile-first, Web APIs, and cloud (IaaS, PaaS, SaaS, CaaS) initiatives</li>
            <li>Implemented <strong>4+1 architectural view models</strong> and tech debt management across enterprise technology stack</li>
            <li>Created <strong>N.E.R.D. (New Employee Recruitment and Development)</strong> program - accelerated professional development with cross-functional skills and future technologies</li>
            <li>Managed application modernization strategy aligning technology capabilities with business objectives across client experience and wealth management</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResumeProfessionalExperience;
