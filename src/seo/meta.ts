// Single source of truth for page titles, descriptions and canonical URLs.
// Used at runtime (src/hooks/usePageMeta.ts) AND at build time (scripts/prerender-seo.mjs),
// so keep this file free of imports.

export const SITE_URL = 'https://crossfitsouthie.com'
export const SITE_NAME = 'CrossFit Southie'

export interface PageMeta {
  title: string
  description: string
  path: string
  noindex?: boolean
}

// Canonical URLs use a trailing slash (except the home page) because each page is
// published as <route>/index.html, which hosts like GitHub Pages serve at "<route>/".
export const absoluteUrl = (path: string) => {
  const clean = path.replace(/^\/+|\/+$/g, '')
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`
}

// Cuts at a word boundary and adds an ellipsis only when text was shortened.
export const truncate = (text: string, max: number) => {
  const flat = text.replace(/\s+/g, ' ').trim()
  if (flat.length <= max) return flat
  return flat.slice(0, max - 1).replace(/\s+\S*$/, '').replace(/[.,;:\-–—\s]+$/, '') + '…'
}

export const STATIC_PAGES: Record<string, PageMeta> = {
  '/': {
    path: '/',
    title: 'CrossFit & HIIT in South Boston, MA | CrossFit Southie',
    description:
      'CrossFit, HYROX, HIIT and strength classes in South Boston. Expert coaches, a supportive community and 24-hour access. Try a free class!',
  },
  '/team': {
    path: '/team',
    title: 'Our Coaches | CrossFit Southie',
    description:
      'Meet the coaches at CrossFit Southie in South Boston. Experienced, certified and passionate about helping every athlete reach their goals.',
  },
  '/pricing': {
    path: '/pricing',
    title: 'Membership Pricing | CrossFit Southie',
    description:
      'CrossFit Southie membership options and pricing in South Boston. Monthly memberships you can cancel any time. Start with a free trial class.',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact & Location | CrossFit Southie',
    description:
      'Visit CrossFit Southie at 383 Dorchester Ave, South Boston, MA 02127. Class hours, parking, phone and email.',
  },
  '/what-to-expect': {
    path: '/what-to-expect',
    title: 'What to Expect at Your First Class | CrossFit Southie',
    description:
      'New to CrossFit? See what to expect at your first class at CrossFit Southie in South Boston, from the free intro session to coaching and scaling.',
  },
}

const withArticle = (role: string) => `${/^[aeiou]/i.test(role) ? 'an' : 'a'} ${role}`

export const coachMeta = (coach: { name: string; slug: string; role: string; certifications?: string[] }): PageMeta => {
  const certs = (coach.certifications || []).slice(0, 2)
  const certSentence = certs.length
    ? ` Certifications include ${certs.join(' and ')}.`
    : ' Book a free class and train with our coaching team.'
  return {
    path: `/coaches/${coach.slug}`,
    title: `${coach.name} - ${coach.role} | ${SITE_NAME}`,
    description: truncate(
      `Meet ${coach.name}, ${withArticle(coach.role)} at ${SITE_NAME} in South Boston, MA.${certSentence}`,
      158
    ),
  }
}

// Display names used in titles (the on-page program names have inconsistent casing).
const PROGRAM_SEO_NAMES: Record<string, string> = {
  'strive-x-hiit': 'STRIVE-X HIIT',
  ssc: 'Strength & Conditioning',
  'personal-training': 'Personal Training',
}

export const programMeta = (program: { name: string; slug: string; shortDescription: string }): PageMeta => {
  const name = PROGRAM_SEO_NAMES[program.slug] || program.name
  return {
    path: `/programs/${program.slug}`,
    title: `${name} in South Boston, MA | ${SITE_NAME}`,
    description: truncate(`${program.shortDescription} Classes at ${SITE_NAME} in South Boston, MA.`, 158),
  }
}

export const notFoundMeta = (path = '/404'): PageMeta => ({
  path,
  title: `Page Not Found | ${SITE_NAME}`,
  description: `Sorry, we couldn't find that page. Head back to the ${SITE_NAME} home page.`,
  noindex: true,
})
