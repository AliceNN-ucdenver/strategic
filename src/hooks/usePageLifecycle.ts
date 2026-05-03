import { useEffect } from 'react'

type ScrollBehaviorMode = ScrollBehavior | 'none'

type ScrollTargetOptions = {
  behavior?: ScrollBehavior
  headerOffset?: number
  revealSelector?: string
}

export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior })
}

export const scrollToElementId = (elementId: string, options: ScrollTargetOptions = {}) => {
  const element = document.getElementById(elementId)

  if (!element) {
    return false
  }

  const { behavior = 'smooth', headerOffset = 0, revealSelector } = options

  if (headerOffset > 0) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior,
    })
  } else {
    element.scrollIntoView({
      behavior,
      block: 'start',
    })
  }

  if (revealSelector) {
    const revealElements = [
      ...(element.matches(revealSelector) ? [element] : []),
      ...Array.from(element.querySelectorAll<HTMLElement>(revealSelector)),
    ]

    revealElements.forEach((revealElement) => {
      revealElement.style.opacity = '1'
      revealElement.style.transform = 'translateY(0)'
      revealElement.classList.add('visible')
    })
  }

  return true
}

export const useScrollToTop = (
  dependency?: unknown,
  behavior: ScrollBehaviorMode = 'smooth',
) => {
  useEffect(() => {
    if (behavior === 'none') {
      return
    }

    scrollToTop(behavior)
  }, [dependency, behavior])
}

export const useScrollToTopUnlessHash = (
  dependency?: unknown,
  behavior: ScrollBehavior = 'smooth',
) => {
  useEffect(() => {
    if (window.location.hash) {
      return
    }

    scrollToTop(behavior)
  }, [dependency, behavior])
}

export const useHashScroll = (
  dependency?: unknown,
  options: ScrollTargetOptions & { delay?: number } = {},
) => {
  const {
    delay = 100,
    behavior = 'smooth',
    headerOffset = 0,
    revealSelector,
  } = options

  useEffect(() => {
    const hash = window.location.hash.substring(1)

    if (!hash) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      scrollToElementId(hash, {
        behavior,
        headerOffset,
        revealSelector,
      })
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [dependency, delay, behavior, headerOffset, revealSelector])
}
