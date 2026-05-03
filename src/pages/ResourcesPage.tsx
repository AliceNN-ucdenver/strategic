import React from 'react';
import PageLayout from '../components/PageLayout';
import { createSitePath } from '../config/site';
import {
  getArticlesForTrack,
  getPublicationMark,
  resourceArticles,
  resourceTracks,
} from '../data/resourcesData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useScrollToTop } from '../hooks/usePageLifecycle';
import './ResourcesPage.css';

const ResourcesPage: React.FC = () => {
  useScrollToTop();
  useScrollAnimations();
  const publicationFamilyCount = new Set(resourceArticles.map((article) => getPublicationMark(article.publication))).size

  return (
    <PageLayout className="site-page resources-page">
      {/* Hero Section */}
      <section className="editorial-hero editorial-hero--band resources-hero">
        <div className="editorial-hero__inner resources-hero-content">
          <div className="resources-hero-text fade-in">
            <span className="eyebrow resources-kicker">Published Thinking</span>
            <h1 className="editorial-hero__title">Strategic Architecture Resources</h1>
            <p className="editorial-hero__subtitle subtitle">
              Insights and expertise from the frontlines of enterprise transformation. 
              Discover practical approaches to modern architecture challenges through real-world experiences and strategic thinking.
            </p>
            <div className="hero-stats">
              <div className="stat-tile stat-item">
                <span className="stat-number">{resourceArticles.length}</span>
                <span className="stat-label">Articles</span>
              </div>
              <div className="stat-tile stat-item">
                <span className="stat-number">{resourceTracks.length}</span>
                <span className="stat-label">Evidence Trails</span>
              </div>
              <div className="stat-tile stat-item">
                <span className="stat-number">{publicationFamilyCount}</span>
                <span className="stat-label">Publication Families</span>
              </div>
            </div>
          </div>
          <div className="glass-panel resources-index-panel fade-in" aria-label="Resource themes">
            <span className="eyebrow panel-label">Resource Map</span>
            <nav className="resource-signal-list" aria-label="Resource article sections">
              {resourceTracks.map((track, index) => (
                <a className="signal-row resource-signal" href={`#resources-${track.id}`} key={track.id}>
                  <span className="number-mark">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{track.shortLabel}</strong>
                </a>
              ))}
            </nav>
            <p>
              External publications, peer-reviewed research, and field-tested architecture thinking gathered into one index.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="content-section articles-section">
        <div className="content-container articles-container">
          <div className="section-heading-row section-header resources-section-header fade-in">
            <span className="eyebrow">Guided Evidence</span>
            <h2>Read the work by signal, not by shelf order.</h2>
            <p>
              The articles are grouped as an evidence trail: architecture strategy, AI-era maintainability,
              career judgment, and research methods that turn messy signals into usable decisions.
            </p>
          </div>
          
          <div className="resource-track-list">
            {resourceTracks.map((track, trackIndex) => {
              const trackArticles = getArticlesForTrack(track.id)

              return (
                <section
                  className={`resource-track fade-in ${trackArticles.length === 1 ? 'resource-track--single' : ''}`}
                  id={`resources-${track.id}`}
                  key={track.id}
                  aria-labelledby={`${track.id}-resources`}
                >
                  <div className="resource-track-heading">
                    <span className="number-mark">{String(trackIndex + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 id={`${track.id}-resources`}>{track.title}</h3>
                      <p>{track.description}</p>
                    </div>
                  </div>
                  <div className="articles-grid">
                    {trackArticles.map((article) => (
                      <article key={article.title} className="surface-card interactive-surface article-card">
                        <div className="article-header">
                          <div className="article-icon">{getPublicationMark(article.publication)}</div>
                          <div className="article-meta">
                            <span className="publication">{article.publication}</span>
                            <div className="article-tags">
                              {article.tags.map((tag) => (
                                <span key={tag} className="tag-pill tag">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="article-content">
                          <h4>{article.title}</h4>
                          <p>{article.excerpt}</p>
                          <a 
                            href={article.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="button-primary read-more-btn"
                          >
                            Read Article
                            <span className="btn-icon">→</span>
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-band resources-cta">
        <div className="cta-band__inner cta-container fade-in">
          <h2>Ready to Transform Your Architecture?</h2>
          <p>Get personalized insights for your organization's strategic architecture journey</p>
          <a href={createSitePath('/framework')} className="button-primary button-primary--light btn-primary">
            Explore Strategic Framework
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResourcesPage;
