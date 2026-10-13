import { Link, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'
import { AUTH_LINKS } from '../../data/navigation'
import { useLoginModal } from '../../context/LoginModalContext'

export default function Header() {
  const { pathname } = useLocation()
  const isContactActive = pathname === '/company/contact'
  const { openLogin } = useLoginModal()

  return (
    <header className="header-entrance sticky top-0 z-50 border-b border-line bg-navbar/95 backdrop-blur-md transition-colors duration-150">
      <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Left: ZUZU Logo */}
        <div className="flex items-center shrink-0">
          <Link to="/" aria-label="ZUZU home" className="flex items-center">
            <Logo size="md" />
          </Link>
        </div>

        {/* Center: Desktop Navigation (Centered) */}
        <div className="hidden lg:flex items-center justify-center flex-1 min-w-0 px-2 xl:px-4">
          <DesktopNav />
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
          <ThemeToggle />

          <Link
            to="/company/contact"
            className={`px-2 py-1 text-[13.5px] xl:text-[14px] font-medium transition-colors duration-150 ${
              isContactActive ? 'text-green font-semibold' : 'text-muted hover:text-ink'
            }`}
          >
            Contact
          </Link>

          <Button onClick={openLogin} variant="secondary" size="sm">
            Log In
          </Button>

          <Button to={AUTH_LINKS.trial.href} variant="primary" size="sm">
            {AUTH_LINKS.trial.label}
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle size="md" />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
