import React, { useState, useCallback } from 'react'
import ModalShell from './ui/ModalShell'
import './ImageZoom.css'

const ImageZoom: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const { className, onClick, onKeyDown, src, alt, ...imageProps } = props
  const imageClassName = ['blog-image', 'blog-image-zoomable', className].filter(Boolean).join(' ')

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    onClick?.(event)
    if (!event.defaultPrevented) {
      open()
    }
  }

  const handleImageKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
    onKeyDown?.(event)
    if (!event.defaultPrevented && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault()
      open()
    }
  }

  return (
    <>
      <img
        {...imageProps}
        src={src}
        alt={alt}
        className={imageClassName}
        role="button"
        tabIndex={0}
        onClick={handleImageClick}
        onKeyDown={handleImageKeyDown}
      />
      <ModalShell
        isOpen={isOpen}
        onClose={close}
        ariaLabel={alt ? `Expanded image: ${alt}` : 'Expanded image'}
        className="image-zoom-overlay"
        panelClassName="image-zoom-panel"
        closeButtonClassName="image-zoom-close"
      >
          <img
            src={src}
            alt={alt}
            className="image-zoom-full"
          />
      </ModalShell>
    </>
  )
}

export default ImageZoom
