import type { MetricCard } from './metricsData';

export const successMetricsData: MetricCard[] = [
  // Strategic Value Creation
  {
    id: 'strategic-value-creation',
    title: 'Strategic Value Creation',
    subtitle: 'Revolutionary metrics for strategic business acceleration',
    icon: '🎯',
    conversationStarter: '"How are we measuring architecture as a strategic business enabler rather than just technical compliance?"',
    pillarDescription: 'Think of these metrics as the vital signs of your organization\'s strategic transformation capability.',
    metrics: [
      {
        id: 'ai-revenue-attribution',
        label: 'AI Revenue Attribution',
        value: '>15%',
        target: 'Target: >15%',
        percentage: 85,
        status: 'excellent',
        description: [
          '% of revenue directly traceable to AI-enabled capabilities',
          'Measures direct business impact of AI investments',
          'Tracks transformation ROI in real terms'
        ],
        businessImpact: [
          'Demonstrates architecture value to C-suite',
          'Justifies continued AI investment',
          'Drives strategic decision making'
        ]
      },
      {
        id: 'innovation-velocity-index',
        label: 'Innovation Velocity Index',
        value: '<90 days',
        target: 'Target: <90 days',
        percentage: 78,
        status: 'good',
        description: [
          'Time from AI concept to production value',
          'Measures organizational agility',
          'Tracks speed of value delivery'
        ],
        businessImpact: [
          'Accelerated time-to-market',
          'Competitive advantage through speed',
          'Increased market responsiveness'
        ]
      },
      {
        id: 'architectural-leverage-ratio',
        label: 'Architectural Leverage Ratio',
        value: '10:1 ROI',
        target: 'Target: 10:1 ROI',
        percentage: 92,
        status: 'excellent',
        description: [
          'Business outcomes per architectural investment dollar',
          'Measures efficiency of architecture investments',
          'Tracks value multiplication factor'
        ],
        businessImpact: [
          'Optimized resource allocation',
          'Strategic investment justification',
          'Measurable transformation impact'
        ]
      }
    ]
  },
  
  // Ecosystem Health
  {
    id: 'ecosystem-health',
    title: 'Ecosystem Health',
    subtitle: 'Organizational agility and cross-domain effectiveness',
    icon: '🌿',
    conversationStarter: '"How effectively are we democratizing AI across the organization and fostering innovation reuse?"',
    pillarDescription: 'These metrics measure how well your AI ecosystem enables organization-wide innovation and resilience.',
    metrics: [
      {
        id: 'ai-democratization-score',
        label: 'AI Democratization Score',
        value: '>40%',
        target: 'Target: >40%',
        percentage: 65,
        status: 'excellent',
        description: [
          '% of non-technical staff successfully deploying AI',
          'Measures accessibility of AI tools and platforms',
          'Tracks organizational AI literacy'
        ],
        businessImpact: [
          'Increased innovation from all departments',
          'Reduced dependency on technical teams',
          'Faster problem-solving capabilities'
        ]
      },
      {
        id: 'cross-pollination-rate',
        label: 'Cross-Pollination Rate',
        value: '>70%',
        target: 'Target: >70%',
        percentage: 74,
        status: 'good',
        description: [
          'AI patterns reused across business domains',
          'Measures knowledge sharing effectiveness',
          'Tracks pattern library utilization'
        ],
        businessImpact: [
          'Reduced development costs',
          'Consistent user experiences',
          'Accelerated innovation velocity'
        ]
      },
      {
        id: 'ecosystem-resilience-index',
        label: 'Ecosystem Resilience Index',
        value: '>85%',
        target: 'Target: >85%',
        percentage: 81,
        status: 'good',
        description: [
          'System adaptability during market disruptions',
          'Measures organizational flexibility',
          'Tracks recovery speed from failures'
        ],
        businessImpact: [
          'Business continuity assurance',
          'Competitive advantage during crises',
          'Stakeholder confidence maintenance'
        ]
      }
    ]
  },

  // Future Readiness
  {
    id: 'future-readiness',
    title: 'Future Readiness',
    subtitle: 'Strategic optionality and long-term sustainability',
    icon: '🚀',
    conversationStarter: '"How prepared are we for future technological shifts and how attractive are we to top AI talent?"',
    pillarDescription: 'These metrics assess your organization\'s ability to adapt to future changes and maintain technological leadership.',
    metrics: [
      {
        id: 'technical-debt-decay-rate',
        label: 'Technical Debt Decay Rate',
        value: '-25% annually',
        target: 'Target: -25% annually',
        percentage: 68,
        status: 'good',
        description: [
          'Speed of legacy system modernization via AI',
          'Measures technical debt reduction rate',
          'Tracks modernization effectiveness'
        ],
        businessImpact: [
          'Reduced maintenance costs',
          'Increased development velocity',
          'Enhanced system reliability'
        ]
      },
      {
        id: 'capability-half-life',
        label: 'Capability Half-Life',
        value: '>18 months',
        target: 'Target: >18 months',
        percentage: 85,
        status: 'excellent',
        description: [
          'Time before architectural patterns become obsolete',
          'Measures sustainability of solutions',
          'Tracks future-proofing effectiveness'
        ],
        businessImpact: [
          'Reduced rework and refactoring',
          'Stable long-term investments',
          'Predictable evolution pathways'
        ]
      },
      {
        id: 'talent-magnetism-score',
        label: 'Talent Magnetism Score',
        value: 'Top 20%',
        target: 'Target: Top 20%',
        percentage: 88,
        status: 'excellent',
        description: [
          'Quality of AI talent attracted and retained',
          'Measures employer brand strength',
          'Tracks talent acquisition success'
        ],
        businessImpact: [
          'Access to cutting-edge expertise',
          'Faster innovation cycles',
          'Competitive talent advantage'
        ]
      }
    ]
  }
];
