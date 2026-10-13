import { useSyncExternalStore } from 'react'
import logoBlack from '../../assets/brand/usezuzu-logo-black.png'
import logoBlue from '../../assets/brand/usezuzu-logo-blue.png'

/*
  The one place the UseZuzu logo is chosen. Every logo on the site (navbar,
  mobile menu, footer, login page, login modal, style guide) renders this
  component, so nothing else needs theme logic.

    LIGHT theme -> BLACK UseZuzu logo
    DARK  theme -> BLUE  UseZuzu logo

  Both files are the official brand artwork on a transparent background (the
  supplied JPGs had a solid white box, which showed on the dark theme; the
  PNGs are the same artwork, same colour, same canvas, white knocked out).
  They are used as-is in an <img>, never recoloured, filtered, cropped,
  redrawn or given effects (no CSS filter, blend mode, shadow or gradient),
  per the UseZuzu Brand Guidelines. Exactly one <img> is in the DOM at a time.

  The wordmark reads "ZUZU" (the supplied light- and dark-mode artwork,
  cropped tight and given even padding on all sides, 1400x734).

  It is rendered at a height that gives the artwork a suitable visible size, so the
  navbar's height is set by the navbar, not by the logo. Width is `auto`, and
  the intrinsic width/height attributes reserve the correct aspect ratio
  before the file loads, so there is no layout shift.
*/
const LOGO_BY_THEME = { light: logoBlack, dark: logoBlue }

const INTRINSIC = { width: 1400, height: 734 }

const SIZES = {
  sm: 'h-9',
  md: 'h-[51px]',
  lg: 'h-[59px]',
}

// Warm the cache for both files up front, so switching theme never has to
// wait on the network and can't flash an empty or stale logo.
if (typeof Image !== 'undefined') {
  Object.values(LOGO_BY_THEME).forEach((src) => {
    new Image().src = src
  })
}

// [data-theme] on <html> is the single source of truth: the inline script in
// index.html sets it before first paint and ThemeToggle updates it. Reading
// it through useSyncExternalStore means the correct logo is chosen on the very
// first render (no wrong-logo flash) and re-renders in the same frame the
// attribute changes.
function subscribeToTheme(onChange) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}

function getTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

// `onDark` is for a logo placed on a surface that is dark in BOTH themes (the
// footer): the black logo would be invisible there, so it always gets the blue
// one. It is a fixed choice, not a recolour -- same two official files.
export default function Logo({ size = 'md', className = '', onDark = false }) {
  const pageTheme = useSyncExternalStore(subscribeToTheme, getTheme, () => 'light')
  const theme = onDark ? 'dark' : pageTheme
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={LOGO_BY_THEME[theme]}
        alt="Zuzu"
        width={INTRINSIC.width}
        height={INTRINSIC.height}
        decoding="sync"
        className={`w-auto max-w-none ${SIZES[size]} object-contain`}
      />
    </span>
  )
}
