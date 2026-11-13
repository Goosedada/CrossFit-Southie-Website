import { testimonials } from '@/data/testimonials'

export const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            WHAT OUR MEMBERS SAY
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
            Real stories from real athletes who found their strength at CrossFit Southie
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl overflow-hidden"
              style={{ backgroundColor: '#141b2b' }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#dc2626' }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              {/* Quote Text */}
              <p className="text-base leading-relaxed" style={{ color: 'rgba(220, 226, 247, 0.9)' }}>
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
