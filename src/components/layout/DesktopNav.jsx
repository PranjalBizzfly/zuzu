import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_SECTIONS, HOW_IT_WORKS_SECTION, DASHBOARD_SECTION } from '../../data/navigation'

// Solutions is NAV_SECTIONS[1] -- How It Works and Dashboard render right after it
// and before Industries.
const NAV_ITEMS = [
  ...NAV_SECTIONS.slice(0, 2),
  HOW_IT_WORKS_SECTION,
  DASHBOARD_SECTION,
  ...NAV_SECTIONS.slice(2),
]

const CLOSE_DELAY = 150

function ChevronDown({ open }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`h-3 w-3 shrink-0 transition-transform duration-200 ease-out ${
        open ? 'rotate-180 text-green' : 'text-muted/70 group-hover:text-ink'
      }`}
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const STATIC_NAV_LINKS = [
  { key: 'pricing', label: 'Pricing', href: '/pricing' },
]

export default function DesktopNav() {
  const [openKey, setOpenKey] = useState(null)
  const closeTimer = useRef(null)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const openMenu = (key) => {
    clearCloseTimer()
    setOpenKey(key)
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setOpenKey(null), CLOSE_DELAY)
  }

  const closeNow = (returnFocusTo) => {
    clearCloseTimer()
    setOpenKey(null)
    if (returnFocusTo) document.getElementById(`nav-trigger-${returnFocusTo}`)?.focus()
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && openKey) closeNow(openKey)
    }
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenKey(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openKey])

  useEffect(() => () => clearCloseTimer(), [])

  const isHomeActive = pathname === '/'

  return (
    <nav ref={navRef} aria-label="Primary" className="flex h-full items-center gap-0.5 xl:gap-1 2xl:gap-1.5">
      {/* Home link */}
      <div className="relative h-full flex items-center">
        <Link
          to="/"
          className={`relative flex h-full items-center px-2 lg:px-2.5 xl:px-3 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-medium transition-colors duration-150 whitespace-nowrap ${
            isHomeActive ? 'text-green font-semibold' : 'text-muted hover:text-ink'
          }`}
        >
          Home
          {isHomeActive && (
            <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-green" />
          )}
        </Link>
      </div>

      {/* Dropdown sections */}
      {NAV_ITEMS.map((section) => {
        const isOpen = openKey === section.key
        const isActiveSection = pathname === section.href || pathname.startsWith(`${section.href}/`)
        const isListLayout = section.layout === 'list'
        const isTwoColumnIcons = section.layout === 'two-column-icons'

        return (
          <div
            key={section.key}
            className="relative h-full flex items-center"
            onMouseEnter={() => openMenu(section.key)}
            onMouseLeave={scheduleClose}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setOpenKey(null)
            }}
          >
            <button
              id={`nav-trigger-${section.key}`}
              type="button"
              aria-haspopup="true"
              aria-expanded={isOpen}
              aria-controls={`nav-panel-${section.key}`}
              onClick={() => (isOpen ? closeNow() : openMenu(section.key))}
              className={`group relative flex h-full items-center gap-1 px-1.5 lg:px-2 xl:px-2.5 2xl:px-3 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-medium transition-colors duration-150 whitespace-nowrap ${
                isActiveSection ? 'text-green font-semibold' : 'text-muted hover:text-ink'
              }`}
            >
              <span>{section.label}</span>
              <ChevronDown open={isOpen} />
              {isActiveSection && (
                <span className="absolute bottom-0 left-1.5 right-1.5 h-[2.5px] rounded-full bg-green" />
              )}
            </button>

            {isTwoColumnIcons ? (
              <div
                id={`nav-panel-${section.key}`}
                role="group"
                aria-hidden={!isOpen}
                className={`absolute left-1/2 top-full z-50 w-[640px] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-2 origin-top
                  transition-all duration-200 ease-[var(--ease-emphasized)]
                  ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-1 scale-95 pointer-events-none'}`}
              >
                <div className="rounded-2xl border border-line bg-elevated shadow-2xl p-4">
                  <div className="px-2 pb-2.5 pt-1 text-[11px] font-semibold uppercase tracking-wider text-faint flex items-center justify-between">
                    <span>{section.label} Navigation</span>
                    <span className="text-[10px] text-muted normal-case font-normal">7 Dedicated Internal Views</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-1">
                      {section.columns[0].items.map((item) => {
                        const isItemActive = pathname === item.href
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            tabIndex={isOpen ? 0 : -1}
                            onClick={() => closeNow()}
                            className={`flex items-start gap-3 rounded-xl px-3 py-2 transition-colors duration-150 ${
                              isItemActive ? 'bg-green/10 text-green' : 'text-ink hover:bg-elevated'
                            }`}
                          >
                            {Icon && (
                              <span
                                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line ${
                                  isItemActive ? 'bg-green/10 text-green' : 'bg-elevated text-green-400'
                                }`}
                              >
                                <Icon className="h-4 w-4" />
                              </span>
                            )}
                            <span className="flex flex-col gap-0.5">
                              <span className={`text-[13.5px] font-medium ${isItemActive ? 'text-green font-semibold' : 'text-ink'}`}>
                                {item.label}
                              </span>
                              <span className="text-[11.5px] text-muted leading-snug">{item.description}</span>
                            </span>
                          </Link>
                        )
                      })}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-1">
                      {section.columns[1].items.map((item) => {
                        const isItemActive = pathname === item.href
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            tabIndex={isOpen ? 0 : -1}
                            onClick={() => closeNow()}
                            className={`flex items-start gap-3 rounded-xl px-3 py-2 transition-colors duration-150 ${
                              isItemActive ? 'bg-green/10 text-green' : 'text-ink hover:bg-elevated'
                            }`}
                          >
                            {Icon && (
                              <span
                                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line ${
                                  isItemActive ? 'bg-green/10 text-green' : 'bg-elevated text-green-400'
                                }`}
                              >
                                <Icon className="h-4 w-4" />
                              </span>
                            )}
                            <span className="flex flex-col gap-0.5">
                              <span className={`text-[13.5px] font-medium ${isItemActive ? 'text-green font-semibold' : 'text-ink'}`}>
                                {item.label}
                              </span>
                              <span className="text-[11.5px] text-muted leading-snug">{item.description}</span>
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-line">
                    <Link
                      to={section.href}
                      tabIndex={isOpen ? 0 : -1}
                      onClick={() => closeNow()}
                      className="flex items-center justify-between rounded-lg px-3 py-1 text-xs font-semibold text-green hover:text-green-600 transition-colors duration-150"
                    >
                      <span>Explore all dashboard views</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : isListLayout ? (
              <div
                id={`nav-panel-${section.key}`}
                role="group"
                aria-hidden={!isOpen}
                className={`absolute left-1/2 top-full z-50 w-[340px] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-2 origin-top
                  transition-all duration-200 ease-[var(--ease-emphasized)]
                  ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-1 scale-95 pointer-events-none'}`}
              >
                <div className="rounded-2xl border border-line bg-elevated shadow-2xl p-3">
                  <div className="px-2 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-wider text-faint">
                    {section.label}
                  </div>
                  <div className="flex flex-col gap-1">
                    {section.items.map((item) => {
                      const isItemActive = pathname === `${section.href}/${item.slug}`
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.slug}
                          to={`${section.href}/${item.slug}`}
                          tabIndex={isOpen ? 0 : -1}
                          onClick={() => closeNow()}
                          className={`flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-150 ${
                            isItemActive ? 'bg-green/10 text-green' : 'text-ink hover:bg-elevated'
                          }`}
                        >
                          {Icon && (
                            <span
                              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line ${
                                isItemActive ? 'bg-green/10 text-green' : 'bg-elevated text-green-400'
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                          )}
                          <span className="flex flex-col gap-0.5">
                            <span className={`text-[13.5px] font-medium ${isItemActive ? 'text-green font-semibold' : 'text-ink'}`}>
                              {item.label}
                            </span>
                            <span className="text-[12px] text-muted leading-snug">{item.description}</span>
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-line">
                    <Link
                      to={section.href}
                      tabIndex={isOpen ? 0 : -1}
                      onClick={() => closeNow()}
                      className="flex items-center justify-between rounded-lg px-3 py-1.5 text-xs font-semibold text-green hover:text-green-600 transition-colors duration-150"
                    >
                      <span>How It Works overview</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div
                id={`nav-panel-${section.key}`}
                role="group"
                aria-hidden={!isOpen}
                className={`absolute left-1/2 top-full z-50 w-[520px] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-2 origin-top
                  transition-all duration-200 ease-[var(--ease-emphasized)]
                  ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-1 scale-95 pointer-events-none'}`}
              >
                <div className="rounded-2xl border border-line bg-elevated shadow-2xl p-3">
                  <div className="grid grid-cols-2 gap-1.5">
                    {/* Capped so a large section (e.g. Industries) can't blow out the
                        dropdown -- the "View all" link below covers the rest via the
                        hub page's full card grid. */}
                    {section.items.slice(0, 8).map((item) => {
                      const isItemActive = pathname === `${section.href}/${item.slug}`
                      return (
                        <Link
                          key={item.slug}
                          to={`${section.href}/${item.slug}`}
                          tabIndex={isOpen ? 0 : -1}
                          onClick={() => closeNow()}
                          className={`flex flex-col gap-0.5 rounded-xl px-3 py-2 transition-colors duration-150 ${
                            isItemActive
                              ? 'bg-green/10 text-green'
                              : 'text-ink hover:bg-elevated'
                          }`}
                        >
                          <span className={`text-[13.5px] font-medium ${isItemActive ? 'text-green font-semibold' : 'text-ink'}`}>
                            {item.label}
                          </span>
                          <span className="text-[12px] text-muted line-clamp-1 leading-snug">
                            {item.description}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-line">
                    <Link
                      to={section.href}
                      tabIndex={isOpen ? 0 : -1}
                      onClick={() => closeNow()}
                      className="flex items-center justify-between rounded-lg px-3 py-1.5 text-xs font-semibold text-green hover:text-green-600 transition-colors duration-150"
                    >
                      <span>View all {section.label.toLowerCase()}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}

      {/* Static Nav Links: Pricing */}
      {STATIC_NAV_LINKS.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
        return (
          <div key={item.key} className="relative h-full flex items-center">
            <Link
              to={item.href}
              className={`relative flex h-full items-center px-2 lg:px-2.5 xl:px-3 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-medium transition-colors duration-150 whitespace-nowrap ${
                isActive ? 'text-green font-semibold' : 'text-muted hover:text-ink'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-green" />
              )}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}
