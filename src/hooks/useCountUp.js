import { useEffect, useRef, useState } from 'react'

// Ease-out-expo: fast start, gentle settle -- reads as a natural
// counter tick rather than a linear odometer.
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

/*
  Counts from 0 to `target` once `active` becomes true. Reduced-motion
  and "no target yet" both resolve straight to the final value instead
  of animating -- this is a UI affordance, not something that should
  ever block or misrepresent the real number.
*/
export default function useCountUp(target, { active = true, duration = 1200, reducedMotion = false } = {}) {
  const [value, setValue] = useState(reducedMotion || !active ? target : 0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!active || startedRef.current) return undefined

    if (reducedMotion) {
      // Deferred a tick (not called synchronously in the effect body)
      // per react-hooks/set-state-in-effect -- still resolves before
      // the next paint, just not inside this render's commit phase.
      queueMicrotask(() => setValue(target))
      startedRef.current = true
      return undefined
    }

    startedRef.current = true
    let raf
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.round(target * easeOutExpo(progress)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration, reducedMotion])

  return value
}
