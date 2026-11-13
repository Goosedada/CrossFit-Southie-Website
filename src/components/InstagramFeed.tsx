import { useEffect } from 'react'

export const InstagramFeed = () => {
  useEffect(() => {
    const container = document.getElementById('ft-insta-app')
    if (container && !container.hasChildNodes()) {
      const div = document.createElement('div')
      div.setAttribute('data-key', 'Dark Instagram Feed')
      div.setAttribute('class', 'ft')
      div.setAttribute('id', 'ftood1t3xi')
      container.appendChild(div)

      const script = document.createElement('script')
      script.src = 'https://wdg.fouita.com/widgets/0x46bd09.js'
      script.async = true
      document.head.appendChild(script)
    }
    return () => {
      document.head.querySelector('script[src*="fouita.com/widgets/0x46bd09.js"]')?.remove()
    }
  }, [])

  return (
    <section className="px-6 md:px-8" style={{ backgroundColor: '#141b2b' }}>
      <div className="max-w-6xl mx-auto">
        {/* Fouita Instagram Feed Widget */}
        <div id="ft-insta-app"></div>
      </div>
    </section>
  )
}
