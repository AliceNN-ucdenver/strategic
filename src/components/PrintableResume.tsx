import React from 'react';
import './PrintableResume.css';
import {
  ResumeHeader,
  ResumeSummary,
  ResumeLeadershipImpact,
  ResumeCoreCompetencies,
  ResumeProfessionalExperience,
  ResumeEducation,
  ResumeCertifications,
  ResumePublications,
  ResumeLeadershipBoard,
  ResumeInclusionLeadership,
  ResumeKeyAchievements,
  ResumeFooter
} from './resume';

const PrintableResume: React.FC = () => {
  return (
    <div className="resume-container">
      <ResumeHeader />
      <ResumeSummary />
      <ResumeLeadershipImpact />
      <ResumeCoreCompetencies />
      <ResumeProfessionalExperience />
      <ResumeEducation />
      <ResumeCertifications />
      <ResumePublications />
      <ResumeLeadershipBoard />
      <ResumeInclusionLeadership />
      <ResumeKeyAchievements />
      <ResumeFooter />
    </div>
  );
};

export default PrintableResume;