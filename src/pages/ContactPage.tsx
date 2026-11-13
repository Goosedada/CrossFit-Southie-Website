import { useEffect } from 'react'
import { Location } from '@/components/Location'
import { Footer } from '@/components/Footer'

export const ContactPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [])

  return (
    <div className="font-sans pt-20">
      <h1 className="sr-only">Contact CrossFit Southie in South Boston</h1>
      <Location />
      <Footer />
    </div>
  )
}
