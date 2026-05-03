import React, { useState } from 'react';
import SubscriptionModal from './SubscriptionModal';
import './Footer.css';

const Footer: React.FC = () => {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

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
              Evidence-led architecture for AI-era transformation.
            </p>
            <p className="footer-note">
              Excavating what systems reveal, then turning that evidence into strategy, governance, and durable change.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Explore</h4>
              <ul>
                <li><a href={createPageLink('/framework')}>Framework</a></li>
                <li><a href={createPageLink('/product')}>Product Thinking</a></li>
                <li><a href={createPageLink('/blog')}>Blog</a></li>
                <li><a href={createPageLink('/resources')}>Articles & Research</a></li>
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
            <p>&copy; {new Date().getFullYear()} ChiefArcheologist.com. Architecture as map, evidence, and strategic advantage.</p>
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
