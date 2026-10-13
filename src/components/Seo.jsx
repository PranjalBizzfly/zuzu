import { useEffect } from 'react'

function upsertMeta(name, content) {
  if (!content) return
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertMetaProperty(property, content) {
  if (!content) return
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function removeMeta(name) {
  document.querySelector(`meta[name="${name}"]`)?.remove()
}

function upsertLink(rel, href) {
  if (!href) return
  let tag = document.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  const existing = document.getElementById(id)
  if (!data) {
    existing?.remove()
    return
  }
  const tag = existing || document.createElement('script')
  tag.type = 'application/ld+json'
  tag.id = id
  tag.textContent = JSON.stringify(data)
  if (!existing) document.head.appendChild(tag)
}

/*
  Sets document title, meta description, canonical link, Open Graph /
  Twitter Card tags, and optional JSON-LD (breadcrumb / FAQ) for the
  current route. This is a client-rendered SPA with no SSR/
  prerendering, so these tags land after mount rather than in the
  initial HTML -- fine for crawlers that execute JS, a known
  limitation for ones that don't.

  noindex is for the 404 page and any other route that resolves but
  shouldn't be indexed -- everything else defaults to indexable.
*/
export default function Seo({ title, description, path, breadcrumbs, faq, noindex }) {
  useEffect(() => {
    if (title) document.title = title
    upsertMeta('description', description)
    const url = path ? `${window.location.origin}${path}` : undefined
    upsertLink('canonical', url)

    if (noindex) {
      upsertMeta('robots', 'noindex, nofollow')
    } else {
      removeMeta('robots')
    }

    upsertMetaProperty('og:title', title)
    upsertMetaProperty('og:description', description)
    upsertMetaProperty('og:url', url)
    upsertMetaProperty('og:type', 'website')
    upsertMetaProperty('og:site_name', 'ZUZU')
    upsertMeta('twitter:card', 'summary')
    upsertMeta('twitter:title', title)
    upsertMeta('twitter:description', description)

    upsertJsonLd(
      'seo-breadcrumb-jsonld',
      breadcrumbs?.length
        ? {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((item, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: item.label,
              ...(item.href ? { item: `${window.location.origin}${item.href}` } : {}),
            })),
          }
        : null,
    )

    upsertJsonLd(
      'seo-faq-jsonld',
      faq?.length
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }
        : null,
    )

    return () => {
      upsertJsonLd('seo-breadcrumb-jsonld', null)
      upsertJsonLd('seo-faq-jsonld', null)
    }
  })

  return null
}
