import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/*
  Single source of truth for prefers-reduced-motion in JS-driven
  animations (IntersectionObserver reveals, the count-up hook, hero
  parallax). CSS-driven transitions/keyframes are separately neutralized
  globally in base.css, so the two layers can't drift out of sync.
*/
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia?.(QUERY).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia?.(QUERY)
    if (!mq) return undefined
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])

  return reduced
}
