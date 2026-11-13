import { useState } from 'react'
import { Link } from 'react-router-dom'
import { coaches } from '@/data/coaches'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export const TeamPage = () => {
  const [showAll] = useState(true)
  const visibleCoaches = showAll ? coaches : coaches.slice(0, 4)

  return (
    <div className="font-sans pt-20">
      <Navigation />
      <section className="py-4 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>OUR TEAM</h2>
            <p className="text-lg" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>Professional, educated, and dedicated to helping you achieve your goals</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {visibleCoaches.map((coach) => (
              <Link key={coach.name} to={`/coaches/${coach.slug}`} className="group block text-left">
                <div className="w-full aspect-square mx-auto mb-3 sm:mb-4 overflow-hidden rounded-lg" style={{ backgroundColor: '#232a3a' }}>
                  {coach.image ? (
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white">
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{coach.name}</h3>
                <p className="font-bold text-xs sm:text-sm uppercase tracking-wider mt-1 text-center" style={{ color: '#dc2626' }}>{coach.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
