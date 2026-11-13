export const Community = () => (
  <section className="py-4 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>OUR TRIBE</h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-base md:text-lg" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>We're more than just a gym. We're a supportive fitness community helping each other achieve personal fitness goals.</p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-square overflow-hidden group">
          <img loading="lazy" decoding="async"
            src="/imgs/buddyruns.jpg"
            alt="Community workout"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="aspect-square overflow-hidden group">
          <img loading="lazy" decoding="async"
            src="/imgs/community2.jpg"
            alt="Group class"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="aspect-square overflow-hidden group sm:col-span-2 md:col-span-1">
          <img loading="lazy" decoding="async"
            src="/imgs/community3.png"
            alt="Training together"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  </section>
)
