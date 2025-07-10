import React from 'react';
import './PrintableResume.css';
import chiefArchitectImage from '../assets/chief_architect.png';

const PrintableResume: React.FC = () => {
  return (
    <div className="resume-container">
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
          <span>📧 shawn@mccarthysoftware.com</span>
          <span>🔗 <a href="https://linkedin.com/in/shawnemccarthy">linkedin.com/in/shawnemccarthy</a></span>
          <span>🌐 <a href="https://chiefarcheologist.com">chiefarcheologist.com</a></span>
          <span>📍 Denver, Colorado</span>
        </div>
      </header>

      <section className="resume-summary">
        <strong>Distinguished enterprise architecture executive</strong> with 25+ years transforming complex global organizations through innovative technology strategies. Currently serving as Vice President at Manulife, managing a comprehensive architecture practice that has evolved from a fragmented, ad-hoc function into a federated, outcome-driven capability deeply embedded in business strategy and delivery. Recognized thought leader with major publications in InfoWorld and CIO.com, passionate about advancing AI technologies and enterprise transformation while pursuing PhD research in AI-driven financial market analysis.
      </section>

      <section className="resume-section">
        <h3 className="resume-section-title">🎯 Leadership Impact & Domain Transformation</h3>
        <div className="resume-team-stats">
          <div className="resume-stat-box">
            <span className="resume-stat-number">20</span>
            <div className="resume-stat-label">Enterprise Architects</div>
          </div>
          <div className="resume-stat-box">
            <span className="resume-stat-number">12</span>
            <div className="resume-stat-label">Application Security & Governance</div>
          </div>
          <div className="resume-stat-box">
            <span className="resume-stat-number">40</span>
            <div className="resume-stat-label">Information Risk Professionals</div>
          </div>
        </div>
        
        <div className="resume-key-achievement">
          <strong>Enterprise Architecture Transformation:</strong> Led comprehensive modernization program delivering measurable business outcomes across global operations.
        </div>
        
        <div className="resume-skills-grid">
          <div className="resume-skill-category">
            <h4>🏗️ Strategic Architecture</h4>
            <p><strong>300 applications</strong> modernized to AKS across 7 regions • <strong>40% cost savings</strong> and <strong>30% performance gains</strong> in DataLake strategy • <strong>75% cloud adoption</strong> rate achieved • <strong>10% legacy applications</strong> successfully retired • <a href="https://chiefarcheologist.com/framework">View Framework</a></p>
          </div>
          <div className="resume-skill-category">
            <h4>📊 Portfolio Health Management</h4>
            <p>Implemented strategic <strong>product approach to architecture</strong> improving Business Value Delivery, Technical Foundation, DevSecOps Maturity, and Engineering Community effectiveness • <a href="https://chiefarcheologist.com/product">View Product Approach</a></p>
          </div>
          <div className="resume-skill-category">
            <h4>🛡️ Information Risk Excellence</h4>
            <p><strong>95% achievement</strong> of 5-year Risk KRI goals • <strong>Under 5% CAP slips</strong> maintained • <strong>Satisfactory audits</strong> achieved for 2 consecutive years across internal and external assessments</p>
          </div>
          <div className="resume-skill-category">
            <h4>🔒 Application Security Transformation</h4>
            <p><strong>Zero medium+ vulnerabilities</strong> across all code repositories • Comprehensive security scanning with <strong>hard gating</strong> across ethical hacking, pen testing, SAST, DAST, and secrets • <strong>End-to-end traceability</strong> from code repository to business unit to deployed asset</p>
          </div>
          <div className="resume-skill-category">
            <h4>⚡ Risk Prioritization Framework</h4>
            <p>Developed sophisticated <strong>risk prioritization methodology</strong> enabling true risk-based decision making across enterprise portfolio with measurable remediation outcomes</p>
          </div>
          <div className="resume-skill-category">
            <h4>🎯 Integrated Transformation</h4>
            <p><strong>Federated capability model</strong> spanning Architecture, Information Risk, and Application Security creating unified, outcome-driven practice deeply embedded in business strategy</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="resume-section-title">🚀 Core Competencies</h3>
        <div className="resume-skills-grid">
          <div className="resume-skill-category">
            <h4>🏗️ Enterprise Architecture</h4>
            <p>Solution Architecture, API Strategy, System Discovery & Cataloging, Portfolio Health Management, Technology Enablement Platforms</p>
          </div>
          <div className="resume-skill-category">
            <h4>⚡ Risk & Governance</h4>
            <p>DevSecOps Integration, Application Security, Regulatory Compliance, End-to-End Testing, Risk Management Transformation</p>
          </div>
          <div className="resume-skill-category">
            <h4>🤖 AI & Innovation</h4>
            <p>Large Language Models, Generative AI, Predictive AI, AI Ethics, Neural Networks, Financial AI Research</p>
          </div>
          <div className="resume-skill-category">
            <h4>📊 Thought Leadership</h4>
            <p>Industry Publications (InfoWorld, CIO.com), IASA Board Leadership, Enterprise Transformation Strategy, Research & Innovation</p>
          </div>
          <div className="resume-skill-category">
            <h4>👨‍🏫 Education & Mentorship</h4>
            <p>Graduate Instruction, Curriculum Development, Professional Mentorship, Student Leadership, Inclusion Advocacy</p>
          </div>
          <div className="resume-skill-category">
            <h4>🌐 Global Operations</h4>
            <p>International Team Leadership, Cross-Cultural Management, Regulatory Compliance, Digital Transformation</p>
          </div>
        </div>
      </section>

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
            <ul>
              <li>Designed and delivered <strong>Generative AI course</strong> covering LLMs, transformer architectures, and AI ethics</li>
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
            <ul>
              <li>Led platform architecture for <strong>1,200+ applications</strong> serving millions of customers</li>
              <li>Pioneered cloud-native, mobile-first, and <strong>big data analytics</strong> strategies</li>
              <li>Implemented AI-driven digital transformation across enterprise technology stack</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="resume-section-title">🎓 Education & Credentials</h3>
        <div className="resume-education-item">
          <div className="resume-education-content">
            <h4>PhD Candidate, Computer Science and Information Systems</h4>
            <p>University of Colorado Denver</p>
            <span>Expected December 2026 | <strong>Thesis:</strong> "Fin-ALICE Framework" - Integrating causal inference, emotional sentiment analysis, and dynamic co-occurrence networks for enhanced financial forecasting</span>
          </div>
        </div>
        <div className="resume-education-item">
          <div className="resume-education-content">
            <h4>M.S., Computer Science and Engineering</h4>
            <p>University of Colorado Denver</p>
            <span>2004 - 2009 | GPA: 4.0 | <strong>AI Focus:</strong> Intelligent Agents, Neural Networks, Linguistic Geometry, Expert Systems</span>
          </div>
        </div>
        <div className="resume-education-item">
          <div className="resume-education-content">
            <h4>B.S., Computer Science and Engineering</h4>
            <p>University of Colorado Denver</p>
            <span>1999 - 2003 | GPA: 3.99 | Minor in Mathematics | Golden Key National Honor Society</span>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="resume-section-title">📚 Research Publications & Patents</h3>
        
        <div className="resume-publication-item">
          <div className="resume-publication-title">From Fixed Frameworks to Strategic Enablers: Architecting AI Transformation</div>
          <div className="resume-publication-details">CIO.com | July 2025 (forthcoming) | IASA Chief Architect Forum Partnership</div>
          <div className="resume-publication-description">
            Explores how traditional architectural approaches have become unsustainable for AI-driven enterprises. Argues for strategic enablement throughout the AI transformation lifecycle.
          </div>
        </div>
        
        <div className="resume-publication-item">
          <div className="resume-publication-title">Security is dead: Long live risk management</div>
          <div className="resume-publication-details">CIO.com | March 2025 | <a href="https://www.cio.com/article/3846774/security-is-dead-long-live-risk-management.html">Read Full Article</a></div>
          <div className="resume-publication-description">
            A CIO's guide to reimagining risk management in modern software development. Explores transformation from reactive security gatekeeping to proactive risk enablement.
          </div>
        </div>
        
        <div className="resume-publication-item">
          <div className="resume-publication-title">How to leverage APIs for IT-enabled information capability</div>
          <div className="resume-publication-details">InfoWorld | May 2025 | <a href="https://chiefarcheologist.com/resources#api-capability">Read Full Article</a></div>
          <div className="resume-publication-description">
            Explores how APIs can transform information architecture into strategic business capability through real-time data access and integration.
          </div>
        </div>
        
        <div className="resume-publication-item">
          <div className="resume-publication-title">From project to product: Architecting the future of enterprise technology</div>
          <div className="resume-publication-details">CIO.com | April 2025 | <a href="https://chiefarcheologist.com/resources#project-to-product">Read Full Article</a></div>
          <div className="resume-publication-description">
            Discusses transitioning from project-based thinking to product-centric architecture for continuous innovation and sustainable growth.
          </div>
        </div>

        <div className="resume-publication-item">
          <div className="resume-publication-title">Fin-ALICE: Artificial Linguistic Intelligence Causal Econometrics</div>
          <div className="resume-publication-details">Journal of Risk and Financial Management (JRFM) | 2024 | <a href="https://chiefarcheologist.com/resources#fin-alice">Read Full Article</a></div>
          <div className="resume-publication-description">
            Novel framework for financial forecasting integrating emotional sentiment analysis, supply chain dynamics, and advanced machine learning techniques.
          </div>
        </div>
        
        <div className="resume-publication-item">
          <div className="resume-publication-title">The Emotion Magnitude Effect: Navigating Market Dynamics Amidst Supply Chain Events</div>
          <div className="resume-publication-details">Journal of Risk and Financial Management (JRFM) | 2023 | <a href="https://chiefarcheologist.com/resources#emotion-magnitude">Read Full Article</a></div>
          <div className="resume-publication-description">
            Presents novel "emotion magnitude" metric capturing emotional undercurrents in financial markets during 2019-2021 using knowledge graphs and advanced NLP techniques.
          </div>
        </div>
        
        <div className="resume-publication-item">
          <div className="resume-publication-title">Enhancing Financial Market Analysis with Emotion Corpora and News Co-Occurrence Networks</div>
          <div className="resume-publication-details">Journal of Risk and Financial Management (JRFM) | 2022 | <a href="https://chiefarcheologist.com/resources#emotion-corpora">Read Full Article</a></div>
          <div className="resume-publication-description">
            Applied NLP to analyze 500,000+ financial news articles, identifying economic activity patterns and inter-company relationships using emotion corpora and advanced AI techniques.
          </div>
        </div>

        <div className="resume-publication-item">
          <div className="resume-publication-title">Patent: System And Methods For Transaction-based Process Management</div>
          <div className="resume-publication-details">US Patent #10,970,112 B2 | <a href="https://patents.google.com/patent/US10970112B2/en">View Patent</a></div>
          <div className="resume-publication-description">
            Innovative system design for automated transaction processing and workflow management in enterprise environments.
          </div>
        </div>
      </section>

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
            <ul>
              <li>Mentor women professionals transitioning into <strong>AI and machine learning careers</strong></li>
              <li>Provide technical guidance on AI technologies, career development, and industry navigation</li>
            </ul>
          </div>
        </div>
        
        <div className="resume-experience-item">
          <div className="resume-company-header">
            <div className="resume-company-logo">A.B</div>
            <div>
              <div className="resume-job-title">AI Committee Member & Former Co-Chair</div>
              <div className="resume-company-name">AnitaB.org</div>
            </div>
            <div className="resume-date-location">2019 - 2024</div>
          </div>
          <div className="resume-job-description">
            <ul>
              <li>Developed initiatives to increase <strong>women's participation in AI</strong> across academic and industry settings</li>
              <li>Co-chaired mentoring platform launch, recruiting and training hundreds of mentors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3 className="resume-section-title">🎯 Key Achievements</h3>
        <div className="resume-key-achievement">
          <strong>Enterprise Transformation:</strong> Led comprehensive transformation across Architecture, Information Risk, and Application Security domains, achieving measurable outcomes including 300 apps modernized, 95% Risk KRI achievement, and zero medium+ vulnerabilities enterprise-wide
        </div>
        <div className="resume-key-achievement">
          <strong>Thought Leadership:</strong> Published enterprise architecture expert with major articles in InfoWorld and CIO.com, advancing industry best practices through innovative product-centric architecture approaches
        </div>
        <div className="resume-key-achievement">
          <strong>Global Scale Impact:</strong> Delivered 40% cost savings and 30% performance gains while managing ~655 applications across 7 regions and achieving 75% cloud adoption rate
        </div>
        <div className="resume-key-achievement">
          <strong>Risk & Security Excellence:</strong> Achieved 5-year Risk KRI goals at 95% success rate with under 5% CAP slips while implementing comprehensive security scanning and risk prioritization frameworks
        </div>
        <div className="resume-key-achievement">
          <strong>Academic Excellence:</strong> Outstanding academic record (4.0 MS GPA, 3.99 BS GPA) with ongoing PhD research in AI applications and published financial AI research
        </div>
        <div className="resume-key-achievement">
          <strong>Federated Leadership Model:</strong> Successfully evolved fragmented practices into unified, outcome-driven capability spanning 72 professionals across three critical domains
        </div>
      </section>

      <footer className="resume-footer">
        <p>Ready to apply the Chief Archaeologist framework to your enterprise architecture challenges • Passionate about transforming complex organizations through innovative technology strategies • <a href="https://chiefarcheologist.com/framework">Explore the Framework</a></p>
      </footer>
    </div>
  );
};

export default PrintableResume;