import { useEffect, useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from './icons'

// Distance from the bottom of the document (px) within which the
// "scroll to bottom" control hides, since there's nothing further to
// scroll to.
const BOTTOM_THRESHOLD = 480

export default function BackToTop() {
  const [top, setTop] = useState(false)
  const [bottom, setBottom] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setTop(window.scrollY > 480)
      const distanceFromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight)
      setBottom(distanceFromBottom > BOTTOM_THRESHOLD)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        aria-hidden={!top}
        tabIndex={top ? 0 : -1}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-line bg-elevated text-muted shadow-md transition-all duration-[250ms] ease-[var(--ease-emphasized)] hover:border-line-strong hover:text-green ${
          top ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <ChevronUpIcon className="h-5 w-5 arrow-nudge-up" />
      </button>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
        aria-label="Scroll to bottom"
        aria-hidden={!bottom}
        tabIndex={bottom ? 0 : -1}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-line bg-elevated text-muted shadow-md transition-all duration-[250ms] ease-[var(--ease-emphasized)] hover:border-line-strong hover:text-green ${
          bottom ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <ChevronDownIcon className="h-5 w-5 arrow-nudge-down" />
      </button>
    </div>
  )
}
