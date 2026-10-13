import { useEffect, useState } from 'react'
import useReducedMotion from '../../hooks/useReducedMotion'

/**
 * Trending Scroll Progress Indicator:
 * A sleek 2.5px gradient bar pinned to the top of the viewport
 * showing current page scroll progress with a glowing tip.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    let ticking = false

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) {
        setProgress(0)
        ticking = false
        return
      }

      const percent = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
      setProgress(percent)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateScrollProgress()

    return () => window.removeEventListener('scroll', onScroll)
  }, [reducedMotion])

  if (reducedMotion || progress === 0) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[2.5px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#2A6EEB] via-[#5994FF] to-[#416AB4] shadow-[0_0_10px_rgba(89,148,255,0.6)] transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
