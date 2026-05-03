import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Cluster, Star } from '../data/clusters'
import { scrollToElementId } from '../hooks/usePageLifecycle'
import ModalShell from './ui/ModalShell'
import './ConstellationModal.css'

interface ConstellationModalProps {
  cluster?: Cluster
  star?: Star
  onClose: () => void
  onStarClick?: (star: Star) => void
}

const ConstellationModal: React.FC<ConstellationModalProps> = ({
  cluster,
  star,
  onClose,
  onStarClick
}) => {
  const navigate = useNavigate()

  const handleExploreInDetail = (clusterId: string) => {
    onClose()
    window.setTimeout(() => {
      scrollToElementId(clusterId, {
        behavior: 'smooth',
        headerOffset: 120,
      })
    }, 100)
  }

  // Star detail view (when a star card is clicked)
  if (star) {
    return (
      <ModalShell
        isOpen
        onClose={onClose}
        ariaLabel={`${star.title} details`}
        panelClassName="star-modal"
      >
          <h2 className="star-title">{star.title}</h2>

          <div className="assessment-question">
            <h3>Key Assessment Question</h3>
            <p>"{star.assessmentQuestion}"</p>
          </div>

          {/* The Two Paths — unified comparison: approach + its consequence per column */}
          <div className="two-paths">
            <div className="two-paths-header">
              <span className="two-paths-label">The Two Paths</span>
              <h3 className="two-paths-title">{star.strategicGuidance.title}</h3>
            </div>
            <div className="two-paths-grid">
              <div className="path-card path-tactical">
                <div className="path-header">
                  <span className="path-icon">⚠</span>
                  <span className="path-name">Tactical Path</span>
                </div>
                <div className="path-section">
                  <div className="path-section-label">The Approach</div>
                  <p>{star.strategicGuidance.tacticalApproach}</p>
                </div>
                <div className="path-divider">
                  <span className="path-divider-arrow">↓</span>
                </div>
                <div className="path-section">
                  <div className="path-section-label">This Leads To</div>
                  <p>{star.whatGoesWrong}</p>
                </div>
              </div>

              <div className="path-card path-strategic">
                <div className="path-header">
                  <span className="path-icon">✓</span>
                  <span className="path-name">Strategic Path</span>
                </div>
                <div className="path-section">
                  <div className="path-section-label">The Approach</div>
                  <p>{star.strategicGuidance.strategicApproach}</p>
                </div>
                <div className="path-divider">
                  <span className="path-divider-arrow">↓</span>
                </div>
                <div className="path-section">
                  <div className="path-section-label">This Leads To</div>
                  <p>{star.whatGoesRight}</p>
                  <p className="path-outcomes">
                    <span className="path-outcomes-label">Outcomes:</span>{' '}
                    {star.valueMetrics}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="implementation-guide">
            <h3>Implementation Steps</h3>
            <ol>
              {star.implementationSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
      </ModalShell>
    )
  }

  // Cluster orientation/preview view
  if (cluster) {
    return (
      <ModalShell
        isOpen
        onClose={onClose}
        ariaLabel={`${cluster.title} cluster`}
        panelClassName="cluster-modal"
      >
          <h2 className="cluster-title">{cluster.title}</h2>
          <p className="cluster-quote">"{cluster.quote}"</p>

          <p className="cluster-orientation">{cluster.orientation}</p>

          <h3 className="cluster-stars-heading">Three Stars in this Cluster</h3>
          <div className="cluster-stars-grid">
            {cluster.stars.map((s, index) => (
              <div
                key={index}
                className={`cluster-star-card ${s.articleStatus === 'upcoming' ? 'is-upcoming' : ''}`}
                onClick={() => {
                  if (s.articleStatus === 'published' && s.articleSlug) {
                    onClose()
                    navigate(`/blog/${s.articleSlug}`)
                  } else if (onStarClick) {
                    onStarClick(s)
                  }
                }}
              >
                {s.character && (
                  <div className="cluster-star-character">
                    <span className="cluster-star-emoji">{s.characterEmoji}</span>
                    <span className="cluster-star-charname">{s.character}</span>
                  </div>
                )}
                <h4 className="cluster-star-title">{s.title.replace('⭐ ', '')}</h4>
                {s.articleHook && (
                  <p className="cluster-star-hook">"{s.articleHook}"</p>
                )}
                {s.articleStatus === 'published' && s.articleSlug && (
                  <span className="cluster-star-cta">Read the guide →</span>
                )}
                {s.articleStatus === 'upcoming' && (
                  <span className="cluster-star-cta is-upcoming">Coming soon</span>
                )}
                {!s.articleSlug && s.articleStatus !== 'upcoming' && (
                  <span className="cluster-star-cta">View details →</span>
                )}
              </div>
            ))}
          </div>

          <div className="modal-actions">
            <button
              onClick={() => handleExploreInDetail(cluster.id)}
              className="cluster-action-primary"
            >
              Explore {cluster.shortName} in Detail
            </button>
            <Link
              to="/blog?tag=wonderland-series"
              className="cluster-action-secondary"
              onClick={onClose}
            >
              Read all Wonderland Guides
            </Link>
          </div>
      </ModalShell>
    )
  }

  return null
}

export default ConstellationModal
