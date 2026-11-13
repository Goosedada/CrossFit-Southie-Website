import { useState } from 'react'
import { Link } from 'react-router-dom'
import { programs } from '@/data/programs'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(12, 19, 34, 0.6)' }}>
      <div className="flex justify-between items-center w-full px-8 py-3">
        <Link to="/" className="flex items-center">
          <img src="/imgs/logo.png" alt="CrossFit Southie" className="h-12 md:h-16 w-auto" style={{ opacity: 0.85 }} />
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <div className="relative">
            <button
              className="font-bold uppercase tracking-tighter text-white hover:text-red-500 transition-colors duration-300 flex items-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              Programs
            </button>
            {programsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 py-2 rounded shadow-lg" style={{ backgroundColor: '#191f2f' }}>
                {programs.map((program) => (
                  <Link
                    key={program.slug}
                    to={`/programs/${program.slug}`}
                    className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                    onClick={() => setProgramsOpen(false)}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm" className="font-bold uppercase tracking-tighter text-white hover:text-red-500 transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Schedule</a>
          <div className="relative">
            <button
              className="font-bold uppercase tracking-tighter text-white hover:text-red-500 transition-colors duration-300 flex items-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setInfoOpen(!infoOpen)}
            >
              Info
            </button>
            {infoOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 py-2 rounded shadow-lg" style={{ backgroundColor: '#191f2f' }}>
                <Link
                  to="/team"
                  className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                  onClick={() => setInfoOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  to="/pricing"
                  className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                  onClick={() => setInfoOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                  onClick={() => setInfoOpen(false)}
                >
                  Contact Us
                </Link>
                <a
                  href="https://www.waiverfile.com/b/CrossFitSouthie/Waiver.aspx?formid=7b41bbe4-6aca-414e-95ad-5d1ca863c31c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                  onClick={() => setInfoOpen(false)}
                >
                  Waiver
                </a>
                <a
                  href="https://crossfitsouthie.sites.zenplanner.com/retail.cfm?Category=TShirt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                  onClick={() => setInfoOpen(false)}
                >
                  Shop Apparel
                </a>
              </div>
            )}
          </div>
          <a
            href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
            className="px-6 py-2 font-bold uppercase tracking-tighter scale-95 active:scale-90 transition-transform text-white"
            style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Join Now
          </a>
        </div>
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-8" style={{ backgroundColor: 'rgba(12, 19, 34, 0.95)' }}>
          <div className="flex flex-col space-y-4">
            <button
              className="font-bold uppercase tracking-tighter text-white text-left"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              Programs ▾
            </button>
            {programsOpen && (
              <div className="pl-4 space-y-2 border-l border-gray-700">
                {programs.map((program) => (
                  <Link
                    key={program.slug}
                    to={`/programs/${program.slug}`}
                    className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase"
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            )}
            <a href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm" className="font-bold uppercase tracking-tighter text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Schedule</a>
            <button
              className="font-bold uppercase tracking-tighter text-white text-left"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setInfoOpen(!infoOpen)}
            >
              Info ▾
            </button>
            {infoOpen && (
              <div className="pl-4 space-y-2 border-l border-gray-700">
                <Link to="/team" className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase">Our Team</Link>
                <Link to="/pricing" className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase">Pricing</Link>
                <Link to="/contact" className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase">Contact Us</Link>
                <a href="https://www.waiverfile.com/b/CrossFitSouthie/Waiver.aspx?formid=7b41bbe4-6aca-414e-95ad-5d1ca863c31c" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase">Waiver</a>
                <a href="https://crossfitsouthie.sites.zenplanner.com/retail.cfm?Category=TShirt" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase">Shop Apparel</a>
              </div>
            )}
            <a
              href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
              className="px-6 py-2 font-bold uppercase tracking-tighter text-center text-white w-fit"
              style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
