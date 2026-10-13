import { useEffect, useRef, useState } from 'react'

/*
  Viewport-triggered reveal primitive, built on IntersectionObserver
  rather than a scroll listener -- no per-frame work, browser-native
  and cheap. `once` (default true) disconnects after the first trigger
  so entrance animations don't replay every time the user scrolls
  past the same element.
*/
export default function useInView({ threshold = 0.05, rootMargin = '0px 0px -40px 0px', once = true } = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, isInView]
}
