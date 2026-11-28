import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { programs, programPath, subPrograms } from '@/data/programs'
import { Footer } from '@/components/Footer'
import { usePageMeta } from '@/hooks/usePageMeta'
import { notFoundMeta, programMeta } from '@/seo/meta'

export const ProgramDetail = () => {
  const { parent, slug } = useParams()
  // 'strive-x-hiit' is the HIIT page's former address
  const match = programs.find(p => p.slug === (slug === 'strive-x-hiit' ? 'hiit' : slug))
  // A nested URL is only valid under the program's real parent
  const program = match && (!parent || parent === match.parent) ? match : undefined
  const parentProgram = program?.parent ? programs.find(p => p.slug === program.parent) : undefined
  const children = program ? subPrograms(program.slug) : []

  usePageMeta(program ? programMeta(program) : notFoundMeta(parent ? `/programs/${parent}/${slug}` : `/programs/${slug}`))

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

  // Send old links such as /programs/hyrox to their new home
  if ((program.parent && !parent) || slug !== program.slug) {
    return <Navigate to={programPath(program)} replace />
  }

  return (
    <div className="font-sans pt-20">
      <section className="py-20 px-4" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Link to={parentProgram ? programPath(parentProgram) : '/'} className="inline-flex items-center mb-8 transition-colors" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {parentProgram ? `Back to ${parentProgram.name}` : 'Back to Home'}
          </Link>
          <div className="aspect-video overflow-hidden rounded-lg mb-8 max-w-3xl mx-auto">
            <img
              src={program.image}
              alt={program.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: program.imagePosition }}
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
          {program.parent === 'strive' && (
            <p className="text-lg font-bold mb-8 max-w-2xl mx-auto text-white">
              {program.name} classes are included in the STRIVE ONLY membership and the CROSSFIT + STRIVE membership.{' '}
              <Link to="/pricing" className="underline" style={{ color: '#dc2626' }}>See pricing</Link>
            </p>
          )}
          {program.slug === 'crossfit' && (
            <p className="text-lg mb-8 text-white">
              <Link to="/10-components-physical-fitness" className="underline" style={{ color: '#dc2626' }}>Read about the 10 components of physical fitness</Link>
            </p>
          )}
          {program.actions ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {program.actions.map((action, n) => {
                const className = `px-8 py-4 font-bold tracking-wide transition-all text-center text-white${n ? ' border-2' : ''}`
                const style = n ? { borderColor: 'white' } : { backgroundColor: '#dc2626' }
                return action.href.startsWith('/') ? (
                  <Link key={action.href} to={action.href} className={className} style={style}>{action.label}</Link>
                ) : (
                  <a key={action.href} href={action.href} className={className} style={style}>{action.label}</a>
                )
              })}
            </div>
          ) : (
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
          )}
        </div>
      </section>
      {program.sections && (
        <section className="pb-20 px-4" style={{ backgroundColor: '#0c1322' }}>
          <div className="max-w-2xl mx-auto">
            {program.sections.map((section) => (
              <div key={section.heading} className="mb-10">
                <h2 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{section.heading}</h2>
                <p className="text-lg leading-relaxed" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{section.text}</p>
                {section.link && (
                  section.link.href.startsWith('/') ? (
                    <Link to={section.link.href} className="inline-block mt-2 font-bold underline" style={{ color: '#dc2626' }}>{section.link.label}</Link>
                  ) : (
                    <a href={section.link.href} className="inline-block mt-2 font-bold underline" style={{ color: '#dc2626' }}>{section.link.label}</a>
                  )
                )}
              </div>
            ))}
            {program.faqs && (
              <>
                <h2 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Common questions</h2>
                {program.faqs.map((faq) => (
                  <div key={faq.q} className="mb-5">
                    <h3 className="text-lg font-bold mb-1 text-white">{faq.q}</h3>
                    <p className="text-lg" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{faq.a}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>
      )}
      {children.length > 0 && (
        <section className="pb-20 px-4" style={{ backgroundColor: '#0c1322' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {program.name.toUpperCase()} CLASSES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {children.map((child) => (
                <Link key={child.slug} to={programPath(child)} className="group relative overflow-hidden rounded-xl min-h-[280px] block" style={{ backgroundColor: '#232a3a' }}>
                  <img loading="lazy" decoding="async"
                    src={child.image}
                    alt={child.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{child.name}</h3>
                    <p className="text-sm" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{child.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-center mt-8">
              <Link to="/pricing" className="font-bold uppercase tracking-widest text-sm hover:underline" style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>
                See membership pricing →
              </Link>
            </p>
          </div>
        </section>
      )}
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
