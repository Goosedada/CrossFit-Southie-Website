import { Link } from 'react-router-dom'
import { programs, programPath } from '@/data/programs'

const headingFont = { fontFamily: "'Space Grotesk', sans-serif" }

const GroupHeading = ({ title, to }: { title: string; to?: string }) => (
  <div className="flex items-end justify-between gap-4 mt-10 mb-4 border-b pb-2" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white" style={headingFont}>{title}</h3>
    {to && (
      <Link to={to} className="font-bold uppercase tracking-widest text-xs md:text-sm hover:underline" style={{ ...headingFont, color: '#dc2626' }}>
        About {title} →
      </Link>
    )}
  </div>
)

const ProgramCard = ({ slug, badge }: { slug: string; badge?: string }) => {
  const program = programs.find((p) => p.slug === slug)!
  return (
    <Link to={programPath(program)} className="group relative overflow-hidden rounded-xl min-h-[240px] lg:min-h-[300px] block" style={{ backgroundColor: '#232a3a' }}>
      <img loading="lazy" decoding="async"
        src={program.image}
        alt={program.name}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        {badge && <span className="text-white px-3 py-1 text-xs font-bold uppercase mb-3 inline-block w-fit rounded" style={{ backgroundColor: '#dc2626' }}>{badge}</span>}
        <h4 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={headingFont}>{program.name}</h4>
        <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{program.shortDescription}</p>
      </div>
    </Link>
  )
}

export const Programs = () => (
  <section id="programs" className="py-4 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10 md:mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PROGRAMS</h2>
          <p className="mt-4 max-w-md text-base md:text-lg" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Multi-disciplinary training for every level of human performance.</p>
        </div>
        <div>
          <a
            href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm"
            className="font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all text-sm md:text-base"
            style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            SEE FULL SCHEDULE →
          </a>
        </div>
      </div>

      <GroupHeading title="CrossFit" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <ProgramCard slug="crossfit" badge="Flagship" />
        <ProgramCard slug="fundamentals" />
      </div>

      <GroupHeading title="STRIVE" to="/programs/strive" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <ProgramCard slug="hiit" />
        <ProgramCard slug="ssc" />
        <ProgramCard slug="hyrox" />
      </div>

      <GroupHeading title="1-on-1" />
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <ProgramCard slug="personal-training" />
      </div>
    </div>
  </section>
)
