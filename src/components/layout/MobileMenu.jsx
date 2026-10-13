import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { NAV_SECTIONS, HOW_IT_WORKS_SECTION, DASHBOARD_SECTION, AUTH_LINKS } from '../../data/navigation'

// Same ordering as DesktopNav.jsx: How It Works and Dashboard render after Solutions.
const MOBILE_NAV_ITEMS = [
  ...NAV_SECTIONS.slice(0, 2),
  HOW_IT_WORKS_SECTION,
  DASHBOARD_SECTION,
  ...NAV_SECTIONS.slice(2),
]
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'
import { useLoginModal } from '../../context/LoginModalContext'

function ChevronDown({ open }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ease-out ${open ? 'rotate-180 text-green' : 'text-muted'}`}
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const STATIC_MOBILE_LINKS = [
  { key: 'pricing', label: 'Pricing', href: '/pricing' },
  { key: 'about', label: 'About', href: '/company/about' },
  { key: 'contact', label: 'Contact', href: '/company/contact' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)
  const toggleRef = useRef(null)
  const closeRef = useRef(null)
  const { pathname } = useLocation()
  const closeMenu = () => setIsOpen(false)
  const { openLogin } = useLoginModal()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      closeRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const isHomeActive = pathname === '/'

  // Staggered slide-in for the top-level list items, keyed off isOpen
  // rather than mount -- the panel itself never unmounts (just fades
  // via opacity/pointer-events), so this needs to be able to replay on
  // every open, not just the first one.
  const itemMotionClass = `transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
    isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
  }`
  const itemDelay = (index) => ({ transitionDelay: `${isOpen ? Math.min(index * 40, 320) : 0}ms` })

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:bg-elevated"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          {isOpen ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {/* Portaled to document.body: the header this button lives in has a
          mount-entrance CSS animation, and per spec any ancestor with a
          non-"none" `transform` (even at rest, translateY(0) still counts)
          becomes the containing block for `position: fixed` descendants --
          without the portal, this panel was pinned to the 68px-tall header
          box instead of the viewport, and its content spilled unclipped and
          unmasked over whatever page content sat beneath it. */}
      {createPortal(
        <div
          id="mobile-menu-panel"
          className={`fixed inset-0 z-[60] bg-surface/98 backdrop-blur-xl transition-opacity duration-200 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
        {/* Mobile menu header */}
        <div className="flex h-[68px] items-center justify-between border-b border-line px-5">
          <Link to="/" onClick={closeMenu} aria-label="ZUZU home" className="flex items-center">
            <Logo size="sm" />
          </Link>
          <div className="flex items-center gap-2.5">
            <ThemeToggle size="md" />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition-colors hover:bg-elevated"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation list */}
        <nav aria-label="Mobile" className="h-[calc(100svh-68px)] overflow-y-auto px-5 py-6 flex flex-col justify-between">
          <ul className="flex flex-col divide-y divide-line">
            {/* Home link */}
            <li className={`py-1 ${itemMotionClass}`} style={itemDelay(0)}>
              <Link
                to="/"
                onClick={closeMenu}
                className={`flex items-center py-3 text-base font-medium transition-colors ${
                  isHomeActive ? 'text-green font-semibold' : 'text-ink'
                }`}
              >
                Home
              </Link>
            </li>

            {/* Expandable dropdown sections */}
            {MOBILE_NAV_ITEMS.map((section, sectionIndex) => {
              const expanded = openSection === section.key
              const isActive = pathname === section.href || pathname.startsWith(`${section.href}/`)

              return (
                <li key={section.key} className={`py-1 ${itemMotionClass}`} style={itemDelay(sectionIndex + 1)}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`mobile-section-${section.key}`}
                    onClick={() => setOpenSection(expanded ? null : section.key)}
                    className={`flex w-full items-center justify-between py-3 text-base font-medium transition-colors ${
                      isActive ? 'text-green font-semibold' : 'text-ink'
                    }`}
                  >
                    <span>{section.label}</span>
                    <ChevronDown open={expanded} />
                  </button>
                  {expanded && (
                    <ul id={`mobile-section-${section.key}`} className="flex flex-col gap-1 pb-3 pl-2">
                      {section.items.map((item) => {
                        const targetUrl = item.href || `${section.href}/${item.slug}`
                        const isItemActive = pathname === targetUrl
                        const Icon = item.icon
                        return (
                          <li key={item.slug || item.href}>
                            <Link
                              to={targetUrl}
                              onClick={closeMenu}
                              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors duration-150 ${
                                isItemActive
                                  ? 'bg-green/10 text-green font-semibold'
                                  : 'text-muted hover:text-ink hover:bg-elevated'
                              }`}
                            >
                              {Icon && <Icon className="h-4 w-4 shrink-0 text-green-400" />}
                              <span>{item.label}</span>
                            </Link>
                          </li>
                        )
                      })}
                      <li>
                        <Link
                          to={section.href}
                          onClick={closeMenu}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-green"
                        >
                          View all {section.label.toLowerCase()} &rarr;
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              )
            })}

            {/* Static links: Pricing, About, Contact */}
            {STATIC_MOBILE_LINKS.map((item, linkIndex) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <li
                  key={item.key}
                  className={`py-1 ${itemMotionClass}`}
                  style={itemDelay(MOBILE_NAV_ITEMS.length + 1 + linkIndex)}
                >
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className={`block py-3 text-base font-medium transition-colors ${
                      isActive ? 'text-green font-semibold' : 'text-ink'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Bottom Actions */}
          <div className="mt-8 pt-4 border-t border-line flex flex-col gap-3">
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                closeMenu()
                openLogin()
              }}
            >
              {AUTH_LINKS.login.label}
            </Button>
            <Button to={AUTH_LINKS.trial.href} variant="primary" fullWidth onClick={closeMenu}>
              {AUTH_LINKS.trial.label}
            </Button>
          </div>
        </nav>
      </div>,
        document.body,
      )}
    </div>
  )
}
