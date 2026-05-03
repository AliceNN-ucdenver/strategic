import React from 'react';
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
import './FullResume.css';

const FullResume: React.FC = () => {
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

export default FullResume;
