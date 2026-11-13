import { Link } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { usePageMeta } from '@/hooks/usePageMeta'
import { notFoundMeta } from '@/seo/meta'

const meta = notFoundMeta()

export const NotFoundPage = () => {
  usePageMeta(meta)

  return (
    <div className="font-sans pt-20">
      <section className="py-20 px-4 text-center" style={{ backgroundColor: '#0c1322' }}>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Page Not Found
        </h1>
        <p className="text-lg mb-8" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
          Sorry, we couldn't find the page you were looking for.
        </p>
        <Link to="/" className="hover:underline font-bold uppercase tracking-wide" style={{ color: '#dc2626' }}>
          Return Home
        </Link>
      </section>
      <Footer />
    </div>
  )
}
