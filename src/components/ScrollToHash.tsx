import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router doesn't scroll to #anchors after client-side navigation.
// This makes links like <Link to="/#programs"> work from any page.
export const ScrollToHash = () => {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
    return () => clearTimeout(timer)
  }, [pathname, hash, key])

  return null
}
