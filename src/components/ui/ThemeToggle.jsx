import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from './icons'

/*
  Reads/writes the same localStorage key + [data-theme] attribute that
  the no-flash inline script in index.html sets before first paint, so
  toggling here and the initial page load never disagree.
*/
function getStoredTheme() {
  try {
    return localStorage.getItem('zuzu-theme')
  } catch {
    return null
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  try {
    localStorage.setItem('zuzu-theme', theme)
  } catch {
    // Storage unavailable (private browsing, blocked cookies) -- theme
    // still applies for this page view, just doesn't persist.
  }
}

// 'sm' (36px, the default -- every existing call site) matches the
// desktop action row's other h-9 controls. 'md' (44px) is for the mobile
// header row, where this sits next to the 44px hamburger button (see
// MobileMenu.jsx) and is one of only two things on the page every mobile
// visitor taps on first load, so it gets the larger, thumb-friendlier
// target instead of matching the denser desktop row.
const SIZES = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
}

export default function ThemeToggle({ size = 'sm', className = '' }) {
  const [theme, setTheme] = useState(
    () => getStoredTheme() || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  )

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex ${SIZES[size] || SIZES.sm} items-center justify-center rounded-xl border border-line bg-elevated text-muted shadow-sm transition-all duration-150 hover:border-line-strong hover:bg-overlay hover:text-ink ${className}`}
    >
      {theme === 'dark' ? <SunIcon className="h-4.5 w-4.5" /> : <MoonIcon className="h-4.5 w-4.5" />}
    </button>
  )
}
