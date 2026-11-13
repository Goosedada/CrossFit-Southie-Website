import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export const WhatToExpectPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [])

  return (
    <div className="font-sans pt-20">
      <Navigation />
      <section className="py-8 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center mb-4 transition-colors" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            WHAT TO EXPECT
          </h1>
          <p className="text-lg" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
            Your guide to starting your fitness journey at CrossFit Southie
          </p>
        </div>
      </section>

      {/* Your Free Intro Session */}
      <section className="py-16 px-6 md:px-8" style={{ backgroundColor: '#141b2b' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white" style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>1</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Your Free Intro Session</h2>
              <p className="text-lg mb-4" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
                Every new member starts with a complimentary intro session. This is your chance to meet our coaches, learn the fundamental movements, and experience our community firsthand.
              </p>
              <ul className="space-y-2" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Learn proper technique for basic movements
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Get a feel for our training style and community
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  No pressure, no judgment - just fitness
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fundamentals Program */}
      <section className="py-16 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white" style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>2</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Fundamentals Course (optional)</h2>
              <ul className="space-y-2" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Small group training with personalized attention
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Master the fundamental movements: squat, deadlift, press, pull
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Introduction to all Olympic Weightlifting and gymnastics movements
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Learn proper scaling for all fitness levels
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Build confidence to join any class on the schedule
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Group Classes */}
      <section className="py-16 px-6 md:px-8" style={{ backgroundColor: '#141b2b' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white" style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>3</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Join the Community</h2>
              <p className="text-lg mb-4" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
                Choose from CrossFit, Strive-X Hiit, SSC, or HYROX training.
              </p>
              <ul className="space-y-2" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Over 10 classes per day to fit any schedule
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Supportive coaches who scale workouts to your level
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Motivating community that celebrates every PR
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>•</span>
                  Open gym access for members who want more
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>What to Bring</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#191f2f' }}>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Essential Items</h3>
              <ul className="space-y-2" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>✓</span>
                  Comfortable workout clothes
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>✓</span>
                  Athletic shoes (clean, non-marking)
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>✓</span>
                  Water bottle
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>✓</span>
                  Towel
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#191f2f' }}>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>We Provide</h3>
              <ul className="space-y-2" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>✓</span>
                  All equipment (barbells, kettlebells, rowers, etc.)
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>✓</span>
                  Showers and changing rooms
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#dc2626' }}>✓</span>
                  Motivation and a competitive, friendly atmosphere grounded in camaraderie
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-8" style={{ backgroundColor: '#141b2b' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How long is the Fundamentals course?", a: "Our Fundamentals course runs monthly and consists of 8 sessions, complete on Tuesday and Thursdays at 7pm over the course of the month." },
              { q: "What if I can't do a pull-up or push-up?", a: "No problem! All movements are scalable. Our coaches will teach you modified versions that work for your current fitness level, and you'll progress from there." },
              { q: "Is CrossFit safe for beginners?", a: "Absolutely. With proper coaching and scaling, CrossFit is one of the safest and most effective fitness programs for all fitness levels." },
              { q: "What if I miss a Fundamentals session?", a: "Life happens! We offer makeup sessions and flexible scheduling. Just talk to your coach and we'll get you back on track." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg" style={{ backgroundColor: '#191f2f' }}>
                <h3 className="font-bold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.q}</h3>
                <p style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-8" style={{ backgroundColor: '#dc2626' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            READY TO START?
          </h2>
          <p className="text-xl mb-8 opacity-90 text-white">
            Book your free intro session today and experience the CrossFit Southie difference.
          </p>
          <a
            href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
            className="inline-block px-10 py-5 text-xl font-black uppercase tracking-tighter shadow-xl hover:scale-105 transition-all"
            style={{ backgroundColor: 'white', color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Book Your Free Class
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
