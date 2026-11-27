import { useState } from 'react'
import { Link } from 'react-router-dom'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is CrossFit, and is it right for me?",
      answer: "CrossFit is a high-intensity fitness program designed to improve your strength, endurance, and overall health. Whether you're a beginner or an experienced athlete, our workouts are scalable to meet you where you are. Our experienced coaches will guide you through proper technique and help you progress at your own pace."
    },
    {
      question: "Do I need to be fit before starting?",
      answer: "Not at all. All levels are welcome. Anyone can do CrossFit, and our Fundamentals program is designed for beginners. It teaches the basic movements before you join regular classes."
    },
    {
      question: "What should I expect in my first class?",
      answer: "Your first class is a complimentary intro session where you'll meet our coaches, learn the basic movements, and get a feel for our community. Arrive 5 to 10 minutes early, wear workout gear, and bring a water bottle. Class workouts include a Base option for every movement. Don't worry about being perfect. We'll guide you through everything."
    },
    {
      question: "What are your membership options?",
      answer: "We have memberships for CrossFit, STRIVE (HIIT, Strength & Conditioning, and Hyrox), and CrossFit Fundamentals. Plans are monthly and cancel anytime. CrossFit memberships range from $149/month for 2 classes per week to $249/month for unlimited. STRIVE & Hyrox memberships range from $125/month for 2 classes per week to $175/month for unlimited. CrossFit Fundamentals is $99/month. Drop-in classes are $30 each. See the full pricing page for details."
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes. Our experienced personal trainers offer one-on-one coaching tailored to your goals, whether you want to compete, lose weight, build strength, or improve athletic performance. Sessions are $99 each and include custom programming, nutrition guidance, and individual attention. To get set up, email info@crossfitsouthie.com."
    },
    {
      question: "What are your gym hours?",
      answer: "Our staffed hours are Monday to Thursday 5am to 8pm, Friday 5am to 7pm, Saturday 7am to 1pm, and Sunday 9am to 12pm. Unlimited CrossFit members have open gym access during staffed hours. You can add 24-hour access for a $10/month add-on, which lets you use the gym during non-staffed hours. Check the schedule for class times, which vary throughout the day."
    }
  ]

  return (
    <section className="py-4 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
            Quick answers to help you get started
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: '#191f2f' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-opacity-80"
                style={{ backgroundColor: openIndex === index ? '#232a3a' : '#191f2f' }}
              >
                <span className="font-bold text-white pr-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  style={{ color: '#dc2626' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-base mb-4" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 font-bold uppercase tracking-wide text-sm transition-all hover:scale-105 text-white"
              style={{ backgroundColor: '#232a3a', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contact Us
            </Link>
            <Link
              to="/what-to-expect"
              className="px-8 py-3 font-bold uppercase tracking-wide text-sm transition-all hover:scale-105 text-white"
              style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              What to Expect
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
