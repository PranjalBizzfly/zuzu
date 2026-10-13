import Container from './Container'
import Breadcrumb from './Breadcrumb'
import EyebrowBadge from './EyebrowBadge'
import Button from './Button'
import ZuzuImage from './ZuzuImage'
import BrandIllustration from './BrandIllustration'
import { Link } from 'react-router-dom'
import Reveal from '../motion/Reveal'
import TypewriterHeading from '../motion/TypewriterHeading'
import useParallax from '../../hooks/useParallax'
import { getHeroImagePosition } from '../../data/visualAssets'

/**
 * InternalPageHero
 * 
 * Reusable full-width visual hero banner system matching the ZUZU reference collage:
 * - Full-bleed background real human workforce image
 * - Directional dark/light gradient overlay for 100% WCAG AAA readability
 * - Clean left column layout (Breadcrumbs, Badge, H1, Description, CTAs, cluster links)
 * - Prominent human subject visible on the right (no floating role/label
 *   cards are drawn over the photo -- `humanImage` only supplies the
 *   background photo)
 */
export default function InternalPageHero({
  breadcrumbItems,
  badge,
  title,
  description,
  cta = { label: 'Start 7-Day Free Trial', href: '/free-trial' },
  secondaryCta,
  clusterLink,
  visual,
  visualType = 'dashboard',
  image,
  bgImage,
  humanImage,
  illustrationVariant,
  imagePosition = 'center-right',
  align = 'split',
  reverse = false,
  className = '',
}) {
  const isIllustration = visualType === 'illustration'

  // Determine full-bleed background human image
  const resolvedBgImage = !isIllustration && (bgImage || (visualType === 'photo' ? image?.src : humanImage?.src) || image?.src)

  // Parallax wraps the image rather than being applied to it directly:
  // the image already carries its own mount-triggered fade/scale
  // (.hero-image-reveal), and two transforms racing on one element
  // means one always clobbers the other.
  const parallaxRef = useParallax({ max: 18 })

  // Vertical anchor. This section's own container is
  // min-h-[480/540/600px] full-bleed width, so at common desktop widths
  // (1440-2560px) the banner is roughly 2.4:1 to 4.3:1; object-cover
  // scales a portrait source photo to fill that width, leaving only a
  // thin horizontal slice of it actually visible. How thin, and which
  // slice, depends on that photo's own aspect ratio and where its
  // subject sits -- not on one sitewide number (three earlier attempts
  // at a single global value -- 20%, then 8%, then 35% -- each fixed
  // whichever one photo it was tuned against and cropped the rest badly,
  // which is what produced the aggressively-cropped banners this
  // replaced). getHeroImagePosition looks up a per-photo tuned position
  // (measured directly against that image -- see HERO_IMAGE_POSITIONS in
  // data/visualAssets.js) when one exists for the resolved image;
  // otherwise this falls through to the enum below, which is a safe
  // default for the ~40 landscape photos in the set (all comfortably
  // keep their subject in frame at this default; only the handful of
  // tall portrait crops need the per-image table).
  // `imagePosition` can also be passed as a literal `object-[X%_Y%]` (or
  // any other `object-*` utility) at the call site, which always wins
  // over both the table and the enum -- the escape hatch for a photo
  // whose framing doesn't fit either.
  //
  // Returns a plain CSS `object-position` value (e.g. "85% 28%"), applied
  // via inline style rather than a Tailwind class. Tailwind's JIT
  // compiler generates CSS only for class names it finds as literal text
  // while scanning the project's source files -- a class assembled at
  // runtime from HERO_IMAGE_POSITIONS (a value living in a plain JS
  // object, never appearing as that literal string anywhere in source)
  // is invisible to it, so `object-[${tuned}]` silently produced no CSS
  // rule at all and the image sat at the browser's default 50% 50%. The
  // enum branches below don't have this problem (each returns a complete
  // literal string Tailwind's scanner can find) and could stay as
  // classes, but plain values are used everywhere here for one
  // consistent code path instead of two different mechanisms.
  const getObjectPosition = () => {
    if (typeof imagePosition === 'string' && imagePosition.startsWith('object-[')) {
      // Reads the existing `object-[X%_Y%]` escape-hatch syntax some
      // call sites already use, so passing it keeps working unchanged.
      return imagePosition.slice('object-['.length, -1).replace(/_/g, ' ')
    }
    const tuned = getHeroImagePosition(resolvedBgImage)
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

  const renderVisual = () => {
    if (visual) return visual
    if (visualType === 'photo' && image?.src && !bgImage) {
      return (
        <ZuzuImage
          src={image.src}
          alt={image.alt || `${title}`}
          aspectRatio="aspect-[16/10]"
          priority
          className="shadow-2xl ring-1 ring-white/10"
        />
      )
    }
    return null
  }

  return (
    <section data-theme="dark" className={`surface-dark relative w-full overflow-hidden border-b border-white/10 min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center bg-[#060A13] ${className}`}>
      {/* 1a. Abstract brand illustration -- used instead of a stock photo
          on hub pages that don't have a specific human/photo subject. */}
      {isIllustration && (
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <BrandIllustration variant={illustrationVariant} className="h-full w-full opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060A13] via-[#060A13]/70 via-45% to-[#060A13]/20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060A13] via-[#060A13]/60 to-transparent pointer-events-none" />
        </div>
      )}

      {/* 1b. Full-Width Real Human Workforce Background Image */}
      {resolvedBgImage && (
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          {/* -inset-y-6 (24px) on the parallax layer matches useParallax's
              max=18px translation range with margin to spare, so the
              translated image never exposes an edge under the section. */}
          <div ref={parallaxRef} className="absolute -inset-y-6 inset-x-0 will-change-transform">
            <img
              src={resolvedBgImage}
              alt=""
              aria-hidden="true"
              style={{ objectPosition: getObjectPosition() }}
              className="hero-image-reveal h-full w-full object-cover transition-transform duration-700 ease-out transform-gpu"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* 2. Directional dark overlay, protecting text on the left while keeping the right
              human subject visible. Fixed to the section's own dark navy (not --color-page) so
              it stays consistent regardless of site theme. Most of this photography is a normal,
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

          {/* Ambient aurora glow -- sits in the strongest-darkened part of
              the overlay (left/text side) so the brand-color bloom reads
              as light glowing through the dark gradient rather than
              competing with the photo underneath it. */}
          <div
            className="animate-aurora absolute -left-24 top-1/3 h-80 w-80 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundImage: 'var(--gradient-brand-soft)' }}
            aria-hidden="true"
          />
        </div>
      )}

      {/* 3. Hero Content Container */}
      <Container className="relative z-10 w-full py-14 sm:py-20 lg:py-20">
        {align === 'centered' ? (
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            {breadcrumbItems && (
              <Reveal trigger="mount" delay={0}>
                <Breadcrumb items={breadcrumbItems} />
              </Reveal>
            )}
            {badge && (
              <Reveal trigger="mount" delay={60}>
                {typeof badge === 'string' ? <EyebrowBadge className="eyebrow-badge--hero">{badge}</EyebrowBadge> : badge}
              </Reveal>
            )}
            <TypewriterHeading as="h1" trigger="mount" startDelay={140} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
              {title}
            </TypewriterHeading>
            {description && (
              <Reveal as="p" trigger="mount" delay={220} className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                {description}
              </Reveal>
            )}
            {(cta || secondaryCta) && (
              <Reveal trigger="mount" delay={300} className="flex flex-wrap justify-center gap-3 pt-2">
                {cta && (
                  <Button to={cta.href} variant="primary" size="md">
                    {cta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button to={secondaryCta.href} variant="outline" size="md" className="btn-outline--hero bg-white/10 hover:bg-white/20">
                    {secondaryCta.label}
                  </Button>
                )}
              </Reveal>
            )}
          </div>
        ) : (
          /* Default 2-Column Full-Width SaaS Banner */
          <div className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-12 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            {/* Left Column: Heading, Description, CTA */}
            <div className="flex flex-col gap-5 lg:col-span-7 xl:col-span-7 max-w-2xl">
              {breadcrumbItems && (
                <Reveal trigger="mount" delay={0}>
                  <Breadcrumb items={breadcrumbItems} />
                </Reveal>
              )}
              {badge && (
                <Reveal trigger="mount" delay={60}>
                  {typeof badge === 'string' ? <EyebrowBadge className="eyebrow-badge--hero">{badge}</EyebrowBadge> : badge}
                </Reveal>
              )}
              <TypewriterHeading as="h1" trigger="mount" startDelay={140} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
                {title}
              </TypewriterHeading>
              {description && (
                <Reveal as="p" trigger="mount" delay={220} className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  {description}
                </Reveal>
              )}

              {clusterLink && (
                <Link
                  to={clusterLink.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
                >
                  <span>{clusterLink.label}</span>
                  <span aria-hidden="true" className="inline-block transition-transform duration-200 ease-[var(--ease-emphasized)] group-hover:translate-x-0.5">&rarr;</span>
                </Link>
              )}

              {(cta || secondaryCta) && (
                <Reveal trigger="mount" delay={300} className="flex flex-wrap items-center gap-3 pt-2">
                  {cta && (
                    <Button to={cta.href} variant="primary" size="md">
                      {cta.label}
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button to={secondaryCta.href} variant="outline" size="md" className="btn-outline--hero bg-white/10 hover:bg-white/20">
                      {secondaryCta.icon && (
                        <span className="mr-2 inline-flex items-center text-current">{secondaryCta.icon}</span>
                      )}
                      <span>{secondaryCta.label}</span>
                    </Button>
                  )}
                </Reveal>
              )}
            </div>

            {/* Right Column: Visual Elements / Floating Badges / Subject Area */}
            <Reveal
              direction="left"
              trigger="mount"
              delay={180}
              className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[160px] sm:min-h-[220px]"
            >
              {renderVisual()}
            </Reveal>
          </div>
        )}
      </Container>
    </section>
  )
}
