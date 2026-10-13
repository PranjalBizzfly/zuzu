import { useState } from 'react'

// See HumanImage.jsx for why this exists: probing a throwaway Image()
// during the lazy useState initializer lets an already-cached photo
// render at full opacity from the very first paint, instead of flashing
// through the opacity-0 placeholder and fading in content that was
// already available.
function isCached(src) {
  if (typeof window === 'undefined' || !src) return false
  const probe = new window.Image()
  probe.src = src
  return probe.complete
}

// Bounded retry before giving up and showing the text fallback. Assets in
// this project are regenerated in place during development (a background
// process writes a new file to the same path a page is already requesting),
// so a real, permanent 404 and a request that merely lost a race with that
// write look identical to the browser in the first instant -- both fire
// onError. Retrying a couple of times with a short delay resolves the race
// without the page ever needing a manual reload; a genuinely missing asset
// still falls back to text after MAX_RETRIES.
const MAX_RETRIES = 2
const RETRY_DELAY_MS = 900

export default function ZuzuImage({
  src,
  alt = '',
  aspectRatio = 'aspect-[16/10]',
  objectPosition = 'object-[50%_20%]',
  priority = false,
  rounded = 'rounded-2xl',
  border = true,
  className = '',
  imageClassName = '',
}) {
  const [loaded, setLoaded] = useState(() => isCached(src))
  const [hasError, setHasError] = useState(false)
  const [prevSrc, setPrevSrc] = useState(src)
  const [attempt, setAttempt] = useState(0)

  // Adjusted during render, not in a useEffect -- see HumanImage.jsx for
  // why (React's recommended "reset state on prop change" pattern, and
  // it avoids an extra render+commit round-trip).
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
    <div
      className={`relative w-full overflow-hidden ${aspectRatio} ${rounded} ${
        border ? 'border border-line shadow-md' : ''
      } bg-elevated ${className}`}
    >
      {!hasError ? (
        <img
          src={resolvedSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`h-full w-full object-cover ${objectPosition} transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imageClassName}`}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-6 text-center text-xs text-muted">
          {alt || 'ZUZU Workforce Intelligence'}
        </div>
      )}
    </div>
  )
}
