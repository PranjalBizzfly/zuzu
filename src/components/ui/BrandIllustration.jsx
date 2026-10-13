/*
  Abstract, custom-drawn SVG scenes used in place of stock photography on
  the highest-traffic hero surfaces (hub pages for Industries, Resources,
  Remote Workforce, Learning, Use Cases and Roles). Pure vector shapes in
  the brand blue on transparent background -- InternalPageHero always
  composites its hero visual over a fixed dark-navy section regardless of
  site theme, so these are drawn to read well specifically against that
  dark background, not against --color-* tokens.

  Deliberately restrained (thin strokes, low-opacity fills, no blur/glow
  filters) to match the same "quiet enterprise SaaS over neon" direction
  the token/shadow cleanup elsewhere in this pass moved toward.
*/

const STROKE = 'rgba(141, 182, 255, 0.55)'
const STROKE_DIM = 'rgba(141, 182, 255, 0.25)'
const FILL_SOFT = 'rgba(89, 148, 255, 0.12)'
const DOT = '#8db6ff'

function NetworkScene() {
  // Nodes connected by thin lines -- reads as "visibility across a
  // distributed workforce" without depicting any literal person.
  const nodes = [
    [80, 90], [230, 50], [340, 140], [180, 210], [60, 220], [300, 250], [400, 80], [420, 220],
  ]
  const edges = [[0, 1], [1, 2], [0, 3], [3, 4], [3, 5], [2, 5], [1, 6], [2, 7], [5, 7]]
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={STROKE_DIM} strokeWidth="1" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 7 : 4.5} fill={DOT} opacity={i === 2 ? 0.9 : 0.55} />
      ))}
      <circle cx="340" cy="140" r="26" fill="none" stroke={STROKE} strokeWidth="1" opacity="0.5" />
      <circle cx="340" cy="140" r="42" fill="none" stroke={STROKE_DIM} strokeWidth="1" />
    </svg>
  )
}

function LayersScene() {
  // Stacked, slightly offset rounded panels -- "layers of the
  // organization" (org / team / individual), evoking structure/hierarchy.
  const panels = [
    { x: 60, y: 190, w: 300, h: 64, o: 0.5 },
    { x: 90, y: 120, w: 300, h: 64, o: 0.7 },
    { x: 120, y: 50, w: 300, h: 64, o: 1 },
  ]
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full" aria-hidden="true">
      {panels.map((p, i) => (
        <rect key={i} x={p.x} y={p.y} width={p.w} height={p.h} rx="14" fill={FILL_SOFT} stroke={STROKE} strokeOpacity={p.o} strokeWidth="1" />
      ))}
      {panels[2] && (
        <>
          <rect x={panels[2].x + 24} y={panels[2].y + 20} width="120" height="8" rx="4" fill={DOT} opacity="0.5" />
          <rect x={panels[2].x + 24} y={panels[2].y + 36} width="80" height="8" rx="4" fill={STROKE_DIM} />
        </>
      )}
    </svg>
  )
}

function OrbitScene() {
  // A central hub with orbiting nodes -- "one platform, many workflows."
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full" aria-hidden="true">
      <circle cx="260" cy="160" r="100" fill="none" stroke={STROKE_DIM} strokeWidth="1" />
      <circle cx="260" cy="160" r="60" fill="none" stroke={STROKE_DIM} strokeWidth="1" />
      <circle cx="260" cy="160" r="22" fill={FILL_SOFT} stroke={STROKE} strokeWidth="1.5" />
      {[0, 60, 130, 190, 260, 320].map((deg, i) => {
        const r = i % 2 === 0 ? 100 : 60
        const rad = (deg * Math.PI) / 180
        const x = 260 + r * Math.cos(rad)
        const y = 160 + r * Math.sin(rad)
        return <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 6 : 4} fill={DOT} opacity={0.6} />
      })}
    </svg>
  )
}

function FlowScene() {
  // A gently stepped path of connected checkpoints -- "a repeatable
  // workflow / process."
  const points = [[50, 240], [140, 170], [230, 200], [320, 110], [420, 140]]
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full" aria-hidden="true">
      <path d={d} fill="none" stroke={STROKE} strokeWidth="1.5" strokeLinecap="round" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === points.length - 1 ? 7 : 5} fill={i === points.length - 1 ? DOT : 'rgba(141,182,255,0.4)'} />
      ))}
    </svg>
  )
}

function GridScene() {
  // A soft dot-grid with a few highlighted cells -- "structured data,
  // reviewed selectively" (roles/permissions framing).
  const cols = 8
  const rows = 5
  const highlighted = new Set(['2,1', '4,2', '6,1', '3,3'])
  return (
    <svg viewBox="0 0 480 320" className="h-full w-full" aria-hidden="true">
      {Array.from({ length: cols }).map((_, c) =>
        Array.from({ length: rows }).map((_, r) => {
          const key = `${c},${r}`
          const x = 40 + c * 52
          const y = 30 + r * 52
          return highlighted.has(key) ? (
            <rect key={key} x={x - 12} y={y - 12} width="24" height="24" rx="6" fill={FILL_SOFT} stroke={STROKE} strokeWidth="1" />
          ) : (
            <circle key={key} cx={x} cy={y} r="2.5" fill={STROKE_DIM} />
          )
        })
      )}
    </svg>
  )
}

const SCENES = {
  network: NetworkScene,
  layers: LayersScene,
  orbit: OrbitScene,
  flow: FlowScene,
  grid: GridScene,
}

export default function BrandIllustration({ variant = 'network', className = '' }) {
  const Scene = SCENES[variant] || NetworkScene
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(60% 60% at 70% 40%, rgba(89,148,255,0.10), transparent 70%)' }}
      />
      <Scene />
    </div>
  )
}
