import { useEffect } from 'react'

/*
  One delegated pointermove listener for the whole document, feeding two
  independent cursor-driven effects so neither needs its own global
  listener:

  - Every .card-glass gets a cursor-following spotlight (see the "Cards"
    block in styles/motion.css): --spot-x / --spot-y, the pointer position
    in px relative to that card.
  - Every .tilt-3d gets a live "tilt toward the cursor" (see
    styles/flow-steps-3d.css): --tilt-rx / --tilt-ry, a rotation in degrees
    derived from the pointer's position relative to the element's center,
    normalized by its own size and clamped to a small, restrained range so
    it reads as a subtle response, not a gimmick.

  A single element can carry both classes and gets both effects from the
  same event. All the actual visuals are CSS; this only writes the numbers.

  Skipped entirely on touch-only devices (no hover) and under
  prefers-reduced-motion, where neither effect is shown anyway.
*/
const TILT_MAX_DEG = 7

export default function useCardSpotlight() {
  useEffect(() => {
    const canHover = window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return undefined

    let frame = 0
    let lastEvent = null
    let lastTiltEl = null

    function update() {
      frame = 0
      const event = lastEvent
      if (!event) return
      const target = event.target instanceof Element ? event.target : null

      const card = target?.closest('.card-glass')
      if (card) {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
        card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
      }

      const tiltEl = target?.closest('.tilt-3d')
      if (tiltEl !== lastTiltEl && lastTiltEl) {
        lastTiltEl.style.removeProperty('--tilt-rx')
        lastTiltEl.style.removeProperty('--tilt-ry')
      }
      lastTiltEl = tiltEl
      if (tiltEl) {
        const rect = tiltEl.getBoundingClientRect()
        const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1
        const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1
        const clampedX = Math.max(-1, Math.min(1, nx))
        const clampedY = Math.max(-1, Math.min(1, ny))
        // Tilts toward the cursor: pointer right -> top edge rotates away
        // (negative rotateY), pointer below center -> top edge tips back.
        tiltEl.style.setProperty('--tilt-ry', `${(clampedX * TILT_MAX_DEG).toFixed(2)}deg`)
        tiltEl.style.setProperty('--tilt-rx', `${(-clampedY * TILT_MAX_DEG).toFixed(2)}deg`)
      }
    }

    function onPointerMove(event) {
      lastEvent = event
      if (!frame) frame = requestAnimationFrame(update)
    }

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onPointerMove)
      if (frame) cancelAnimationFrame(frame)
      if (lastTiltEl) {
        lastTiltEl.style.removeProperty('--tilt-rx')
        lastTiltEl.style.removeProperty('--tilt-ry')
      }
    }
  }, [])
}
