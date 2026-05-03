import React from 'react';
import type { WebResume } from '../../utils/resumeSelectors';

interface ResumeSummaryProps {
  summary: WebResume['summary'];
}

const ResumeSummary: React.FC<ResumeSummaryProps> = ({ summary }) => {
  return (
    <section className="resume-summary">
      <strong>{summary.lead}</strong> {summary.text}
    </section>
  );
};

export default ResumeSummary;
