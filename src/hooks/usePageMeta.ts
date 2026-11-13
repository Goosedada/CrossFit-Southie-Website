import { useEffect } from 'react'
import { applyPageMeta } from '@/seo/applyMeta'
import type { PageMeta } from '@/seo/meta'

// Keeps <title>, description, canonical and social tags in sync with the current page.
// Pass null to leave the head untouched.
export const usePageMeta = (meta: PageMeta | null) => {
  const title = meta?.title
  const description = meta?.description
  const path = meta?.path
  const noindex = meta?.noindex

  useEffect(() => {
    if (!meta) return
    applyPageMeta(document, meta)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, noindex])
}
