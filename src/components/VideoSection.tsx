import { useEffect, useRef } from 'react'

export const VideoSection = () => {
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframe = videoRef.current?.querySelector('iframe')
          if (iframe) {
            if (entry.isIntersecting) {
              const currentSrc = iframe.src
              iframe.src = currentSrc
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-4 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-left">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            WHO WE ARE
          </h2>
          <p className="text-lg" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
            Experience the energy and community
          </p>
        </div>
        <div ref={videoRef} className="relative aspect-video rounded-xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#232a3a' }}>
          <iframe
            src="https://www.youtube.com/embed/guWZ2TjoBcY?autoplay=1&mute=1&loop=1&playlist=guWZ2TjoBcY&end=34&controls=1&showinfo=0&rel=0&modestbranding=1"
            title="CrossFit Southie - Your Fitness Journey Starts Here"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
