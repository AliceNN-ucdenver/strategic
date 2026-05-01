/**
 * Canonical Strategic Architecture Constellation data.
 *
 * Single source of truth consumed by:
 *   - Constellation.tsx (hero clickable cluster modal)
 *   - ConstellationModal.tsx (cluster + star detail modal)
 *   - ArchitectureGuide.tsx (lower-section cluster detail grid)
 *   - StarGrid.tsx (expandable star tabs)
 *
 * When you add or rename a star, update this file and both views update.
 */

export interface StrategicGuidance {
  title: string;
  strategicApproach: string;
  tacticalApproach: string;
}

export interface Star {
  title: string;          // "⭐ Business Value Compass"
  purpose: string;
  assessmentQuestion: string;
  strategicGuidance: StrategicGuidance;
  whatGoesWrong: string;
  whatGoesRight: string;
  implementationSteps: string[];
  valueMetrics: string;
  // Wonderland Guide connection
  character?: string;            // "The Red Queen"
  characterEmoji?: string;       // "👑"
  articleSlug?: string;          // "red-queen-resilience-engineering"
  articleHook?: string;          // One-line teaser shown on cards
  articleStatus?: 'published' | 'upcoming';
}

export interface Cluster {
  id: string;             // "navigation" | "velocity" | "enablement" | "sustainability"
  title: string;          // "🧭 Navigation Cluster: Finding Strategic Direction"
  shortName: string;      // "Navigation"
  emoji: string;          // "🧭"
  tagline: string;        // Short hero line below the cluster card, e.g. "Find your bearings."
  quote: string;          // Wonderland-themed cluster quote
  orientation: string;    // One paragraph orientation for the cluster modal
  cast: string;           // Short list of guides
  stars: Star[];
}

export const clusters: Cluster[] = [
  {
    id: 'navigation',
    title: '🧭 Navigation Cluster: Finding Strategic Direction',
    shortName: 'Navigation',
    emoji: '🧭',
    tagline: 'Find your bearings.',
    quote: 'Like Alice learning to navigate Wonderland\'s peculiar rules, architects must master translating technical possibilities into business transformation.',
    orientation: 'The Navigation Cluster is about strategic direction: knowing where to point the architecture, why it matters to the business, and how the broader ecosystem will respond. Three Wonderland guides each teach a different facet of orientation. The White Rabbit teaches measurement: how to know you are creating value rather than just activity. The Cheshire Cat teaches vision: how to shape direction even when the implementation keeps shifting. The Caterpillar teaches ecosystem awareness: how to read the landscape before you commit the architecture to it.',
    cast: 'White Rabbit, Cheshire Cat, Caterpillar',
    stars: [
      {
        title: '⭐ Business Value Compass',
        character: 'The White Rabbit',
        characterEmoji: '⏰',
        articleSlug: 'white-rabbit-business-value-compass',
        articleStatus: 'published',
        articleHook: 'The White Rabbit was always late because he optimized for activity rather than value. Strategic architects measure the right thing.',
        purpose: 'Establish clear alignment between architectural decisions and business value creation',
        assessmentQuestion: 'How do you currently measure the success of your architectural initiatives?',
        strategicGuidance: {
          title: '⏰ Line-of-Sight vs. Late-Again Architecture:',
          strategicApproach: 'Every architectural decision traces to a measurable business outcome before a single line of code is written.',
          tacticalApproach: 'Teams measure activity, integration counts, and uptime while business leaders measure revenue and market share.'
        },
        whatGoesWrong: 'Architecture becomes an expensive cost center focused on technical compliance rather than business enablement. Teams deliver sophisticated solutions that fail to move business metrics, leading to budget cuts and reduced organizational influence.',
        whatGoesRight: 'Architecture becomes a strategic business enabler with clear ROI. Every technical decision directly contributes to revenue growth, competitive advantage, and market leadership, making architecture indispensable to business success.',
        implementationSteps: [
          'Establish revenue attribution tracking for all architectural initiatives',
          'Create executive dashboards linking technical decisions to business outcomes',
          'Develop ROI measurement frameworks for architectural investments',
          'Build business value scorecards with quarterly review cycles'
        ],
        valueMetrics: 'Direct revenue attribution per architectural decision, eliminated integration-trap projects, executive line-of-sight from strategy to delivery, faster time-to-market for differentiating capabilities'
      },
      {
        title: '⭐ Strategic Vision Mapping',
        character: 'The Cheshire Cat',
        characterEmoji: '😺',
        articleSlug: 'cheshire-cat-strategic-vision-mapping',
        articleStatus: 'published',
        articleHook: 'The Cheshire Cat appears and disappears, but the grin remains. Strategic vision shapes industry direction even when the implementation shifts beneath it.',
        purpose: 'Create compelling architectural visions aligned with long-term business strategy',
        assessmentQuestion: 'Does your architectural vision shape industry direction or react to market changes?',
        strategicGuidance: {
          title: '😺 Persistent Vision vs. Vanishing Decks:',
          strategicApproach: 'A vision memorable enough to survive reorgs, vendor pivots, and CEO turnover, defended by a disciplined strategic "no".',
          tacticalApproach: 'Beautifully documented strategy decks fade between quarterly reviews while teams say yes to every urgent ask.'
        },
        whatGoesWrong: 'Organization becomes reactive to market changes, losing competitive positioning. Architecture decisions conflict with each other, creating technical debt and reducing agility. Leadership loses confidence in technology\'s strategic value.',
        whatGoesRight: 'Organization becomes a market leader that shapes industry standards. Architecture enables rapid adaptation to opportunities while maintaining coherence. Technology becomes a primary driver of competitive advantage and strategic differentiation.',
        implementationSteps: [
          'Develop comprehensive architectural vision documents aligned with business strategy',
          'Create visual strategy maps linking technology to business outcomes',
          'Establish regular strategic architecture planning sessions with C-suite',
          'Build scenario planning capabilities for technology futures'
        ],
        valueMetrics: 'Vision recall across leadership transitions, strategic "no" preserving architectural coherence, market-shaping initiatives launched, executive trust in technology direction'
      },
      {
        title: '⭐ Ecosystem Intelligence',
        character: 'The Caterpillar',
        characterEmoji: '🐛',
        articleSlug: 'caterpillar-ecosystem-intelligence-mapping',
        articleStatus: 'published',
        articleHook: 'The Caterpillar asks Alice "Who are you?" before anything else. Strategic architects answer that question about the ecosystem before they answer it about the system.',
        purpose: 'Understand business ecosystems and competitive landscapes for informed decisions',
        assessmentQuestion: 'How well does your architecture enable rapid response to market disruptions and competitive threats?',
        strategicGuidance: {
          title: '🐛 Mushroom-Perch Awareness vs. Ground-Level Blindness:',
          strategicApproach: 'Architects survey the full ecosystem from above, choosing their organization\'s evolution before disruption chooses it for them.',
          tacticalApproach: 'Teams optimize internal systems while market shifts, partner moves, and competitor capabilities arrive as surprises.'
        },
        whatGoesWrong: 'Organization is blindsided by market disruptions and competitive moves. Architecture investments miss strategic opportunities and fail to address ecosystem vulnerabilities. Partnerships and integrations become complex and expensive.',
        whatGoesRight: 'Organization anticipates and adapts to market changes before competitors. Architecture enables seamless ecosystem participation and partnership success. Strategic investments align with market evolution and competitive dynamics.',
        implementationSteps: [
          'Create detailed business ecosystem maps and dependency analysis',
          'Establish competitive architecture intelligence programs',
          'Build market trend analysis capabilities and scenario planning',
          'Develop ecosystem resilience measurement frameworks'
        ],
        valueMetrics: 'Anticipated competitor moves, resilient partnership integrations, lead-time advantage on macro trends, evolution chosen rather than forced by disruption'
      }
    ]
  },
  {
    id: 'velocity',
    title: '⚡ Velocity Cluster: Accelerating Strategic Delivery',
    shortName: 'Velocity',
    emoji: '⚡',
    tagline: 'Outrun yesterday.',
    quote: 'The White Rabbit was always late because he followed linear thinking. Strategic architects enable exponential innovation velocity.',
    orientation: 'The Velocity Cluster is about turning architectural intent into compounding speed. The March Hare keeps the platform always-ready, so innovation never has to start from zero. The Mock Turtle ensures pattern reuse compounds organizational knowledge into competitive advantage. Alice attracts and keeps the talent who can sustain the pace, because the best architecture is irrelevant without the engineers who carry it forward.',
    cast: 'March Hare, Mock Turtle, Alice',
    stars: [
      {
        title: '⭐ Innovation Acceleration Engine',
        character: 'The March Hare',
        characterEmoji: '🐇',
        articleSlug: 'march-hare-innovation-acceleration',
        articleStatus: 'published',
        articleHook: 'The March Hare\'s perpetual tea party is platform-enabled velocity made visible. Innovation that never has to start from zero compounds faster than any project-based approach.',
        purpose: 'Create architectural patterns that dramatically accelerate innovation',
        assessmentQuestion: 'How quickly can your architecture enable new capabilities from concept to production?',
        strategicGuidance: {
          title: '🐇 Always-Ready Platforms vs. Project Cold-Starts:',
          strategicApproach: 'The platform never stops serving, so every new idea begins in the middle of abundance instead of from zero.',
          tacticalApproach: 'Each new initiative reinvents environments, approvals, and infrastructure before any business value can be delivered.'
        },
        whatGoesWrong: 'Innovation becomes slow and expensive as teams reinvent solutions. Organizations miss market opportunities while competitors capture first-mover advantages. Development teams become frustrated with repetitive, low-value work.',
        whatGoesRight: 'Innovation velocity accelerates dramatically as teams focus on value creation rather than infrastructure. Organizations capture more market opportunities and achieve competitive advantage through speed. Development teams thrive with empowering tools and platforms.',
        implementationSteps: [
          'Build comprehensive pattern libraries with reference implementations',
          'Create self-service platforms reducing development friction',
          'Establish innovation labs with rapid prototyping capabilities',
          'Implement continuous delivery pipelines with automated validation'
        ],
        valueMetrics: 'Concept-to-production cycles in days not quarters, dramatically higher deploy frequency, eliminated setup tax across teams, innovation that never has to start from zero'
      },
      {
        title: '⭐ Pattern Recognition Mastery',
        character: 'The Mock Turtle',
        characterEmoji: '🐢',
        articleSlug: 'mock-turtle-pattern-recognition-mastery',
        articleStatus: 'published',
        articleHook: 'The Mock Turtle remembers everything that ever happened in the sea. Pattern recognition compounds organizational knowledge into permanent competitive advantage.',
        purpose: 'Develop sophisticated pattern recognition preventing architectural anti-patterns',
        assessmentQuestion: 'Do teams repeatedly solve the same problems, or do they leverage proven architectural patterns?',
        strategicGuidance: {
          title: '🐢 Encoded Lessons vs. Repeated Tuition:',
          strategicApproach: 'Patterns and fitness functions encode hard-won lessons so duplicated commodity capabilities never consume strategic budget again.',
          tacticalApproach: 'Every team rebuilds the same reporting, messaging, and document systems, paying the duplication tax in budget and APIs.'
        },
        whatGoesWrong: 'Teams repeatedly solve the same problems, increasing costs and reducing quality. Anti-patterns accumulate creating technical debt. Knowledge remains siloed, limiting organizational learning and capability development.',
        whatGoesRight: 'Development costs decrease significantly through proven pattern reuse. Solution quality improves through battle-tested approaches. Organizational knowledge compounds, creating sustainable competitive advantages through architectural excellence.',
        implementationSteps: [
          'Develop comprehensive pattern libraries with success metrics',
          'Implement pattern reuse tracking and optimization systems',
          'Create pattern recognition training programs for architects',
          'Build automated pattern suggestion and anti-pattern detection systems'
        ],
        valueMetrics: '40-60% reduction in duplicated commodity-capability spend, strategic capabilities funded instead of starved, accelerated migrations through reference architectures, institutional memory that compounds'
      },
      {
        title: '⭐ Talent Magnetism Force',
        character: 'Alice',
        characterEmoji: '👧',
        articleSlug: 'alice-talent-magnetism-force',
        articleStatus: 'published',
        articleHook: 'Alice did not become Wonderland\'s queen by accident. Top architects choose environments that let them shape outcomes; the wrong environment loses them in a quarter.',
        purpose: 'Create environments that attract and retain exceptional technical talent',
        assessmentQuestion: 'Does your organization attract industry-leading talent or struggle with technical recruitment?',
        strategicGuidance: {
          title: '👧 Change the System vs. Filter the People:',
          strategicApproach: 'Re-engineer the systems where people work so extraordinary talent can be extraordinary without filtering who they are.',
          tacticalApproach: 'Recruit harder, demand cultural fit, and pile bureaucracy on the architects who could actually transform the organization.'
        },
        whatGoesWrong: 'Top talent chooses competitors offering better technical environments. High recruiting and replacement costs drain resources. Remaining teams struggle with capability gaps and declining technical standards.',
        whatGoesRight: 'Organization becomes a destination for industry-leading talent. High retention rates preserve institutional knowledge and relationships. Exceptional teams deliver breakthrough innovations and competitive advantages.',
        implementationSteps: [
          'Build compelling technical career development programs',
          'Create external speaking and thought leadership opportunities',
          'Establish innovative architecture challenges and hackathons',
          'Develop mentorship programs and communities of practice'
        ],
        valueMetrics: 'Toil reduced 30%+ through self-service platforms, retention of irreplaceable senior engineers, ripple-effect referrals from authentic culture, breakthrough work from teams that stopped fighting the system'
      }
    ]
  },
  {
    id: 'enablement',
    title: '🔧 Enablement Cluster: Distributed Strategic Capability',
    shortName: 'Enablement',
    emoji: '🔧',
    tagline: 'Distribute the magic.',
    quote: 'Alice learned that Wonderland\'s magic came from combining impossible things in logical ways. Modern architects synthesize business needs with technical possibilities.',
    orientation: 'The Enablement Cluster distributes strategic capability through the organization rather than centralizing it. The Duchess finds the moral that connects business intent to technical execution. The King of Hearts builds governance that runs at agent speed instead of meeting cadence. The Mad Hatter creates the dedicated lab where impossible questions become breakthrough capabilities. Together they replace the architect-as-bottleneck with the architect-as-platform-builder.',
    cast: 'Duchess, King of Hearts, Mad Hatter',
    stars: [
      {
        title: '⭐ Business-Technology Synthesis',
        character: 'The Duchess',
        characterEmoji: '👸',
        articleSlug: 'dutchess-business-technology-synthesis',
        articleStatus: 'published',
        articleHook: 'The Duchess found the moral in everything. Business-technology synthesis is the discipline of finding it on purpose, then encoding it into the architecture.',
        purpose: 'Bridge business strategy and technical architecture as true business partners',
        assessmentQuestion: 'Do business executives actively seek your input when making strategic decisions, or are you brought in only for implementation?',
        strategicGuidance: {
          title: '👸 Find-the-Moral Synthesis vs. Pepper-Throwing Implementation:',
          strategicApproach: 'Architects encode the meaning that connects business intent to technical execution, so strategy flows directly into operation.',
          tacticalApproach: 'Technology teams implement requests without shared language, producing features disconnected from the value they should create.'
        },
        whatGoesWrong: 'Architecture becomes an expensive cost center focused on technical compliance rather than business enablement. Teams deliver sophisticated solutions that fail to move business metrics, leading to budget cuts and reduced organizational influence.',
        whatGoesRight: 'Architecture becomes a strategic business enabler with clear ROI. Every technical decision directly contributes to revenue growth, competitive advantage, and market leadership, making architecture indispensable to business success.',
        implementationSteps: [
          'Develop business acumen training programs for technical architects',
          'Create cross-functional project teams with shared accountability',
          'Establish business value measurement and communication frameworks',
          'Build strategic planning participation and influence metrics',
          'Implement executive mentoring and business strategy education programs'
        ],
        valueMetrics: '4x higher business value from strategic partnerships, 65% lower initiative failure rates, 80% faster market adaptation, and architecture influence on 90%+ of strategic decisions'
      },
      {
        title: '⭐ Autonomous Governance Design',
        character: 'The King of Hearts',
        characterEmoji: '🤴',
        articleSlug: 'king-of-hearts-autonomous-governance',
        articleStatus: 'published',
        articleHook: 'The King quietly ran the trial while the Queen screamed for execution. Autonomous governance is the system that produces reasonable outcomes despite the chaos around it.',
        purpose: 'Create governance that empowers innovation through automated guardrails',
        assessmentQuestion: 'Does your governance framework accelerate delivery while ensuring compliance, or does it create bottlenecks and delays?',
        strategicGuidance: {
          title: '🤴 Court-as-Platform vs. Sentence-First Approval:',
          strategicApproach: 'Governance runs as code at agent speed, so architects shape constitutional law instead of reviewing parking tickets.',
          tacticalApproach: 'Manual review boards meet weekly while teams route around bottlenecks and ship without the oversight governance was meant to provide.'
        },
        whatGoesWrong: 'Manual governance creates development bottlenecks and inconsistent policy enforcement. Teams circumvent controls, creating compliance risks. Innovation slows while overhead costs increase, reducing competitive agility.',
        whatGoesRight: 'Development velocity increases dramatically while maintaining compliance. Consistent policy enforcement reduces risk and audit concerns. Teams focus on value creation rather than bureaucratic processes, enhancing innovation and market responsiveness.',
        implementationSteps: [
          'Implement policy-as-code with automated enforcement',
          'Create self-service governance tools and dashboards',
          'Build adaptive governance frameworks that learn and improve',
          'Establish governance effectiveness metrics tied to business outcomes',
          'Develop continuous governance optimization and feedback systems'
        ],
        valueMetrics: 'Approval cycles compressed from days to minutes, 80% of routine governance automated, 20% strategic decisions properly architect-led, compliance stronger because it runs continuously'
      },
      {
        title: '⭐ Innovation Incubation Labs',
        character: 'The Mad Hatter',
        characterEmoji: '🎩',
        articleSlug: 'mad-hatter-innovation-incubation-labs',
        articleStatus: 'published',
        articleHook: 'The Mad Hatter\'s eternal tea party is what dedicated experimentation looks like. Time works differently in the lab; that is the feature, not the bug.',
        purpose: 'Create safe spaces for experimentation while managing risk',
        assessmentQuestion: 'What percentage of your breakthrough innovations originated from dedicated experimentation environments versus production constraints?',
        strategicGuidance: {
          title: '🎩 Lab on its Own Clock vs. Sprint-Leftover Innovation:',
          strategicApproach: 'Dedicated labs run on their own clock with horizon-allocated portfolios, turning impossible questions into validated breakthroughs.',
          tacticalApproach: 'Innovation is whatever production teams squeeze between sprint commitments, dressed up as hackathon demos that never ship.'
        },
        whatGoesWrong: 'Innovation efforts are scattered and inefficient, with high failure rates and limited learning capture. Resources are wasted on repeated experiments without systematic knowledge building. Breakthrough opportunities are missed due to lack of structured exploration.',
        whatGoesRight: 'Innovation success rates increase dramatically through systematic learning and pattern recognition. Resource efficiency improves as teams build on proven approaches. Breakthrough capabilities emerge from structured experimentation, creating sustained competitive advantages.',
        implementationSteps: [
          'Build dedicated innovation lab environments with rapid provisioning',
          'Create experiment success tracking and pattern extraction systems',
          'Establish innovation-to-production pipelines and graduation criteria',
          'Develop systematic learning capture and knowledge sharing processes',
          'Implement innovation portfolio management and ROI tracking'
        ],
        valueMetrics: 'Hypotheses validated per quarter, options created for market shifts, breakthrough capabilities graduated to production, strategic optionality preserved through downturns'
      }
    ]
  },
  {
    id: 'sustainability',
    title: '🌱 Sustainability Cluster: Future-Ready Architecture',
    shortName: 'Sustainability',
    emoji: '🌱',
    tagline: 'Outlast the disruption.',
    quote: 'The Jabberwocky was defeated not by avoiding it, but by preparing for the unexpected. Strategic architects build resilience into every system.',
    orientation: 'The Sustainability Cluster builds systems that survive the future they are trying to build. The Red Queen runs continuously to keep up with a co-evolving environment. The Tweedles question every assumption through their contrariwise check, so the system learns from itself. The Gryphon, half eagle and half lion, bridges the technologies of today with those of tomorrow. Together they answer the question: what survives the disruption your own innovation creates?',
    cast: 'Red Queen, Tweedles, Gryphon',
    stars: [
      {
        title: '⭐ Resilience Engineering',
        character: 'The Red Queen',
        characterEmoji: '👑',
        articleSlug: 'red-queen-resilience-engineering',
        articleStatus: 'published',
        articleHook: 'It takes all the running you can do, to keep in the same place. Resilience is not robustness. It is sustained adaptation under pressure.',
        purpose: 'Build architectural resilience that enables organizations to thrive through disruption and uncertainty',
        assessmentQuestion: 'How well do your systems maintain operation during market disruptions compared to competitors?',
        strategicGuidance: {
          title: '👑 Practiced Adaptation vs. Brittle Robustness:',
          strategicApproach: 'Systems practice failure on a schedule and encode architecture in fitness functions, gaining capability from every stress.',
          tacticalApproach: 'Teams write better runbooks, document target states, and discover their recovery time only when production fails for real.'
        },
        whatGoesWrong: 'Systems fail catastrophically during market disruptions, causing extensive business impact. Recovery requires massive resources and time. The organization becomes vulnerable to competitive threats during system outages and loses customer trust.',
        whatGoesRight: 'Systems maintain operation during disruptions, providing competitive advantage when others fail. Rapid self-healing capabilities minimize business impact. The organization becomes more resilient and adaptable than competitors, building customer confidence.',
        implementationSteps: [
          'Implement chaos engineering and systematic resilience testing',
          'Build adaptive architecture patterns that self-heal and optimize',
          'Create comprehensive disruption scenario planning and response frameworks',
          'Establish resilience metrics and continuous improvement processes'
        ],
        valueMetrics: 'Up to 80% downtime reduction through digital immune practices, architectural drift caught in CI not committee, ransom payments refused because rebuilds are routine, antifragility proven through chaos rather than asserted in slides'
      },
      {
        title: '⭐ Adaptive Learning Systems',
        character: 'Tweedledum & Tweedledee',
        characterEmoji: '👯',
        articleStatus: 'upcoming',
        articleHook: 'The Tweedles teach contrariwise: every conclusion validated against its inverse. Real adaptation requires the system to question its own reasoning.',
        purpose: 'Create architectures that continuously learn, evolve, and improve based on real-world usage and changing requirements',
        assessmentQuestion: 'Do your systems continuously improve through learning, or require manual updates for changing requirements?',
        strategicGuidance: {
          title: '🧠 Self-Improving vs. Static Architecture Systems:',
          strategicApproach: 'Systems that learn from usage patterns, adapt to changing needs, and optimize performance automatically',
          tacticalApproach: 'Fixed architectures requiring manual updates and struggling to adapt to changing requirements'
        },
        whatGoesWrong: 'Systems become increasingly obsolete as business needs evolve. Manual updates are slow and expensive. Architecture decisions are based on outdated assumptions rather than real-world learning and data.',
        whatGoesRight: 'Systems continuously improve performance and user experience through learning. Architecture adapts automatically to changing business needs. Data-driven insights enable proactive optimization and strategic planning.',
        implementationSteps: [
          'Build comprehensive telemetry and observability systems',
          'Implement machine learning-driven optimization capabilities',
          'Create feedback loops between usage patterns and architectural decisions',
          'Establish continuous learning and adaptation frameworks'
        ],
        valueMetrics: 'Continuously improving system performance, automatic adaptation to changing business needs, data-driven architectural decisions, proactive optimization based on real usage patterns'
      },
      {
        title: '⭐ Future-Proof Foundation Design',
        character: 'The Gryphon',
        characterEmoji: '🦅',
        articleStatus: 'upcoming',
        articleHook: 'The Gryphon is one creature made of two: eagle and lion, sky and earth. Future-Proof Foundation Design bridges today\'s technology and tomorrow\'s without rebuilding the foundation in between.',
        purpose: 'Build architectural foundations that remain viable and valuable as technology and business landscapes evolve',
        assessmentQuestion: 'Can your architecture accommodate new technologies and business models without major restructuring?',
        strategicGuidance: {
          title: '♾️ Evolution-Ready vs. Technology-Locked Architecture:',
          strategicApproach: 'Flexible foundations that accommodate new technologies and business models without major restructuring',
          tacticalApproach: 'Rigid architectures tied to specific technologies that become obsolete and expensive to modernize'
        },
        whatGoesWrong: 'Organizations miss growth opportunities due to technical limitations. Expensive architectural rework is required to adopt new technologies. Competitive position erodes as others adapt faster to market changes and innovation opportunities.',
        whatGoesRight: 'Architecture enables unlimited business growth and technology adoption. New capabilities can be added without fundamental redesign. Organization maintains competitive advantage through technological adaptability and innovation readiness.',
        implementationSteps: [
          'Design abstraction layers that isolate business logic from technology choices',
          'Build modular architectures that support incremental evolution',
          'Create technology evaluation and adoption frameworks',
          'Establish architectural evolution planning and roadmap processes'
        ],
        valueMetrics: 'Seamless technology adoption and business model evolution, reduced modernization costs and risks, sustained competitive advantage through adaptability, unlimited growth potential without architectural constraints'
      }
    ]
  }
];

export const clustersById: Record<string, Cluster> = clusters.reduce((acc, cluster) => {
  acc[cluster.id] = cluster;
  return acc;
}, {} as Record<string, Cluster>);
