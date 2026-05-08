import React from 'react'
import PageLayout from '../components/PageLayout'
import { createSitePath } from '../config/site'
import {
  apiLabSequence,
  atlasCapabilityPillars,
  atlasLinks,
  atlasSignals,
  capstoneOptions,
  deepLearningLabSequence,
  educationCourses,
  educationPrinciples,
  nvidiaCertifiedCourses,
  nvidiaCredentialGroups,
} from '../data/educationData'
import { useScrollAnimations } from '../hooks/useScrollAnimations'
import { useScrollToTop } from '../hooks/usePageLifecycle'
import './EducationPage.css'

const AtlasTeachingFirmGraphic = () => (
  <svg
    className="atlas-flywheel"
    viewBox="0 0 520 280"
    role="img"
    aria-labelledby="atlas-flywheel-title atlas-flywheel-desc"
  >
    <title id="atlas-flywheel-title">ATLAS teaching firm flywheel</title>
    <desc id="atlas-flywheel-desc">
      A loop showing architecture foundations, mentored practice, portfolio evidence,
      phase gates, certification readiness, and department capability.
    </desc>
    <defs>
      <marker
        id="atlas-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" />
      </marker>
    </defs>
    <circle className="atlas-flywheel__ring" cx="260" cy="140" r="92" />
    <path
      className="atlas-flywheel__arc"
      d="M 260 48 A 92 92 0 0 1 352 140"
      markerEnd="url(#atlas-arrow)"
    />
    <path
      className="atlas-flywheel__arc"
      d="M 352 140 A 92 92 0 0 1 260 232"
      markerEnd="url(#atlas-arrow)"
    />
    <path
      className="atlas-flywheel__arc"
      d="M 260 232 A 92 92 0 0 1 168 140"
      markerEnd="url(#atlas-arrow)"
    />
    <path
      className="atlas-flywheel__arc"
      d="M 168 140 A 92 92 0 0 1 260 48"
      markerEnd="url(#atlas-arrow)"
    />

    <g className="atlas-flywheel__core">
      <rect x="196" y="108" width="128" height="64" rx="14" />
      <text x="260" y="133">Teaching</text>
      <text x="260" y="154">Firm</text>
    </g>

    <g className="atlas-flywheel__node" transform="translate(260 30)">
      <rect x="-70" y="-20" width="140" height="40" rx="10" />
      <text>Foundations</text>
    </g>
    <g className="atlas-flywheel__node" transform="translate(418 140)">
      <rect x="-74" y="-20" width="148" height="40" rx="10" />
      <text>Mentored Practice</text>
    </g>
    <g className="atlas-flywheel__node" transform="translate(260 250)">
      <rect x="-76" y="-20" width="152" height="40" rx="10" />
      <text>Portfolio Evidence</text>
    </g>
    <g className="atlas-flywheel__node" transform="translate(102 140)">
      <rect x="-60" y="-20" width="120" height="40" rx="10" />
      <text>Phase Gates</text>
    </g>

    <g className="atlas-flywheel__badge" transform="translate(100 52)">
      <rect x="-46" y="-18" width="92" height="36" rx="18" />
      <text>CITA-F</text>
    </g>
    <g className="atlas-flywheel__badge" transform="translate(420 52)">
      <rect x="-64" y="-18" width="128" height="36" rx="18" />
      <text>Capability</text>
    </g>
  </svg>
)

const EducationPage: React.FC = () => {
  useScrollToTop()
  useScrollAnimations()

  const credentialCount = nvidiaCredentialGroups.reduce(
    (total, group) => total + group.items.length,
    0,
  ) + nvidiaCertifiedCourses.length
  const labCount = apiLabSequence.length + deepLearningLabSequence.length

  return (
    <PageLayout className="site-page education-page">
      <section className="editorial-hero editorial-hero--band education-hero">
        <div className="editorial-hero__inner education-hero__inner">
          <div className="education-hero__copy fade-in">
            <span className="eyebrow education-kicker">Teaching Portfolio</span>
            <h1 className="editorial-hero__title">Inspire Growth</h1>
            <p className="editorial-hero__subtitle">
              Guided by the motto "Inspire Growth," Shawn is passionate about learning,
              adapting, and inspiring innovation in others. With a teaching and coaching
              mindset, he is pursuing a PhD focused on the impact of global events on
              market sentiment while teaching the next generation of computer scientists
              about Web API technologies and Generative AI.
            </p>
            <p className="education-hero__statement">
              We are entering a golden age of engineering capability. This is the education
              side of evidence-led architecture: making complex systems learnable, testable,
              explainable, and safe enough for others to build on. We cannot wait to see what
              this next generation creates.
            </p>
            <div className="education-hero__actions">
              <a href="#atlas-teaching-firm" className="button-primary">
                Explore the Model
                <span className="btn-icon">→</span>
              </a>
              <a href="#education-pathways" className="button-secondary">
                View Pathways
              </a>
            </div>
          </div>

          <div className="glass-panel education-hero__panel fade-in" aria-label="Teaching portfolio highlights">
            <span className="eyebrow panel-label">Capability Portfolio</span>
            <h2>Classroom, practice, and professional learning in one loop.</h2>
            <p>
              The work spans university courses, enterprise architecture residency, applied labs,
              and NVIDIA-certified AI instruction.
            </p>
            <div className="education-stat-grid">
              <div className="stat-tile education-stat">
                <span className="stat-number">{educationCourses.length}</span>
                <span className="stat-label">University Courses</span>
              </div>
              <div className="stat-tile education-stat">
                <span className="stat-number">{labCount}</span>
                <span className="stat-label">Lab Milestones</span>
              </div>
              <div className="stat-tile education-stat">
                <span className="stat-number">12</span>
                <span className="stat-label">ATLAS Graduates</span>
              </div>
              <div className="stat-tile education-stat">
                <span className="stat-number">{credentialCount}</span>
                <span className="stat-label">NVIDIA Credentials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-pathway-section" id="education-pathways" aria-label="Education pathways">
        <div className="content-container">
          <nav className="education-pathway-grid" aria-label="Education page sections">
            <a className="education-pathway-card" href="#atlas-teaching-firm">
              <span className="number-mark">01</span>
              <strong>ATLAS Teaching Firm</strong>
              <small>Enterprise architecture residency</small>
            </a>
            <a className="education-pathway-card" href="#university-courses">
              <span className="number-mark">02</span>
              <strong>University Courses</strong>
              <small>CU Denver teaching tracks</small>
            </a>
            <a className="education-pathway-card" href="#api-labs">
              <span className="number-mark">03</span>
              <strong>API Labs</strong>
              <small>HTTP to deployed product</small>
            </a>
            <a className="education-pathway-card" href="#deep-learning-labs">
              <span className="number-mark">04</span>
              <strong>Deep Learning Labs</strong>
              <small>Models, RAG, agents, ethics</small>
            </a>
            <a className="education-pathway-card" href="#capstone">
              <span className="number-mark">05</span>
              <strong>Capstone Projects</strong>
              <small>Demo-ready engineering stories</small>
            </a>
            <a className="education-pathway-card" href="#nvidia-dli">
              <span className="number-mark">06</span>
              <strong>NVIDIA DLI</strong>
              <small>Certified AI instruction</small>
            </a>
          </nav>
        </div>
      </section>

      <section className="content-section teaching-model-section">
        <div className="content-container teaching-model-layout">
          <div className="teaching-model-copy fade-in">
            <span className="eyebrow">Teaching Model</span>
            <h2>Education as an architecture practice.</h2>
            <p>
              The through-line is simple: help learners see the system, build evidence,
              explain tradeoffs, and carry the capability forward. That is why the coursework
              blends code, tests, deployment, model behavior, ethics, presentation, and
              coaching into one learning loop. In the AI revolution, the scarce skill is not
              access to tools. It is judgment about what to build, how to prove it works, and
              when to trust it.
            </p>
          </div>

          <div className="teaching-principle-grid">
            {educationPrinciples.map((principle, index) => (
              <article className="surface-card interactive-surface teaching-principle-card fade-in" key={principle.title}>
                <div className="principle-card__header">
                  <span className="number-mark">{String(index + 1).padStart(2, '0')}</span>
                  <span>{principle.signal}</span>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section atlas-section" id="atlas-teaching-firm">
        <div className="content-container atlas-layout">
          <div className="atlas-copy fade-in">
            <span className="eyebrow">ATLAS Teaching Firm</span>
            <h2>The teaching hospital model, rebuilt for architecture.</h2>
            <p>
              ATLAS is where the education story gets bigger than a classroom. IASA describes
              the program as an education and experience ecosystem for the architecture profession,
              based on the same teaching hospital logic that develops physicians through structured
              practice, supervision, assessment, and increasing responsibility.
            </p>
            <p>
              At Manulife, that model became real operating infrastructure. The architecture team
              trained on IASA foundations, 20 people earned CITA-F certification to launch the
              Department of Architecture, and the first 12 ATLAS residents graduate in May 2026.
            </p>
            <div className="atlas-link-row">
              {atlasLinks.map((link) => {
                const isExternal = link.url.startsWith('http')
                return (
                  <a
                    href={link.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    key={link.url}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="atlas-proof-panel fade-in">
            <AtlasTeachingFirmGraphic />
            <div className="atlas-signal-grid">
              {atlasSignals.map((signal) => (
                <article className="atlas-signal-card" key={signal.label}>
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                  <p>{signal.description}</p>
                </article>
              ))}
            </div>
            <div className="atlas-pillars">
              {atlasCapabilityPillars.map((pillar) => (
                <span className="tag-pill" key={pillar}>{pillar}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section education-course-section" id="university-courses">
        <div className="content-container">
          <div className="section-heading-row education-section-heading fade-in">
            <div>
              <span className="eyebrow">University Courses</span>
              <h2>Two teaching tracks, one operating model for technical growth.</h2>
            </div>
            <p>
              One course teaches students to build production-minded API products. The other
              teaches them to reason about modern generative systems. Together, they teach a
              habit that matters far beyond the classroom: design, implement, evaluate, and explain.
            </p>
          </div>

          <div className="education-course-grid">
            {educationCourses.map((course) => (
              <article className="surface-card interactive-surface education-course-card fade-in" key={course.code}>
                <div className="course-card__header">
                  <span className="course-code">{course.code}</span>
                  <span className="course-term">{course.term}</span>
                </div>
                <h3>{course.title}</h3>
                <p>{course.focus}</p>
                <div className="course-card__jump-row">
                  {course.code === 'CSCI 3916' ? (
                    <a href="#api-labs">View API Lab Sequence</a>
                  ) : (
                    <a href="#deep-learning-labs">View Deep Learning Labs</a>
                  )}
                </div>
                <div className="course-card__detail">
                  <h4>Learning Outcomes</h4>
                  <ul>
                    {course.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div className="course-card__detail">
                  <h4>Course Arc</h4>
                  <ul>
                    {course.arc.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section lab-section api-lab-section" id="api-labs">
        <div className="content-container">
          <div className="section-heading-row education-section-heading fade-in">
            <div>
              <span className="eyebrow">Web API Labs and Assignments</span>
              <h2>From HTTP literacy to deployed API product.</h2>
            </div>
            <p>
              The Web API sequence moves students from low-level request behavior into secure,
              data-backed, deployed applications. Each milestone leaves a trail a future reviewer
              can follow: code, tests, deployment links, environment notes, and a README that explains the work.
            </p>
          </div>

          <div className="api-lab-timeline">
            {apiLabSequence.map((lab) => (
              <article className="surface-card interactive-surface api-lab-card fade-in" key={lab.id}>
                <div className="api-lab-card__mark">{lab.id}</div>
                <div>
                  <h3>{lab.title}</h3>
                  <p>{lab.summary}</p>
                  <div className="lab-outcome-list">
                    {lab.outcomes.map((outcome) => (
                      <span className="tag-pill" key={outcome}>{outcome}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section lab-section deep-learning-lab-section" id="deep-learning-labs">
        <div className="content-container">
          <div className="section-heading-row education-section-heading fade-in">
            <div>
              <span className="eyebrow">Generative Deep Learning Labs</span>
              <h2>From model mechanics to grounded agentic systems.</h2>
            </div>
            <p>
              The deep learning sequence pairs student presentations with applied labs that
              move through generative model families, transformer applications, RAG, multimodal
              systems, agentic AI, and a dedicated ethics module. The point is not to admire
              models from a distance; it is to understand how they behave, where they fail,
              and what responsible adoption requires.
            </p>
          </div>

          <div className="api-lab-timeline deep-learning-lab-grid">
            {deepLearningLabSequence.map((lab) => (
              <article className="surface-card interactive-surface api-lab-card deep-learning-lab-card fade-in" key={lab.id}>
                <div className="api-lab-card__mark">{lab.id}</div>
                <div>
                  <h3>{lab.title}</h3>
                  <p>{lab.summary}</p>
                  <div className="lab-outcome-list">
                    {lab.outcomes.map((outcome) => (
                      <span className="tag-pill" key={outcome}>{outcome}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section capstone-section" id="capstone">
        <div className="content-container capstone-layout">
          <div className="capstone-copy fade-in">
            <span className="eyebrow">Capstone Practice</span>
            <h2>Students finish by explaining what they built, why it matters, and how it works.</h2>
            <p>
              Final projects require a working API, database, and user interface, plus a 10-15 slide
              presentation with a recorded demo. Teams cover the problem statement, solution, biggest
              challenge, biggest highlight, technology architecture, future development, and repository links.
            </p>
            <p>
              The goal is not just completion. It is professional communication: turning code into
              a defensible story about value, tradeoffs, integration, teamwork, and technical evidence.
            </p>
          </div>

          <div className="capstone-options fade-in" aria-label="Capstone project examples">
            {capstoneOptions.map((option) => (
              <span key={option}>{option}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section nvidia-section" id="nvidia-dli">
        <div className="content-container">
          <div className="nvidia-heading fade-in">
            <span className="eyebrow">NVIDIA Deep Learning Institute</span>
            <h2>Industry-grade AI instruction connected back to the classroom.</h2>
            <p>
              The NVIDIA DLI portfolio extends the same learning model into professional AI education:
              instructor standing first, specialization depth second, and certified course evidence third.
              LLMs, RAG, multimodal systems, agentic AI, diffusion, NLP, model customization, and anomaly
              detection are treated as applied capabilities, not buzzwords.
            </p>
            <a
              href="https://www.nvidia.com/en-us/training/instructor-directory/bio/?instructorId=0038Z000036WJjcQAG"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary nvidia-profile-link"
            >
              View NVIDIA Profile
              <span className="btn-icon">→</span>
            </a>
          </div>

          <div className="nvidia-credential-grid">
            {nvidiaCredentialGroups.map((group) => (
              <article className="surface-card interactive-surface nvidia-card fade-in" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="nvidia-course-links fade-in">
            <div className="nvidia-course-links__header">
              <span className="eyebrow">Certified Course Evidence</span>
              <h3>NVIDIA DLI courses Shawn is certified to teach.</h3>
            </div>
            <div className="nvidia-course-link-grid">
              {nvidiaCertifiedCourses.map((course) => (
                <a
                  className="nvidia-course-link interactive-surface"
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={course.url}
                >
                  <span>{course.title}</span>
                  <strong>View Course</strong>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band education-cta">
        <div className="cta-band__inner fade-in">
          <span className="eyebrow">From Classroom to Practice</span>
          <h2>Education is part of the architecture operating model.</h2>
          <p>
            Courses, labs, coaching, capstones, and certifications become a repeatable way to
            grow talent, sharpen judgment, and help teams build systems they can explain,
            defend, and improve. That is how we prepare engineers for the golden age of
            capability ahead.
          </p>
          <a href={createSitePath('/contact')} className="button-primary button-primary--light">
            Start a Conversation
          </a>
        </div>
      </section>
    </PageLayout>
  )
}

export default EducationPage
