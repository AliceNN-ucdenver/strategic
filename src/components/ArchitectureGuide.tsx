import React from 'react';
import StarGrid from './StarGrid';
import ClusterGuides from './ClusterGuides';
import { clusters as clustersData } from '../data/clusters';
import './ArchitectureGuide.css';

const ArchitectureGuide: React.FC = () => {
  return (
    <>
      {/* The Strategic Choice — band-aid vs launchpad framing */}
      <section className="strategic-choice" id="strategic-choice">
        <div className="strategic-choice-container">
          <div className="section-header fade-in">
            <h2>The Strategic Choice</h2>
            <p>
              Every architecture decision in 2026 is also an AI strategy decision. The framework starts with the choice that shapes everything else.
            </p>
          </div>

          {/* Transformation arc: Quote (thesis) → Band-aid → Four Pillars (bridge) → Launchpad */}
          <div className="transformation-arc">

            {/* The Metis quote sets up the section's thesis */}
            <div className="transformation-quote">
              <blockquote>
                <p>"A target state tells teams where they should end up. A platform launchpad gives them the vehicle to get there, and beyond."</p>
                <cite>
                  — Shawn McCarthy, <em>From Gatekeepers to Launchpads</em>, Metis (IASA Global), April 2026.{' '}
                  <a
                    href="https://education.iasaglobal.org/whatsnew/articles/699d47860003304f932d"
                    className="quote-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the full article →
                  </a>
                </cite>
              </blockquote>
            </div>

            {/* Stage 1: Band-Aid (where most enterprises are) */}
            <div className="transformation-stage stage-band-aid">
              <span className="stage-label stage-label-trap">The Trap</span>
              <div className="stage-header">
                <div className="stage-icon">🩹</div>
                <div className="stage-titles">
                  <h3>AI as Band-Aid</h3>
                  <p className="stage-subtitle">Where most enterprises are today.</p>
                </div>
              </div>
              <p className="stage-thesis">"Automation without transformation."</p>
              <ul className="stage-points">
                <li>AI layered over legacy processes without redesign</li>
                <li>Technical debt compounds invisibly with each AI patch</li>
                <li>Isolated solutions create new silos instead of removing them</li>
              </ul>
              <div className="stage-outcome">
                <strong>Outcome:</strong> Temporary wins, mounting complexity, missed transformation.
              </div>
            </div>

            {/* The connecting bridge: four pillars as the literal mechanism */}
            <div className="transformation-bridge">
              <span className="bridge-label">The Bridge</span>
              <div className="bridge-header">
                <h3>The Four-Pillar Convergence</h3>
                <p>Governance running at AI velocity instead of meeting cadence.</p>
              </div>
              <div className="bridge-pillars">
                <div className="pillar-card pillar-architecture">
                  <div className="pillar-icon">🏗️</div>
                  <h4>Architecture as Code</h4>
                  <p>Fitness functions enforce architectural intent on every commit.</p>
                </div>
                <div className="pillar-card pillar-risk">
                  <div className="pillar-icon">🛡️</div>
                  <h4>Risk as Code</h4>
                  <p>Federated governance evaluates risk continuously, not in periodic audits.</p>
                </div>
                <div className="pillar-card pillar-operations">
                  <div className="pillar-icon">⚙️</div>
                  <h4>Operations as Code</h4>
                  <p>Golden paths, guardrails, and safety nets reserve manual review for novel decisions.</p>
                </div>
                <div className="pillar-card pillar-security">
                  <div className="pillar-icon">🔒</div>
                  <h4>Security as Code</h4>
                  <p>Admission controllers reject non-compliant deployments instantly, with remediation guidance.</p>
                </div>
              </div>
            </div>

            {/* Stage 2: Launchpad (where the framework takes you) */}
            <div className="transformation-stage stage-launchpad">
              <span className="stage-label stage-label-answer">The Answer</span>
              <div className="stage-header">
                <div className="stage-icon">🚀</div>
                <div className="stage-titles">
                  <h3>AI as Transformation Launchpad</h3>
                  <p className="stage-subtitle">Where the framework takes you.</p>
                </div>
              </div>
              <p className="stage-thesis">"Innovation through integration."</p>
              <ul className="stage-points">
                <li>AI enables fundamental process redesign, not just process speed-up</li>
                <li>Integrated platforms span business domains instead of fragmenting them</li>
                <li>Business model innovation, not just operational automation</li>
              </ul>
              <div className="stage-outcome">
                <strong>Outcome:</strong> Sustainable competitive advantage, operational excellence, innovation acceleration.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Four Clusters — deep dives per cluster */}
      <section className="constellation-detail" id="constellation">
        <div className="constellation-detail-container">
          <div className="section-header fade-in">
            <h2>The Four Clusters</h2>
            <p>
              Twelve stars organized into four practices. Each cluster is taught by Wonderland characters whose stories illuminate the work.
            </p>
          </div>

          <div className="constellation-clusters">
            {clustersData.map((cluster) => (
              <div key={cluster.id} className={`cluster-detail ${cluster.id}-detail`} id={cluster.id}>
                <div className="cluster-header">
                  <h3>{cluster.title}</h3>
                  <p className="cluster-quote">"{cluster.quote}"</p>
                </div>
                <StarGrid stars={cluster.stars} />
                <ClusterGuides stars={cluster.stars} clusterShortName={cluster.shortName} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchitectureGuide;
