import React, { useState } from 'react';
import SubscriptionModal from './SubscriptionModal';
import {
  createSitePath,
  footerConnectLinks,
  footerExploreLinks,
  siteBrand,
  type SiteNavItem,
} from '../config/site';
import './Footer.css';

const Footer: React.FC = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  const renderFooterLink = (item: SiteNavItem) => {
    const isExternal = item.path.startsWith('http');
    const href = isExternal ? item.path : createSitePath(item.path);

    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {item.label}
      </a>
    );
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
            <div className="footer-logo">{siteBrand.name}</div>
            <p className="footer-tagline">
              {siteBrand.tagline}
            </p>
            <p className="footer-note">
              {siteBrand.footerNote}
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Explore</h4>
              <ul>
                {footerExploreLinks.map((item) => (
                  <li key={item.path}>{renderFooterLink(item)}</li>
                ))}
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                {footerConnectLinks.map((item) => (
                  <li key={item.path}>{renderFooterLink(item)}</li>
                ))}
                <li><a href="#newsletter" onClick={openSubscriptionForm}>Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} {siteBrand.name}. Architecture as map, evidence, and strategic advantage.</p>
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
