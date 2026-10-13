import { useState } from 'react'

function ChevronIcon({ open }) {
  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
        open ? 'border-green/40 bg-green/10 text-green' : 'border-line bg-elevated text-muted'
      }`}
    >
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    </span>
  )
}

/*
  Canonical width for every FAQ accordion on the site -- 800px,
  centered, with responsive side padding still coming from whatever
  Container the caller is already inside. This is the ONE place that
  decides FAQ width; callers must not re-wrap this in their own
  max-w-* div (several used to -- max-w-2xl/672px on most pages vs. no
  wrapper at all, i.e. this component's own width, on the dashboard
  pages -- which is exactly what made FAQ width inconsistent site-wide).
  Narrowed from an earlier 1100px per explicit follow-up feedback: at
  1100px this still read as too wide/heavy for a premium accordion --
  800px leaves clearly visible side margins even at 1440px+ widths.
*/
export default function FAQ({ items = [], className = '' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className={`mx-auto flex w-full max-w-[800px] flex-col gap-3 ${className}`}>
      {items.map((item, i) => {
        const open = openIndex === i
        const panelId = `faq-panel-${i}`
        const buttonId = `faq-trigger-${i}`

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl card-glass transition-colors duration-150 ${open ? 'border-green/30' : ''}`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full min-h-[68px] items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold leading-snug text-ink"
              >
                {item.question}
                <ChevronIcon open={open} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`accordion-rows ${open ? 'is-open' : ''}`}
            >
              <div>
                <div className="px-6 pb-6 text-[0.9375rem] leading-relaxed text-muted">{item.answer}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
