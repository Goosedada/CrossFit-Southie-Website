import { useLocation } from 'react-router-dom'
import { STATIC_PAGES } from '@/seo/meta'
import { usePageMeta } from '@/hooks/usePageMeta'

// Sets the head tags for the fixed pages (/, /team, /pricing, ...).
// Coach and program pages set their own, since theirs depend on the URL slug.
export const RouteMeta = () => {
  const { pathname } = useLocation()
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  usePageMeta(STATIC_PAGES[key] ?? null)
  return null
}
