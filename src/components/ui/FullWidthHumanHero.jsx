import { Link } from 'react-router-dom'
import Container from './Container'
import Breadcrumb from './Breadcrumb'
import EyebrowBadge from './EyebrowBadge'
import Button from './Button'
import Reveal from '../motion/Reveal'
import TypewriterHeading from '../motion/TypewriterHeading'
import useParallax from '../../hooks/useParallax'
import { getHeroImagePosition } from '../../data/visualAssets'

/**
 * FullWidthHumanHero
 * 
 * Implements the full-width visual hero banner style matching the
 * ZUZU reference collage:
 * - Full-bleed background real human workforce photography
 * - Directional dark/light gradient overlay for 100% WCAG text legibility
 * - Content cleanly on the left (Breadcrumb, Badge, H1, Description, CTAs, Feature tags)
 * - Human subject prominently visible on the right
 * - No floating badge/label cards over the photo (`children` remains for
 *   any page-specific content in the right-hand column)
 */
export default function FullWidthHumanHero({
  backgroundImage,
  imagePosition = 'center-right',
  breadcrumbs,
  badge,
  title,
  description,
  primaryCta = { label: 'Start 7-Day Free Trial', href: '/free-trial' },
  secondaryCta,
  featureTags,
  belowDescription,
  children,
  className = '',
}) {
  // Vertical anchor -- see InternalPageHero.jsx (same banner shape, same
  // getObjectPosition, same underlying problem) for the full reasoning.
  // getHeroImagePosition looks up a per-photo tuned position (measured
  // directly against that image -- see HERO_IMAGE_POSITIONS in
  // data/visualAssets.js) when one exists for this backgroundImage;
  // otherwise this falls through to the enum below, a safe default for
  // the landscape photos in the set. `imagePosition` can also be passed
  // as a literal `object-[X%_Y%]` at the call site, which always wins
  // over both the table and the enum.
  //
  // Returns a plain CSS `object-position` value, applied via inline
  // style rather than a Tailwind class -- see InternalPageHero.jsx for
  // why (a class built at runtime from the lookup table is invisible to
  // Tailwind's static JIT scan and silently produces no CSS at all).
  const getObjectPosition = () => {
    if (typeof imagePosition === 'string' && imagePosition.startsWith('object-[')) {
      return imagePosition.slice('object-['.length, -1).replace(/_/g, ' ')
    }
    const tuned = getHeroImagePosition(backgroundImage)
    if (tuned) return tuned
    switch (imagePosition) {
      case 'center-left':
        return '15% 28%'
      case 'center':
        return '50% 28%'
      case 'left':
        return '0% 28%'
      case 'right':
        return '100% 28%'
      case 'center-right':
      default:
        return '85% 28%'
    }
  }

  // See InternalPageHero.jsx for why this wraps the image rather than
  // applying to it directly (the image has its own mount fade/scale).
  const parallaxRef = useParallax({ max: 18 })

  return (
    <section data-theme="dark" className={`surface-dark relative w-full overflow-hidden border-b border-white/10 min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center bg-[#060A13] ${className}`}>
      {/* 1. Full-Width Human Background Image Layer */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div ref={parallaxRef} className="absolute -inset-y-6 inset-x-0 will-change-transform">
            <img
              src={backgroundImage}
              alt=""
              aria-hidden="true"
              style={{ objectPosition: getObjectPosition() }}
              className="hero-image-reveal h-full w-full object-cover transition-transform duration-700 ease-out transform-gpu"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* 2. Directional dark overlay, protecting left text while keeping the right subject
              visible. Fixed to the section's own dark navy (not --color-page) so it stays
              consistent regardless of site theme. Most of this photography is a normal,
              brightly-lit stock photo, not dark-toned -- the overlay used to stay at 45% opacity
              all the way to the right edge, which crushed a bright photo down to a barely-visible
              sliver. Verified against the actual source photos (composited old vs. new opacity
              curves and inspected the result): fading to 5% by the right edge, with the strong
              text-protection zone pulled in to the first 45% of the width, is what actually makes
              the subject visible while keeping the text legible. */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060A13] via-[#060A13]/65 via-45% to-[#060A13]/5 pointer-events-none" />

          {/* Bottom blend gradient fading seamlessly into the section's own dark background */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060A13] via-[#060A13]/60 to-transparent pointer-events-none" />

          {/* Top subtle vignette */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />

          {/* Ambient aurora glow -- see InternalPageHero.jsx for why it
              sits in the darkened text-protection zone rather than over
              the photo directly. */}
          <div
            className="animate-aurora absolute -left-24 top-1/3 h-80 w-80 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundImage: 'var(--gradient-brand-soft)' }}
            aria-hidden="true"
          />
        </div>
      )}

      {/* 3. Hero Content Container */}
      <Container className="relative z-10 w-full py-14 sm:py-20 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text, CTAs, Feature Tags */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-5 max-w-2xl">
            {/* Breadcrumb Navigation */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <Reveal trigger="mount" delay={0} className="mb-1">
                <Breadcrumb items={breadcrumbs} />
              </Reveal>
            )}

            {/* Optional Badge / Eyebrow Pill */}
            {badge && (
              <Reveal trigger="mount" delay={60} className="inline-flex items-center">
                {typeof badge === 'string' ? (
                  <EyebrowBadge>{badge}</EyebrowBadge>
                ) : (
                  badge
                )}
              </Reveal>
            )}

            {/* Main H1 Headline */}
            <TypewriterHeading as="h1" trigger="mount" startDelay={140} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
              {title}
            </TypewriterHeading>

            {/* Description Text */}
            {description && (
              <Reveal as="p" trigger="mount" delay={220} className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {description}
              </Reveal>
            )}

            {/* Optional block between the description and CTAs -- e.g. a
                stat strip -- rendered as-is, no fixed markup imposed. */}
            {belowDescription && <Reveal trigger="mount" delay={260}>{belowDescription}</Reveal>}

            {/* Dual CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <Reveal trigger="mount" delay={300} className="flex flex-wrap items-center gap-3 pt-2">
                {primaryCta && (
                  <Button to={primaryCta.href} onClick={primaryCta.onClick} variant="primary" size="md">
                    {primaryCta.label || 'Get Started'}
                  </Button>
                )}

                {secondaryCta && (
                  <Button
                    to={secondaryCta.href}
                    onClick={secondaryCta.onClick}
                    variant="outline"
                    size="md"
                    className="border-white/15 bg-white/10 text-white hover:bg-white/20 hover:border-white/25"
                  >
                    {secondaryCta.icon && (
                      <span className="mr-2 inline-flex items-center text-current">
                        {secondaryCta.icon}
                      </span>
                    )}
                    <span>{secondaryCta.label}</span>
                  </Button>
                )}
              </Reveal>
            )}

            {/* Feature Pills (e.g. Homepage: Workforce Monitoring, Time & Attendance, etc.) --
                each pill is its own Reveal (not nested inside one more), so the
                360ms base + per-pill stagger is the actual delay applied, rather
                than being masked by an outer wrapper's own separate fade-in. */}
            {featureTags && featureTags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10">
                {featureTags.map((tag, i) => {
                  const Icon = tag.icon
                  return (
                    <Reveal
                      key={tag.label}
                      as={Link}
                      to={tag.href || '#'}
                      trigger="mount"
                      direction="fade"
                      delay={360 + i * 40}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-white/25 hover:text-white hover:bg-white/10 transition-all duration-150 shadow-sm"
                    >
                      {Icon && (
                        <Icon className="h-3.5 w-3.5 text-green-400 group-hover:scale-110 transition-transform" />
                      )}
                      <span>{tag.label}</span>
                    </Reveal>
                  )
                })}
              </div>
            )}
          </div>

          {/* Right Column: photo subject area (kept clear of overlay cards) */}
          <Reveal
            direction="left"
            trigger="mount"
            delay={180}
            className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[160px] sm:min-h-[220px] lg:min-h-[320px]"
          >
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
