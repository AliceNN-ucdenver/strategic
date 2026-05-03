import React from 'react';
import './PrintableResume.css';

const impactHighlights = [
  'Lead a 72-person global architecture, application security, and information risk organization supporting approximately 655 applications across North America, Asia, and Europe.',
  'Transformed fragmented architecture governance into a federated, outcome-driven capability embedded in business strategy, risk management, and delivery execution.',
  'Recognized as a Forrester 2025 Enterprise Architecture Awards finalist for Project Atlas, an architect development and practice maturity program.',
  'Evolved portfolio planning from disposition-based application roadmaps to strategic business blueprints across Global Retail, Global Retirement, and Institutional businesses.',
  'Led a 200-person engineering organization at Vantiv across API products, developer portals, prepaid platforms, secure delivery, and PCI/SOX control environments.',
];

const capabilityKeywords = [
  'Enterprise Architecture',
  'AI Governance',
  'Application Security',
  'Information Risk',
  'Technology Strategy',
  'Product Architecture',
  'DevSecOps',
  'Cloud Platforms',
  'Architecture Governance',
  'Platform Modernization',
  'Talent Development',
  'Financial Services',
  'NVIDIA DLI',
  'Agentic AI',
  'Generative Deep Learning',
  'API Product Strategy',
  'Engineering Leadership',
];

const roles = [
  {
    title: 'Vice President, Chief Architect, Global Architecture, Risk and Governance',
    company: 'Manulife Financial Corporation',
    date: 'March 2020 - Present',
    bullets: [
      'Lead enterprise architecture, application security, and information risk capabilities for a global financial services enterprise.',
      'Manage architecture strategy for a multinational portfolio spanning insurance, wealth, retirement, and institutional business lines.',
      'Built a federated architecture operating model connecting business capability, application portfolio, security risk, governance evidence, and delivery execution.',
      'Guide modernization strategy across legacy systems, cloud platforms, APIs, AI delivery, and security-left governance.',
    ],
  },
  {
    title: 'Managing Director, Platform and Application Architecture',
    company: 'Charles Schwab',
    date: 'September 2016 - March 2020',
    bullets: [
      'Led centralized solution architecture for digital experience, trading, mobile, digital messaging, CI/CD, APIs, cloud, and wealth management platforms.',
      'Developed technology strategy blueprints and multi-year roadmaps for a 1,200+ application portfolio.',
      'Established architecture practices for platform strategy, 4+1 architecture views, modernization, and technical debt management.',
      'Created the N.E.R.D. talent development program to accelerate cross-functional engineering and architecture capability.',
    ],
  },
  {
    title: 'Head of Portals and APIs / Director, Application Development',
    company: 'Vantiv',
    date: 'November 2011 - September 2016',
    bullets: [
      'Led a 200-person engineering organization across API solutions, developer portals, prepaid platform delivery, and secure application development.',
      'Advanced API-as-a-product, developer experience, SOA, ESB, and modern .NET architecture patterns for transaction-processing platforms.',
      'Directed platform improvements across automation, test automation, monitoring, logging, security frameworks, encryption, data warehousing, reporting, and responsive web strategy.',
      'Served across application security, agile change, PCI/SOX audit, intern development, and organizational transformation initiatives.',
    ],
  },
  {
    title: 'Graduate Instructor and Advisory Board Member',
    company: 'University of Colorado Denver',
    date: 'January 2015 - Present',
    bullets: [
      'Teach graduate-level technology courses covering generative AI, LLM applications, cloud deployment, DevSecOps, APIs, and test automation.',
      'State-approved continuing education provider for Generative AI Deep Learning Ethics for licensed insurance professionals.',
    ],
  },
];

const selectedPublications = [
  'From Gatekeepers to Launchpads: How Autonomous Governance Transforms Enterprise Architecture - Metis / IASA Global, 2026',
  'The Engineering Imperative: Why AI Will Not Replace Your Best Developers - CIO.com, 2025',
  'From Fixed Frameworks to Strategic Enablers: Architecting AI Transformation - CIO.com, 2025',
  'Cross-Document Emotion Consistency Framework for Financial Disclosure Risk Screening - Journal of Risk and Financial Management, 2026',
];

const PrintableResume: React.FC = () => {
  return (
    <article className="resume-document" aria-label="Shawn McCarthy resume">
      <header className="resume-hero">
        <div className="resume-photo-wrap">
          <img src="/images/Engineering_Crop.jpg" alt="Shawn McCarthy" className="resume-photo" />
        </div>
        <div className="resume-hero-main">
          <p className="resume-kicker">Chief Archeologist | Enterprise Architecture Executive</p>
          <h1>Shawn McCarthy</h1>
          <p className="resume-title">
            Vice President, Chief Architect, Global Architecture, Risk and Governance | PhD Candidate, December 2026
          </p>
          <p className="resume-summary-text">
            Enterprise architecture and AI governance leader with 20+ years modernizing complex financial services
            technology portfolios. Known for turning architectural evidence into strategy, product operating models,
            security-left governance, and measurable executive decision systems.
          </p>
        </div>
      </header>

      <section className="resume-contact" aria-label="Contact information">
        <span>Denver, Colorado</span>
        <a href="mailto:smccarthy@iasaoffice.org">smccarthy@iasaoffice.org</a>
        <a href="https://linkedin.com/in/shawnemccarthy">linkedin.com/in/shawnemccarthy</a>
        <a href="https://chiefarcheologist.com">chiefarcheologist.com</a>
      </section>

      <main className="resume-grid">
        <div className="resume-main-column">
          <section className="resume-section">
            <h2>Selected Leadership Impact</h2>
            <ul className="resume-bullet-list">
              {impactHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="resume-section">
            <h2>Professional Experience</h2>
            {roles.map((role) => (
              <div className="resume-role" key={`${role.company}-${role.title}`}>
                <div className="resume-role-header">
                  <div>
                    <h3>{role.title}</h3>
                    <p>{role.company}</p>
                  </div>
                  <span>{role.date}</span>
                </div>
                <ul className="resume-bullet-list">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        <aside className="resume-side-column">
          <section className="resume-section resume-keywords">
            <h2>Core Keywords</h2>
            <div>
              {capabilityKeywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>Credentials</h2>
            <ul className="resume-compact-list">
              <li>PhD Candidate, Computer Science and Information Systems, expected December 2026</li>
              <li>University of Colorado Denver, Graduate Instructor</li>
              <li>Platinum NVIDIA Deep Learning Institute Instructor</li>
              <li>NVIDIA Certified Professional: Agentic AI</li>
              <li>Certified across the NVIDIA generative deep learning suite</li>
              <li>Chief Architect Forum, Board Member</li>
            </ul>
          </section>

          <section className="resume-section">
            <h2>Selected Publications</h2>
            <ul className="resume-compact-list">
              {selectedPublications.map((publication) => (
                <li key={publication}>{publication}</li>
              ))}
            </ul>
          </section>
        </aside>
      </main>
    </article>
  );
};

export default PrintableResume;
