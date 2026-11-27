import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import type { ArchivePost } from '@/data/archivePosts'

const heading = { fontFamily: "'Space Grotesk', sans-serif" }
const body = { color: 'rgba(220, 226, 247, 0.8)' }
const muted = { color: 'rgba(220, 226, 247, 0.6)' }

export const ArchivePostPage = ({ post }: { post: ArchivePost }) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [post.slug])

  return (
    <div className="font-sans pt-20">
      <article className="py-8 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-3 text-white" style={heading}>{post.title}</h1>
          <p className="mb-2" style={muted}>{post.date}</p>
          <p className="mb-8 italic" style={muted}>{post.note}</p>
          {post.download && (
            <a href={post.download.href} download className="inline-block mb-8 px-6 py-3 font-bold tracking-wide text-white" style={{ backgroundColor: '#dc2626' }}>
              {post.download.label}
            </a>
          )}
          {post.sections.map((section, i) => {
            const List = section.numbered ? 'ol' : 'ul'
            return (
            <section key={i} className="mb-6">
              {section.heading && <h2 className="text-xl font-bold text-white mb-2" style={heading}>{section.heading}</h2>}
              {section.paragraphs?.map((text) => <p key={text} className="text-lg mb-3" style={body}>{text}</p>)}
              {section.list && (
                <List className={`${section.numbered ? 'list-decimal' : 'list-disc'} pl-8 space-y-1 text-lg`} style={body}>
                  {section.list.map((item, n) => <li key={n}>{item}</li>)}
                </List>
              )}
              {section.image && (
                <img loading="lazy" decoding="async" src={section.image.src} alt={section.image.alt} width={section.image.width} height={section.image.height} className="mt-4 rounded-lg max-w-full h-auto mx-auto" />
              )}
            </section>
            )
          })}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm" className="px-8 py-4 font-bold tracking-wide text-center text-white" style={{ backgroundColor: '#dc2626' }}>
              TRY A FREE CLASS
            </a>
            <Link to="/programs/crossfit" className="px-8 py-4 border-2 font-bold tracking-wide text-center text-white" style={{ borderColor: 'white' }}>
              CROSSFIT CLASSES
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
