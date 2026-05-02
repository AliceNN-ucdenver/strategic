import React, { useState, useEffect } from 'react'
import ConstellationModal from './ConstellationModal'
import { clusters, clustersById, type Star } from '../data/clusters'
import './Constellation.css'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
}

const Constellation: React.FC = () => {
  const [selectedClusterId, setSelectedClusterId] = useState<string | null>(null)
  const [selectedStar, setSelectedStar] = useState<Star | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
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
    setSelectedClusterId(clusterId)
    setSelectedStar(null)
  }

  const handleStarClick = (star: Star) => {
    setSelectedStar(star)
  }

  const handleCloseModal = () => {
    if (selectedStar) {
      setSelectedStar(null)
    } else {
      setSelectedClusterId(null)
    }
  }

  const constellationPoints = [
    { x: 32, y: 42 },
    { x: 78, y: 24 },
    { x: 126, y: 50 }
  ]

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

      {/* The four cluster cards arranged as a constellation */}
      <div className="constellation">
        {clusters.map(cluster => (
          <button
            key={cluster.id}
            type="button"
            className={`cluster-node cluster-node-${cluster.id}`}
            onClick={() => handleClusterClick(cluster.id)}
            aria-label={`Open ${cluster.shortName} cluster`}
          >
            <div className="cluster-node-card">
              <div className="cluster-node-map" aria-hidden="true">
                <svg viewBox="0 0 160 84" focusable="false">
                  <polyline
                    points={constellationPoints.map(point => `${point.x},${point.y}`).join(' ')}
                    className="constellation-line"
                  />
                  {constellationPoints.map((point, idx) => (
                    <g key={idx}>
                      <circle className="constellation-star-halo" cx={point.x} cy={point.y} r="10" />
                      <circle className="constellation-star-core" cx={point.x} cy={point.y} r="4" />
                    </g>
                  ))}
                </svg>
              </div>
              <div className="cluster-node-meta" aria-hidden="true">
                <span>{cluster.stars.length} stars</span>
                <span>{cluster.cast}</span>
              </div>
              <div className="cluster-node-name">{cluster.shortName}</div>
            </div>
            <div className="cluster-node-tagline">{cluster.tagline}</div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedClusterId && (
        <ConstellationModal
          cluster={selectedStar ? undefined : clustersById[selectedClusterId]}
          star={selectedStar ?? undefined}
          onClose={handleCloseModal}
          onStarClick={handleStarClick}
        />
      )}
    </div>
  )
}

export default Constellation
