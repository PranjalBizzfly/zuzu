import Reveal from './Reveal'

/*
  Thin convenience layer over Reveal for "N siblings entering in
  sequence" (card grids, nav lists, footer columns): pass the
  `.map((item, i) => ...)` index in and each item gets
  index * step ms of extra transition-delay, capped so a long list
  doesn't stretch the whole reveal out for several seconds.
*/
export function StaggerItem({
  index = 0,
  step = 70,
  maxDelay = 420,
  direction = 'up',
  trigger = 'inView',
  as,
  className = '',
  children,
}) {
  const delay = Math.min(index * step, maxDelay)
  return (
    <Reveal as={as} direction={direction} trigger={trigger} delay={delay} className={className}>
      {children}
    </Reveal>
  )
}

// Kept as an explicit wrapper (rather than having callers just use a
// plain <div>) so the pairing with StaggerItem is self-documenting at
// the call site, and so it has one place to extend later (e.g. a
// shared IntersectionObserver root) without touching every usage.
export function StaggerContainer({ as: Tag = 'div', className = '', children }) {
  return <Tag className={className}>{children}</Tag>
}
