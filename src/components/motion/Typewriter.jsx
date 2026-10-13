import { useEffect, useState } from 'react'
import useReducedMotion from '../../hooks/useReducedMotion'

/**
 * Typewriter text effect component.
 * Rotates through an array of words/phrases with typing, pausing, and deleting animations.
 * Gracefully degrades to static text when `prefers-reduced-motion` is active.
 */
export default function Typewriter({
  words = ['Workday Looks.', 'Productivity Trends.', 'Time Is Spent.', 'Focus Unfolds.'],
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 2200,
  className = '',
  cursorClassName = '',
}) {
  const reducedMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentWord = words[wordIndex] || ''

  useEffect(() => {
    if (reducedMotion || words.length === 0) return

    if (isDeleting) {
      if (subIndex === 0) {
        const nextWordTimer = setTimeout(() => {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }, 350)
        return () => clearTimeout(nextWordTimer)
      }

      const deleteTimer = setTimeout(() => {
        setSubIndex((prev) => prev - 1)
      }, deletingSpeed)
      return () => clearTimeout(deleteTimer)
    }

    // Typing
    if (subIndex === currentWord.length) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    const typeTimer = setTimeout(() => {
      setSubIndex((prev) => prev + 1)
    }, typingSpeed)
    return () => clearTimeout(typeTimer)
  }, [subIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, reducedMotion, currentWord])

  if (reducedMotion) {
    return <span className={className}>{words[0]}</span>
  }

  const displayedText = currentWord.substring(0, subIndex)

  return (
    <span className={`inline-block ${className}`} aria-label={currentWord}>
      <span aria-hidden="true">{displayedText}</span>
      <span className={`typewriter-cursor ${cursorClassName}`} aria-hidden="true" />
      <span className="sr-only">{currentWord}</span>
    </span>
  )
}
