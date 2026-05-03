export interface CapabilityMapRow {
  label: string;
  value: string;
  active?: boolean;
}

export interface ScoreBreakdownItem {
  label: string;
  value: string;
}

export interface DashboardPreviewData {
  header: {
    kicker: string;
    title: string;
    body: string;
    quote: string;
  };
  capabilityMap: {
    label: string;
    title: string;
    rows: CapabilityMapRow[];
  };
  governanceScore: {
    label: string;
    score: string;
    status: string;
    ariaLabel: string;
    breakdown: ScoreBreakdownItem[];
  };
  flow: {
    label: string;
    title: string;
    steps: string[];
  };
}

export interface PortfolioOverviewStat {
  number: string;
  label: string;
  status: 'excellent' | 'good' | 'needs-improvement';
}

export interface PortfolioOverviewData {
  heading: string;
  stats: PortfolioOverviewStat[];
  insightsHeading: string;
  insights: {
    strengths: string[];
    focusAreas: string[];
    strategicImpact: string[];
  };
}

export const dashboardPreview: DashboardPreviewData = {
  header: {
    kicker: 'Example Operating Cockpit',
    title: 'Governance Health Across the Product City',
    body:
      'A more concrete view of the product-to-architecture operating model: value flow, governance evidence, agentic delivery readiness, and engineering community health.',
    quote:
      'The Chief Archeologist does not just draw the map. The map becomes executable: BARs, CALM models, threat models, policy checks, and product metrics all feeding the same cockpit.',
  },
  capabilityMap: {
    label: 'Portfolio Map',
    title: 'Business capability to code',
    rows: [
      { label: 'Portfolio', value: 'Modernization runway' },
      { label: 'Platform', value: 'Governance mesh' },
      { label: 'BAR', value: 'Customer data platform', active: true },
      { label: 'Repos', value: '7 services / 3 policy gaps' },
    ],
  },
  governanceScore: {
    label: 'Governance Score',
    score: '83%',
    status: 'healthy',
    ariaLabel: '83 percent governance health',
    breakdown: [
      { label: 'Architecture', value: '88' },
      { label: 'Security', value: '92' },
      { label: 'Risk', value: '76' },
      { label: 'Ops', value: '81' },
    ],
  },
  flow: {
    label: 'Agentic SDLC Flow',
    title: 'Idea to governed change',
    steps: [
      'RCTRO issue generated',
      'Prompt packs attached',
      'Agent implementation reviewed',
      'Policy and fitness checks enforced',
    ],
  },
};

export const portfolioOverview: PortfolioOverviewData = {
  heading: 'Current Portfolio Signals',
  stats: [
    { number: '83%', label: 'Governance Health', status: 'good' },
    { number: '74%', label: 'BAR Coverage', status: 'needs-improvement' },
    { number: '92%', label: 'Threat Model Coverage', status: 'excellent' },
    { number: '67d', label: 'Concept to Value', status: 'good' },
    { number: '62%', label: 'Agent Autonomy Readiness', status: 'needs-improvement' },
  ],
  insightsHeading: 'Executive Readout',
  insights: {
    strengths: [
      'Strong release quality and threat-model discipline',
      'Clear product-to-architecture measurement paths',
      'Good foundation for policy-as-code expansion',
    ],
    focusAreas: [
      'Increase BAR adoption across critical applications',
      'Close architecture drift before agent autonomy expands',
      'Turn routine review work into automated fitness functions',
    ],
    strategicImpact: [
      'Portfolio health visible from business capability to code',
      'Architecture governance becomes a launchpad instead of a queue',
      'AI-assisted delivery can scale without surrendering control',
    ],
  },
};
