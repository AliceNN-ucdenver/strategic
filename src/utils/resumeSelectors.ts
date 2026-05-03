import resumeData from '../data/resumeData.json';

export type ResumeData = typeof resumeData;

const profile = {
  name: resumeData.name,
  kicker: resumeData.kicker,
  title: resumeData.title,
  location: resumeData.location,
  email: resumeData.email,
  linkedin: resumeData.linkedin,
  website: resumeData.website,
  photo: resumeData.photo,
};

export const getPrintResume = () => ({
  profile,
  summary: resumeData.summary,
  impactHighlights: resumeData.impactHighlights,
  keywords: resumeData.keywords,
  roles: resumeData.roles,
  credentials: resumeData.credentials,
  publications: resumeData.publications,
});

export const getAtsResume = () => ({
  profile,
  summary: resumeData.atsSummary,
  impactHighlights: resumeData.impactHighlights,
  keywords: resumeData.keywords,
  roles: resumeData.roles,
  credentials: resumeData.credentials,
  publications: resumeData.publications,
});

export const getWebResume = () => ({
  profile: {
    ...profile,
    eyebrow: resumeData.web.eyebrow,
    webTitle: resumeData.web.title,
    strengths: resumeData.web.strengths,
  },
  summary: resumeData.web.summary,
  competencies: resumeData.web.competencies,
  education: resumeData.web.education,
  certifications: resumeData.web.certifications,
  roles: resumeData.web.roles,
  publications: resumeData.web.publications,
});

export type PrintResume = ReturnType<typeof getPrintResume>;
export type AtsResume = ReturnType<typeof getAtsResume>;
export type WebResume = ReturnType<typeof getWebResume>;
