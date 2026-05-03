import React from 'react';
import PageLayout from '../components/PageLayout';
import { createSitePath } from '../config/site';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useScrollToTop } from '../hooks/usePageLifecycle';
import './ResourcesPage.css';

const ResourcesPage: React.FC = () => {
  useScrollToTop();
  useScrollAnimations();

  const articles = [
    {
      title: "The Engineering Imperative: Why AI Won't Replace Your Best Developers",
      publication: "CIO",
      excerpt: "Explore why AI will elevate rather than replace skilled engineers, and discover how the 70/30 rule defines the future of human-AI collaboration in software development. Learn how engineering roles are evolving from reactive maintenance to strategic architectural design.",
      url: "https://www.cio.com/article/4080210/the-engineering-imperative-why-ai-wont-replace-your-best-developers.html",
      image: "👨‍💻",
      tags: ["AI & Engineering", "Future of Work", "Software Architecture"]
    },
    {
      title: "From Fixed Frameworks to Strategic Enablers: Architecting AI Transformation",
      publication: "CIO",
      excerpt: "Discover how to evolve from rigid architectural frameworks to dynamic, AI-enabled strategic capabilities that drive continuous innovation and competitive advantage in the modern enterprise.",
      url: "https://www.cio.com/article/4020233/from-fixed-frameworks-to-strategic-enablers-architecting-ai-transformation.html",
      image: "🤖",
      tags: ["AI Transformation", "Strategic Architecture", "Digital Innovation"]
    },
    {
      title: "How to Leverage APIs for IT-Enabled Information Capability",
      publication: "InfoWorld",
      excerpt: "Explore how APIs can transform your organization's information architecture into a strategic business capability, enabling real-time data access and seamless integration across enterprise systems.",
      url: "https://www.infoworld.com/article/3547273/how-to-leverage-apis-for-it-enabled-information-capability.html",
      image: "🔗",
      tags: ["APIs", "Enterprise Architecture", "Data Strategy"]
    },
    {
      title: "From Project to Product: Architecting the Future of Enterprise Technology",
      publication: "CIO",
      excerpt: "Discover how to transition from traditional project-based thinking to product-centric architecture that enables continuous innovation and sustainable business growth.",
      url: "https://www.cio.com/article/3802289/from-project-to-product-architecting-the-future-of-enterprise-technology.html",
      image: "🚀",
      tags: ["Product Thinking", "Digital Transformation", "Innovation"]
    },
    {
      title: "Security is Dead, Long Live Risk Management",
      publication: "CIO",
      excerpt: "Learn why traditional security models are failing and how a risk-first approach to enterprise architecture can create more resilient and adaptive systems.",
      url: "https://www.cio.com/article/3846774/security-is-dead-long-live-risk-management.html",
      image: "🛡️",
      tags: ["Risk Management", "Security Architecture", "Enterprise Resilience"]
    },
    {
      title: "From Gatekeepers to Launchpads: How Autonomous Governance Transforms Enterprise Architecture",
      publication: "Metis (IASA Global)",
      excerpt: "The decision rate has outrun any process that inspects decisions individually. This piece argues that autonomous governance — Architecture as Code, Risk as Code, Operations as Code, Security as Code — is the only governance pattern that survives at AI velocity. A target state tells teams where they should end up; a platform launchpad gives them the vehicle to get there, and beyond.",
      url: "https://education.iasaglobal.org/whatsnew/articles/699d47860003304f932d",
      image: "🚀",
      tags: ["Autonomous Governance", "Strategic Architecture", "Policy as Code", "Peer Reviewed"]
    },
    {
      title: "Cross-Document Emotion Consistency (CDEC): A Feature Family Framework for Financial Disclosure Risk Screening",
      publication: "MDPI - Journal of Risk and Financial Management",
      excerpt: "Presents CDEC, a framework measuring emotional alignment between SEC filings and earnings call Q&A using 28-dimensional emotion classification. The integrated framework achieves approximately twice the risk separation of the strongest sentiment baseline, identifying firms warranting scrutiny for due diligence, internal audit, and regulatory oversight.",
      url: "https://www.mdpi.com/1911-8074/19/4/251",
      image: "📊",
      tags: ["Financial Disclosure", "Emotion Analysis", "Risk Screening", "Research"]
    },
    {
      title: "Enhancing Financial Market Analysis and Prediction with Emotion Corpora and News Co-Occurrence Network",
      publication: "MDPI - Journal of Risk and Financial Management",
      excerpt: "Research employing improved natural language processing algorithms to analyze over 500,000 financial news articles, developing emotion corpora and co-occurrence networks to identify shifting economic activity and relationships between companies across sectors.",
      url: "https://www.mdpi.com/1911-8074/16/4/226",
      image: "📊",
      tags: ["Financial Analysis", "NLP", "Market Prediction", "Research"]
    },
    {
      title: "The Emotion Magnitude Effect: Navigating Market Dynamics Amidst Supply Chain Events",
      publication: "MDPI - Journal of Risk and Financial Management",
      excerpt: "Research introducing the novel 'emotion magnitude' metric to capture emotional undercurrents in financial markets during 2019-2021. Creates multidimensional data science framework connecting supply chain disruptions, countries, commodities, and corporations through knowledge graphs.",
      url: "https://www.mdpi.com/1911-8074/16/12/490",
      image: "📈",
      tags: ["Supply Chain Analysis", "Market Dynamics", "Knowledge Graphs", "Research"]
    },
    {
      title: "Fin-ALICE: Artificial Linguistic Intelligence Causal Econometrics",
      publication: "MDPI - Journal of Risk and Financial Management",
      excerpt: "Introduction of Fin-ALICE framework for financial time series forecasting, integrating emotional sentiment analysis, supply chain dynamics, and advanced machine learning techniques using Temporal Convolutional Networks to outperform traditional models.",
      url: "https://www.mdpi.com/1911-8074/17/12/537",
      image: "🤖",
      tags: ["Machine Learning", "Financial Forecasting", "AI", "Research"]
    },
    {
      title: "A Momentum-Based Normalization Framework for Generating Profitable Analyst Sentiment Signals",
      publication: "MDPI - International Journal of Financial Studies",
      excerpt: "Development of a momentum-based normalization framework that transforms diverse analyst rating scales into standardized sentiment signals using firm-relative ECDF normalization. Analyzes 68,660 rating events from 270 brokerage firms, achieving statistically significant Buy-Sell spreads and 13.6% annualized alpha validated through Fama-French six-factor analysis.",
      url: "https://www.mdpi.com/2227-7072/14/1/4",
      image: "📊",
      tags: ["Analyst Sentiment", "Momentum Strategies", "Quantitative Finance", "Research"]
    },
  ];

  const publicationMark = (publication: string) => {
    if (publication.includes('Metis')) return 'IASA';
    if (publication.includes('InfoWorld')) return 'IW';
    if (publication.includes('MDPI')) return 'MDPI';
    return publication;
  };

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
                <span className="stat-number">{articles.length}</span>
                <span className="stat-label">Articles</span>
              </div>
              <div className="stat-tile stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Publication Families</span>
              </div>
              <div className="stat-tile stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Strategic Insights</span>
              </div>
            </div>
          </div>
          <div className="glass-panel resources-index-panel fade-in" aria-label="Resource themes">
            <span className="eyebrow panel-label">Resource Map</span>
            <div className="resource-signal-list">
              <div className="signal-row resource-signal">
                <span className="number-mark">01</span>
                <strong>AI Transformation</strong>
              </div>
              <div className="signal-row resource-signal">
                <span className="number-mark">02</span>
                <strong>Product Architecture</strong>
              </div>
              <div className="signal-row resource-signal">
                <span className="number-mark">03</span>
                <strong>Autonomous Governance</strong>
              </div>
              <div className="signal-row resource-signal">
                <span className="number-mark">04</span>
                <strong>Risk & Research</strong>
              </div>
            </div>
            <p>
              External publications, peer-reviewed research, and field-tested architecture thinking gathered into one index.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="content-section articles-section">
        <div className="content-container articles-container">
          <div className="section-heading-row section-header fade-in">
            <h2>Featured Publications</h2>
            <p>Thought leadership articles from leading technology publications</p>
          </div>
          
          <div className="articles-grid">
            {articles.map((article, index) => (
              <article key={index} className="surface-card interactive-surface article-card fade-in">
                <div className="article-header">
                  <div className="article-icon">{publicationMark(article.publication)}</div>
                  <div className="article-meta">
                    <span className="publication">{article.publication}</span>
                    <div className="article-tags">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag-pill tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-primary read-more-btn"
                  >
                    Read Full Article
                    <span className="btn-icon">→</span>
                  </a>
                </div>
              </article>
            ))}
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
