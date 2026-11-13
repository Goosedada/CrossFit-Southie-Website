export const PressSection = () => {
  const achievements = [
    { year: '2026', title: 'CrossFit Open', description: '20% of our roster finished in the top 5% of athletes worldwide' },
    { year: '2026', title: 'Wodapalooza Miami', description: 'Team winners in the Intermediate Female and Co-Ed Pairs divisions' },
    { year: '2026', title: 'CrossFit Quarterfinals', description: '38 athletes qualified' },
    { year: '2026', title: 'Age Group Quarterfinals', description: 'Athletes qualifying in all 8 age groups from 35-70+' },
  ]

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-8" style={{ backgroundColor: '#141b2b' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            RECOGNIZED EXCELLENCE
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
            From local competitions to the CrossFit Games stage, our athletes consistently prove that hard work pays off.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: '#191f2f' }}
            >
              <div className="text-4xl font-black mb-2" style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>
                {item.year}
              </div>
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
            className="inline-block px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all hover:scale-105 text-white"
            style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Join Us & Write Your Own Story
          </a>
        </div>
      </div>
    </section>
  )
}
