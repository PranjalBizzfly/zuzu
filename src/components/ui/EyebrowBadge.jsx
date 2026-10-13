import { SparkleIcon } from './icons'

/*
  The one global "eyebrow" pill used above section/page headings sitewide
  -- fixed size, radius, typography and color always, regardless of page.
  Not a variant system: consistency is the point, so don't add a
  `variant` prop back in. `icon` accepts any small node (an icon
  component instance, or a status dot) sized to fit the badge, and
  defaults to the sparkle mark from the reference "Why ZUZU" pill so
  every badge sitewide carries it without each call site passing it
  explicitly; pass `icon={null}` to omit it, or a different node (e.g.
  HomeWorkdayHero's live-status dot) to replace it. Visual treatment
  (glass surface + luminous violet border + soft glow) lives in the
  shared .eyebrow-badge class (src/styles/buttons.css) so it matches
  the button system's premium language everywhere at once.
*/
export default function EyebrowBadge({ icon = <SparkleIcon />, className = '', children }) {
  return (
    <span
      className={`eyebrow-badge inline-flex w-fit max-w-full items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide ${className}`}
    >
      {icon && <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center">{icon}</span>}
      {children}
    </span>
  )
}
