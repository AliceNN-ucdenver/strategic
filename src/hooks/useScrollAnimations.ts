import { useEffect } from 'react'

export const useScrollAnimations = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in, .feature-card, .stat-item')
      elements.forEach((element, index) => {
        const htmlElement = element as HTMLElement
        const elementTop = htmlElement.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          setTimeout(() => {
            htmlElement.style.opacity = '1'
            htmlElement.style.transform = 'translateY(0)'
          }, index * 100)
        }
      })
    }

    // Set initial state for animated elements
    const setInitialState = () => {
      document.querySelectorAll('.fade-in, .feature-card, .stat-item').forEach(element => {
        const htmlElement = element as HTMLElement
        htmlElement.style.opacity = '0'
        htmlElement.style.transform = 'translateY(30px)'
        htmlElement.style.transition = 'all 0.6s ease'
      })
    }

    setInitialState()
    
    // Trigger initial animation check
    setTimeout(animateOnScroll, 100)
    
    window.addEventListener('scroll', animateOnScroll)
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll)
    }
  }, [])
}

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
