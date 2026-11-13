export const About = () => (
  <section className="py-4 px-6 md:px-8" style={{ backgroundColor: '#141b2b' }}>
    {/* Grid: side-by-side on desktop, stacked on mobile */}
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-20 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-none text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          NOT JUST A GYM.<br/>A <span style={{ color: '#dc2626' }}>BATTLEGROUND</span> FOR BETTER.
        </h2>
        <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
          <p>At CrossFit Southie and Strive Fitness, we've stripped away the fluff. Our 10,000 sq. ft. facility is designed for one thing: result-driven performance. Whether you're a competitive athlete or just starting your journey, our community provides the friction required for growth.</p>
          <p>Founded on the principles of functional movement and intense camaraderie, we've built a culture where every PR is celebrated and every goal is chased with relentless intensity.</p>
        </div>
        <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 md:gap-8">
          <div>
            <div className="text-3xl md:text-5xl font-black" style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>10K</div>
            <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(220, 226, 247, 0.5)' }}>Square Feet</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black" style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>10+</div>
            <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(220, 226, 247, 0.5)' }}>Classes Per Day</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black" style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>24HR</div>
            <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(220, 226, 247, 0.5)' }}>Access Available</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-xl" style={{ backgroundColor: '#232a3a' }}>
          <img
            src="/imgs/community2.jpg"
            alt="Interior of CrossFit Southie gym floor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 p-4 md:p-8 max-w-[200px] md:max-w-xs rounded-lg" style={{ backgroundColor: '#dc2626' }}>
          <p className="font-bold text-white uppercase italic text-sm md:text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            "The hardest part is walking through the door. We handle the rest."
          </p>
        </div>
      </div>
    </div>
  </section>
)
