import { useEffect } from 'react'
import { Location } from '@/components/Location'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export const ContactPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [])

  return (
    <div className="font-sans pt-20">
      <Navigation />
      <Location />
      <Footer />
    </div>
  )
}
