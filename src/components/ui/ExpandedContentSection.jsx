import Container from './Container'
import Card from './Card'
import EyebrowBadge from './EyebrowBadge'
import Reveal from '../motion/Reveal'
import { StaggerItem } from '../motion/Stagger'
import TypewriterHeading from '../motion/TypewriterHeading'
import { getExpandedContent } from '../../data/expandedContent'

/*
  Renders H2 + H3 content blocks for a page. Content comes from either:
  - `path`: looked up in src/data/expandedContent.js by route path, or
  - `sections`: an array passed in directly (used by CategoryItem for the
    page-specific feature sections in src/data/pageFeatureContent.js).
  Renders nothing when there is no content, so it can be dropped into any
  page template (CategoryItem, ClusterHub, ClusterPage, DashboardHub)
  without a guard at the call site.

  Reuses the site's existing section rhythm (py-14/20, Container,
  EyebrowBadge, TypewriterHeading) and the FeatureCard glass-card
  treatment. A section may carry:
  - items[].bullets: a short pill list for H3s that enumerate named items
  - items[].note: a closing sentence after the description
  - steps: an ordered workflow rendered as numbered cards ahead of the
    items, with an optional `stepsHeading` label above them and
    `itemsHeading` above the item cards
*/
function CardGrid({ children }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
}

function GroupLabel({ children }) {
  return <p className="text-sm font-semibold uppercase tracking-wide text-green">{children}</p>
}

export default function ExpandedContentSection({ path, sections }) {
  const content = sections ?? getExpandedContent(path)
  if (!content?.length) return null

  return (
    <>
      {content.map((section) => (
        <section key={section.heading} className="py-14 sm:py-20 border-t border-line">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 max-w-3xl">
              {section.eyebrow && (
                <Reveal delay={0}>
                  <EyebrowBadge>{section.eyebrow}</EyebrowBadge>
                </Reveal>
              )}
              <TypewriterHeading as="h2" className="text-xl sm:text-2xl">{section.heading}</TypewriterHeading>
              <Reveal as="p" delay={100} className="text-base text-muted leading-relaxed">
                {section.intro}
              </Reveal>
            </div>

            {section.steps?.length > 0 && (
              <div className="flex flex-col gap-5">
                {section.stepsHeading && <GroupLabel>{section.stepsHeading}</GroupLabel>}
                <CardGrid>
                  {section.steps.map((step, i) => (
                    <StaggerItem key={step.title} index={i} className="h-full">
                      <Card glass padding="lg" className="flex flex-col gap-4 h-full">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-green/20 bg-gradient-to-br from-green/15 to-green/5 text-sm font-semibold text-green"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <h3 className="text-[1.0625rem] font-semibold leading-snug sm:text-lg">{step.title}</h3>
                        <p className="text-[0.9375rem] leading-relaxed">{step.description}</p>
                      </Card>
                    </StaggerItem>
                  ))}
                </CardGrid>
              </div>
            )}

            <div className="flex flex-col gap-5">
              {section.itemsHeading && <GroupLabel>{section.itemsHeading}</GroupLabel>}
              <CardGrid>
                {section.items.map((item, i) => (
                  <StaggerItem key={item.title} index={i} className="h-full">
                    <Card glass padding="lg" className="flex flex-col gap-4 h-full">
                      <h3 className="text-[1.0625rem] font-semibold leading-snug sm:text-lg">{item.title}</h3>
                      <p className="text-[0.9375rem] leading-relaxed">{item.description}</p>
                      {item.bullets?.length > 0 && (
                        <ul className="flex flex-wrap gap-2">
                          {item.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="rounded-full border border-line bg-elevated px-3 py-1 text-xs font-medium text-ink"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.note && <p className="text-[0.9375rem] leading-relaxed">{item.note}</p>}
                    </Card>
                  </StaggerItem>
                ))}
              </CardGrid>
            </div>
          </Container>
        </section>
      ))}
    </>
  )
}
