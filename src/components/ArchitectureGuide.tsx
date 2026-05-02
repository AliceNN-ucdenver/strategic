import React from 'react';
import StarGrid from './StarGrid';
import ClusterGuides from './ClusterGuides';
import { clusters as clustersData } from '../data/clusters';
import './ArchitectureGuide.css';

const ArchitectureGuide: React.FC = () => {
  const formatClusterTitle = (title: string) => title.replace(/^[^\w\s]+\s*/, '');

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

          <div className="transformation-arc executive-choice">
            {/* Stage 1: Band-Aid (where most enterprises are) */}
            <div className="choice-comparison">
              <div className="transformation-stage stage-band-aid">
                <span className="stage-label stage-label-trap">Current Pattern</span>
                <div className="stage-header">
                  <div className="stage-marker" aria-hidden="true">01</div>
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

              {/* Stage 2: Launchpad (where the framework takes you) */}
              <div className="transformation-stage stage-launchpad">
                <span className="stage-label stage-label-answer">Target Pattern</span>
                <div className="stage-header">
                  <div className="stage-marker" aria-hidden="true">02</div>
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

            {/* The connecting bridge: four pillars as the literal mechanism */}
            <div className="transformation-bridge">
              <div className="bridge-header">
                <span className="bridge-label">Operating Model</span>
                <h3>The Four-Pillar Convergence</h3>
                <p>Governance running at AI velocity instead of meeting cadence.</p>
              </div>
              <div className="bridge-pillars">
                <div className="pillar-card pillar-architecture">
                  <span className="pillar-token">ARCH</span>
                  <h4>Architecture as Code</h4>
                  <p>Fitness functions enforce architectural intent on every commit.</p>
                </div>
                <div className="pillar-card pillar-risk">
                  <span className="pillar-token">RISK</span>
                  <h4>Risk as Code</h4>
                  <p>Federated governance evaluates risk continuously, not in periodic audits.</p>
                </div>
                <div className="pillar-card pillar-operations">
                  <span className="pillar-token">OPS</span>
                  <h4>Operations as Code</h4>
                  <p>Golden paths, guardrails, and safety nets reserve manual review for novel decisions.</p>
                </div>
                <div className="pillar-card pillar-security">
                  <span className="pillar-token">SEC</span>
                  <h4>Security as Code</h4>
                  <p>Admission controllers reject non-compliant deployments instantly, with remediation guidance.</p>
                </div>
              </div>
            </div>

            {/* The Metis quote becomes the closing proof point once the arc is clear */}
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
                  <span className={`cluster-header-mark cluster-header-mark-${cluster.id}`} aria-hidden="true" />
                  <h3>{formatClusterTitle(cluster.title)}</h3>
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
