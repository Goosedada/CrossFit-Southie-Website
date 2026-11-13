export const ScheduleCTA = () => (
  <section className="relative py-4 px-8 overflow-hidden" style={{ backgroundColor: '#dc2626' }}>
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="border-r border-b border-white" style={{ borderColor: 'white' }} />
        ))}
      </div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        READY TO GET STARTED?
      </h2>
      <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto font-bold text-white">
        Come experience the intensity and meet the community. Not seeing a free class that fits your schedule? Contact us and we will help schedule your first class.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a
          href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
          className="px-12 py-6 text-2xl font-black uppercase tracking-tighter shadow-xl hover:scale-105 transition-all"
          style={{ backgroundColor: 'white', color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Try a Free Class
        </a>
        <a
          href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm"
          className="px-12 py-6 text-2xl font-black uppercase tracking-tighter border-2 text-white hover:bg-white/10 transition-all"
          style={{ borderColor: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          View Schedule
        </a>
      </div>
    </div>
  </section>
)
