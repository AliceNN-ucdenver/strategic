export type EducationCourse = {
  code: string
  title: string
  term: string
  focus: string
  outcomes: string[]
  arc: string[]
}

export type EducationLab = {
  id: string
  title: string
  summary: string
  outcomes: string[]
}

export type EducationPrinciple = {
  title: string
  signal: string
  description: string
}

export type AtlasSignal = {
  value: string
  label: string
  description: string
}

export type AtlasLink = {
  label: string
  url: string
}

export type NvidiaCredentialGroup = {
  title: string
  items: string[]
}

export type NvidiaCourseLink = {
  title: string
  url: string
}

export const educationPrinciples: EducationPrinciple[] = [
  {
    title: 'Learn the System',
    signal: 'Context',
    description:
      'Students start by reading the forces around a system: request flows, data models, model behavior, stakeholder needs, risk, and operating constraints.',
  },
  {
    title: 'Build the Evidence',
    signal: 'Practice',
    description:
      'Every course asks for proof people can inspect: tests, deployments, labs, working interfaces, model outputs, architecture views, and repeatable demos.',
  },
  {
    title: 'Explain the Tradeoffs',
    signal: 'Judgment',
    description:
      'Students learn to say why a technical choice matters, where it can fail, and what another engineer or leader should trust, question, or change.',
  },
  {
    title: 'Transfer the Capability',
    signal: 'Growth',
    description:
      'The goal is durable capability, not one completed assignment. Students leave with patterns they can carry into teams, products, research, and practice.',
  },
]

export const atlasSignals: AtlasSignal[] = [
  {
    value: '1st',
    label: 'Teaching Firm Launch',
    description:
      'Manulife launched the first ATLAS teaching firm, adapting the teaching hospital model to architecture development.',
  },
  {
    value: '20',
    label: 'CITA-F Certified',
    description:
      'Architecture foundations training established a shared professional baseline for the Department of Architecture.',
  },
  {
    value: '12',
    label: 'May 2026 Graduates',
    description:
      'The first resident cohort graduates after a structured pathway of mentoring, portfolio evidence, and applied practice.',
  },
]

export const atlasCapabilityPillars = [
  'BTABoK foundation',
  'Mentored practice',
  'Portfolio evidence',
  'Phase gates',
  'CITA-F readiness',
  'Architecture operating model',
]

export const atlasLinks: AtlasLink[] = [
  {
    label: 'IASA ATLAS Program',
    url: 'https://www.iasaglobal.org/atlas-program/',
  },
  {
    label: 'ATLAS Teaching Firm',
    url: 'https://www.iasaglobal.org/atlas-teaching-firm/',
  },
  {
    label: 'Chief Archeologist Article',
    url: '/blog/atlas-revolution-architecture-education',
  },
  {
    label: 'ATLAS Short Notes',
    url: 'https://github.com/AliceNN-ucdenver/Iasa/blob/main/IASA-ATLAS-short.md',
  },
  {
    label: 'ATLAS Program Notes',
    url: 'https://github.com/AliceNN-ucdenver/Iasa/blob/main/IASA-ATLAS-Program.md',
  },
]

export const educationCourses: EducationCourse[] = [
  {
    code: 'CSCI 3916',
    title: 'Web API Technologies',
    term: 'Spring 2026',
    focus:
      'A full-stack API product engineering course where students move from raw HTTP behavior to a tested, secure, deployed MERN application they can explain.',
    outcomes: [
      'Design and implement REST APIs with Node.js, Express, MongoDB, and React.',
      'Use Postman, automated tests, JWT authentication, and route-level validation to prove API behavior.',
      'Deploy services on Render and build a portfolio-ready final project with API, database, and user interface elements.',
    ],
    arc: [
      'HTTP, Postman, GitHub, and API request testing',
      'Node.js, Express, authorization, Swagger, and API security',
      'MongoDB, TypeScript, analytics, code quality, React, and deployment',
      'Capstone project, demo recording, architecture views, and final presentation',
    ],
  },
  {
    code: 'CSCI 4800',
    title: 'Generative Deep Learning',
    term: 'Fall 2026',
    focus:
      'An applied generative AI course where students move from model foundations to diffusion, transformers, RAG, agentic AI, and the ethics of responsible adoption.',
    outcomes: [
      'Implement and compare generative model families, including VAEs, GANs, autoregressive models, diffusion, and transformers.',
      'Build applied labs around transformer-based NLP, diffusion, RAG, and agentic AI.',
      'Reason about ethical, technical, and operational considerations for generative systems, including CE-certified AI ethics instruction.',
    ],
    arc: [
      'Generative modeling, deep learning foundations, VAEs, GANs, and energy-based models',
      'Diffusion, transformers, music generation, world models, and multimodal systems',
      'Retrieval-augmented generation and applied agentic AI labs',
      'Ethics and challenges in generative AI, CE-certified professional education, student presentations, and lab demonstrations',
    ],
  },
]

export const apiLabSequence: EducationLab[] = [
  {
    id: '00',
    title: 'Postman, HTTP, and REST Foundations',
    summary:
      'Students create chained Postman requests, inspect HTTP headers, automate assertions, and modify a Node utility to expose request and response metadata.',
    outcomes: ['Postman collections', 'Environment variables', 'Header analysis', 'GitHub submission'],
  },
  {
    id: '01',
    title: 'Echo Server and Render Deployment',
    summary:
      'Students build an Express echo server, deploy it on Render, and prove behavior through status, response body, and response time tests.',
    outcomes: ['Express server', 'Render deployment', 'Postman tests', 'README evidence'],
  },
  {
    id: '02',
    title: 'Route Behavior, Authentication, and Runtime Signals',
    summary:
      'Students implement HTTP method behavior for a movies route, add environment variables, exercise Basic and JWT auth, and test invalid verbs and failed auth paths.',
    outcomes: ['Route contracts', 'JWT auth', 'Basic auth', 'Negative tests'],
  },
  {
    id: '03',
    title: 'MongoDB, Users, Movies, and React Sign-In',
    summary:
      'Students move from route simulation to persistent data by building user and movie collections, securing endpoints, and connecting a React sign-up and sign-in flow.',
    outcomes: ['MongoDB schemas', 'CRUD endpoints', 'JWT-secured API', 'React integration'],
  },
  {
    id: '04',
    title: 'Reviews, Aggregation, and Observability',
    summary:
      'Students add reviews, aggregate movies and ratings, and modernize analytics thinking around GA4 Measurement Protocol or practical API observability patterns.',
    outcomes: ['Review model', 'MongoDB lookup', 'Aggregated responses', 'Observability evidence'],
  },
  {
    id: '05',
    title: 'Full-Stack Product Experience',
    summary:
      'Students complete the React experience with top-rated movies, detail screens, review submission, search extension, and a deployed public application.',
    outcomes: ['React UI', 'Average ratings', 'Search extension', 'Production demo'],
  },
]

export const deepLearningLabSequence: EducationLab[] = [
  {
    id: 'DL1',
    title: 'Deep Learning Foundations',
    summary:
      'Students prepare data, build and compile neural networks, evaluate model behavior, and connect core deep learning mechanics to generative model design.',
    outcomes: ['Data preparation', 'Model training', 'Evaluation metrics', 'Deep learning presentation'],
  },
  {
    id: 'DL2',
    title: 'Variational Autoencoders',
    summary:
      'Students implement a basic VAE on Fashion-MNIST and study latent representations, reconstruction quality, and the tradeoffs behind probabilistic generation.',
    outcomes: ['Fashion-MNIST', 'Latent space', 'Reconstruction', 'VAE implementation'],
  },
  {
    id: 'DL3',
    title: 'Transformer-Based NLP Applications',
    summary:
      'Students build transformer-based NLP applications and use the lab to connect attention, sequence modeling, embeddings, and text generation workflows.',
    outcomes: ['Transformers', 'NLP workflows', 'Attention', 'Text generation'],
  },
  {
    id: 'DL4',
    title: 'Autoregressive and Flow-Based Models',
    summary:
      'Students generate sequences with autoregressive models and experiment with normalizing flows to compare density estimation and sampling behavior.',
    outcomes: ['Sequence generation', 'Sampling', 'Normalizing flows', 'Model comparison'],
  },
  {
    id: 'DL5',
    title: 'Energy-Based and Diffusion Models',
    summary:
      'Students implement energy-based concepts and a diffusion model, then explain how denoising and iterative refinement change generative system behavior.',
    outcomes: ['Energy models', 'Diffusion', 'Denoising', 'Image generation'],
  },
  {
    id: 'DL6',
    title: 'RAG, Multimodal, and Agentic AI',
    summary:
      'Students apply retrieval-augmented generation and agentic AI patterns while evaluating grounding, tool use, multimodal reasoning, and system constraints.',
    outcomes: ['RAG', 'Agentic AI', 'Multimodal systems', 'Tool use'],
  },
  {
    id: 'DL7',
    title: 'Ethics and Challenges in Generative AI',
    summary:
      'Students examine the ethical, professional, and operational risks of generative AI, including bias, hallucination, disclosure risk, accountability, workforce impact, and governance. This module connects directly to Shawn\'s CE-certified Generative AI Deep Learning Ethics instruction.',
    outcomes: ['CE-certified ethics', 'AI governance', 'Disclosure risk', 'Responsible adoption'],
  },
]

export const capstoneOptions = [
  'Personal Contact Manager',
  'Inventory Pantry Tracker',
  'Flash Card Learning App',
  'E-Commerce Storefront',
  'Real-Time Chat or Collaboration Tool',
  'Job Application Tracker',
  'Custom API, database, and user interface project',
]

export const nvidiaCredentialGroups: NvidiaCredentialGroup[] = [
  {
    title: 'Instructor Standing',
    items: [
      'Platinum NVIDIA Deep Learning Institute Instructor',
      'NVIDIA Certified Professional: Agentic AI',
      'Agentic AI Subject Matter Expert',
    ],
  },
  {
    title: 'Generative AI and LLM Specializations',
    items: [
      'Large Language Model Applications',
      'Large Language Model Agents',
      'Multimodal Generative AI',
      'Sovereign AI',
      'Prompt Engineering',
      'Model Customization',
    ],
  },
  {
    title: 'RAG and Agentic AI Specializations',
    items: [
      'Retrieval-Augmented Generation',
      'Production RAG Pipelines',
      'Knowledge-Enhanced LLM Systems',
      'Agentic AI Applications',
      'Multimodal AI Agents',
    ],
  },
  {
    title: 'Deep Learning and Applied AI Specializations',
    items: [
      'Transformer-Based NLP',
      'Diffusion Models',
      'AI Anomaly Detection',
      'Generative Deep Learning',
    ],
  },
]

export const nvidiaCertifiedCourses: NvidiaCourseLink[] = [
  {
    title: 'Applications of AI for Anomaly Detection',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-TC-01+V1',
  },
  {
    title: 'Building Transformer-Based Natural Language Processing Applications',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-03+V3',
  },
  {
    title: 'Building LLM Applications with Prompt Engineering',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-11+V1',
  },
  {
    title: 'Rapid Application Development with Large Language Models',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-09+V2',
  },
  {
    title: 'Generative AI with Diffusion Models',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-08+V1',
  },
  {
    title: 'Building RAG Agents with LLMs',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-15+V1',
  },
  {
    title: 'Adding New Knowledge to LLMs',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-26+V1',
  },
  {
    title: 'Deploying RAG Pipelines for Production at Scale',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-18+V1',
  },
  {
    title: 'Building Agentic AI Applications with LLMs',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-25+V1',
  },
  {
    title: 'Building AI Agents with Multimodal Models',
    url: 'https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+C-FX-17+V1',
  },
]
