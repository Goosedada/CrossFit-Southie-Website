import { Link } from 'react-router-dom'
import { programs } from '@/data/programs'

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

      {/* 3 rows on desktop, 2 columns on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Row 1: CrossFit, HYROX, Strive-X Hiit */}
        {/* CrossFit - Featured */}
        <Link to={`/programs/${programs[0].slug}`} className="group relative overflow-hidden rounded-xl min-h-[280px] lg:min-h-[320px] block" style={{ backgroundColor: '#232a3a' }}>
          <img
            src={programs[0].image}
            alt="CrossFit training"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <span className="text-white px-3 py-1 text-xs font-bold uppercase mb-3 inline-block w-fit rounded" style={{ backgroundColor: '#dc2626' }}>Flagship</span>
            <h3 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-black text-white uppercase mb-2 lg:mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CROSSFIT</h3>
            <p className="text-base max-w-lg" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[0].shortDescription}</p>
          </div>
        </Link>

        {/* HYROX */}
        <Link to={`/programs/${programs[1].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#2e3545' }}>
          <img
            src={programs[1].image}
            alt="HYROX competition prep"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>HYROX</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[1].shortDescription}</p>
          </div>
        </Link>

        {/* Strive-X Hiit */}
        <Link to={`/programs/${programs[2].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#2e3545' }}>
          <img
            src={programs[2].image}
            alt="Strive X intensity"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Strive-X Hiit</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[2].shortDescription}</p>
          </div>
        </Link>

        {/* Row 2: FUNDAMENTALS, STRENGTH & CONDITIONING, PRIVATE COACHING */}
        {/* FUNDAMENTALS */}
        <Link to={`/programs/${programs[4].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#232a3a' }}>
          <img
            src={programs[4].image}
            alt="Fundamentals program"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>FUNDAMENTALS</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[4].shortDescription}</p>
          </div>
        </Link>

        {/* STRENGTH & CONDITIONING */}
        <Link to={`/programs/${programs[3].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#232a3a' }}>
          <img
            src={programs[3].image}
            alt="Strength & Conditioning"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>STRENGTH & CONDITIONING</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[3].shortDescription}</p>
          </div>
        </Link>

        {/* PRIVATE COACHING */}
        <Link to={`/programs/${programs[5].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#232a3a' }}>
          <img
            src={programs[5].image}
            alt="1-on-1 coaching session"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PRIVATE COACHING</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[5].shortDescription}</p>
          </div>
        </Link>
      </div>
    </div>
  </section>
)
