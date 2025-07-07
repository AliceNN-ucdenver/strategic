import React, { useState, useEffect } from 'react'
import ConstellationModal from './ConstellationModal'
import './Constellation.css'

interface ClusterData {
  id: string
  title: string
  stars: string[]
  description: string
  details: StarDetail[]
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
}

interface StarDetail {
  name: string
  purpose: string
  assessmentQuestion: string
  strategicGuidance: {
    title: string
    strategic: string
    tactical: string
  }
  whatGoesWrong: string
  whatGoesRight: string
  implementationSteps: string[]
  valueMetrics: string
}

const clusters: Record<string, ClusterData> = {
  navigation: {
    id: 'navigation',
    title: "Navigation Cluster: Finding Strategic Direction",
    stars: [
      "⭐ Business Value Compass - Align architecture with business outcomes",
      "⭐ Strategic Vision Mapping - Create compelling architectural visions", 
      "⭐ Ecosystem Intelligence - Understand business ecosystems and market dynamics"
    ],
    description: "Like Alice learning to navigate Wonderland's peculiar rules, architects must master the art of translating technical possibilities into business outcomes.",
    position: { top: '50px', left: '50px' },
    details: [
      {
        name: "Business Value Compass",
        purpose: "Establish clear alignment between architectural decisions and business value creation",
        assessmentQuestion: "How do you currently measure the success of your architectural initiatives?",
        strategicGuidance: {
          title: "Strategic vs Tactical",
          strategic: "Create a framework that consistently connects architectural choices to measurable business outcomes",
          tactical: "Define specific metrics and KPIs for each architectural initiative"
        },
        whatGoesWrong: "Architects focus on technical excellence without connecting to business value, leading to solutions that don't drive meaningful outcomes.",
        whatGoesRight: "Every architectural decision is clearly connected to business value, creating trust and enabling better resource allocation.",
        implementationSteps: [
          "Map current architectural initiatives to business outcomes",
          "Establish value metrics for each major architectural component",
          "Create a decision framework that includes business impact assessment",
          "Implement regular value measurement and reporting"
        ],
        valueMetrics: "Time to market improvement, cost reduction percentage, revenue enablement, risk mitigation value"
      },
      {
        name: "Strategic Vision Mapping",
        purpose: "Create compelling architectural visions that inspire and guide teams",
        assessmentQuestion: "How clearly can your teams articulate the architectural vision?",
        strategicGuidance: {
          title: "Strategic vs Tactical",
          strategic: "Develop organizational capability for creating and communicating compelling visions",
          tactical: "Create a clear, actionable vision for your current architectural initiative"
        },
        whatGoesWrong: "Visions are either too abstract to be actionable or too detailed to be inspiring.",
        whatGoesRight: "Teams are energized by a clear, compelling vision that guides daily decisions.",
        implementationSteps: [
          "Engage stakeholders in collaborative visioning sessions",
          "Create multiple levels of vision detail for different audiences",
          "Connect vision to concrete user experiences and business outcomes",
          "Establish regular vision communication and refinement practices"
        ],
        valueMetrics: "Team alignment scores, decision clarity, time to consensus on architectural choices"
      }
    ]
  },
  velocity: {
    id: 'velocity',
    title: "Velocity Cluster: Accelerating Delivery",
    stars: [
      "⭐ Flow Optimization - Remove friction from delivery pipelines",
      "⭐ Continuous Architecture - Evolve systems incrementally",
      "⭐ Quality Gates - Embed quality in the development process"
    ],
    description: "Speed without direction is chaos, but direction without speed is irrelevance. Master both.",
    position: { top: '200px', right: '100px' },
    details: [
      {
        name: "Flow Optimization",
        purpose: "Systematically identify and remove bottlenecks in software delivery",
        assessmentQuestion: "What is your current deployment frequency and lead time?",
        strategicGuidance: {
          title: "Strategic vs Tactical",
          strategic: "Build organizational capability for continuous flow optimization",
          tactical: "Identify and remove the current biggest bottleneck"
        },
        whatGoesWrong: "Teams optimize locally without understanding the end-to-end flow, creating new bottlenecks elsewhere.",
        whatGoesRight: "The entire value stream flows smoothly with predictable, fast delivery cycles.",
        implementationSteps: [
          "Map the current value stream from idea to production",
          "Measure flow metrics at each stage",
          "Identify the constraint limiting overall flow",
          "Apply systematic improvement to the constraint"
        ],
        valueMetrics: "Lead time reduction, deployment frequency increase, change failure rate, MTTR improvement"
      }
    ]
  },
  enablement: {
    id: 'enablement',
    title: "Enablement Cluster: Empowering Teams",
    stars: [
      "⭐ Platform Thinking - Create leverage through reusable capabilities",
      "⭐ Developer Experience - Optimize for developer productivity",
      "⭐ Knowledge Systems - Scale expertise across the organization"
    ],
    description: "Great architects don't just build systems, they build the builders. Enable others to excel.",
    position: { bottom: '150px', left: '150px' },
    details: [
      {
        name: "Platform Thinking",
        purpose: "Create reusable capabilities that accelerate team productivity",
        assessmentQuestion: "How much time do teams spend on undifferentiated work?",
        strategicGuidance: {
          title: "Strategic vs Tactical",
          strategic: "Build platform capabilities that enable other teams to move faster",
          tactical: "Identify common patterns and create reusable solutions"
        },
        whatGoesWrong: "Platforms become ivory towers disconnected from real user needs, creating more friction than value.",
        whatGoesRight: "Teams can focus on business logic while the platform handles common concerns seamlessly.",
        implementationSteps: [
          "Interview teams to understand common pain points",
          "Identify patterns that could be abstracted into platform services",
          "Build MVPs with direct team collaboration",
          "Measure adoption and impact continuously"
        ],
        valueMetrics: "Developer productivity increase, time to market improvement, reduced operational overhead"
      }
    ]
  },
  sustainability: {
    id: 'sustainability',
    title: "Sustainability Cluster: Building for the Long Term",
    stars: [
      "⭐ Technical Debt Management - Balance speed with maintainability",
      "⭐ Evolutionary Design - Build systems that can adapt and grow",
      "⭐ Organizational Alignment - Ensure Conway's Law works for you"
    ],
    description: "The best architecture is the one that can evolve. Build for change, not perfection.",
    position: { bottom: '50px', right: '50px' },
    details: [
      {
        name: "Technical Debt Management",
        purpose: "Systematically manage the balance between speed and maintainability",
        assessmentQuestion: "How do you currently track and prioritize technical debt?",
        strategicGuidance: {
          title: "Strategic vs Tactical",
          strategic: "Create organizational practices that prevent debt accumulation",
          tactical: "Identify and address the highest-impact technical debt"
        },
        whatGoesWrong: "Debt accumulates invisibly until it becomes a crisis that requires major refactoring or rewrites.",
        whatGoesRight: "Technical debt is managed as a strategic asset, with conscious decisions about when to incur and pay it down.",
        implementationSteps: [
          "Establish clear definitions and categories for technical debt",
          "Implement tooling to track debt accumulation",
          "Create decision frameworks for debt vs. feature trade-offs",
          "Build debt paydown into regular development cycles"
        ],
        valueMetrics: "Maintenance cost reduction, development velocity maintenance, defect rate improvement"
      }
    ]
  }
}

const Constellation: React.FC = () => {
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null)
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number}>>([])

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }))
    setParticles(newParticles)

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.vy + window.innerHeight) % window.innerHeight
      })))
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  const handleClusterClick = (clusterId: string) => {
    setSelectedCluster(clusterId)
  }

  const handleCloseModal = () => {
    setSelectedCluster(null)
  }

  return (
    <div className="constellation-container">
      {/* Particle background */}
      <div className="particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`
            }}
          />
        ))}
      </div>

      {/* Constellation clusters */}
      <div className="constellation">
        {/* Navigation Cluster */}
        <div className="star-cluster navigation-cluster interactive" onClick={() => handleClusterClick('navigation')}>
          <div className="star"></div>
          <div className="cluster-label">Navigation</div>
        </div>
        
        {/* Velocity Cluster */}
        <div className="star-cluster velocity-cluster interactive" onClick={() => handleClusterClick('velocity')}>
          <div className="star"></div>
          <div className="cluster-label">Velocity</div>
        </div>
        
        {/* Enablement Cluster */}
        <div className="star-cluster enablement-cluster interactive" onClick={() => handleClusterClick('enablement')}>
          <div className="star"></div>
          <div className="cluster-label">Enablement</div>
        </div>
        
        {/* Sustainability Cluster */}
        <div className="star-cluster sustainability-cluster interactive" onClick={() => handleClusterClick('sustainability')}>
          <div className="star"></div>
          <div className="cluster-label">Sustainability</div>
        </div>
      </div>

      {/* Modal */}
      {selectedCluster && (
        <ConstellationModal
          cluster={clusters[selectedCluster]}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Constellation
