import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubscriptionModal from './SubscriptionModal';
import './Footer.css';

const Footer: React.FC = () => {
  const location = useLocation();
  const isFrameworkPage = location.pathname === '/framework';
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  
  // Helper function to create proper links
  const createLink = (anchor: string) => {
    if (isFrameworkPage) {
      return `#${anchor}`;
    } else {
      return `${basename}/framework#${anchor}`;
    }
  };

  // Helper function for regular page links
  const createPageLink = (path: string, anchor?: string) => {
    const fullPath = `${basename}${path}`;
    return anchor ? `${fullPath}#${anchor}` : fullPath;
  };

  const openSubscriptionForm = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubscriptionModalOpen(true);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">ChiefArcheologist.com</div>
            <p className="footer-tagline">
              From Technical Compliance to Strategic Advantage
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Framework</h4>
              <ul>
                <li><a href={createLink('constellation')}>Architecture Guide</a></li>
                <li><a href={createLink('assessment')}>Assessment</a></li>
                <li><a href={createPageLink('/product')}>Strategic Thinking</a></li>
                <li><a href={createPageLink('/product', 'transformation')}>AI Transformation</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href={createPageLink('/blog')}>Digital Excavations</a></li>
                <li><a href={createPageLink('/product', 'implementation')}>Implementation</a></li>
                <li><a href={createPageLink('/product', 'dashboard')}>Portfolio Health</a></li>
                <li><a href={createPageLink('/product', 'case-studies')}>Case Studies</a></li>
                <li><a href={createPageLink('/resources')}>Articles</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href={createPageLink('/contact')}>Contact</a></li>
                <li><a href={createPageLink('/resume-print')} target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href="#newsletter" onClick={openSubscriptionForm}>Newsletter</a></li>
                <li><a href="https://www.linkedin.com/in/shawnemccarthy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 ChiefArcheologist.com. Empowering technology leaders to drive strategic transformation.</p>
          </div>
          <div className="footer-meta">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
      
      <SubscriptionModal 
        isOpen={isSubscriptionModalOpen} 
        onClose={() => setIsSubscriptionModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
