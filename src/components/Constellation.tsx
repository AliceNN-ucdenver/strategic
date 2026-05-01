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
              <div className="cluster-node-emoji" aria-hidden="true">
                {cluster.emoji}
              </div>
              <div className="cluster-node-stars" aria-hidden="true">
                {cluster.stars.map((star, idx) => (
                  <span
                    key={idx}
                    className="cluster-node-star"
                    style={{ animationDelay: `${idx * 0.6}s` }}
                    title={star.character}
                  >
                    {star.characterEmoji}
                  </span>
                ))}
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
