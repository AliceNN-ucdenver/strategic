import React from 'react';
import PageLayout from '../components/PageLayout';
import FullResume from '../components/FullResume';
import { createSitePath } from '../config/site';
import { useScrollToTop } from '../hooks/usePageLifecycle';
import './ResumePage.css';

const ResumePage: React.FC = () => {
  useScrollToTop();

  return (
    <PageLayout className="site-page resume-page">
      <section className="resume-web-hero">
        <div className="resume-web-hero__inner">
          <div>
            <span className="eyebrow">Full Web CV</span>
            <h1>Architecture, AI governance, and engineering leadership.</h1>
            <p>
              A fuller career narrative for the Chief Archeologist work: global architecture transformation,
              platform modernization, research, teaching, and enterprise AI governance.
            </p>
          </div>
          <div className="resume-web-actions" aria-label="Resume actions">
            <a href={createSitePath('/resume-print')} className="button-primary">
              Submission Version
            </a>
          </div>
        </div>
      </section>
      <section className="resume-web-body" aria-label="Full resume">
        <FullResume />
      </section>
    </PageLayout>
  );
};

export default ResumePage;
