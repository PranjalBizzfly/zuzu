import { useEffect, useState } from 'react'
import useInView from '../../hooks/useInView'
import useReducedMotion from '../../hooks/useReducedMotion'

const DIRECTION_CLASS = {
  up: 'reveal-up',
  down: 'reveal-down',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  fade: 'reveal-fade',
}

/*
  Shared entrance-animation primitive for the whole site. Two modes:
  - trigger="inView" (default): plays once the element scrolls into
    view (IntersectionObserver via useInView) -- section headings,
    cards, footer, images.
  - trigger="mount": plays a frame after mount, for content that's
    already in the viewport at load and just needs a sequenced
    entrance (hero eyebrow/H1/description/CTA).

  `delay` (ms) staggers siblings via CSS transition-delay -- see
  Stagger.jsx for the list-index convenience wrapper around this.
*/
export default function Reveal({
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  trigger = 'inView',
  once = true,
  className = '',
  style,
  children,
  ...rest
}) {
  const reducedMotion = useReducedMotion()
  const [inViewRef, isInView] = useInView({ once })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (trigger !== 'mount') return undefined
    // Two rAFs (not one) so the browser commits the initial
    // opacity:0/transform paint before `.in-view` is added -- one rAF
    // can still land in the same paint on some browsers, which skips
    // the transition entirely and the element just snaps to visible.
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
  const directionClass = DIRECTION_CLASS[direction] || DIRECTION_CLASS.up

  return (
    <Tag
      ref={trigger === 'mount' ? undefined : inViewRef}
      className={`reveal ${directionClass} ${active ? 'in-view' : ''} ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
