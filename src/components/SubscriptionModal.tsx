import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './SubscriptionModal.css';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ConvertKitWindow = Window &
  typeof globalThis & {
    ConvertKitForm?: {
      handleSubmit: (form: HTMLFormElement) => void;
    };
  };

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Load Kit script if not already loaded
      if (!document.querySelector('script[src*="ck.5.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
        script.async = true;
        document.head.appendChild(script);
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Let Kit's JavaScript handle the submission
    const form = e.currentTarget;
    const convertKitForm = (window as ConvertKitWindow).ConvertKitForm;
    
    // Check if Kit's script has loaded and initialized
    if (convertKitForm) {
      convertKitForm.handleSubmit(form);
    } else {
      // Fallback: trigger Kit's form submission manually
      const formData = new FormData(form);
      const email = formData.get('email_address');
      
      if (email) {
        fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            // Show success message by replacing form content
            const formContainer = form.querySelector('.formkit-column');
            if (formContainer) {
              formContainer.innerHTML = `
                <div class="formkit-alert formkit-alert-success" style="display: block;">
                  Welcome to the Rabbit Hole! 🐰 Check your email to confirm your subscription. Your journey through the Strategic Architecture Constellations begins soon - the Cheshire Cat has some strategic vision insights waiting for you.
                </div>
              `;
            }
          }
        }).catch(error => {
          console.error('Subscription error:', error);
        });
      }
    }
  };

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
          min-width="400 500 600 700 800"
          style={{backgroundColor: '#ffffff', borderRadius: '10px'}}
          onSubmit={handleFormSubmit}
        >
          <div data-style="full" style={{'--bg-border-radius': '5px'} as React.CSSProperties}>
            <div data-element="column" className="formkit-column">
              <div className="formkit-header" data-element="header" style={{color: '#172033', fontWeight: 700}}>
                <h2>Subscribe to The Rabbit Hole</h2>
              </div>
              <div className="formkit-content" data-element="content" style={{color: '#475569'}}>
                <p>Each month, I'll guide you through a different Strategic Architecture Constellation with Wonderland characters as your mentors.</p>
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
                    style={{color: '#334155', backgroundColor: '#f8fafc', borderRadius: '5px', fontWeight: 400}}
                  />
                </div>
                <button 
                  data-element="submit" 
                  className="formkit-submit formkit-submit" 
                  type="submit"
                  style={{color: '#ffffff', backgroundColor: '#0f766e', borderRadius: '5px', fontWeight: 700}}
                >
                  <div className="formkit-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Subscribe</span>
                </button>
              </div>
              <div className="formkit-disclaimer" data-element="disclaimer" style={{color: '#64748b'}}>
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
