export const Hero = () => (
  <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <div
        className="w-full h-full opacity-60"
        style={{
          backgroundImage: `url('/imgs/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(0deg, #0c1322 0%, rgba(12, 19, 34, 0.4) 50%, rgba(12, 19, 34, 0.2) 100%)'
      }} />
    </div>
    <div className="relative z-10 px-6 sm:px-8 md:px-20 max-w-5xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-4 sm:mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        EVERYDAY<br/>
        <span style={{ color: '#dc2626' }}>ATHLETE</span>
      </h1>
      <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-10 max-w-xl leading-relaxed text-white">
        From first-timers to seasoned athletes—we forge strength, grit, and lifelong bonds through expert coaching and real community.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
          className="px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg md:text-xl font-black uppercase tracking-tighter transition-all hover:scale-105 text-center"
          style={{ backgroundColor: '#dc2626', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Try a Free Class
        </a>
        <a
          href="#programs"
          className="px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg md:text-xl font-black uppercase tracking-tighter border transition-all hover:bg-white/10 text-center"
          style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          View Programs
        </a>
      </div>
    </div>
    <div className="absolute bottom-10 right-4 sm:right-10 hidden lg:block">
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(8rem, 12vw, 12rem)',
        lineHeight: 1,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(220, 38, 38, 0.3)',
        opacity: 0.2,
        userSelect: 'none',
        pointerEvents: 'none'
      }}>STRIVE</div>
    </div>
  </section>
)
