import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type PageLayoutProps = {
  children: ReactNode
  className: string
}

const PageLayout = ({ children, className }: PageLayoutProps) => (
  <div className={className}>
    <Header />
    {children}
    <Footer />
  </div>
)

export default PageLayout
