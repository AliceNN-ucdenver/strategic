import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, '..');
const dataPath = resolve(projectRoot, 'src/data/resumeData.json');
const markdownPath = resolve(projectRoot, 'public/resume/Shawn_McCarthy_Resume_ATS.md');
const pdfPath = resolve(projectRoot, 'public/resume/Shawn_McCarthy_Resume_ATS.pdf');

const resumeData = JSON.parse(readFileSync(dataPath, 'utf8'));

const markdownList = (items) => items.map((item) => `- ${item}`).join('\n');

const roleSection = (role) => [
  `### ${role.title}`,
  '',
  `${role.company} | ${role.date}`,
  '',
  markdownList(role.bullets),
].join('\n');

const markdown = `---
title: ${resumeData.name} Resume
author: ${resumeData.name}
geometry: margin=0.38in
fontsize: 9pt
mainfont: Helvetica
linestretch: 0.92
header-includes:
  - \\usepackage{enumitem}
  - \\setlist{nosep,leftmargin=*}
  - \\usepackage{titlesec}
  - \\titlespacing*{\\section}{0pt}{0.45em}{0.2em}
  - \\titlespacing*{\\subsection}{0pt}{0.25em}{0.1em}
  - \\AtBeginDocument{\\fontsize{8.8}{10}\\selectfont}
---

# ${resumeData.name}

${resumeData.title}

${resumeData.location} | ${resumeData.email} | ${resumeData.linkedin} | ${resumeData.website}

## Professional Summary

${resumeData.atsSummary ?? resumeData.summary}

## Core Competencies

${resumeData.keywords.join('; ')}.

## Leadership Impact

${markdownList(resumeData.impactHighlights)}

## Professional Experience

${resumeData.roles.map(roleSection).join('\n\n')}

## Education and Credentials

${resumeData.credentials.join('. ')}.

## Selected Publications and Research

${resumeData.publications.join('. ')}.
`;

mkdirSync(dirname(markdownPath), { recursive: true });
writeFileSync(markdownPath, `${markdown.trim()}\n`, 'utf8');

try {
  execFileSync('pandoc', [
    markdownPath,
    '-o',
    pdfPath,
    '--pdf-engine=xelatex',
  ], {
    cwd: projectRoot,
    stdio: 'inherit',
  });
} catch (error) {
  console.warn('ATS markdown generated, but PDF generation failed. Install pandoc/xelatex to rebuild the PDF.');
  process.exitCode = 1;
}
