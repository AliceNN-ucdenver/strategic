import React from 'react';
import PageLayout from '../components/PageLayout';
import Dashboard from '../components/Dashboard';
import ImplementationGuide from '../components/ImplementationGuide';
import TransformationFramework from '../components/TransformationFramework';
import ArchitectureChallenge from '../components/ArchitectureChallenge';
import { scrollToElementId, useHashScroll, useScrollToTopUnlessHash } from '../hooks/usePageLifecycle';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
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
            <div className="eyebrow eyebrow--pill product-eyebrow">Chief Archeologist Product Studio</div>
            <h1 className="editorial-hero__title">From Project to Product to Governed Agentic Delivery</h1>
            <p className="editorial-hero__subtitle subtitle">
              Keep the city-planning discipline of product architecture, then make the roads, zoning laws,
              security checks, and AI agents visible in one architecture-first operating cockpit.
            </p>
            <div className="proof-points hero-proof-points" aria-label="Product proof points">
              <span>Product thinking</span>
              <span>Autonomous governance</span>
              <span>Maintainability.ai implementation</span>
            </div>
            <div className="hero-buttons">
              <a href="#dashboard" className="button-primary button-primary--light btn-primary" onClick={(e) => handleHeroScroll(e, 'dashboard')}>View Governance Cockpit</a>
              <a href="#transformation" className="button-secondary btn-secondary" onClick={(e) => handleHeroScroll(e, 'transformation')}>Explore Operating Model</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="urban-container" aria-label="Architecture operating stack">
              <div className="glass-panel glass-panel--light product-stack-visual">
                <div className="stack-header">
                  <span>Operating Map</span>
                  <strong>Architecture as the control plane</strong>
                </div>
                <button className="stack-layer product-layer" onClick={() => scrollToSection('business-value')}>
                  <span className="layer-code">01</span>
                  <span>
                    <strong>Product Value Flow</strong>
                    <small>OKRs, capabilities, and customer outcomes</small>
                  </span>
                </button>
                <button className="stack-layer governance-layer" onClick={() => scrollToSection('technical-foundation')}>
                  <span className="layer-code">02</span>
                  <span>
                    <strong>Governance Mesh</strong>
                    <small>BARs, CALM, ADRs, STRIDE, risk evidence</small>
                  </span>
                </button>
                <button className="stack-layer agent-layer" onClick={() => scrollToSection('devsecops-maturity')}>
                  <span className="layer-code">03</span>
                  <span>
                    <strong>Agentic SDLC</strong>
                    <small>Prompt packs, reviews, fitness functions</small>
                  </span>
                </button>
                <button className="stack-layer community-layer" onClick={() => scrollToSection('engineering-community')}>
                  <span className="layer-code">04</span>
                  <span>
                    <strong>Engineering Community</strong>
                    <small>Enablement, autonomy, and talent magnetism</small>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-thesis" aria-label="Product narrative">
        <div className="product-thesis-container">
          <div>
            <span className="product-section-kicker">The Through-Line</span>
            <h2>The Chief Archeologist lens still matters.</h2>
            <p>
              The product story starts by excavating the real system: business capability, architecture
              artifacts, risk evidence, operational dependencies, and the human workflows that hold it all
              together. Maintainability.ai turns that excavation into an executable map for modern AI delivery.
            </p>
          </div>
          <div className="thesis-points">
            <div>
              <span>Old world</span>
              <strong>Projects, review boards, and static diagrams</strong>
            </div>
            <div>
              <span>Product world</span>
              <strong>Value streams, reusable platforms, and portfolio health</strong>
            </div>
            <div>
              <span>Agentic world</span>
              <strong>Architecture-aware agents governed by executable constraints</strong>
            </div>
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
