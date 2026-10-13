import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BackToTop from '../ui/BackToTop'
import ScrollProgress from '../ui/ScrollProgress'
import LoginModal from '../auth/LoginModal'
import { LoginModalProvider } from '../../context/LoginModalContext'
import useCardSpotlight from '../../hooks/useCardSpotlight'

export default function Layout() {
  const { pathname } = useLocation()
  useCardSpotlight()

  // Route change = a fresh scroll position, same as a normal
  // multi-page site; without this, navigating from a long page to a
  // short one leaves the new page scrolled to wherever the old one
  // was, which also looks broken alongside the entrance animation.
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <LoginModalProvider>
      <Header />
      <main className="flex-1">
        {/* Keying on pathname remounts this wrapper per route. No entrance
            animation plays here anymore (removed -- it made ordinary
            navigation, including via the logo back to Home, look like a
            page refresh); the remount itself just swaps content instantly.
            `page-transition` is kept as a class hook other CSS still
            targets -- see motion.css. */}
        <div key={pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
      <BackToTop />
      <ScrollProgress />
      <LoginModal />
    </LoginModalProvider>
  )
}
