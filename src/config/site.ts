export type SiteNavItem = {
  label: string
  path: string
}

export const siteBrand = {
  name: 'ChiefArcheologist.com',
  tagline: 'Evidence-led architecture for AI-era transformation.',
  footerNote:
    'Excavating what systems reveal, then turning that evidence into strategy, governance, and durable change.',
}

export const primaryNavItems: SiteNavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Framework', path: '/framework' },
  { label: 'Product', path: '/product' },
  { label: 'Blog', path: '/blog' },
  { label: 'Articles', path: '/resources' },
]

export const footerExploreLinks: SiteNavItem[] = [
  { label: 'Framework', path: '/framework' },
  { label: 'Product Thinking', path: '/product' },
  { label: 'Blog', path: '/blog' },
  { label: 'Articles & Research', path: '/resources' },
]

export const footerConnectLinks: SiteNavItem[] = [
  { label: 'Contact', path: '/contact' },
  { label: 'Resume', path: '/resume' },
  { label: 'LinkedIn', path: 'https://www.linkedin.com/in/shawnemccarthy/' },
]

export const getBasePath = () => import.meta.env.BASE_URL.replace(/\/$/, '')

export const createSitePath = (path: string, anchor?: string) => {
  const basePath = getBasePath()
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const fullPath = `${basePath}${normalizedPath}`

  return anchor ? `${fullPath}#${anchor}` : fullPath
}
