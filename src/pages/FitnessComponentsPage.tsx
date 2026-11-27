import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/Footer'

// Restored from the previous website. It keeps its old address because people still find it on Google.
const SKILLS = [
  ['Cardiovascular / Respiratory Endurance', 'How well your body takes in oxygen and gets it where it is needed.'],
  ['Stamina', 'How well your body supplies, stores and uses energy to keep working.'],
  ['Strength', 'How much force your muscles can produce.'],
  ['Flexibility', 'How far you can move each joint through its range of motion.'],
  ['Power', 'How much force you can produce quickly.'],
  ['Speed', 'How fast you can repeat a movement.'],
  ['Coordination', 'How smoothly you can combine different movements into one.'],
  ['Agility', 'How quickly you can switch from one movement to another.'],
  ['Balance', 'How well you can keep your center of gravity over your base of support.'],
  ['Accuracy', 'How precisely you can control a movement’s direction or intensity.'],
]

const heading = { fontFamily: "'Space Grotesk', sans-serif" }
const body = { color: 'rgba(220, 226, 247, 0.8)' }

export const FitnessComponentsPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [])

  return (
    <div className="font-sans pt-20">
      <article className="py-8 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-3xl mx-auto">
          <Link to="/programs/crossfit" className="inline-flex items-center mb-4 transition-colors" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            CrossFit classes
          </Link>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white" style={heading}>
            10 Components of Physical Fitness
          </h1>
          <p className="text-lg mb-8" style={body}>
            Fitness is not defined simply by strength and conditioning. There are eight other components that make up physical fitness. CrossFit describes these as ten general physical skills, and you are only as fit as your competency in each of them.
          </p>
          <ol className="space-y-5 mb-8">
            {SKILLS.map(([name, text], i) => (
              <li key={name}>
                <h2 className="text-xl font-bold text-white mb-1" style={heading}>{i + 1}. {name}</h2>
                <p className="text-lg" style={body}>{text}</p>
              </li>
            ))}
          </ol>
          <p className="text-lg mb-8" style={body}>
            At CrossFit Southie we are constantly working toward all 10 components, which creates a more fit, well balanced individual. Our program is designed to touch on all of these physical skills each week, so do not avoid the workouts and movements you are not good at. Take a long, hard look at this list, work hard on any areas where you are lacking, and your overall fitness will reap the benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm" className="px-8 py-4 font-bold tracking-wide text-center text-white" style={{ backgroundColor: '#dc2626' }}>
              TRY A FREE CLASS
            </a>
            <Link to="/what-to-expect" className="px-8 py-4 border-2 font-bold tracking-wide text-center text-white" style={{ borderColor: 'white' }}>
              WHAT TO EXPECT
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
