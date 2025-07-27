import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './SubscriptionModal.css';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="subscription-modal-overlay" onClick={onClose}>
      <div className="subscription-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="subscription-modal-close" onClick={onClose}>
          ×
        </button>
        <form 
          action="https://app.kit.com/forms/8362592/subscriptions" 
          className="seva-form formkit-form" 
          method="post" 
          data-sv-form="8362592" 
          data-uid="7ddfaac40b" 
          data-format="modal" 
          data-version="5" 
          data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Welcome to the Rabbit Hole! 🐰 Check your email to confirm your subscription. Your journey through the Strategic Architecture Constellations begins soon - the Cheshire Cat has some strategic vision insights waiting for you.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}' 
          style={{backgroundColor: 'rgb(255, 255, 255)', borderRadius: '10px'}}
        >
          <div data-style="full" style={{'--bg-border-radius': '5px'} as React.CSSProperties}>
            <div data-element="column" className="formkit-column">
              <div className="formkit-header" data-element="header" style={{color: 'rgb(61, 61, 61)', fontWeight: 700}}>
                <h2>Subscribe to The Rabbit Hole</h2>
              </div>
              <div className="formkit-content" data-element="content" style={{color: 'rgb(110, 110, 110)'}}>
                <p>Each month, I'll guide you through a different Strategic Architecture Constellation with Wonderland characters as your mentors.</p>
                <p>​</p>
                <p>Learn how the Cheshire Cat's strategic vision, the Mad Hatter's innovation labs, and 10 other character guides can transform you from technical architect to strategic business enabler.</p>
              </div>
              <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                <div className="formkit-field">
                  <input 
                    className="formkit-input" 
                    name="email_address" 
                    aria-label="Email Address" 
                    placeholder="Email Address" 
                    required 
                    type="email" 
                    style={{color: 'rgb(110, 110, 110)', backgroundColor: 'rgb(247, 247, 247)', borderRadius: '5px', fontWeight: 400}}
                  />
                </div>
                <button 
                  data-element="submit" 
                  className="formkit-submit formkit-submit" 
                  style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(120, 94, 223)', borderRadius: '5px', fontWeight: 700}}
                >
                  <div className="formkit-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Subscribe</span>
                </button>
              </div>
              <div className="formkit-disclaimer" data-element="disclaimer" style={{color: 'rgb(110, 110, 110)'}}>
                We respect your privacy. Unsubscribe at any time.
              </div>
              <div className="formkit-powered-by-convertkit-container">
                <a 
                  href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" 
                  data-element="powered-by" 
                  className="formkit-powered-by-convertkit" 
                  data-variant="dark" 
                  target="_blank" 
                  rel="nofollow"
                >
                  Built with Kit
                </a>
              </div>
            </div>
            <div 
              data-element="column" 
              className="formkit-background" 
              style={{backgroundImage: 'url("https://embed.filekitcdn.com/e/wqaFRkUEGc7Ka9Uo2w3SYD/bBx6eN548BgSErs259KKd8")'}}
            ></div>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default SubscriptionModal;
