import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintableResume from '../components/PrintableResume';
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
      <div className="print-controls">
        <button onClick={handlePrint} className="print-button">
          🖨️ Print / Save as PDF
        </button>
      </div>
      
      <div ref={printRef}>
        <PrintableResume />
      </div>
    </div>
  );
};

export default ResumeOnlyPage;
