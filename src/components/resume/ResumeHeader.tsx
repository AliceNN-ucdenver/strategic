import React from 'react';
import type { WebResume } from '../../utils/resumeSelectors';

interface ResumeHeaderProps {
  profile: WebResume['profile'];
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({ profile }) => {
  return (
    <header className="resume-header">
      <div className="resume-profile-section">
        <img src={profile.photo} alt={profile.name} className="resume-profile-photo" />
        <div className="resume-header-content">
          <div className="resume-eyebrow">{profile.eyebrow}</div>
          <h1>{profile.name}</h1>
          <h2>{profile.webTitle}</h2>
          <div className="resume-gallup-strengths">
            <strong>Gallup Strengths:</strong> {profile.strengths.join(' • ')}
          </div>
        </div>
      </div>
      <div className="resume-contact-info">
        <span><strong>Email</strong> {profile.email}</span>
        <span><strong>LinkedIn</strong> <a href={`https://${profile.linkedin}`}>{profile.linkedin}</a></span>
        <span><strong>Web</strong> <a href={`https://${profile.website}`}>{profile.website}</a></span>
        <span><strong>Location</strong> {profile.location}</span>
      </div>
    </header>
  );
};

export default ResumeHeader;
