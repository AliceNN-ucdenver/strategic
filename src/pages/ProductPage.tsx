import React from 'react';
import PageLayout from '../components/PageLayout';
import Dashboard from '../components/Dashboard';
import ImplementationGuide from '../components/ImplementationGuide';
import TransformationFramework from '../components/TransformationFramework';
import ArchitectureChallenge from '../components/ArchitectureChallenge';
import { productHero, productThesis } from '../data/productPageData';
import { scrollToElementId, useHashScroll, useScrollToTopUnlessHash } from '../hooks/usePageLifecycle';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import '../styles/productPrimitives.css';
import './ProductPage.css';

const ProductPage: React.FC = () => {
  useScrollToTopUnlessHash();
  useHashScroll(undefined, {
    behavior: 'auto',
    headerOffset: 180,
    revealSelector: '.fade-in',
  });
  useScrollAnimations();

  const scrollToSection = (sectionId: string) => {
    scrollToElementId(sectionId, {
      behavior: 'smooth',
      headerOffset: 180,
    });
  };

  const handleHeroScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <PageLayout className="site-page product-page">
      {/* Hero Section */}
      <section className="editorial-hero app-hero hero" id="home">
        <div className="app-hero__grid hero-content">
          <div className="hero-text">
            <div className="eyebrow eyebrow--pill product-eyebrow">{productHero.eyebrow}</div>
            <h1 className="editorial-hero__title">{productHero.title}</h1>
            <p className="editorial-hero__subtitle subtitle">{productHero.subtitle}</p>
            <div className="proof-points hero-proof-points" aria-label="Product proof points">
              {productHero.proofPoints.map((proofPoint) => (
                <span key={proofPoint}>{proofPoint}</span>
              ))}
            </div>
            <div className="hero-buttons">
              {productHero.actions.map((action) => (
                <a
                  key={action.sectionId}
                  href={`#${action.sectionId}`}
                  className={
                    action.variant === 'primary'
                      ? 'button-primary button-primary--light btn-primary'
                      : 'button-secondary btn-secondary'
                  }
                  onClick={(e) => handleHeroScroll(e, action.sectionId)}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-right">
            <div className="urban-container" aria-label="Architecture operating stack">
              <div className="glass-panel glass-panel--light product-stack-visual">
                <div className="stack-header">
                  <span>{productHero.stackHeading.kicker}</span>
                  <strong>{productHero.stackHeading.title}</strong>
                </div>
                {productHero.stackLayers.map((layer) => (
                  <button
                    key={layer.sectionId}
                    className={`stack-layer ${layer.tone}-layer`}
                    onClick={() => scrollToSection(layer.sectionId)}
                  >
                    <span className="layer-code">{layer.code}</span>
                    <span>
                      <strong>{layer.title}</strong>
                      <small>{layer.description}</small>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-thesis" aria-label="Product narrative">
        <div className="product-thesis-container">
          <div>
            <span className="product-section-kicker">{productThesis.kicker}</span>
            <h2>{productThesis.title}</h2>
            <p>{productThesis.body}</p>
          </div>
          <div className="thesis-points">
            {productThesis.points.map((point) => (
              <div key={point.label}>
                <span>{point.label}</span>
                <strong>{point.statement}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Enterprise Architecture Challenge */}
      <section className="challenge-section">
        <ArchitectureChallenge />
      </section>

      {/* AI Transformation Decision Framework */}
      <TransformationFramework />

      {/* Architecture Health Dashboard */}
      <Dashboard />

      {/* Implementation Guide */}
      <ImplementationGuide />
    </PageLayout>
  );
};

export default ProductPage;
