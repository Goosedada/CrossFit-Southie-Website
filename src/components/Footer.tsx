import { Link } from 'react-router-dom'

export const Footer = () => (
  <footer style={{ backgroundColor: '#141b2b' }}>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Quick Links */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/#programs" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Programs</Link></li>
            <li><a href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Schedule</a></li>
            <li><a href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Free Trial</a></li>
          </ul>
        </div>

        {/* Our Family */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Family</h4>
          <ul className="space-y-3">
            <li><a href="https://strivefitnessandperformance.com/strive-duxbury" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Strive Duxbury</a></li>
            <li><a href="https://strivefitnessandperformance.com/strive-norwell" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Strive Norwell</a></li>
            <li><a href="https://strivefitnessandperformance.com/studio" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Strive Studio</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact</h4>
          <ul className="space-y-3">
            <li><a href="tel:617-780-9769" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>617-780-9769</a></li>
            <li><a href="mailto:info@crossfitsouthie.com" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>info@crossfitsouthie.com</a> <span className="text-xs" style={{ color: '#dc2626' }}>(preferred)</span></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Follow Us</h4>
          <ul className="space-y-3">
            <li><a href="https://instagram.com/crossfitsouthie" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>@crossfitsouthie</a></li>
            <li><a href="https://instagram.com/striveboston" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>@striveboston</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t px-6 md:px-12 py-6" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <img src="/imgs/logo.png" alt="CrossFit Southie" className="h-6 w-auto" style={{ opacity: 0.85 }} />
          <span className="text-xs tracking-wider" style={{ color: 'rgba(220, 226, 247, 0.5)' }}>Redefining human performance through gritty, practical, and community-driven strength training in South Boston.</span>
          <span className="text-xs tracking-wider" style={{ color: 'rgba(220, 226, 247, 0.5)' }}>© {new Date().getFullYear()} - All rights reserved. Part of Strive Fitness & Performance.</span>
        </div>
        <a
          href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
          className="px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all text-white"
          style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Join Now
        </a>
      </div>
    </div>
  </footer>
)
