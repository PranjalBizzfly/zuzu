import { useEffect, useRef } from 'react'
import useReducedMotion from './useReducedMotion'

/*
  Extremely subtle scroll-linked translateY for hero background layers.
  Skipped entirely on touch/coarse-pointer devices (parallax on a phone
  is a performance cost for an effect the user is mid-scroll past
  anyway) and under prefers-reduced-motion. A rAF-guarded scroll
  listener rather than IntersectionObserver, since this needs the
  continuous scroll position, not a single viewport-entry trigger.

  Apply the returned ref to a wrapper *around* the image, not the image
  itself, if the image also has its own CSS entrance animation (mount
  fade/scale) -- otherwise this hook's inline transform and the
  keyframe's transform fight over the same element.
*/
export default function useParallax({ strength = 0.12, max = 18 } = {}) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node || reducedMotion) return undefined
    if (window.matchMedia?.('(pointer: coarse)').matches) return undefined

    let raf = null
    const update = () => {
      raf = null
      const rect = node.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const offset = (viewportCenter - elementCenter) * strength
      const clamped = Math.max(-max, Math.min(max, offset))
      node.style.transform = `translateY(${clamped}px)`
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      node.style.transform = ''
    }
  }, [reducedMotion, strength, max])

  return ref
}
