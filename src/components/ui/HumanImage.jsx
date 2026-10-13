import { useState } from 'react'

/**
 * HumanImage
 *
 * Production-ready real human photography component designed specifically for UseZuZu.
 * Features:
 * - Natural skin-tone preservation in dark and light modes (zero purple skin tinting)
 * - Strict aspect-ratio container preventing Cumulative Layout Shift (CLS)
 * - Ergonomic `objectPosition` default (object-[50%_20%]) ensuring heads/faces are never cropped
 * - Optional subtle dark vignette overlay for legibility when overlaid with text
 * - Optional floating telemetry badge or caption
 * - Subtle glass border ring matching the UseZuZu enterprise design language
 */
// A previously-cached image resolves synchronously once `src` is set --
// probing it with a throwaway Image() lets the lazy useState initializer
// (which runs once, before first paint) know that up front, so an
// already-cached photo renders at full opacity immediately instead of
// flashing through the opacity-0 placeholder and playing a pointless
// fade-in for content that was ready the whole time. A cold-cache image
// still gets the normal onLoad-driven fade.
function isCached(src) {
  if (typeof window === 'undefined' || !src) return false
  const probe = new window.Image()
  probe.src = src
  return probe.complete
}

// Bounded retry before giving up and showing the text fallback -- see
// ZuzuImage.jsx for why: assets in this project are regenerated in place
// during development, so a request that merely lost a race with that write
// looks identical to a real 404 in the first instant. See ZuzuImage.jsx.
const MAX_RETRIES = 2
const RETRY_DELAY_MS = 900

export default function HumanImage({
  src,
  alt = '',
  aspectRatio = 'aspect-[16/10]',
  objectPosition = 'object-[50%_20%]',
  priority = false,
  rounded = 'rounded-2xl',
  border = true,
  glow = false,
  overlay = false,
  badge = null,
  caption = null,
  className = '',
  imageClassName = '',
}) {
  const [loaded, setLoaded] = useState(() => isCached(src))
  const [hasError, setHasError] = useState(false)
  const [prevSrc, setPrevSrc] = useState(src)
  const [attempt, setAttempt] = useState(0)

  // Adjusted during render (React's recommended pattern for "reset state
  // when a prop changes") rather than in a useEffect -- covers the same
  // component instance being reused for a different image, resetting a
  // stale error from a previous `src` and re-checking the cache, without
  // the extra render+commit round-trip (and the one-frame-late flicker
  // that would cause) a useEffect-based reset would add.
  if (src !== prevSrc) {
    setPrevSrc(src)
    setLoaded(isCached(src))
    setHasError(false)
    setAttempt(0)
  }

  const handleError = () => {
    if (attempt < MAX_RETRIES) {
      window.setTimeout(() => setAttempt((a) => a + 1), RETRY_DELAY_MS)
    } else {
      setHasError(true)
    }
  }

  // Only cache-bust on a retry -- the first attempt keeps the exact `src`
  // the caller passed, so normal HTTP caching still applies on cold loads.
  const resolvedSrc = attempt > 0 ? `${src}${src.includes('?') ? '&' : '?'}retry=${attempt}` : src

  return (
    <figure
      className={`group relative w-full overflow-hidden ${aspectRatio} ${rounded} ${
        border
          ? 'border border-line shadow-md ring-1 ring-black/5 dark:ring-white/10'
          : ''
      } ${
        glow
          ? 'shadow-[0_12px_40px_rgba(var(--color-green-rgb),0.15)] dark:shadow-[0_12px_40px_rgba(var(--color-green-rgb),0.25)]'
          : ''
      } bg-elevated/80 backdrop-blur-sm ${className}`}
    >
      {!hasError ? (
        <img
          src={resolvedSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`h-full w-full object-cover ${objectPosition} transition-all duration-500 ease-[var(--ease-emphasized)] ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          } ${imageClassName}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-xs text-muted">
          <span className="font-semibold text-ink/70">{alt || 'Workforce in Practice'}</span>
          <span className="mt-1 text-[11px] text-faint">ZUZU Workforce Visibility</span>
        </div>
      )}

      {/* Subtle vignette/directional overlay for text legibility (neutral navy/black, never purple-tinted) */}
      {overlay && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060A13]/85 via-[#060A13]/25 to-transparent"
          aria-hidden="true"
        />
      )}

      {/* Optional floating badge (e.g. active verified indicator or team label) */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <div className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface/90 px-2.5 py-1 text-xs font-semibold text-ink shadow-lg backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
            <span>{badge}</span>
          </div>
        </div>
      )}

      {/* Optional caption bar */}
      {caption && (
        <figcaption className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-[#060A13]/85 p-3 text-xs text-slate-200 backdrop-blur-md">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
