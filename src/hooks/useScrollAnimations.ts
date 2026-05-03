import { useEffect } from 'react'

export const useScrollAnimations = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.fade-in, .feature-card, .stat-item'))
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      elements.forEach(element => element.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05
    })

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      if (rect.top < window.innerHeight - 80) {
        element.classList.add('visible')
      } else {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}
