import { useMemo } from 'react'

// Pulled from the brand accent + secondary category-tag tokens already
// in tokens.css, not arbitrary hex values, so the burst always matches
// the current theme/accent rather than hardcoding a palette of its own.
const COLORS = [
  'var(--color-green)',
  'var(--color-green-400)',
  'var(--color-blue)',
  'var(--color-blue-400)',
  'var(--color-purple)',
  'var(--color-purple-400)',
]

function buildParticles(count, colors, minDistance, maxDistance, minSize, maxSize) {
  return Array.from({ length: count }, (_, i) => {
    // Evenly spaced around the circle with a little jitter, rather than
    // fully random, so a small count (~16) still reads as a burst
    // instead of clumping on one side.
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5
    const distance = minDistance + Math.random() * (maxDistance - minDistance)
    const size = minSize + Math.round(Math.random() * (maxSize - minSize))
    return {
      id: i,
      tx: `${Math.cos(angle) * distance}px`,
      ty: `${Math.sin(angle) * distance}px`,
      delay: Math.round(Math.random() * 100),
      size,
      color: colors[i % colors.length],
    }
  })
}

/*
  One-shot particle burst for a success moment (e.g. the checkmark
  after a form submits) -- mount this alongside the icon it should
  burst from, inside a `position: relative` wrapper. Purely decorative
  (aria-hidden); each dot animates itself via the confetti-burst
  keyframe in motion.css and is safely neutralized site-wide under
  prefers-reduced-motion (see base.css). `colors`/size/distance are
  overridable so a small inline moment (e.g. SubmitButton's brand-green
  micro burst) doesn't have to use the same scale as a bigger one.
*/
export default function ConfettiBurst({
  count = 16,
  colors = COLORS,
  minDistance = 46,
  maxDistance = 92,
  minSize = 4,
  maxSize = 8,
  className = '',
}) {
  const particles = useMemo(
    () => buildParticles(count, colors, minDistance, maxDistance, minSize, maxSize),
    [count, colors, minDistance, maxDistance, minSize, maxSize],
  )

  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="confetti-dot"
          style={{
            '--tx': p.tx,
            '--ty': p.ty,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: `${p.delay}ms`,
          }}
        />
      ))}
    </div>
  )
}
