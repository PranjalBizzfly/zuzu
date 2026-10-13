import { useEffect, useState } from 'react'
import useInView from '../../hooks/useInView'
import useReducedMotion from '../../hooks/useReducedMotion'
import AccentWords from './AccentWords'
import { getAccentRange } from './accentRange'

/**
 * One-shot typewriter reveal for a single heading string -- distinct from
 * Typewriter.jsx (which loops through a word list forever, for the small
 * rotating phrase inside the homepage hero). This types the text once,
 * either as soon as it mounts (`trigger="mount"`, for hero H1s already in
 * the viewport at load) or once it scrolls into view (`trigger="inView"`,
 * the default, for section H2s further down the page), then stops with
 * the cursor removed -- it never deletes/retypes.
 *
 * Accessibility/SEO: the full text is always in the DOM via a `sr-only`
 * node, so screen readers and non-JS crawlers get the real heading
 * immediately; only the visual, animated copy is `aria-hidden`.
 *
 * `children` must be a plain string -- headings with embedded markup
 * render statically instead of attempting to animate across mixed nodes.
 *
 * Sitewide heading rule: the last two words of every heading get the
 * `.heading-accent` gradient (see accentRange.js). The accent is applied
 * to that slice of the typed text as it is revealed, so it is already in
 * place mid-animation and in the reduced-motion / static render.
 */
export default function TypewriterHeading({
  as: Tag = 'h2',
  children,
  trigger = 'inView',
  typingSpeed = 28,
  startDelay = 0,
  className = '',
  ...rest
}) {
  const text = typeof children === 'string' ? children : null
  const reducedMotion = useReducedMotion()
  const [inViewRef, isInView] = useInView({ once: true })
  const [subIndex, setSubIndex] = useState(0)

  const active = trigger === 'mount' || isInView

  useEffect(() => {
    if (reducedMotion || !active || !text || subIndex >= text.length) return undefined
    const delay = subIndex === 0 ? startDelay : typingSpeed
    const timer = setTimeout(() => setSubIndex((i) => i + 1), delay)
    return () => clearTimeout(timer)
  }, [active, subIndex, text, typingSpeed, startDelay, reducedMotion])

  if (!text || reducedMotion) {
    return (
      <Tag ref={trigger === 'mount' ? undefined : inViewRef} className={className} {...rest}>
        <AccentWords>{children}</AccentWords>
      </Tag>
    )
  }

  const done = subIndex >= text.length
  const accent = getAccentRange(text, 2, Tag === 'h1')

  let typedContent = text.slice(0, subIndex)
  if (accent) {
    const before = text.slice(0, Math.min(subIndex, accent.start))
    const mid = text.slice(accent.start, Math.min(subIndex, accent.end))
    const after = subIndex > accent.end ? text.slice(accent.end, subIndex) : ''
    typedContent = (
      <>
        {before}
        {mid && <span className="heading-accent">{mid}</span>}
        {after}
      </>
    )
  }

  return (
    <Tag ref={trigger === 'mount' ? undefined : inViewRef} className={className} {...rest}>
      <span aria-hidden="true">{typedContent}</span>
      {!done && <span className="typewriter-cursor" aria-hidden="true" />}
      <span className="sr-only">{text}</span>
    </Tag>
  )
}
