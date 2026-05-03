export interface Metric {
  id: string;
  label: string;
  value: string;
  target: string;
  percentage: number;
  status: 'excellent' | 'good' | 'needs-improvement';
  description: string[];
  businessImpact: string[];
}

export interface MetricCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  conversationStarter: string;
  pillarDescription: string;
  metrics: Metric[];
}

export const metricsData: MetricCard[] = [
  {
    id: 'business-value',
    title: 'Product Value Flow',
    subtitle: 'Business outcomes moving through the city',
    icon: 'BV',
    conversationStarter: '"Are our product investments becoming measurable business capability, or just completed work?"',
    pillarDescription: 'The vibrant district layer: product teams, customer outcomes, and executive OKRs connected to architecture decisions.',
    metrics: [
      {
        id: 'release-quality',
        label: 'Release Quality',
        value: '98%',
        target: 'Target: 100%',
        percentage: 98,
        status: 'excellent',
        description: [
          'Pipeline quality gate effectiveness',
          'Post-release stability',
          'Zero rollbacks within 2 weeks'
        ],
        businessImpact: [
          'Customer satisfaction',
          'Reduced operational costs',
          'Predictable maintenance'
        ]
      },
      {
        id: 'deployment-frequency',
        label: 'Value Throughput',
        value: '67 days',
        target: 'Target: <60 days',
        percentage: 78,
        status: 'needs-improvement',
        description: [
          'Concept-to-production cycle time',
          'Product discovery to launch',
          'Value realization speed'
        ],
        businessImpact: [
          'Market responsiveness',
          'Competitive advantage',
          'Innovation speed'
        ]
      },
      {
        id: 'quarterly-commitments',
        label: 'Commitment Confidence',
        value: '72%',
        target: 'Target: 80%',
        percentage: 72,
        status: 'needs-improvement',
        description: [
          'Planning accuracy',
          'Predictable delivery',
          'Stakeholder alignment'
        ],
        businessImpact: [
          'Business trust',
          'Resource optimization',
          'Strategic planning'
        ]
      }
    ]
  },
  {
    id: 'technical-foundation',
    title: 'Governance Mesh',
    subtitle: 'Architecture, risk, security, and operations as code',
    icon: 'GM',
    conversationStarter: '"Can teams prove architecture, security, risk, and operations readiness without waiting on a committee?"',
    pillarDescription: 'The zoning and building-code layer: BARs, CALM models, ADRs, threat models, and policy-as-code artifacts that make governance executable.',
    metrics: [
      {
        id: 'mean-time-recovery',
        label: 'BAR Coverage',
        value: '74%',
        target: 'Target: 90%',
        percentage: 74,
        status: 'needs-improvement',
        description: [
          'Business Application Repository adoption',
          'Architecture artifact completeness',
          'Governance source-of-truth coverage'
        ],
        businessImpact: [
          'Audit readiness',
          'Portfolio visibility',
          'Faster architecture review'
        ]
      },
      {
        id: 'incident-reduction',
        label: 'Architecture Drift',
        value: '8 open',
        target: 'Target: <5',
        percentage: 68,
        status: 'needs-improvement',
        description: [
          'CALM-to-code divergence',
          'Unapproved dependency paths',
          'Interface contract misalignment'
        ],
        businessImpact: [
          'Reduced rework',
          'Lower hidden risk',
          'Cleaner modernization paths'
        ]
      },
      {
        id: 'security-posture',
        label: 'Threat Model Completeness',
        value: '92%',
        target: 'Target: 95%',
        percentage: 92,
        status: 'excellent',
        description: [
          'STRIDE coverage',
          'OWASP mapping',
          'NIST control traceability'
        ],
        businessImpact: [
          'Risk mitigation',
          'Compliance',
          'Brand protection'
        ]
      }
    ]
  },
  {
    id: 'devsecops-maturity',
    title: 'Agentic SDLC Readiness',
    subtitle: 'Secure AI-assisted delivery without losing control',
    icon: 'AI',
    conversationStarter: '"Can AI agents move fast inside real guardrails, or are prompts doing work that policy should enforce?"',
    pillarDescription: 'The launchpad layer: secure prompts, RCTRO issues, fitness functions, automated reviews, and enforcement paths that let teams ship faster safely.',
    metrics: [
      {
        id: 'cap-slippage-rate',
        label: 'Policy-as-Code Pass Rate',
        value: '91%',
        target: 'Target: 95%',
        percentage: 91,
        status: 'excellent',
        description: [
          'Automated governance checks',
          'CI policy validation',
          'Rule-based compliance'
        ],
        businessImpact: [
          'Less waiting',
          'Higher confidence',
          'Continuous assurance'
        ]
      },
      {
        id: 'app-modernization',
        label: 'Agent Autonomy Tier',
        value: 'Supervised',
        target: 'Target: Autonomous',
        percentage: 62,
        status: 'needs-improvement',
        description: [
          'Governance-score based autonomy',
          'Trust battery health',
          'Human checkpoint frequency'
        ],
        businessImpact: [
          'Controlled acceleration',
          'Reduced agent risk',
          'Better developer experience'
        ]
      },
      {
        id: 'automation-coverage',
        label: 'Fitness Function Coverage',
        value: '87%',
        target: 'Target: 90%',
        percentage: 87,
        status: 'excellent',
        description: [
          'Architecture quality gates',
          'Security scorecards',
          'Complexity and debt controls'
        ],
        businessImpact: [
          'Delivery speed',
          'Error reduction',
          'Consistency'
        ]
      }
    ]
  },
  {
    id: 'engineering-community',
    title: 'Engineering Community',
    subtitle: 'Talent magnetism and product operating model',
    icon: 'DX',
    conversationStarter: '"Are architects and engineers spending their judgment on the 30% that matters, or drowning in repeatable review work?"',
    pillarDescription: 'The citizens of the technology city: engineers, architects, product owners, and security partners working from shared maps instead of tribal memory.',
    metrics: [
      {
        id: 'staff-engagement',
        label: 'Staff Engagement',
        value: '78%',
        target: 'Target: 80%',
        percentage: 78,
        status: 'needs-improvement',
        description: [
          'Employee satisfaction',
          'Work-life balance',
          'Career development opportunities'
        ],
        businessImpact: [
          'Retention',
          'Motivation',
          'Performance quality'
        ]
      },
      {
        id: 'team-satisfaction',
        label: 'Developer Experience',
        value: '87%',
        target: 'Target: >85%',
        percentage: 87,
        status: 'excellent',
        description: [
          'Work environment',
          'Tool satisfaction',
          'Team collaboration effectiveness'
        ],
        businessImpact: [
          'Productivity',
          'Innovation capacity',
          'Team cohesion'
        ]
      },
      {
        id: 'learning-development',
        label: 'Governance Enablement',
        value: '78%',
        target: 'Target: 80%',
        percentage: 78,
        status: 'needs-improvement',
        description: [
          'Skill development',
          'Knowledge sharing',
          'Training participation',
          'Growth opportunities'
        ],
        businessImpact: [
          'Future readiness',
          'Capability expansion',
          'Technology adoption'
        ]
      }
    ]
  }
];
