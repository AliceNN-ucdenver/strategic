import React from 'react';
import { getWebResume } from '../utils/resumeSelectors';
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
  const resume = getWebResume();

  return (
    <div className="resume-container">
      <ResumeHeader profile={resume.profile} />
      <ResumeSummary summary={resume.summary} />
      <ResumeLeadershipImpact />
      <ResumeCoreCompetencies competencies={resume.competencies} />
      <ResumeProfessionalExperience roles={resume.roles} />
      <ResumeEducation education={resume.education} />
      <ResumeCertifications certifications={resume.certifications} />
      <ResumePublications publications={resume.publications} />
      <ResumeLeadershipBoard />
      <ResumeInclusionLeadership />
      <ResumeKeyAchievements />
      <ResumeFooter />
    </div>
  );
};

export default FullResume;
