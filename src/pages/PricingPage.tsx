import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export const PricingPage = () => {
  const crossfitMemberships = [
    {
      name: 'UNLIMITED',
      price: '$249',
      period: '/month',
      features: [
        'Unlimited CrossFit classes',
        'Unlimited HIIT, SSC & HYROX classes',
        'Open gym access',
        'Member app access',
        'Nutrition guidance',
        '+ $10 for 24 Hour Access'
      ]
    },
    {
      name: '3X/week',
      price: '$199',
      period: '/month',
      features: [
        '3 CrossFit classes per week',
        'Access to all HIIT, SSC & HYROX classes',
        'Member app access',
        'Nutrition guidance'
      ]
    },
    {
      name: '2X/week',
      price: '$149',
      period: '/month',
      features: [
        '2 CrossFit classes per week',
        'Access to all HIIT, SSC & HYROX classes',
        'Member app access',
        'Nutrition guidance'
      ]
    }
  ]

  const striveMemberships = [
    {
      name: 'UNLIMITED',
      price: '$175',
      period: '/month',
      features: [
        'Unlimited HIIT, SSC & HYROX classes',
        'No CrossFit access',
        'Member app access',
        'Nutrition guidance'
      ]
    },
    {
      name: '3X/week',
      price: '$150',
      period: '/month',
      features: [
        '3 HIIT, SSC & HYROX classes per week',
        'No CrossFit access',
        'Member app access',
        'Nutrition guidance'
      ]
    },
    {
      name: '2X/week',
      price: '$125',
      period: '/month',
      features: [
        '2 HIIT, SSC & HYROX classes per week',
        'No CrossFit access',
        'Member app access',
        'Nutrition guidance'
      ]
    }
  ]

  const otherMemberships = [
    {
      name: 'CROSSFIT FUNDAMENTALS',
      price: '$99',
      period: '/month',
      features: [
        '8-session Foundations Course',
        'Proper movement patterns',
        'Build confidence',
        'Runs monthly on Tues & Thurs at 7pm'
      ]
    },
    {
      name: 'PERSONAL TRAINING',
      price: '$99',
      period: '/session',
      features: [
        'One-on-one coaching',
        'Custom programming',
        'Nutrition guidance',
        'Individual attention'
      ]
    },
    {
      name: 'DROP-IN',
      price: '$30',
      period: '/class',
      features: [
        'Single class access',
        'All class types included',
        'Day pass available',
        'Weekly class available'
      ]
    }
  ]

  return (
    <div className="font-sans pt-20">
      <Navigation />
      <section className="py-20 px-4" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            MEMBERSHIP OPTIONS
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            All memberships are monthly and can be cancelled at any time.
          </p>

          <h3 className="text-2xl font-bold mb-6 text-center tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            CrossFit
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {crossfitMemberships.map((plan) => (
              <div key={plan.name} className="p-6 rounded-lg transition-all text-center" style={{ backgroundColor: '#191f2f' }}>
                <h4 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{plan.name}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold" style={{ color: '#dc2626' }}>{plan.price}</span>
                  <span style={{ color: 'rgba(220, 226, 247, 0.6)' }}>{plan.period}</span>
                </div>
                <ul className="space-y-2 text-left inline-block">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-start" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#dc2626' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
                  className="block mt-6 text-center px-6 py-3 font-bold tracking-wide transition-colors text-white"
                  style={{ backgroundColor: '#dc2626' }}
                >
                  GET STARTED
                </a>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            STRIVE & HYROX Only
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {striveMemberships.map((plan) => (
              <div key={plan.name} className="p-6 rounded-lg transition-all text-center" style={{ backgroundColor: '#191f2f' }}>
                <h4 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{plan.name}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold" style={{ color: '#dc2626' }}>{plan.price}</span>
                  <span style={{ color: 'rgba(220, 226, 247, 0.6)' }}>{plan.period}</span>
                </div>
                <ul className="space-y-2 text-left inline-block">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-start" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#dc2626' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
                  className="block mt-6 text-center px-6 py-3 font-bold tracking-wide transition-colors text-white"
                  style={{ backgroundColor: '#dc2626' }}
                >
                  GET STARTED
                </a>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            OTHER
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMemberships.map((plan) => (
              <div key={plan.name} className="p-6 rounded-lg transition-all text-center" style={{ backgroundColor: '#191f2f' }}>
                <h4 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{plan.name}</h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold" style={{ color: '#dc2626' }}>{plan.price}</span>
                  <span style={{ color: 'rgba(220, 226, 247, 0.6)' }}>{plan.period}</span>
                </div>
                <ul className="space-y-2 text-left inline-block">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-start" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: '#dc2626' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
                  className="block mt-6 text-center px-6 py-3 font-bold tracking-wide transition-colors text-white"
                  style={{ backgroundColor: '#dc2626' }}
                >
                  GET STARTED
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ backgroundColor: '#141b2b' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>HAVE QUESTIONS?</h3>
          <p className="mb-6" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            Our team is here to help you find the perfect membership for your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 font-bold tracking-wide transition-colors text-white"
            style={{ backgroundColor: '#232a3a' }}
          >
            CONTACT US
          </Link>
        </div>
      </section>
      {/* Floating Review All Options Button */}
      <a
        href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 font-bold tracking-wide text-white shadow-lg transition-all hover:scale-105"
        style={{ backgroundColor: '#dc2626' }}
      >
        Review All Options
      </a>
      <Footer />
    </div>
  )
}
