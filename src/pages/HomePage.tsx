import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { VideoSection } from '@/components/VideoSection'
import { Programs } from '@/components/Programs'
import { Community } from '@/components/Community'
import { Coaches } from '@/components/Coaches'
import { ScheduleCTA } from '@/components/ScheduleCTA'
import { ReviewStats } from '@/components/ReviewStats'
import { Testimonials } from '@/components/Testimonials'
import { InstagramFeed } from '@/components/InstagramFeed'
import { PressSection } from '@/components/PressSection'
import { FAQ } from '@/components/FAQ'
import { Location } from '@/components/Location'
import { Footer } from '@/components/Footer'

export const HomePage = () => (
  <>
    <Hero />
    <About />
    <VideoSection />
    <Programs />
    <Community />
    <Coaches />
    <ScheduleCTA />
    <ReviewStats />
    <Testimonials />
    <InstagramFeed />
    <PressSection />
    <FAQ />
    <Location />
    <Footer />
  </>
)
