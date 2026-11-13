export const FloatingCTA = () => (
  <a
    href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
    className="fixed bottom-6 right-6 z-50 px-6 py-3 font-black uppercase tracking-wide shadow-lg hover:scale-105 transition-all text-white flex items-center gap-2"
    style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    Book Free Trial
  </a>
)
