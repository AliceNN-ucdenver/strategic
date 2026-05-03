import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ModalShell.css';

interface ModalShellProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
  panelClassName?: string;
  closeButtonClassName?: string;
  showCloseButton?: boolean;
}

const ModalShell: React.FC<ModalShellProps> = ({
  isOpen,
  onClose,
  children,
  ariaLabel,
  className = '',
  panelClassName = '',
  closeButtonClassName = '',
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={`modal-shell-overlay ${className}`.trim()} onClick={handleBackdropClick}>
      <div
        className={`modal-shell-panel ${panelClassName}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
      >
        {showCloseButton && (
          <button
            className={`modal-shell-close ${closeButtonClassName}`.trim()}
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
          >
            ×
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalShell;
