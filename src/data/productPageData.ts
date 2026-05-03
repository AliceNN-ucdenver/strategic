export interface ProductHeroAction {
  label: string;
  sectionId: string;
  variant: 'primary' | 'secondary';
}

export interface ProductStackLayer {
  code: string;
  title: string;
  description: string;
  sectionId: string;
  tone: 'product' | 'governance' | 'agent' | 'community';
}

export interface ProductThesisPoint {
  label: string;
  statement: string;
}

export interface ProductHeroData {
  eyebrow: string;
  title: string;
  subtitle: string;
  proofPoints: string[];
  actions: ProductHeroAction[];
  stackHeading: {
    kicker: string;
    title: string;
  };
  stackLayers: ProductStackLayer[];
}

export interface ProductThesisData {
  kicker: string;
  title: string;
  body: string;
  points: ProductThesisPoint[];
}

export interface ImpactItem {
  icon: string;
  label: string;
  impact: 'Medium' | 'High' | 'Critical';
}

export interface ArchitectureChallengeView {
  id: 'traditional' | 'modern';
  label: string;
  title: string;
  icon: string;
  description: string;
  impactHeading: string;
  impactItems: ImpactItem[];
}

export interface ArchitectureChallengeData {
  title: string;
  subtitle: string;
  views: ArchitectureChallengeView[];
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
}

export interface ComparisonSection {
  title: string;
  type: 'current' | 'future';
  items: string[];
}

export interface TransformationAction {
  title: string;
  body: string;
}

export interface TransformationStage {
  stage: string;
  theme: string;
  who: string[];
  goal: string;
}

export type TransformationTabId = 'mindset' | 'pathway' | 'metrics';

export type TransformationTab =
  | {
      id: 'mindset';
      label: string;
      icon: string;
      title: string;
      sections: ComparisonSection[];
      actionsHeading: string;
      actions: TransformationAction[];
    }
  | {
      id: 'pathway';
      label: string;
      icon: string;
      title: string;
      stages: TransformationStage[];
    }
  | {
      id: 'metrics';
      label: string;
      icon: string;
      title: string;
      intro: string;
    };

export interface TransformationFrameworkData {
  title: string;
  subtitle: string;
  body: string;
  tabs: TransformationTab[];
}

export interface ImplementationPhase {
  number: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface GuidingPrinciple {
  number: string;
  title: string;
  body: string;
}

export interface ImplementationGuideData {
  title: string;
  body: string;
  phases: ImplementationPhase[];
  principlesHeading: string;
  principles: GuidingPrinciple[];
}

export const productHero: ProductHeroData = {
  eyebrow: 'Chief Archeologist Product Studio',
  title: 'From Project to Product to Governed Agentic Delivery',
  subtitle:
    'Keep the city-planning discipline of product architecture, then make the roads, zoning laws, security checks, and AI agents visible in one architecture-first operating cockpit.',
  proofPoints: [
    'Product thinking',
    'Autonomous governance',
    'Maintainability.ai implementation',
  ],
  actions: [
    { label: 'View Governance Cockpit', sectionId: 'dashboard', variant: 'primary' },
    { label: 'Explore Operating Model', sectionId: 'transformation', variant: 'secondary' },
  ],
  stackHeading: {
    kicker: 'Operating Map',
    title: 'Architecture as the control plane',
  },
  stackLayers: [
    {
      code: '01',
      title: 'Product Value Flow',
      description: 'OKRs, capabilities, and customer outcomes',
      sectionId: 'business-value',
      tone: 'product',
    },
    {
      code: '02',
      title: 'Governance Mesh',
      description: 'BARs, CALM, ADRs, STRIDE, risk evidence',
      sectionId: 'technical-foundation',
      tone: 'governance',
    },
    {
      code: '03',
      title: 'Agentic SDLC',
      description: 'Prompt packs, reviews, fitness functions',
      sectionId: 'devsecops-maturity',
      tone: 'agent',
    },
    {
      code: '04',
      title: 'Engineering Community',
      description: 'Enablement, autonomy, and talent magnetism',
      sectionId: 'engineering-community',
      tone: 'community',
    },
  ],
};

export const productThesis: ProductThesisData = {
  kicker: 'The Through-Line',
  title: 'The Chief Archeologist lens still matters.',
  body:
    'The product story starts by excavating the real system: business capability, architecture artifacts, risk evidence, operational dependencies, and the human workflows that hold it all together. Maintainability.ai turns that excavation into an executable map for modern AI delivery.',
  points: [
    {
      label: 'Old world',
      statement: 'Projects, review boards, and static diagrams',
    },
    {
      label: 'Product world',
      statement: 'Value streams, reusable platforms, and portfolio health',
    },
    {
      label: 'Agentic world',
      statement: 'Architecture-aware agents governed by executable constraints',
    },
  ],
};

export const architectureChallenge: ArchitectureChallengeData = {
  title: 'The Modern Enterprise Architecture Challenge',
  subtitle:
    "Today's enterprises face a critical inflection point. In a world where software defines competitive advantage, traditional approaches are failing to deliver the speed and resilience businesses require.",
  views: [
    {
      id: 'traditional',
      label: 'Traditional Approach',
      title: 'Traditional Approach Is Failing',
      icon: '01',
      description:
        'Organizations approach technology like overeager developers, focusing on individual projects without considering the broader ecosystem.',
      impactHeading: 'The Cost of Inaction',
      impactItems: [
        { icon: 'TD', label: 'Mounting Technical Debt', impact: 'High' },
        { icon: 'CX', label: 'Increasing System Complexity', impact: 'High' },
        { icon: 'OC', label: 'Rising Operational Costs', impact: 'Medium' },
        { icon: 'TM', label: 'Difficulty Attracting Talent', impact: 'High' },
        { icon: 'TM', label: 'Slower Time to Market', impact: 'Critical' },
        { icon: 'CA', label: 'Reduced Competitive Advantage', impact: 'Critical' },
      ],
    },
    {
      id: 'modern',
      label: 'Modern Approach',
      title: 'Modern Urban Planning Approach',
      icon: '02',
      description:
        'Thoughtful city planners establish comprehensive plans considering infrastructure, sustainability, and community needs.',
      impactHeading: 'The Urban Planning Advantage',
      impactItems: [
        { icon: 'AI', label: 'Accelerated Innovation', impact: 'High' },
        { icon: 'SA', label: 'Sustainable Architecture', impact: 'High' },
        { icon: 'RA', label: 'Optimized Resource Allocation', impact: 'Medium' },
        { icon: 'TA', label: 'Enhanced Talent Attraction', impact: 'High' },
        { icon: 'MR', label: 'Rapid Market Response', impact: 'Critical' },
        { icon: 'CE', label: 'Sustained Competitive Edge', impact: 'Critical' },
      ],
    },
  ],
  cta: {
    title: 'Ready to Transform Your Architecture Approach?',
    body: 'Move from reactive building inspector to proactive urban planner.',
    primaryLabel: 'Start Assessment',
    secondaryLabel: 'View Framework',
  },
};

export const transformationFramework: TransformationFrameworkData = {
  title: 'From Fixed Frameworks to Strategic Enablers',
  subtitle: 'Architecting AI Transformation Beyond Traditional Approaches',
  body:
    'Move from rigid architectural governance to distributed frameworks that empower innovation while maintaining necessary guardrails.',
  tabs: [
    {
      id: 'mindset',
      label: 'Transformation Mindset',
      icon: '01',
      title: 'From Order-Taker to Strategic Partner',
      sections: [
        {
          title: 'Current State: Feature Factory',
          type: 'current',
          items: [
            'Receives predetermined solutions',
            'Implements without questioning fit',
            'Focuses on technical feasibility',
            'Measures delivery speed',
            'Maintains system stability',
          ],
        },
        {
          title: 'Future State: Innovation Partner',
          type: 'future',
          items: [
            'Co-creates strategic options',
            'Challenges and refines approaches',
            'Drives business possibility',
            'Measures value creation',
            'Enables competitive advantage',
          ],
        },
      ],
      actionsHeading: 'Key Transformation Actions',
      actions: [
        {
          title: 'Embed in Strategy',
          body: 'Place architects in business strategy sessions from day one',
        },
        {
          title: 'Establish Authority',
          body: 'Create architecture review boards with veto power on strategic initiatives',
        },
        {
          title: 'Create Innovation Labs',
          body: 'Prototype future capabilities before business requests them',
        },
        {
          title: 'Measure Value',
          body: 'Implement outcome-based metrics tied to business results',
        },
      ],
    },
    {
      id: 'pathway',
      label: 'Design Pathway',
      icon: '02',
      title: 'Strategic AI Design Pathway',
      stages: [
        {
          stage: 'Strategy & Vision',
          theme: 'Digital Advantage',
          who: ['Enterprise architects', 'Business strategists', 'AI ethics specialists'],
          goal: 'Define clear value metrics for AI initiatives that balance innovation with risk',
        },
        {
          stage: 'Design & Development',
          theme: 'Pattern Design',
          who: ['Solution architects', 'Developers', 'Data scientists'],
          goal: 'Accelerate development while maintaining architectural integrity',
        },
        {
          stage: 'Integration & Deployment',
          theme: 'Interoperability',
          who: ['Technology architects', 'DevOps', 'Platform engineers'],
          goal: 'Create a cohesive ecosystem that enables seamless AI integration',
        },
        {
          stage: 'Continuous Evolution',
          theme: 'Strategic Alignment',
          who: ['Enterprise architects', 'Product owners', 'Business analysts'],
          goal: 'Maintain alignment between architecture and evolving business needs',
        },
      ],
    },
    {
      id: 'metrics',
      label: 'Success Metrics',
      icon: '03',
      title: 'Revolutionary Success Metrics',
      intro:
        "Revolutionary metrics that reflect architecture's role as a strategic business accelerator, moving beyond traditional IT measures.",
    },
  ],
};

export const implementationGuide: ImplementationGuideData = {
  title: 'Practical Implementation Guide',
  body:
    'Start by establishing guiding principles as a reference point while helping teams through transformation. Teams should know good enough is acceptable, continuous improvement is encouraged, and decisions should be made from the information at hand.',
  phases: [
    {
      number: '01',
      title: 'Phase 1: Foundation Building',
      subtitle: 'Just as cities begin with basic infrastructure, start with:',
      items: [
        'Architecture maturity assessment',
        'Just enough current state knowledge',
        'Business capability mapping',
        'Quick win identification',
        'Baseline metrics establishment',
        'Initial product domain definition',
      ],
    },
    {
      number: '02',
      title: 'Phase 2: Transformation Launch',
      subtitle: 'Like developing new city districts, focus on:',
      items: [
        'Cross-functional team building',
        'Measurement framework implementation',
        'Cultural transformation initiation',
        'Pilot program launches',
        'Feedback mechanism establishment',
      ],
    },
    {
      number: '03',
      title: 'Phase 3: Scale and Optimize',
      subtitle: 'Similar to expanding successful urban development patterns:',
      items: [
        'Pattern replication',
        'Framework refinement',
        'Automation enhancement',
        'Business integration deepening',
        'Governance evolution',
        'Redefining product domains as you learn and mature',
      ],
    },
  ],
  principlesHeading: 'Guiding Principles',
  principles: [
    {
      number: '01',
      title: 'Good Enough is Acceptable',
      body: 'Focus on progress over perfection. Start with viable solutions and iterate based on learning and feedback.',
    },
    {
      number: '02',
      title: 'Continuous Improvement',
      body: 'Embrace an evolutionary approach where frameworks and processes improve through practical application and team insights.',
    },
    {
      number: '03',
      title: 'Information-Based Decisions',
      body: 'Make the best recommendations and decisions based on available information, acknowledging uncertainty while maintaining forward momentum.',
    },
  ],
};
