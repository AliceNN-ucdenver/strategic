import React from 'react';
import StarGrid from './StarGrid';
import './ArchitectureGuide.css';

interface StarDetail {
  title: string;
  purpose: string;
  assessmentQuestion: string;
  strategicGuidance: {
    title: string;
    strategicApproach: string;
    tacticalApproach: string;
  };
  whatGoesWrong: string;
  whatGoesRight: string;
  implementationSteps: string[];
  valueMetrics: string;
  businessImpact?: string;
}

interface ClusterData {
  id: string;
  title: string;
  quote: string;
  stars: StarDetail[];
}

const ArchitectureGuide: React.FC = () => {
  const clustersData: ClusterData[] = [
    {
      id: 'navigation',
      title: '🧭 Navigation Cluster: Finding Strategic Direction',
      quote: 'Like Alice learning to navigate Wonderland\'s peculiar rules, architects must master translating technical possibilities into business transformation.',
      stars: [
        {
          title: '⭐ Business Value Compass',
          purpose: 'Establish clear alignment between architectural decisions and business value creation',
          assessmentQuestion: 'How do you currently measure the success of your architectural initiatives?',
          strategicGuidance: {
            title: '🚀 Strategic vs. Tactical AI Implementation:',
            strategicApproach: 'AI enables new business models and revenue streams through architectural platforms',
            tacticalApproach: 'AI automations layered over existing processes without business model innovation'
          },
          whatGoesWrong: 'Architecture becomes an expensive cost center focused on technical compliance rather than business enablement. Teams deliver sophisticated solutions that fail to move business metrics, leading to budget cuts and reduced organizational influence.',
          whatGoesRight: 'Architecture becomes a strategic business enabler with clear ROI. Every technical decision directly contributes to revenue growth, competitive advantage, and market leadership, making architecture indispensable to business success.',
          implementationSteps: [
            'Establish revenue attribution tracking for all architectural initiatives',
            'Create executive dashboards linking technical decisions to business outcomes',
            'Develop ROI measurement frameworks for architectural investments',
            'Build business value scorecards with quarterly review cycles'
          ],
          valueMetrics: 'Direct revenue attribution to architectural decisions, strong ROI on architecture investments, architectural influence on strategic business planning, faster time-to-market for new capabilities'
        },
        {
          title: '⭐ Strategic Vision Mapping',
          purpose: 'Create compelling architectural visions aligned with long-term business strategy',
          assessmentQuestion: 'Does your architectural vision shape industry direction or react to market changes?',
          strategicGuidance: {
            title: '🎨 Visionary vs. Reactive Architecture Planning:',
            strategicApproach: 'Architecture vision shapes industry direction and creates market opportunities',
            tacticalApproach: 'Architecture responds to immediate business requests without strategic coherence'
          },
          whatGoesWrong: 'Organization becomes reactive to market changes, losing competitive positioning. Architecture decisions conflict with each other, creating technical debt and reducing agility. Leadership loses confidence in technology\'s strategic value.',
          whatGoesRight: 'Organization becomes a market leader that shapes industry standards. Architecture enables rapid adaptation to opportunities while maintaining coherence. Technology becomes a primary driver of competitive advantage and strategic differentiation.',
          implementationSteps: [
            'Develop comprehensive architectural vision documents aligned with business strategy',
            'Create visual strategy maps linking technology to business outcomes',
            'Establish regular strategic architecture planning sessions with C-suite',
            'Build scenario planning capabilities for technology futures'
          ],
          valueMetrics: 'Market leadership positioning, executive confidence in technology strategy, accelerated strategic initiative success, enhanced investor and stakeholder confidence'
        },
        {
          title: '⭐ Ecosystem Intelligence',
          purpose: 'Understand business ecosystems and competitive landscapes for informed decisions',
          assessmentQuestion: 'How well does your architecture enable rapid response to market disruptions and competitive threats?',
          strategicGuidance: {
            title: '🌐 Ecosystem-Aware vs. Siloed Architecture Thinking:',
            strategicApproach: 'Architecture decisions consider full value chain and competitive ecosystem impacts',
            tacticalApproach: 'Architecture focuses on internal optimization without external context awareness'
          },
          whatGoesWrong: 'Organization is blindsided by market disruptions and competitive moves. Architecture investments miss strategic opportunities and fail to address ecosystem vulnerabilities. Partnerships and integrations become complex and expensive.',
          whatGoesRight: 'Organization anticipates and adapts to market changes before competitors. Architecture enables seamless ecosystem participation and partnership success. Strategic investments align with market evolution and competitive dynamics.',
          implementationSteps: [
            'Create detailed business ecosystem maps and dependency analysis',
            'Establish competitive architecture intelligence programs',
            'Build market trend analysis capabilities and scenario planning',
            'Develop ecosystem resilience measurement frameworks'
          ],
          valueMetrics: 'Rapid response to market changes, successful ecosystem partnerships, competitive advantage through market intelligence, resilience against industry disruptions'
        }
      ]
    },
    {
      id: 'velocity',
      title: '⚡ Velocity Cluster: Accelerating Strategic Delivery',
      quote: 'The White Rabbit was always late because he followed linear thinking. Strategic architects enable exponential innovation velocity.',
      stars: [
        {
          title: '⭐ Innovation Acceleration Engine',
          purpose: 'Create architectural patterns that dramatically accelerate innovation',
          assessmentQuestion: 'How quickly can your architecture enable new capabilities from concept to production?',
          strategicGuidance: {
            title: '⚡ Platform-Enabled vs. Project-Based Innovation:',
            strategicApproach: 'Reusable platforms and patterns enable rapid experimentation and scaling',
            tacticalApproach: 'Each innovation requires custom development and infrastructure setup'
          },
          whatGoesWrong: 'Innovation becomes slow and expensive as teams reinvent solutions. Organizations miss market opportunities while competitors capture first-mover advantages. Development teams become frustrated with repetitive, low-value work.',
          whatGoesRight: 'Innovation velocity accelerates dramatically as teams focus on value creation rather than infrastructure. Organizations capture more market opportunities and achieve competitive advantage through speed. Development teams thrive with empowering tools and platforms.',
          implementationSteps: [
            'Build comprehensive pattern libraries with reference implementations',
            'Create self-service platforms reducing development friction',
            'Establish innovation labs with rapid prototyping capabilities',
            'Implement continuous delivery pipelines with automated validation'
          ],
          valueMetrics: 'Dramatically faster concept-to-production cycles, higher experiment success rates, increased market opportunity capture, enhanced developer productivity and satisfaction'
        },
        {
          title: '⭐ Pattern Recognition Mastery',
          purpose: 'Develop sophisticated pattern recognition preventing architectural anti-patterns',
          assessmentQuestion: 'Do teams repeatedly solve the same problems, or do they leverage proven architectural patterns?',
          strategicGuidance: {
            title: '🎯 Pattern-Driven vs. Ad-Hoc Architecture Development:',
            strategicApproach: 'Systematic pattern recognition and reuse across domains and projects',
            tacticalApproach: 'Custom solutions reinvented for each project without pattern consideration'
          },
          whatGoesWrong: 'Teams repeatedly solve the same problems, increasing costs and reducing quality. Anti-patterns accumulate creating technical debt. Knowledge remains siloed, limiting organizational learning and capability development.',
          whatGoesRight: 'Development costs decrease significantly through proven pattern reuse. Solution quality improves through battle-tested approaches. Organizational knowledge compounds, creating sustainable competitive advantages through architectural excellence.',
          implementationSteps: [
            'Develop comprehensive pattern libraries with success metrics',
            'Implement pattern reuse tracking and optimization systems',
            'Create pattern recognition training programs for architects',
            'Build automated pattern suggestion and anti-pattern detection systems'
          ],
          valueMetrics: 'Significant development cost reduction, improved solution quality and reliability, accelerated delivery through proven patterns, enhanced organizational learning and knowledge sharing'
        },
        {
          title: '⭐ Talent Magnetism Force',
          purpose: 'Create environments that attract and retain exceptional technical talent',
          assessmentQuestion: 'Does your organization attract industry-leading talent or struggle with technical recruitment?',
          strategicGuidance: {
            title: '🌟 Talent-Magnetic vs. Talent-Repelling Architecture Culture:',
            strategicApproach: 'Cutting-edge architecture and empowering environments that attract industry leaders',
            tacticalApproach: 'Legacy constraints and bureaucratic processes that frustrate high-performers'
          },
          whatGoesWrong: 'Top talent chooses competitors offering better technical environments. High recruiting and replacement costs drain resources. Remaining teams struggle with capability gaps and declining technical standards.',
          whatGoesRight: 'Organization becomes a destination for industry-leading talent. High retention rates preserve institutional knowledge and relationships. Exceptional teams deliver breakthrough innovations and competitive advantages.',
          implementationSteps: [
            'Build compelling technical career development programs',
            'Create external speaking and thought leadership opportunities',
            'Establish innovative architecture challenges and hackathons',
            'Develop mentorship programs and communities of practice'
          ],
          valueMetrics: 'Exceptional talent retention and attraction, reduced hiring and replacement costs, significantly higher team productivity, enhanced innovation capacity and technical excellence'
        }
      ]
    },
    {
      id: 'enablement',
      title: '🔧 Enablement Cluster: Distributed Strategic Capability',
      quote: 'Alice learned that Wonderland\'s magic came from combining impossible things in logical ways. Modern architects synthesize business needs with technical possibilities.',
      stars: [
        {
          title: '⭐ Business-Technology Synthesis',
          purpose: 'Bridge business strategy and technical architecture as true business partners',
          assessmentQuestion: 'Do business executives actively seek your input when making strategic decisions, or are you brought in only for implementation?',
          strategicGuidance: {
            title: '🤝 Strategic Partnership vs. Order-Taking Service:',
            strategicApproach: 'Architecture team co-creates business strategy and influences market direction',
            tacticalApproach: 'Architecture team implements predetermined solutions without strategic input'
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
          valueMetrics: 'Strategic Influence Score >85% (significant impact on business decisions), Initiative Success Rate 90%+ (preventing failed projects), Business Partnership Value 4x ROI (substantial strategic contribution)',
          businessImpact: 'Strategic architecture partnerships deliver 4x higher business value, reduce strategic initiative failure rates by 65%, and accelerate market adaptation by 80%.'
        },
        {
          title: '⭐ Autonomous Governance Design',
          purpose: 'Create governance that empowers innovation through automated guardrails',
          assessmentQuestion: 'Does your governance framework accelerate delivery while ensuring compliance, or does it create bottlenecks and delays?',
          strategicGuidance: {
            title: '🛡️ Automated Guardrails vs. Manual Gates:',
            strategicApproach: 'Policy-as-code enabling rapid, compliant innovation at scale',
            tacticalApproach: 'Human-dependent approvals creating bottlenecks and inconsistent enforcement'
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
          valueMetrics: 'Compliance Overhead Reduction significantly (substantial efficiency savings), Delivery Acceleration substantially (faster time-to-market), Audit Readiness considerably (avoiding compliance penalties)',
          businessImpact: 'Autonomous governance reduces compliance overhead significantly, accelerates delivery substantially, and improves audit readiness considerably while maintaining risk management effectiveness.'
        },
        {
          title: '⭐ Innovation Incubation Labs',
          purpose: 'Create safe spaces for experimentation while managing risk',
          assessmentQuestion: 'What percentage of your breakthrough innovations originated from dedicated experimentation environments versus production constraints?',
          strategicGuidance: {
            title: '🧪 Systematic Innovation vs. Random Experimentation:',
            strategicApproach: 'Structured labs with clear learning objectives and business outcome tracking',
            tacticalApproach: 'Ad-hoc innovation efforts without systematic learning or value capture'
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
          valueMetrics: 'Innovation Success Rate substantially higher (significant value from successful experiments), Innovation Cost Reduction substantially (considerable efficiency savings), Breakthrough Solution Rate significantly higher (substantial revenue from innovations)',
          businessImpact: 'Structured innovation labs achieve significantly higher experiment success rates, reduce innovation costs substantially, and generate considerably more breakthrough solutions than ad-hoc approaches.'
        }
      ]
    },
    {
      id: 'sustainability',
      title: '🌱 Sustainability Cluster: Future-Ready Architecture',
      quote: 'The Jabberwocky was defeated not by avoiding it, but by preparing for the unexpected. Strategic architects build resilience into every system.',
      stars: [
        {
          title: '⭐ Resilience Engineering',
          purpose: 'Build architectural resilience that enables organizations to thrive through disruption and uncertainty',
          assessmentQuestion: 'How well do your systems maintain operation during market disruptions compared to competitors?',
          strategicGuidance: {
            title: '🛡️ Antifragile vs. Brittle Architecture Design:',
            strategicApproach: 'Systems that grow stronger from stress, learn from failures, and adapt to unexpected challenges',
            tacticalApproach: 'Rigid systems that break under stress, fail catastrophically, and struggle with change'
          },
          whatGoesWrong: 'Systems fail catastrophically during market disruptions, causing extensive business impact. Recovery requires massive resources and time. The organization becomes vulnerable to competitive threats during system outages and loses customer trust.',
          whatGoesRight: 'Systems maintain operation during disruptions, providing competitive advantage when others fail. Rapid self-healing capabilities minimize business impact. The organization becomes more resilient and adaptable than competitors, building customer confidence.',
          implementationSteps: [
            'Implement chaos engineering and systematic resilience testing',
            'Build adaptive architecture patterns that self-heal and optimize',
            'Create comprehensive disruption scenario planning and response frameworks',
            'Establish resilience metrics and continuous improvement processes'
          ],
          valueMetrics: 'Superior system uptime during market disruptions, rapid recovery from failures, competitive advantage through reliability, enhanced customer trust and market confidence'
        },
        {
          title: '⭐ Adaptive Learning Systems',
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

  return (
    <section className="constellation-detail" id="constellation">
      <div className="constellation-detail-container">
        <div className="section-header fade-in">
          <h2>The Architecture Constellation Guide</h2>
          <p>Navigate AI as transformation enabler versus band-aid solution across your enterprise ecosystem</p>
        </div>
        
        {/* AI Strategy Navigation */}
        <div className="ai-strategy-section">
          <div className="strategy-grid">
            <div className="strategy-card band-aid">
              <div className="strategy-icon">🩹</div>
              <h3>AI as Band-Aid</h3>
              <div className="warning-indicators">
                <h4>Warning Signs:</h4>
                <ul>
                  <li>AI layered over legacy processes without redesign</li>
                  <li>Technical debt accumulation with AI patches</li>
                  <li>Isolated AI solutions creating new silos</li>
                  <li>Focus on automation without transformation</li>
                  <li>Short-term fixes masking systemic issues</li>
                </ul>
              </div>
              <div className="outcome">
                <strong>Outcome:</strong> Temporary improvements, increased complexity, missed transformation opportunities
              </div>
            </div>
            
            <div className="strategy-card launchpad">
              <div className="strategy-icon">🚀</div>
              <h3>AI as Transformation Launchpad</h3>
              <div className="success-indicators">
                <h4>Success Patterns:</h4>
                <ul>
                  <li>AI enables fundamental process redesign</li>
                  <li>Legacy modernization driven by AI capabilities</li>
                  <li>Integrated AI platforms spanning business domains</li>
                  <li>Focus on business model innovation</li>
                  <li>Systematic capability transformation</li>
                </ul>
              </div>
              <div className="outcome">
                <strong>Outcome:</strong> Sustainable competitive advantage, operational excellence, innovation acceleration
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Wisdom Quote */}
        <div className="architecture-quote">
          <blockquote>
            <p>"Every line of code that fixes something rather than makes something new creates technical debt. Every integration pattern we build to work around silos rather than eliminate them decreases our agility. We end up spending more time maintaining and integrating systems than evolving them."</p>
            <cite>— Conway's Law in Practice: Modern Software Architecture</cite>
          </blockquote>
        </div>

        {/* Constellation Detail Grid */}
        <div className="constellation-clusters">
          {clustersData.map((cluster) => (
            <div key={cluster.id} className={`cluster-detail ${cluster.id}-detail`} id={cluster.id}>
              <div className="cluster-header">
                <h3>{cluster.title}</h3>
                <p className="cluster-quote">"{cluster.quote}"</p>
              </div>
              <StarGrid stars={cluster.stars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureGuide;
