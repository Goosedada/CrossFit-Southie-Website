import { Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { FloatingCTA } from '@/components/FloatingCTA'
import { ScrollToHash } from '@/components/ScrollToHash'
import { RouteMeta } from '@/components/RouteMeta'
import { HomePage } from '@/pages/HomePage'
import { PricingPage } from '@/pages/PricingPage'
import { TeamPage } from '@/pages/TeamPage'
import { CoachDetail } from '@/pages/CoachDetail'
import { ProgramDetail } from '@/pages/ProgramDetail'
import { WhatToExpectPage } from '@/pages/WhatToExpectPage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function App() {
  return (
    <div className="font-sans" style={{ backgroundColor: '#0c1322' }}>
      <ScrollToHash />
      <RouteMeta />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/what-to-expect" element={<WhatToExpectPage />} />
        <Route path="/coaches/:slug" element={<CoachDetail />} />
        <Route path="/programs/:slug" element={<ProgramDetail />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FloatingCTA />
    </div>
  )
}

export default App
