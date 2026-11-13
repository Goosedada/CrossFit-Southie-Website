import { absoluteUrl, type PageMeta } from './meta'

const INDEXABLE = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

function upsertMeta(doc: Document, attr: 'name' | 'property', key: string, content: string) {
  let el = doc.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = doc.createElement('meta')
    el.setAttribute(attr, key)
    doc.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Applies title / description / canonical / social tags to the document head.
export function applyPageMeta(doc: Document, meta: PageMeta) {
  const url = absoluteUrl(meta.path)

  doc.title = meta.title
  upsertMeta(doc, 'name', 'description', meta.description)
  upsertMeta(doc, 'name', 'robots', meta.noindex ? 'noindex, follow' : INDEXABLE)

  upsertMeta(doc, 'property', 'og:title', meta.title)
  upsertMeta(doc, 'property', 'og:description', meta.description)
  upsertMeta(doc, 'property', 'og:url', url)
  upsertMeta(doc, 'name', 'twitter:title', meta.title)
  upsertMeta(doc, 'name', 'twitter:description', meta.description)
  upsertMeta(doc, 'name', 'twitter:url', url)

  let canonical = doc.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (meta.noindex) {
    canonical?.remove()
  } else {
    if (!canonical) {
      canonical = doc.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      doc.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }
}
