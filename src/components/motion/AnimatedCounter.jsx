import { useMemo } from 'react'
import useInView from '../../hooks/useInView'
import useReducedMotion from '../../hooks/useReducedMotion'
import useCountUp from '../../hooks/useCountUp'

/*
  Counts up to the numeric portion of an existing stat string once it
  scrolls into view -- "10K+", "99%", "24/7", "150" all keep their
  exact prefix/suffix formatting; only the digits animate. Never
  invents or reformats a value: if no digits are found, the string is
  rendered as-is with no animation.
*/
export default function AnimatedCounter({ value, duration = 1200, className = '' }) {
  const [ref, isInView] = useInView({ once: true })
  const reducedMotion = useReducedMotion()

  const { prefix, number, suffix } = useMemo(() => {
    const str = String(value)
    const match = str.match(/\d+/)
    if (!match) return { prefix: str, number: null, suffix: '' }
    return {
      prefix: str.slice(0, match.index),
      number: parseInt(match[0], 10),
      suffix: str.slice(match.index + match[0].length),
    }
  }, [value])

  const count = useCountUp(number ?? 0, { active: isInView, duration, reducedMotion })

  if (number === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    )
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
