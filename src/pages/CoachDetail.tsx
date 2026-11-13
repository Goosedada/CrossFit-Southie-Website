import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import { coaches } from '@/data/coaches'
import { Footer } from '@/components/Footer'
import { usePageMeta } from '@/hooks/usePageMeta'
import { absoluteUrl, coachMeta, notFoundMeta, SITE_URL } from '@/seo/meta'

export const CoachDetail = () => {
  const { slug } = useParams()
  const coach = coaches.find(c => c.slug === slug)

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [slug])

  // Title, description, canonical and social tags
  usePageMeta(coach ? coachMeta(coach) : notFoundMeta(`/coaches/${slug}`))

  // Person + breadcrumb structured data for each coach
  useEffect(() => {
    if (coach) {
      // Update or create Person Schema
      let existingSchema = document.querySelector('script[data-coach-schema]')
      if (existingSchema) {
        existingSchema.remove()
      }

      const personSchema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${absoluteUrl(`/coaches/${coach.slug}`)}#person`,
        "name": coach.name,
        "jobTitle": coach.role,
        "description": coach.bio.substring(0, 300),
        "url": absoluteUrl(`/coaches/${coach.slug}`),
        "image": coach.image ? `https://crossfitsouthie.com${coach.image}` : undefined,
        "memberOf": {
          "@type": "Organization",
          "@id": `${SITE_URL}/#gym`,
          "name": "CrossFit Southie",
          "url": "https://crossfitsouthie.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "383 Dorchester Ave Front",
            "addressLocality": "Boston",
            "addressRegion": "MA",
            "postalCode": "02127",
            "addressCountry": "US"
          }
        },
        "worksFor": {
          "@id": `${SITE_URL}/#gym`
        }
      }

      if (coach.certifications && coach.certifications.length > 0) {
        personSchema["knowsAbout"] = coach.certifications
      }

      const schemaScript = document.createElement('script')
      schemaScript.type = 'application/ld+json'
      schemaScript.setAttribute('data-coach-schema', 'true')
      schemaScript.textContent = JSON.stringify(personSchema)
      document.head.appendChild(schemaScript)

      // Add BreadcrumbList Schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Our Team",
            "item": absoluteUrl('/team')
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": coach.name,
            "item": absoluteUrl(`/coaches/${coach.slug}`)
          }
        ]
      }

      let existingBreadcrumb = document.querySelector('script[data-breadcrumb-schema]')
      if (existingBreadcrumb) {
        existingBreadcrumb.remove()
      }

      const breadcrumbScript = document.createElement('script')
      breadcrumbScript.type = 'application/ld+json'
      breadcrumbScript.setAttribute('data-breadcrumb-schema', 'true')
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema)
      document.head.appendChild(breadcrumbScript)
    }

    return () => {
      // Cleanup: remove coach-specific tags when component unmounts
      const coachSchema = document.querySelector('script[data-coach-schema]')
      if (coachSchema) coachSchema.remove()
      const breadcrumbSchema = document.querySelector('script[data-breadcrumb-schema]')
      if (breadcrumbSchema) breadcrumbSchema.remove()
    }
  }, [coach])

  if (!coach) {
    return (
      <div className="font-sans pt-20">
        <div className="py-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-white">Coach Not Found</h1>
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
          <div className="w-40 h-40 mx-auto mb-8 rounded-lg overflow-hidden" style={{ backgroundColor: '#232a3a' }}>
            {coach.image ? (
              <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white">
                {coach.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {coach.name}
          </h1>
          <p className="text-xl mb-6" style={{ color: '#dc2626' }}>{coach.role}</p>
          <div className="max-w-2xl mx-auto text-left">
            {coach.bio.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-lg leading-relaxed mb-4" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ backgroundColor: '#141b2b' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Certifications</h3>
              <ul className="space-y-2">
                {coach.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: '#dc2626' }} />
                    <span style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            {coach.achievements && coach.achievements.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Achievements</h3>
                <ul className="space-y-2">
                  {coach.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: '#dc2626' }} />
                      <span style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      {coach.isPT && coach.contactInfo && (
        <section className="py-16 px-4" style={{ backgroundColor: '#0c1322' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CONTACT Carly</h3>
            <div className="grid gap-4">
              <a
                href={coach.contactInfo.scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#dc2626', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                SCHEDULE APPOINTMENT
              </a>
              <a
                href={coach.contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                VISIT WEBSITE
              </a>
              <a
                href={`mailto:${coach.contactInfo.email}`}
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                EMAIL Carly
              </a>
              <a
                href={coach.contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                FOLLOW ON INSTAGRAM
              </a>
              <a
                href={coach.contactInfo.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                LEAVE A GOOGLE REVIEW
              </a>
            </div>
            <p className="text-center mt-6 text-sm" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
              Fax: {coach.contactInfo.fax}
            </p>
          </div>
        </section>
      )}
      <section className="py-16 px-4" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MEET THE REST OF OUR TEAM</h3>
          <p className="mb-6" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            Get to know our other coaches who are dedicated to helping you achieve your fitness goals.
          </p>
          <Link
            to="/team"
            className="inline-block px-8 py-4 font-bold tracking-wide transition-colors text-white"
            style={{ backgroundColor: '#dc2626' }}
          >
            VIEW ALL COACHES
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
