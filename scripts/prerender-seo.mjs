// Runs after `vite build` (see package.json "build").
//
// A React single-page app serves the SAME index.html for every URL, so search engines and
// link-preview bots would see the home page's title/description on every page, and static
// hosts like GitHub Pages would answer deep links (/pricing, /team, ...) with a 404 status.
//
// This script fixes that without changing how the app works. From dist/index.html it writes:
//   dist/<route>/index.html   one file per page, with that page's own <title>, description,
//                             canonical URL and social tags (served with a normal 200 status)
//   dist/404.html             used by the host for unknown URLs (marked noindex)
//   dist/sitemap.xml          every page, generated from src/data (so it never goes stale)
//   dist/robots.txt           only if you don't already ship one in public/
//
// Page titles/descriptions come from src/seo/meta.ts, the same file the app uses at runtime.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

// ---- load the TypeScript data/meta modules (they have no imports, so a plain transpile works) ----
async function loadTs(rel) {
  const source = fs.readFileSync(path.join(root, rel), 'utf8')
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  }).outputText
  return import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'))
}
const { SITE_URL, STATIC_PAGES, absoluteUrl, coachMeta, programMeta, notFoundMeta } = await loadTs('src/seo/meta.ts')
const { coaches } = await loadTs('src/data/coaches.ts')
const { programs } = await loadTs('src/data/programs.ts')

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('prerender-seo: dist/index.html not found. Run `vite build` first.')
  process.exit(1)
}
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

// ---- helpers ----
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Replace a tag's value; fail loudly if the tag is missing so a template change can't silently break SEO.
function replaceOrFail(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender-seo: could not find ${label} in index.html`)
  return html.replace(regex, replacement)
}

function renderPage(meta, { home = false } = {}) {
  const url = absoluteUrl(meta.path)
  let html = template
  html = replaceOrFail(html, /<title>[\s\S]*?<\/title>/, `<title>${escText(meta.title)}</title>`, '<title>')
  html = replaceOrFail(html, /(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`, 'meta description')
  html = replaceOrFail(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`, 'og:title')
  html = replaceOrFail(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`, 'og:description')
  html = replaceOrFail(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, 'og:url')
  html = replaceOrFail(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`, 'twitter:title')
  html = replaceOrFail(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`, 'twitter:description')
  html = replaceOrFail(html, /(<meta name="twitter:url" content=")[^"]*(")/, `$1${url}$2`, 'twitter:url')

  if (meta.noindex) {
    html = replaceOrFail(html, /(<meta name="robots" content=")[^"]*(")/, '$1noindex, follow$2', 'meta robots')
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '') // no canonical on noindex pages
  } else {
    html = replaceOrFail(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, 'canonical')
  }

  // Structured data that only describes the home page (e.g. the intro video) is dropped elsewhere.
  if (!home) {
    html = html.replace(/\s*<script type="application\/ld\+json" data-home-only>[\s\S]*?<\/script>/g, '')
  }
  return html
}

function write(file, contents) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, contents)
}

// ---- build the list of pages ----
const pages = [
  { meta: STATIC_PAGES['/'], home: true },
  ...Object.values(STATIC_PAGES).filter((m) => m.path !== '/').map((meta) => ({ meta })),
  ...coaches.map((c) => ({ meta: coachMeta(c) })),
  ...programs.map((p) => ({ meta: programMeta(p) })),
]

for (const { meta, home } of pages) {
  const html = renderPage(meta, { home })
  const file = home ? path.join(dist, 'index.html') : path.join(dist, meta.path.replace(/^\//, ''), 'index.html')
  write(file, html)
}

// 404 page for unknown URLs (GitHub Pages serves dist/404.html with a 404 status)
write(path.join(dist, '404.html'), renderPage(notFoundMeta('/404')))

// ---- sitemap.xml ----
const urls = pages.map(({ meta }) => absoluteUrl(meta.path))
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
  '\n</urlset>\n'
write(path.join(dist, 'sitemap.xml'), sitemap)

// ---- robots.txt (only if the project doesn't already provide one) ----
const robotsPath = path.join(dist, 'robots.txt')
let robotsNote = 'kept your existing robots.txt'
if (!fs.existsSync(robotsPath)) {
  write(robotsPath, `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
  robotsNote = 'created robots.txt'
}

console.log(`prerender-seo: wrote ${pages.length} pages + 404.html, sitemap.xml (${urls.length} URLs); ${robotsNote}`)
