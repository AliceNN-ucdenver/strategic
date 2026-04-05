import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './ImageZoom.css'

const ImageZoom: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  return (
    <>
      <img
        {...props}
        className="blog-image blog-image-zoomable"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && createPortal(
        <div className="image-zoom-overlay" onClick={close}>
          <button className="image-zoom-close" onClick={close}>&times;</button>
          <img
            src={props.src}
            alt={props.alt}
            className="image-zoom-full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  )
}

export default ImageZoom
