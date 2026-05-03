export type ResourceTrackId = 'architecture' | 'ai' | 'career' | 'research'

export type ResourceTrack = {
  id: ResourceTrackId
  title: string
  shortLabel: string
  description: string
}

export type ResourceArticle = {
  title: string
  publication: string
  excerpt: string
  url: string
  tags: string[]
  track: ResourceTrackId
}

export const resourceTracks: ResourceTrack[] = [
  {
    id: 'architecture',
    title: 'Architecture Thinking',
    shortLabel: 'Architecture',
    description:
      'How architecture shifts from frameworks and governance theater into strategic systems, APIs, products, and risk-aware operating models.',
  },
  {
    id: 'ai',
    title: 'AI & Maintainability',
    shortLabel: 'AI',
    description:
      'The argument for AI-era engineering: faster delivery, stronger guardrails, better maintainability signals, and architects as strategic catalysts.',
  },
  {
    id: 'career',
    title: 'Career & Leadership',
    shortLabel: 'Career',
    description:
      'Professional identity, leadership, and the human judgment that still matters when AI changes how engineering work gets done.',
  },
  {
    id: 'research',
    title: 'Research & Risk Signals',
    shortLabel: 'Research',
    description:
      'Peer-reviewed work on emotion, disclosure risk, market signals, knowledge graphs, and machine learning as evidence systems.',
  },
]

export const resourceArticles: ResourceArticle[] = [
  {
    title: "From Fixed Frameworks to Strategic Enablers: Architecting AI Transformation",
    publication: "CIO",
    excerpt:
      "Discover how to evolve from rigid architectural frameworks to dynamic, AI-enabled strategic capabilities that drive continuous innovation and competitive advantage in the modern enterprise.",
    url: "https://www.cio.com/article/4020233/from-fixed-frameworks-to-strategic-enablers-architecting-ai-transformation.html",
    tags: ["AI Transformation", "Strategic Architecture", "Digital Innovation"],
    track: 'architecture',
  },
  {
    title: "From Project to Product: Architecting the Future of Enterprise Technology",
    publication: "CIO",
    excerpt:
      "Discover how to transition from traditional project-based thinking to product-centric architecture that enables continuous innovation and sustainable business growth.",
    url: "https://www.cio.com/article/3802289/from-project-to-product-architecting-the-future-of-enterprise-technology.html",
    tags: ["Product Thinking", "Digital Transformation", "Innovation"],
    track: 'architecture',
  },
  {
    title: "How to Leverage APIs for IT-Enabled Information Capability",
    publication: "InfoWorld",
    excerpt:
      "Explore how APIs can transform your organization's information architecture into a strategic business capability, enabling real-time data access and seamless integration across enterprise systems.",
    url: "https://www.infoworld.com/article/3547273/how-to-leverage-apis-for-it-enabled-information-capability.html",
    tags: ["APIs", "Enterprise Architecture", "Data Strategy"],
    track: 'architecture',
  },
  {
    title: "Security is Dead, Long Live Risk Management",
    publication: "CIO",
    excerpt:
      "Learn why traditional security models are failing and how a risk-first approach to enterprise architecture can create more resilient and adaptive systems.",
    url: "https://www.cio.com/article/3846774/security-is-dead-long-live-risk-management.html",
    tags: ["Risk Management", "Security Architecture", "Enterprise Resilience"],
    track: 'architecture',
  },
  {
    title: "From Gatekeepers to Launchpads: How Autonomous Governance Transforms Enterprise Architecture",
    publication: "Metis (IASA Global)",
    excerpt:
      "The decision rate has outrun any process that inspects decisions individually. This piece argues that autonomous governance - Architecture as Code, Risk as Code, Operations as Code, Security as Code - is the only governance pattern that survives at AI velocity.",
    url: "https://education.iasaglobal.org/whatsnew/articles/699d47860003304f932d",
    tags: ["Autonomous Governance", "Strategic Architecture", "Policy as Code", "Peer Reviewed"],
    track: 'ai',
  },
  {
    title: "The Engineering Imperative: Why AI Won't Replace Your Best Developers",
    publication: "CIO",
    excerpt:
      "Explore why AI will elevate rather than replace skilled engineers, and discover how the 70/30 rule defines the future of human-AI collaboration in software development.",
    url: "https://www.cio.com/article/4080210/the-engineering-imperative-why-ai-wont-replace-your-best-developers.html",
    tags: ["AI & Engineering", "Future of Work", "Software Architecture"],
    track: 'career',
  },
  {
    title: "Cross-Document Emotion Consistency (CDEC): A Feature Family Framework for Financial Disclosure Risk Screening",
    publication: "MDPI - Journal of Risk and Financial Management",
    excerpt:
      "Presents CDEC, a framework measuring emotional alignment between SEC filings and earnings call Q&A using 28-dimensional emotion classification. The integrated framework achieves approximately twice the risk separation of the strongest sentiment baseline.",
    url: "https://www.mdpi.com/1911-8074/19/4/251",
    tags: ["Financial Disclosure", "Emotion Analysis", "Risk Screening", "Research"],
    track: 'research',
  },
  {
    title: "Enhancing Financial Market Analysis and Prediction with Emotion Corpora and News Co-Occurrence Network",
    publication: "MDPI - Journal of Risk and Financial Management",
    excerpt:
      "Research employing improved natural language processing algorithms to analyze over 500,000 financial news articles, developing emotion corpora and co-occurrence networks to identify shifting economic activity and relationships between companies across sectors.",
    url: "https://www.mdpi.com/1911-8074/16/4/226",
    tags: ["Financial Analysis", "NLP", "Market Prediction", "Research"],
    track: 'research',
  },
  {
    title: "The Emotion Magnitude Effect: Navigating Market Dynamics Amidst Supply Chain Events",
    publication: "MDPI - Journal of Risk and Financial Management",
    excerpt:
      "Research introducing the novel 'emotion magnitude' metric to capture emotional undercurrents in financial markets during 2019-2021, connecting supply chain disruptions, countries, commodities, and corporations through knowledge graphs.",
    url: "https://www.mdpi.com/1911-8074/16/12/490",
    tags: ["Supply Chain Analysis", "Market Dynamics", "Knowledge Graphs", "Research"],
    track: 'research',
  },
  {
    title: "Fin-ALICE: Artificial Linguistic Intelligence Causal Econometrics",
    publication: "MDPI - Journal of Risk and Financial Management",
    excerpt:
      "Introduction of Fin-ALICE for financial time series forecasting, integrating emotional sentiment analysis, supply chain dynamics, and advanced machine learning techniques using Temporal Convolutional Networks.",
    url: "https://www.mdpi.com/1911-8074/17/12/537",
    tags: ["Machine Learning", "Financial Forecasting", "AI", "Research"],
    track: 'research',
  },
  {
    title: "A Momentum-Based Normalization Framework for Generating Profitable Analyst Sentiment Signals",
    publication: "MDPI - International Journal of Financial Studies",
    excerpt:
      "Development of a momentum-based normalization framework that transforms diverse analyst rating scales into standardized sentiment signals using firm-relative ECDF normalization.",
    url: "https://www.mdpi.com/2227-7072/14/1/4",
    tags: ["Analyst Sentiment", "Momentum Strategies", "Quantitative Finance", "Research"],
    track: 'research',
  },
]

export const getPublicationMark = (publication: string) => {
  if (publication.includes('Metis')) return 'IASA'
  if (publication.includes('InfoWorld')) return 'IW'
  if (publication.includes('MDPI')) return 'MDPI'
  return publication
}

export const getArticlesForTrack = (trackId: ResourceTrackId) =>
  resourceArticles.filter((article) => article.track === trackId)
