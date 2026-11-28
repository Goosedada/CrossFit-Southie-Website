import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Programs } from '@/components/Programs'
import { Community } from '@/components/Community'
import { Coaches } from '@/components/Coaches'
import { ScheduleCTA } from '@/components/ScheduleCTA'
import { ReviewStats } from '@/components/ReviewStats'
import { InstagramFeed } from '@/components/InstagramFeed'
import { FAQ } from '@/components/FAQ'
import { Location } from '@/components/Location'
import { Footer } from '@/components/Footer'

export const HomePage = () => (
  <>
    <Hero />
    <About />
    <Programs />
    <Community />
    <Coaches />
    <ScheduleCTA />
    <FAQ />
    <ReviewStats />
    <InstagramFeed />
    <Location />
    <Footer />
  </>
)
