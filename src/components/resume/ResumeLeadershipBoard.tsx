import React from 'react';
import { getWebResume } from '../../utils/resumeSelectors';

const ResumeLeadershipBoard: React.FC = () => {
  const { boards } = getWebResume();

  return (
    <section className="resume-section">
      <h3 className="resume-section-title">Leadership &amp; Board Positions</h3>
      <div className="resume-two-column">
        {boards.map((board) => (
          <div key={`${board.organization}-${board.role}`}>
            <div className="resume-experience-item">
              <div className="resume-job-title">{board.role}</div>
              <div className="resume-company-name">{board.organization}</div>
              <div className="resume-date-location">{board.date}</div>
              <div className="resume-job-description">
                <p>{board.description}</p>
                {'priorRole' in board && board.priorRole ? (
                  <p className="resume-board-prior">Previously: {board.priorRole}</p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeLeadershipBoard;
