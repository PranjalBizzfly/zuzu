/*
  Infinite auto-scrolling strip of feature highlights. The animation
  itself (marquee-scroll, see src/styles/motion.css) is a generic,
  reusable pattern -- this component just supplies ZUZU's own feature
  content instead of the unrelated placeholder cards it was modeled on.

  Renders `items` twice back-to-back so the -50% scroll loops with no
  visible seam, then pauses on hover/focus so the content is actually
  readable rather than just decorative. While paused, the ticket under
  the cursor tilts toward it -- the same cursor-tilt mechanic as
  Industries/Practical use cases (see styles/home-3d-extras.css),
  scoped here to a single ticket at a time since the strip itself is
  already the row's motion.
*/
export default function FeatureMarquee({ items }) {
  const track = [...items, ...items]

  return (
    <div className="marquee-row marquee-3d-scene overflow-hidden py-2" role="list" aria-label="ZUZU feature highlights">
      <div className="marquee-track flex w-max items-stretch gap-4">
        {track.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            role="listitem"
            aria-hidden={i >= items.length ? 'true' : undefined}
            className="marquee-3d-card tilt-3d flex w-[280px] shrink-0 flex-col gap-3 rounded-xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-line-strong"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.tint} `}
                aria-hidden="true"
              >
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
            </div>
            <p className="text-xs text-muted">
              <span className={`font-semibold ${item.color}`}>{item.badge}</span>
              <span className="mx-1.5 text-faint">•</span>
              <span>{item.meta}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
