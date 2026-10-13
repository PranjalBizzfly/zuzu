import { useEffect, useRef } from 'react'
import useReducedMotion from './useReducedMotion'

/*
  Cursor-driven 3D tilt for the hero's product scene (HomeWorkdayHero.jsx).
  Writes --tilt-x / --tilt-y (a handful of px, clamped to +/-maxX/maxY) onto
  the returned ref's node as the pointer moves inside it. `.hero-3d-layer`
  elements anywhere inside read them back through their own --tilt-depth
  (styles/hero-3d.css), so the dashboard and its floating badges/cards drift
  at slightly different rates instead of moving in lockstep.

  Skipped entirely on touch/coarse-pointer devices and prefers-reduced-motion
  -- --tilt-x/--tilt-y simply stay at their CSS default (0px), so every layer
  stays put. Same rAF-batched-write pattern as useParallax.js.
*/
export default function useTiltParallax({ maxX = 5, maxY = 4 } = {}) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node || reducedMotion) return undefined
    if (window.matchMedia?.('(pointer: coarse)').matches) return undefined

    let raf = null
    let x = 0
    let y = 0

    const apply = () => {
      raf = null
      node.style.setProperty('--tilt-x', `${x.toFixed(2)}px`)
      node.style.setProperty('--tilt-y', `${y.toFixed(2)}px`)
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onMove = (e) => {
      const rect = node.getBoundingClientRect()
      const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      x = Math.max(-1, Math.min(1, nx)) * maxX
      y = Math.max(-1, Math.min(1, ny)) * maxY
      schedule()
    }
    const onLeave = () => {
      x = 0
      y = 0
      schedule()
    }

    node.addEventListener('pointermove', onMove)
    node.addEventListener('pointerleave', onLeave)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      node.removeEventListener('pointermove', onMove)
      node.removeEventListener('pointerleave', onLeave)
      node.style.removeProperty('--tilt-x')
      node.style.removeProperty('--tilt-y')
    }
  }, [reducedMotion, maxX, maxY])

  return ref
}
