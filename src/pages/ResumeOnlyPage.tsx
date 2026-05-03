import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintableResume from '../components/PrintableResume';
import { createSitePath } from '../config/site';
import './ResumeOnlyPage.css';

const ResumeOnlyPage: React.FC = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Shawn_McCarthy_Resume',
    pageStyle: `
      @page {
        size: A4;
        margin: 0.5in;
      }
      @media print {
        body { -webkit-print-color-adjust: exact; }
      }
    `,
  });

  return (
    <div className="resume-only-page">
      <nav className="print-controls" aria-label="Resume actions">
        <a href={createSitePath('/resume')} className="print-button print-button-muted">
          Full Web Resume
        </a>
        <a
          href={createSitePath('/resume/Shawn_McCarthy_Resume_ATS.pdf')}
          download
          className="print-button print-button-primary"
        >
          Download ATS PDF
        </a>
        <button onClick={handlePrint} className="print-button" type="button">
          Print Web Resume
        </button>
      </nav>
      
      <div ref={printRef}>
        <PrintableResume />
      </div>
    </div>
  );
};

export default ResumeOnlyPage;
