export const ReviewStats = () => (
  <section className="py-4 px-6 md:px-8" style={{ backgroundColor: '#141b2b' }}>
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
        {/* Google Rating */}
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#4285F4">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div className="text-left">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>4.9</span>
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Google Rating</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12" style={{ backgroundColor: 'rgba(220, 226, 247, 0.2)' }}></div>

        {/* Reviews Count */}
        <div className="text-left">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span className="text-3xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>500+</span>
          </div>
          <p className="text-sm" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>5-Star Reviews</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12" style={{ backgroundColor: 'rgba(220, 226, 247, 0.2)' }}></div>

        {/* Members */}
        <div className="text-left">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span className="text-3xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>400+</span>
          </div>
          <p className="text-sm" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Active Members</p>
        </div>

        {/* CTA Button */}
        <a
          href="https://www.google.com/maps/place/CrossFit+Southie/@42.3354755,-71.0684606,17z/data=!4m8!3m7!1s0x89e37a670d8f7ec5:0xd432a03a504831de!8m2!3d42.3354755!4d-71.0658857!9m1!1b1!16s%2Fg%2F11c2w4y5x4?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-6 py-3 font-bold uppercase tracking-wide text-sm transition-all hover:scale-105 text-white"
          style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Read Our Reviews
        </a>
      </div>
    </div>
  </section>
)
