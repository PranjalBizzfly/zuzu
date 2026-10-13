import { useEffect, useState } from 'react'
import useInView from '../../hooks/useInView'
import useReducedMotion from '../../hooks/useReducedMotion'

/*
  Root of the shared dashboard / product-template entrance system (the
  rules and the list of role classes live in styles/product-motion.css).

  It owns ONE viewport check for the whole template: the first time the
  root scrolls into view (`once`, never replayed on scroll) it gains
  `.is-in`, and every `.pr-*` element inside starts its own delayed,
  CSS-only entrance. That is what lets a container, its cards, badges and
  data bars play as a single sequence off a single observer.

  - trigger="inView" (default): plays when the template scrolls into view.
  - trigger="mount": for heroes already on screen at load.
  - `base` (ms) shifts the whole cascade later, e.g. so a badge waits for
    the hero column it sits in.

  The root can also be a role element itself (`className="pr-main ..."`,
  `className="pr-badge ..."`), which is how DashboardPreview and the hero
  badges use it -- no extra wrapper element.

  Roots must not be nested: an outer `.is-in` would start the inner
  template's entrance before the inner one is visible.

  With prefers-reduced-motion it renders a plain element with no `.pr`
  class, so none of the hidden/animated rules match and the template simply
  appears, with no transforms and no float.
*/
export default function ProductReveal({
  as: Tag = 'div',
  trigger = 'inView',
  base = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const reducedMotion = useReducedMotion()
  const [inViewRef, isInView] = useInView({ once: true })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (trigger !== 'mount') return undefined
    // Two rAFs so the hidden state is painted before `.is-in` lands (see
    // Reveal.jsx for the same reasoning).
    let raf2
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setMounted(true))
    })
    return () => {
      cancelAnimationFrame(raf1)
      if (raf2) cancelAnimationFrame(raf2)
    }
  }, [trigger])

  if (reducedMotion) {
    return (
      <Tag className={className} style={style} {...rest}>
        {children}
      </Tag>
    )
  }

  const active = trigger === 'mount' ? mounted : isInView

  return (
    <Tag
      ref={trigger === 'mount' ? undefined : inViewRef}
      className={`pr ${active ? 'is-in' : ''} ${className}`}
      style={base ? { ...style, '--pr-base': `${base}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
