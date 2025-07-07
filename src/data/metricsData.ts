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
    title: 'Business Value Delivery',
    subtitle: 'Features that matter to customers',
    icon: '🎯',
    conversationStarter: '"How quickly and reliably can we deliver features that matter to our customers?"',
    pillarDescription: 'Think of this as building vibrant city districts that attract residents and businesses.',
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
        label: 'Deployment Frequency',
        value: '1,180/month',
        target: 'Target: 1,250',
        percentage: 94,
        status: 'needs-improvement',
        description: [
          'Delivery pipeline efficiency',
          'Team capability',
          'Automation maturity'
        ],
        businessImpact: [
          'Market responsiveness',
          'Competitive advantage',
          'Innovation speed'
        ]
      },
      {
        id: 'quarterly-commitments',
        label: 'Quarterly Commitments',
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
    title: 'Technical Foundation',
    subtitle: 'Reliable infrastructure & services',
    icon: '🏗️',
    conversationStarter: '"Are we maintaining reliable roads and utilities, or are we risking gridlock?"',
    pillarDescription: 'Like a city\'s need for reliable infrastructure and well-maintained services.',
    metrics: [
      {
        id: 'mean-time-recovery',
        label: 'Mean Time to Recovery',
        value: '3.2 hrs',
        target: 'Target: <4 hrs',
        percentage: 85,
        status: 'excellent',
        description: [
          'System observability',
          'Response capability',
          'Resolution efficiency'
        ],
        businessImpact: [
          'Business continuity',
          'Customer trust',
          'Service reliability'
        ]
      },
      {
        id: 'incident-reduction',
        label: 'Incident Reduction',
        value: '8% YoY',
        target: 'Target: 10%',
        percentage: 80,
        status: 'needs-improvement',
        description: [
          'System stability',
          'Prevention effectiveness',
          'Maturity growth'
        ],
        businessImpact: [
          'Operational excellence',
          'Cost reduction',
          'Risk management'
        ]
      },
      {
        id: 'security-posture',
        label: 'Security Posture',
        value: '92%',
        target: 'Target: 90%',
        percentage: 92,
        status: 'excellent',
        description: [
          'Active scanning',
          'Rapid remediation',
          'Prevention measures'
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
    title: 'DevSecOps Maturity',
    subtitle: 'Modernizing operations efficiently',
    icon: '⚡',
    conversationStarter: '"Are our daily operations stuck in manual processes that slow us down or expose us to risks?"',
    pillarDescription: 'Similar to modernizing city services while maintaining daily operations.',
    metrics: [
      {
        id: 'cap-slippage-rate',
        label: 'CAP Slippage Rate',
        value: '3%',
        target: 'Target: <5%',
        percentage: 97,
        status: 'excellent',
        description: [
          'Change management effectiveness',
          'Planning accuracy',
          'Delivery predictability'
        ],
        businessImpact: [
          'Stakeholder trust',
          'Resource efficiency',
          'Operational reliability'
        ]
      },
      {
        id: 'app-modernization',
        label: 'App Modernization',
        value: '67%',
        target: 'Target: 80%',
        percentage: 67,
        status: 'needs-improvement',
        description: [
          'Legacy system transformation',
          'Cloud-native adoption',
          'Architecture evolution'
        ],
        businessImpact: [
          'Agility improvement',
          'Cost reduction',
          'Innovation enablement'
        ]
      },
      {
        id: 'automation-coverage',
        label: 'Automation Coverage',
        value: '87%',
        target: 'Target: 85%',
        percentage: 87,
        status: 'excellent',
        description: [
          'Pipeline automation',
          'Testing coverage',
          'Deployment automation'
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
    subtitle: 'Team health and learning culture',
    icon: '👥',
    conversationStarter: '"How engaged and capable is our engineering community?"',
    pillarDescription: 'The citizens who make the city vibrant - their skills, satisfaction, and growth.',
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
        label: 'Team Satisfaction',
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
        label: 'Learning & Development',
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

export const portfolioOverview = {
  stats: [
    { number: '83%', label: 'Overall Health Score', status: 'good' },
    { number: '98%', label: 'Business Value Delivery', status: 'excellent' },
    { number: '92%', label: 'Technical Foundation', status: 'excellent' },
    { number: '87%', label: 'DevSecOps Maturity', status: 'good' },
    { number: '85%', label: 'Engineering Community', status: 'good' }
  ],
  insights: {
    strengths: [
      'Excellent release quality and security posture',
      'Strong learning culture and team satisfaction',
      'Good incident response capabilities'
    ],
    focusAreas: [
      'Improve quarterly commitment delivery',
      'Accelerate cloud migration progress',
      'Enhance staff engagement programs'
    ],
    strategicImpact: [
      '15% revenue attributed to AI initiatives',
      '67-day concept-to-production cycle',
      'Strong foundation for scaling innovation'
    ]
  }
};
