import React from 'react';
import { getPrintResume } from '../utils/resumeSelectors';
import './PrintableResume.css';

const PrintableResume: React.FC = () => {
  const resume = getPrintResume();
  const { profile } = resume;

  return (
    <article className="resume-document" aria-label={`${profile.name} resume`}>
      <header className="resume-hero">
        <div className="resume-photo-wrap">
          <img src={profile.photo} alt={profile.name} className="resume-photo" />
        </div>
        <div className="resume-hero-main">
          <p className="resume-kicker">{profile.kicker}</p>
          <h1>{profile.name}</h1>
          <p className="resume-title">{profile.title}</p>
          <p className="resume-summary-text">{resume.summary}</p>
        </div>
      </header>

      <section className="resume-contact" aria-label="Contact information">
        <span>{profile.location}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={`https://${profile.linkedin}`}>{profile.linkedin}</a>
        <a href={`https://${profile.website}`}>{profile.website}</a>
      </section>

      <main className="resume-grid">
        <div className="resume-main-column">
          <section className="resume-section">
            <h2>Selected Leadership Impact</h2>
            <ul className="resume-bullet-list">
              {resume.impactHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="resume-section">
            <h2>Professional Experience</h2>
            {resume.roles.map((role) => (
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
              {resume.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2>Credentials</h2>
            <ul className="resume-compact-list">
              {resume.credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </section>

          <section className="resume-section">
            <h2>Selected Publications</h2>
            <ul className="resume-compact-list">
              {resume.publications.map((publication) => (
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
