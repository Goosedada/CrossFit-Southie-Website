import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { programs } from '@/data/programs'
import { Footer } from '@/components/Footer'
import { usePageMeta } from '@/hooks/usePageMeta'
import { notFoundMeta, programMeta } from '@/seo/meta'

export const ProgramDetail = () => {
  const { slug } = useParams()
  const program = programs.find(p => p.slug === slug)

  usePageMeta(program ? programMeta(program) : notFoundMeta(`/programs/${slug}`))

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [slug])

  if (!program) {
    return (
      <div className="font-sans pt-20">
        <div className="py-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-white">Program Not Found</h1>
          <Link to="/" className="hover:underline mt-4 inline-block" style={{ color: '#dc2626' }}>Return Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="font-sans pt-20">
      <section className="py-20 px-4" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center mb-8 transition-colors" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="aspect-video overflow-hidden rounded-lg mb-8 max-w-3xl mx-auto">
            <img
              src={program.image}
              alt={program.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {program.name}
          </h1>
          <div className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {program.fullDescription.split('\n\n').map((section, idx) => (
              <div key={idx} className="mb-6">
                {section.split('\n').map((line, lineIdx) => (
                  lineIdx === 0 ? (
                    <p key={lineIdx} className="font-bold mb-2 text-white">{line}</p>
                  ) : (
                    <p key={lineIdx} className="text-white">{line}</p>
                  )
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
              className="px-8 py-4 font-bold tracking-wide transition-colors text-center text-white"
              style={{ backgroundColor: '#dc2626' }}
            >
              TRY A FREE CLASS
            </a>
            <a
              href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
              className="px-8 py-4 border-2 font-bold tracking-wide transition-all text-center text-white"
              style={{ borderColor: 'white' }}
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ backgroundColor: '#141b2b' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>HAVE QUESTIONS?</h3>
          <p className="mb-6" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            Our team is here to help you find the perfect program for your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 font-bold tracking-wide transition-colors text-white"
            style={{ backgroundColor: '#232a3a' }}
          >
            CONTACT US
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
