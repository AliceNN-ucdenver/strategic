import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ResourcesPage.css';

const ResourcesPage: React.FC = () => {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Scroll-triggered animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          setTimeout(() => {
            (element as HTMLElement).style.opacity = '1';
            (element as HTMLElement).style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const articles = [
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
  ];

  return (
    <div className="resources-page">
      <Header />

      {/* Hero Section */}
      <section className="resources-hero">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1>Strategic Architecture Resources</h1>
            <p className="subtitle">
              Insights and expertise from the frontlines of enterprise transformation. 
              Discover practical approaches to modern architecture challenges through real-world experiences and strategic thinking.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{articles.length}</span>
                <span className="stat-label">Articles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Major Publications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Strategic Insights</span>
              </div>
            </div>
          </div>
          <div className="hero-visual fade-in">
            <div className="resource-constellation">
              <div className="resource-node main">
                <span className="node-icon">📚</span>
                <div className="resource-pulse"></div>
              </div>
              <div className="resource-node satellite-1">
                <span className="node-icon">🔗</span>
              </div>
              <div className="resource-node satellite-2">
                <span className="node-icon">🚀</span>
              </div>
              <div className="resource-node satellite-3">
                <span className="node-icon">🛡️</span>
              </div>
              <div className="resource-connections">
                <div className="resource-connection resource-line-1"></div>
                <div className="resource-connection resource-line-2"></div>
                <div className="resource-connection resource-line-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section">
        <div className="articles-container">
          <div className="section-header fade-in">
            <h2>Featured Publications</h2>
            <p>Thought leadership articles from leading technology publications</p>
          </div>
          
          <div className="articles-grid">
            {articles.map((article, index) => (
              <article key={index} className="article-card fade-in">
                <div className="article-header">
                  <div className="article-icon">{article.image}</div>
                  <div className="article-meta">
                    <span className="publication">{article.publication}</span>
                    <div className="article-tags">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">{tag}</span>
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
                    className="read-more-btn"
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
      <section className="resources-cta">
        <div className="cta-container fade-in">
          <h2>Ready to Transform Your Architecture?</h2>
          <p>Get personalized insights for your organization's strategic architecture journey</p>
          <a href={`${basename}/framework`} className="btn-primary">
            Explore Strategic Framework
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
