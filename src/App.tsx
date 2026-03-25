import { useState, useEffect } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react'

// Scroll to programs section function
const scrollToPrograms = () => {
  window.location.href = '/#programs'
}

// Custom color scheme
const colors = {
  background: '#0c1322',
  surface: '#0c1322',
  'surface-container-low': '#141b2b',
  'surface-container': '#191f2f',
  'surface-container-high': '#232a3a',
  'surface-container-highest': '#2e3545',
  'surface-bright': '#323949',
  'on-surface': '#dce2f7',
  'on-surface-variant': '#e6bdb8',
  'primary-container': '#dc2626',
  'on-primary-container': '#fff6f5',
  'inverse-primary': '#bf0715',
  white: '#ffffff'
}

// Hero Section with new design
const Hero = () => (
  <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <div
        className="w-full h-full object-cover opacity-60"
        style={{
          backgroundImage: `url('/imgs/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(0deg, #0c1322 0%, rgba(12, 19, 34, 0.4) 50%, rgba(12, 19, 34, 0.2) 100%)'
      }} />
    </div>
    <div className="relative z-10 px-6 sm:px-8 md:px-20 max-w-5xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-4 sm:mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        EVERYDAY<br/>
        <span style={{ color: '#dc2626' }}>ATHLETE</span>
      </h1>
      <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-10 max-w-xl leading-relaxed text-white">
        From first-timers to seasoned athletes—we forge strength, grit, and lifelong bonds through expert coaching and real community.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
          className="px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg md:text-xl font-black uppercase tracking-tighter transition-all hover:scale-105 text-center"
          style={{ backgroundColor: '#dc2626', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Try a Free Class
        </a>
        <a
          href="#programs"
          className="px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg md:text-xl font-black uppercase tracking-tighter border transition-all hover:bg-white/10 text-center"
          style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          View Programs
        </a>
      </div>
    </div>
    <div className="absolute bottom-10 right-4 sm:right-10 hidden lg:block">
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 900,
        fontSize: '8rem sm:10rem lg:12rem',
        lineHeight: 1,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(220, 38, 38, 0.3)',
        opacity: 0.2,
        userSelect: 'none',
        pointerEvents: 'none'
      }}>STRIVE</div>
    </div>
  </section>
)

// About Section with new design
const About = () => (
  <section className="py-20 md:py-32 px-6 md:px-8" style={{ backgroundColor: '#141b2b' }}>
    {/* Grid: side-by-side on desktop, stacked on mobile */}
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-20 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-none text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          NOT JUST A GYM.<br/>A <span style={{ color: '#dc2626' }}>BATTLEGROUND</span> FOR BETTER.
        </h2>
        <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
          <p>At CrossFit Southie and Strive Fitness, we've stripped away the fluff. Our 10,000 sq. ft. facility is designed for one thing: result-driven performance. Whether you're a competitive athlete or just starting your journey, our community provides the friction required for growth.</p>
          <p>Founded on the principles of functional movement and intense camaraderie, we've built a culture where every PR is celebrated and every goal is chased with relentless intensity.</p>
        </div>
        <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 md:gap-8">
          <div>
            <div className="text-3xl md:text-5xl font-black" style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>10K</div>
            <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(220, 226, 247, 0.5)' }}>Square Feet</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black" style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>10+</div>
            <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(220, 226, 247, 0.5)' }}>Classes Per Day</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black" style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}>24HR</div>
            <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'rgba(220, 226, 247, 0.5)' }}>Access Available</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-xl" style={{ backgroundColor: '#232a3a' }}>
          <img
            src="/imgs/community2.jpg"
            alt="Interior of CrossFit Southie gym floor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 p-4 md:p-8 max-w-[200px] md:max-w-xs rounded-lg" style={{ backgroundColor: '#dc2626' }}>
          <p className="font-bold text-white uppercase italic text-sm md:text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            "The hardest part is walking through the door. We handle the rest."
          </p>
        </div>
      </div>
    </div>
  </section>
)

// Programs Section with bento grid
const programs = [
  {
    name: 'CrossFit',
    slug: 'crossfit',
    shortDescription: 'Constant variety, functional movements, high intensity. Our core methodology for total fitness.',
    fullDescription: 'CrossFit is a general physical preparedness program designed to help tackle any fitness or life task. The program is completely scalable and accessible to anyone willing to put their ego aside. CrossFit utilizes compound movements through body-weight, weightlifting, and conditioning elements at varying lengths of duration and intensity. The result is a fully capable and efficient athlete ready to take on any task life or athletics throws at it. Whether you are looking to lose weight, build muscle, improve athletic performance, or simply feel better, CrossFit has something for everyone.\n\nScalability\n\nCrossFit utilizes bodyweight movements (pull-ups, push-ups, sit-ups, box jumps, rope climbs, etc.), weightlifting (kettlebells, barbells, medicine balls, sandbags, etc.), and conditioning (running, rowing, jump roping and biking) in different combinations, rep schemes and time domains. CrossFit is completely scalable. For rope climbs we start from the ground with a pull to stand option. From there, we have a knotted rope, then we teach you how to use your feet and ascend the rope. Finally, we have 10ft, 15ft, 20ft and 25ft ropes. All our weightlifting movements are taught with a PVC pipe and athletes progress to either a 15, 33 or 45lb bar. All of our bumper plates are similar in size and look alike but differ in weight. The scalability of CrossFit makes it the best fitness program regardless of your current level of fitness.\n\nThe Ten Fitness Domains\n\nCrossFit is a core strength and conditioning program designed to optimize physical competence in each of ten recognized fitness domains. The fitness domains include Cardiovascular and Respiratory endurance, Stamina, Strength, Flexibility, Power, Speed, Coordination, Agility, Balance, and Accuracy. Our training employs constantly varied, functional movement executed at a high level of intensity. By constantly varying the workouts your body is left guessing, requiring it to regularly adapt to the training stimulus.\n\nHow Will This Be Beneficial To Me?\n\nThe sessions remain physically and mentally challenging and more importantly, your progress will remain plateau free. Functional movements are essential, everyday movements that are done in real life. Standing from a seated position, safely picking something up off the ground, and putting an object up over your head are all examples of functional movements. These movements move large loads, long distances in a short amount of time, and promote lean muscle gain and a reduction of body fat.\n\nFinally, the high intensity component is the shortcut to quick results. All the good stuff in fitness comes through intensity. Our workouts are scaled so that each individual is able to train at their own high intensity no matter what their current fitness level. With that saying, we train hard.\n\nOur athletes are trained to bike, run, swim, and row at short, middle, and long distances guaranteeing exposure and competency in each of the three main metabolic pathways. We incorporate gymnastics, from rudimentary to advanced movements, garnering great capacity at controlling the body both dynamically and statically while maximizing strength to weight ratio and flexibility. Kettlebells, Olympic weightlifting, and powerlifting are also used to develop an athlete\'s explosive power, control of external objects, and mastery of critical motor recruitment patterns.\n\nWith all these training tools, we produce a well rounded athlete that excels at all aspects of fitness. We produce an athlete that is able to control both their own body in space, as well as the objects in space around their body in short energy tasks, long energy tasks and all those in between. Our specialty is not specializing. We\'ll prepare you for any fitness task that is thrown your way.\n\nAn Effective Approach\n\nIn gyms and health clubs throughout the world the typical workout consists of isolation movements and extended aerobic sessions. The fitness community has the public believing that lateral raises, curls, combined with 20 minutes on the treadmill are going to lead to some kind of great fitness. Well, at CrossFit we work exclusively with compound movements and shorter high intensity cardiovascular sessions. We\'ve replaced the lateral raise with the push press, the curl with pull-ups, and the leg extension with squats.\n\nWhy? Because compound, functional movements and high intensity, anaerobic cardio, is radically effective at eliciting nearly any desired fitness result. Startlingly, this is not a matter of opinion but solid irrefutable scientific fact. Our practices are consistent with elite training programs. CrossFit endeavors to bring state-of-the-art coaching techniques to the general public and athletes who do not have access to current technologies, research, and coaching methods.\n\nIs This For Me?\n\nThe CrossFit program is designed for universal scalability making it the perfect application for any committed individual regardless of experience. Your needs and the Olympic athlete\'s differ by degree not kind. The same methods that yield great success in an Olympic or professional athlete will show true in the elderly. The idea is to scale load and intensity; not to change programs. You won\'t have to lift weights beyond your level or perform movements beyond your skill set.\n\nWe pride ourselves on working with athletes of all different types and ability levels and making them better. Furthermore, our target population is not specific to age or gender. Instead, we are targeting anyone who is willing to work hard and keep an open mind to CrossFit principles. Of course, we can\'t load your grandmother with the same squatting weight that we\'d assign an Olympic skier, but they both need to squat.\n\nIn fact, squatting is essential to maintaining functional independence and improving fitness. Through thorough coaching and incremental load assignment, CrossFit has been able to teach anyone to perform with maximum efficacy. We can surpass the same movements typically utilized by professional coaches in elite and certainly exclusive environments.\n\nWhat If I Don\'t Want To Be An Athlete? I Just Want To Be Healthy.\n\nThe CrossFit view is that fitness and health are the same thing. Fitness, wellness, and pathology (sickness) are measures of the same entity, your health. There are a multitude of measurable parameters that can be ordered from sick (pathological) to well (normal) to fit (better than normal). These include but are not limited to blood pressure, cholesterol, heart rate, body fat, muscle mass, flexibility, and strength. Athletes typically prove to possess exceptional body functionality in areas that could go awry. Athletes experience a protection from the ravages of aging and disease that non-athletes never find.\n\nFor instance, 80-year-old athletes are stronger than non-athletes in their prime at 25 years old. If you think that strength isn\'t important consider that strength loss is what puts people in nursing homes. Athletes have greater bone density, stronger immune systems, less coronary heart disease, reduced cancer risk, fewer strokes, and less depression than non-athletes.',
    image: '/imgs/crossfit.jpg',
    isFlagship: true
  },
  {
    name: 'HYROX',
    slug: 'hyrox',
    shortDescription: 'The world series of fitness racing. High-volume cardio and functional strength endurance.',
    fullDescription: 'HYROX is the World Series of Fitness Racing. Train for competition with running and functional exercises combined. Ideal for athletes preparing for HYROX events. This program combines endurance running with functional fitness exercises in a race format. Whether you are looking to compete in HYROX events or simply improve your overall conditioning, this program will push you to new limits.',
    image: '/imgs/hyrox.jpg'
  },
  {
    name: 'STRIVE-X',
    slug: 'strive-x-hiit',
    shortDescription: 'Our signature conditioning-focused program. Low skill, maximum effort, total sweat.',
    fullDescription: 'STRIVE-X HIIT is high-intensity interval training that burns calories and improves cardiovascular fitness. Perfect for those new to fitness or looking for a fast-paced, effective workout. Classes feature a variety of exercises designed to maximize calorie burn and improve overall fitness in a supportive group environment.',
    image: '/imgs/hiit.jpg'
  },
  {
    name: 'PRIVATE COACHING',
    slug: 'personal-training',
    shortDescription: 'Individualized programming and 1-on-1 attention for specific goals and accelerated results.',
    fullDescription: 'Our Personal Training program offers one-on-one personalized coaching tailored to your specific fitness goals. Includes custom programming, nutrition guidance, and individual attention from our certified personal trainers. Whether you are looking to lose weight, build muscle, prepare for competition, or rehabilitate an injury, our trainers will create a customized plan to help you achieve your goals.',
    image: '/imgs/personaltraining.png'
  },
  {
    name: 'SSC',
    slug: 'ssc',
    shortDescription: 'Strength & Conditioning. Building lean muscle and improving athletic performance.',
    fullDescription: 'SSC (STRIVE Strength & Conditioning) is focused on building lean muscle, improving athletic performance, and enhancing overall fitness through structured strength training and conditioning. This program uses progressive overload and periodization to help you reach your strength and fitness goals.',
    image: '/imgs/ssc.jpg'
  },
  {
    name: 'Fundamentals',
    slug: 'fundamentals',
    shortDescription: 'Build a foundation before joining regular classes. Learn proper movement patterns.',
    fullDescription: 'Our Fundamentals program is a CrossFit program specifically designed for beginners to build a foundation before joining regular classes. This 8-session course teaches proper movement patterns, builds confidence, and prepares you for group fitness classes. You will learn the basics of weightlifting, gymnastics, and conditioning in a safe and supportive environment. Ideal for those new to CrossFit or high-intensity training.',
    image: '/imgs/fundamentals.jpg'
  }
]

const Programs = () => (
  <section id="programs" className="py-12 md:py-16 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10 md:mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PROGRAMS</h2>
          <p className="mt-4 max-w-md text-base md:text-lg" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Multi-disciplinary training for every level of human performance.</p>
        </div>
        <div>
          <a
            href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm"
            className="font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all text-sm md:text-base"
            style={{ color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            SEE FULL SCHEDULE →
          </a>
        </div>
      </div>

      {/* 3 rows on desktop, 2 columns on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Row 1: CrossFit, HYROX, STRIVE-X */}
        {/* CrossFit - Featured */}
        <div className="group relative overflow-hidden rounded-xl min-h-[280px] lg:min-h-[320px]" style={{ backgroundColor: '#232a3a' }}>
          <img
            src={programs[0].image}
            alt="CrossFit training"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <span className="text-white px-3 py-1 text-xs font-bold uppercase mb-3 inline-block w-fit rounded" style={{ backgroundColor: '#dc2626' }}>Flagship</span>
            <h3 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-black text-white uppercase mb-2 lg:mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CROSSFIT</h3>
            <p className="text-base max-w-lg" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[0].shortDescription}</p>
          </div>
        </div>

        {/* HYROX */}
        <Link to={`/programs/${programs[1].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#2e3545' }}>
          <img
            src={programs[1].image}
            alt="HYROX competition prep"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>HYROX</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[1].shortDescription}</p>
          </div>
        </Link>

        {/* STRIVE-X */}
        <Link to={`/programs/${programs[2].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#2e3545' }}>
          <img
            src={programs[2].image}
            alt="Strive X intensity"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>STRIVE-X</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[2].shortDescription}</p>
          </div>
        </Link>

        {/* Row 2: SSC, FUNDAMENTALS */}
        {/* SSC */}
        <Link to={`/programs/${programs[4].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#232a3a' }}>
          <img
            src={programs[4].image}
            alt="Strength & Conditioning"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>SSC</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[4].shortDescription}</p>
          </div>
        </Link>

        {/* FUNDAMENTALS */}
        <Link to={`/programs/${programs[5].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#232a3a' }}>
          <img
            src={programs[5].image}
            alt="Fundamentals program"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>FUNDAMENTALS</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[5].shortDescription}</p>
          </div>
        </Link>

        {/* Row 3: PRIVATE COACHING (last position) */}
        {/* Private Coaching */}
        <Link to={`/programs/${programs[3].slug}`} className="group relative overflow-hidden rounded-xl min-h-[220px] lg:min-h-[320px] block" style={{ backgroundColor: '#232a3a' }}>
          <img
            src={programs[3].image}
            alt="1-on-1 coaching session"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-[#0c1322]/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PRIVATE COACHING</h3>
            <p className="text-sm sm:text-base" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{programs[3].shortDescription}</p>
          </div>
        </Link>
      </div>
    </div>
  </section>
)

// Community Section
const Community = () => (
  <section className="py-12 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>OUR TRIBE</h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-base md:text-lg" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>We're more than just a gym. We're a supportive fitness community helping each other achieve personal fitness goals.</p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-square overflow-hidden group">
          <img
            src="/imgs/buddyruns.jpg"
            alt="Community workout"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="aspect-square overflow-hidden group">
          <img
            src="/imgs/community2.jpg"
            alt="Group class"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="aspect-square overflow-hidden group sm:col-span-2 md:col-span-1">
          <img
            src="/imgs/community3.png"
            alt="Training together"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  </section>
)

// Coaches Section
const coaches = [
  {
    name: 'Chris Gosler',
    slug: 'chris-gosler',
    role: 'Founder / Head Coach',
    image: '/imgs/chris-gosler.png',
    bio: 'Chris Gosler began his career as a personal trainer immediately upon earning his B.S. in Kinesiology from the University of Massachusetts Amherst. As a lifelong lover of both sport and fitness, he immediately fell in love when he discovered CrossFit. With 17+ years of experience, he has helped clients of all ages and abilities learn real-world fitness.\n\nGosler states that fitness has helped push him to excel in life outside of the gym, making him a better father, husband, co-worker, and friend. He expresses gratitude for being able to do what he loves each day, noting that Monday is still his favorite day of the week and he gets excited to wake up at 4am to come to work.\n\nHe has actively managed CrossFit Southie since its opening in 2010. Under his leadership, the gym has grown to occupy 15,000 square feet of space with a membership reaching as high as 550 members and upwards of 14 classes a day.',
    certifications: ['CrossFit Level 3', 'NASM Performance Enhancement Specialist', 'NASM Certified Personal Trainer', 'NASM Corrective Exercise Specialist', 'ACSM Certified Personal Trainer', 'USA Weightlifting', 'CrossFit Olympic Weightlifting', 'CrossFit Powerlifting', 'CrossFit Nutrition'],
    achievements: ['2024 CrossFit Games - 97th Place (40-44 Age Division)', '2023 CrossFit Games - 232nd Place (35-39 Age Division)', '2022 CrossFit Games - 117th Place (35-39 Age Division)', '2021 CrossFit Games - 70th Place (35-39 Age Division)', '2019 CrossFit Games - 89th Place (35-39 Age Division)']
  },
  {
    name: 'Amy Gosler',
    slug: 'amy-gosler',
    role: 'Founder / Programmer',
    image: '/imgs/amy.png',
    bio: 'Amy Gosler is a co-founder of CrossFit Southie, which she opened with her husband Chris Gosler in 2010 when she was 25 years old. Under their leadership, CrossFit Southie has grown to become one of the largest and most successful CrossFit gyms in the country, operating from a 15,000 square foot facility.\n\nAmy has been the programmer for CrossFit Southie since its inception and also serves as the programmer for STRIVE. Her programming philosophy focuses on creating workouts that stimulate both mentally and physically, with each week having a clear purpose and well-balanced structure.\n\nShe lives in Norwell, Massachusetts with her husband Chris and three young sons: Bradley, Chase, and Bryce.',
    certifications: ['CrossFit Level 3', 'CrossFit Kids', 'USA Weightlifting', 'CrossFit Movement and Mobility', 'CrossFit Kettlebell', 'ACSM Health Fitness Instructor'],
    achievements: ['2014 Coach - CrossFit Southie Team 6th at Northeast Regional', '2013 Coach - CrossFit Southie Team 4th at Northeast Regional', '2012 - 28th Place at CrossFit Games (Women\'s Individual)', '2012 - 2nd Place - CrossFit Southie Team at Northeast Regional']
  },
  {
    name: 'Daniela Bitto',
    slug: 'daniela-bitto',
    role: 'Head Coach',
    image: '/imgs/daniela.png',
    bio: 'Daniela Bitto is a Head Coach at CrossFit Southie. Her biggest asset as a coach is her passion for fitness and helping others, and she truly loves CrossFit and all things fitness. To her, the best part of the work is getting people to do things that they didn\'t think they could do!\n\nShe has a B.S. in Physical Education with a Concentration in Exercise Science from Bridgewater State College and has been an Advanced Personal Trainer since 2006.',
    certifications: ['CrossFit Level 3', 'Advanced Personal Trainer (NCSF)', 'CrossFit Gymnastics', 'Advanced Gymnastics Course', 'The Burgner Weightlifting L1 Course', 'Massachusetts Certified Physical Education Teacher'],
    achievements: ['East Regional Team Competitor 2018', 'Completed 8 marathons including Boston with 3:31 qualifying time']
  },
  {
    name: 'Chris Berretta',
    slug: 'chris-berretta',
    role: 'Head Coach',
    image: '/imgs/berretta.png',
    bio: 'Chris Berretta is the Head Coach at CrossFit Southie. He graduated with an Exercise Science B.S. degree from the University of New Hampshire. After being one of the first ever athletes at CrossFit Southie, he became the first ever coach hired by Goose and Amy in 2012.\n\nHe has trained a wide demographic of individuals ranging from high school athletes to the geriatric population. Chris\'s goal as a coach is to constantly evolve, gather valuable information regarding fitness and share it with each person to help achieve their goals and fitness potential.',
    certifications: ['B.S. Exercise Science - UNH', 'CrossFit Level 1 & 2', 'CSCS', 'CrossFit Endurance', 'CrossFit Kettlebell', 'Functional Movement System Level 1'],
    achievements: ['Owner/Creator of MOBLOKO mobility pack', 'First ever coach hired at CrossFit Southie in 2012']
  },
  {
    name: 'LeLe Xavier',
    slug: 'lele-xavier',
    role: 'Coach',
    image: '/imgs/lele.png',
    bio: 'LeLe Xavier is a dedicated CrossFit coach at CrossFit Southie known for her leadership and determination. She embodies a "how will you know if you don\'t try" attitude. She was born and raised in Brazil!\n\nShe started CrossFit in 2012 and officially became a coach in 2022. She also coaches at STRIVE Norwell & Duxbury.',
    certifications: ['CrossFit Level 1', 'CrossFit Level 2', 'CrossFit Gymnastics'],
    achievements: ['Completed The CrossFit Southie intern program', '5 Years of Cardio Kickboxing', 'Blue Strip belt in Taekwondo', '2 Full Marathons', '18 Half Marathons']
  },
  {
    name: 'Shira Brandt',
    slug: 'shira-brandt',
    role: 'Coach',
    image: '/imgs/shira.png',
    bio: 'Shira Brandt is a CrossFit coach at CrossFit Southie, coaching Wednesday morning classes at 6am and 7am. She started CrossFit in December 2017.\n\nShe grew up playing a variety of sports including field hockey, track and field, soccer, skiing, and pole vaulted in high school.',
    certifications: ['CrossFit Level 1'],
    achievements: ['Focuses on helping athletes accomplish their goals, whether it\'s a lift PR, double unders, or improving chest to bar efficiency']
  },
  {
    name: 'Sebastian Buhaley',
    slug: 'sebastian-buhaley',
    role: 'Coach',
    image: '/imgs/sebastian.png',
    bio: 'Sebastian Buhaley is a dedicated fitness coach and accomplished endurance athlete born and raised in Cleveland, Ohio. His running journey began at age ten. He joined CrossFit Southie in January 2012 and has been an integral member of the community since.\n\nHe has been coaching athletes for more than ten years and finds his proudest moments when his athletes achieve personal records.',
    certifications: ['CrossFit Level 1', 'CrossFit Endurance', 'First Aid/CPR'],
    achievements: ['First marathon at age 18', '5k: 16:38', 'Founding member of Boston Brunch Runners', 'Has his own workout named after him in the November Project']
  },
  {
    name: 'Tom Kuchenruether',
    slug: 'tom-kuchenruether',
    role: 'Coach',
    image: '/imgs/tom.png',
    bio: 'Tom Kuchenruether is a long-time coach at CrossFit Southie. He started CrossFit in May 2011 and started coaching at Southie in 2016.\n\nHe brings commitment both in and outside of the gym, frequently attending social events and helping outside of class when needed. He grew up in New Jersey and works in Technology.',
    certifications: ['CrossFit Level 2', 'CrossFit Level 1', 'CrossFit Specialty Course: Aerobic Capacity', 'BS Management Information Systems'],
    achievements: ['13+ years of CrossFit experience', '8+ years coaching', 'Active participant in Southie Showdown']
  },
  {
    name: 'Chris Ehl',
    slug: 'chris-ehl',
    role: 'Coach',
    image: '/imgs/Chris ehl.png',
    bio: 'Chris Ehl is the newest member of the coaching staff at CrossFit Southie. He joined the gym in August 2020 and has been a consistent presence ever since. Known for his awesome, positive attitude that is described as "contagious," Chris has been open to learning both as an athlete and as a coach.\n\nHe played golf and baseball in high school, then continued playing golf in college.',
    certifications: ['CrossFit Level 1'],
    achievements: ['Only a few weeks into his coaching career but already making an impact']
  },
  {
    name: 'Justin Horine',
    slug: 'justin-horine',
    role: 'Coach',
    image: '/imgs/Justin.jpg',
    bio: 'Justin Horine is a CrossFit coach at CrossFit Southie. He has been doing CrossFit for a little over two years and began his CrossFit journey at CrossFit Ironspider in Salem while finishing grad school at Endicott College.\n\nHe played Division III lacrosse at Endicott College and was a 4-year varsity athlete and captain.',
    certifications: ['CrossFit Level 1'],
    achievements: ['Passed CrossFit Level 1 in September', 'Started coaching at CrossFit Southie in December']
  },
  {
    name: 'Will Homsy',
    slug: 'will-homsy',
    role: 'Coach',
    image: '/imgs/will.png',
    bio: 'Will Homsy has been involved in CrossFit for 10 years and has been coaching for about 8.5 years. He teaches Tuesday morning classes at 6am and 7am.\n\nHe played multiple sports growing up but focused on Football and Baseball during high school. Notably, he broke his back playing football, and CrossFit became his rehabilitation method - it strengthened his back and core enough to live pain-free.',
    certifications: ['CrossFit Level 1', 'CrossFit Level 2'],
    achievements: ['10 years of CrossFit experience', '8.5 years of coaching experience', 'Focuses on community connection and patience for new athletes']
  },
  {
    name: 'Bobby Kasmire',
    slug: 'bobby-kasmire',
    role: 'Coach',
    image: '/imgs/bobby.png',
    bio: 'Which classes do you currently coach?\n\nTuesdays 7pm\n\nHow many years have you been doing CrossFit?\n\nI Started Crossfit in August of 2018!\n\nWhat\'s your favorite part of being a CrossFit coach?\n\nThe human connection without a doubt. Through coaching Crossfit, I\'ve been extremely fortunate to have crossed paths with so many incredible people, including some I can now call lifelong friends!\n\nFavorite WOD and favorite movement?\n\nI don\'t necessarily have a favorite WOD, but any WOD that has the assault bike in it, I love (crazy, I know). Otherwise, my favorite movements would have to be Hang Power Cleans and Double Unders!\n\nAthletic/sports background?\n\nI played basketball throughout high school, and this past year I decided to get into running, and just recently completed my first marathon!\n\nOne piece of advice for newbies and one for veteran athletes?\n\nI\'d challenge anyone regardless of experience to try to come into class without looking at what the WOD is beforehand, even if it\'s only one time a week. There have been so many times where if a WOD had a movement I wasn\'t particularly good at, I\'d feel intimidated and wouldn\'t show up to the gym. Showing up without knowing the WOD forced me to work on the movements I wasn\'t great at, and I realized it wasn\'t as scary as I thought!\n\nFun fact most people don\'t know about you?\n\nIn 2020 as a Sophomore in College, I started a Tiktok account and was lucky enough to have grown my account to over 300,000 followers! Drop a follow if you\'re interested hahaha- @bobbykazz\n\nWhat do you love about the CrossFit community in general and our gym\'s community specifically?\n\nThis has been the case with most boxes I\'ve been to, but specifically for CFS, how welcoming everyone has been! So many members took the initiative to walk up and introduce themselves when they recognized I was new to the gym. It\'s felt incredibly effortless to feel involved in the community and I think that\'s amazing.',
    certifications: ['CF-L1', 'Bergener Strength L-2', 'CPR First Aid/AED Instructor'],
    achievements: ['TikTok following of 300,000+', 'First marathon completed', 'Tuesdays 7pm coach']
  },
  {
    name: 'Hailey Campbell',
    slug: 'hailey-campbell',
    role: 'Coach',
    image: '/imgs/hailey.png',
    bio: 'What\'s your favorite part of being a CrossFit coach?\n\nBeing able to connect with the athletes in our community and push them to do their best in the workout and see their growth.\n\nCoaching background?\n\nI\'ve been coaching swimming for the past 7 years and am now a full time coach for the club team Mystic Swimming in Malden, along with the assistant coach of the High School team Mystic Valley Charter School.\n\nFavorite movements?\n\nDefinitely the bike and wall balls. Both are super challenging but I love to feel the burn and push through it!\n\nAthletic background?\n\nQuinnipiac University - D1 Women\'s Lacrosse, and Bryant University - D1 Women\'s Swimming.\n\nFun fact?\n\nI have the same initials as my Dad!\n\nAdvice for newbies and veteran athletes?\n\nDon\'t ever be afraid or ashamed to scale. It is totally okay to do whatever feels best for you on the day. You just showing up at the gym is already making you better!\n\nWhat do you enjoy about the community?\n\nEveryone is so nice and supportive. You always have someone to push you no matter what class you take.',
    certifications: ['Swimming Coach'],
    achievements: ['D1 Women\'s Lacrosse - Quinnipiac University', 'D1 Women\'s Swimming - Bryant University', '7 years swimming coaching experience']
  },
  {
    name: 'Luke Curtin',
    slug: 'luke-curtin',
    role: 'Coach',
    image: '/imgs/luke.png',
    bio: 'Background\n\nI recently graduated from Skidmore College with a Bachelor of Science in Management and Business, along with a minor in Entrepreneurship, where I was also a member of the Varsity Lacrosse team. I got into CrossFit while working under Head Strength Coach Matt Chatham, who introduced me to FITERNITY Gym in Cohoes, New York. FITERNITY is an incredible gym with high-level athletes and coaches who genuinely care about your fitness and overall well-being. The training environment was competitive but welcoming, and the coaches were fully invested in helping everyone improve.\n\nThat same summer, while interning in Boston, two CrossFit Southie members — Will Hutchinson and Sarah Olick-Sutphen, who were friends of my brother—encouraged me to drop in for a class. I took their advice, and after just one visit, I knew it was a place I wanted to be a part of.\n\nCoaching Experience\n\nAt Skidmore, I coached hundreds of varsity athletes as an assistant strength and conditioning coach and helped create the college\'s first CrossFit-style WOD Club. As the head of this club, I posted daily workouts, hosted weekly mobility sessions for varsity athletes, and ran coaching clinics to help athletes develop new skills and movements.\n\nClasses I currently coach?\n\nTuesday at 7PM\n\nYears as a CrossFitter?\n\n2 years\n\nMy favorite part of being a CrossFit coach?\n\nMy favorite part of being a CrossFit coach is watching athletes achieve goals they once thought were out of reach. There\'s nothing more rewarding than helping someone turn a weakness into a strength—seeing that moment when hard work pays off, and they realize they\'re capable of more than they ever believed.\n\nFavorite WODs:\n\nOMAR - I love burpees and have a love-hate relationship with thrusters, which makes Omar a perfect mix.\n\nDT – DT is just mentally tough. I love barbell workouts, and this one really builds mental toughness when you\'re under fatigue.\n\nFavorite Movements:\n\nBurpees - Burpees are my favorite movement. All you have to do is stand up. It\'s the ultimate test of body control and grit — you just have to keep getting up.\n\nAthletic background:\n\nBelmont Hill School – Football, Lacrosse, Wrestling\n\nSkidmore College - Lacrosse: Face-off specialist for Skidmore College Men\'s Lacrosse.\n\nAdvice for Newbies:\n\nAsk questions and stay curious — the more you learn from experienced athletes and coaches, the faster you\'ll grow. No one starts perfect, but effort and humility go a long way.\n\nAdvice for Veterans:\n\nNever stop working on your weaknesses. There\'s always something to improve — mobility, mindset, or a specific skill.\n\nFun Fact:\n\nI once hit a hole-in-one playing golf.\n\nWhat I enjoy about the CFS Community:\n\nWhat I enjoy most about the CFS community is how supportive and close-knit it is. Whether you\'re chasing a PR or just trying to get through a tough workout, there\'s always someone cheering you on. It really does feel like a family. No matter where you are in your fitness journey, you always feel like you belong.',
    certifications: ['CrossFit Level 1 (CF-L1)', 'CrossFit Programming Course', 'CrossFit Anatomy Course', 'CrossFit Judges Course', 'CPR & AED Certification'],
    achievements: ['Competed in the last two CrossFit Opens', 'Competed in CrossFit Community Cup Pro Division 2025', 'Skidmore College WOD Club Founder', 'Face-off specialist - Skidmore Men\'s Lacrosse', 'Hole-in-one golfer']
  },
  {
    name: 'Ryan Clark',
    slug: 'ryan-clark',
    role: 'Coach',
    image: '/imgs/ryan.png',
    bio: 'Classes I currently coach?\n\nRight now just Friday mornings (5am and 6am) but would love to pick up more classes in the future to get to know all the afternoon/later morning members!\n\nYears as a Crossfitter?\n\nAbout 4.5 years! Came from a college swimming background from Boston University.\n\nYour favorite part of being a CrossFit coach?\n\nI love supporting other people especially those with fitness goals and aspirations. I really enjoy seeing people succeed and being able to guide and coach people through CrossFit warms my heart and makes me so incredibly happy.\n\nFavorite WODs?\n\nProbably "Jackie" or "Cindy"! Jackie because it\'s a fast gritty workout with rowing and barbell only thrusters (who can hate on a 45 or 35# thruster?) and Cindy because it\'s a very good workout that I use to test how well my bodyweight and gymnastics strength has progressed throughout time!\n\nFavorite Movements?\n\nMy favorite movement would either have to be a power clean or any movement with a singular dumbbell.\n\nAthletic background?\n\nI grew up in elementary and middle school playing all your typical "ball" sports, but then really honed in on swimming during high school and was accepted to swim division 1 out here at BU! Loved my time there (even though it was incredibly challenging physically and mentally) and would do it all over again if I had the chance.\n\nAdvice for Newbies:\n\nHave fun with it. It can be easy to get caught up in the competitiveness and grit of the workouts (myself heavily included) but at the end of the day we\'re all there to just become better versions of ourselves. If it\'s not fun to you, why do it? It\'s easy to compare yourself to others but it\'s more important to realize that everyone is on a different path that is uniquely different from yourself, and that\'s ok!\n\nAdvice for Veterans:\n\nAlways try to learn something new or take away something positive from that day. We\'re all constantly becoming better versions of ourselves and being able to learn something new and remain positive day in and out will keep you coming back for more!\n\nFun Fact:\n\nMy normal full-time job is being an EMT! My goal is to become a physician assistant but right now I\'m just racking up experience to add to my resume. I\'m starting paramedic school in May!\n\nWhat I enjoy about the CFS Community:\n\nI love how supportive everyone is towards other members and friends. It makes me so happy seeing new members (and long lasting members) make friends, hit PRs, and just prove to themselves that they are able to do hard things! Everyone here wants to see you succeed and be happy and nothing gets me happier than being in that kind of environment. You can always learn something new here, whether you\'re new or have been here awhile (including me too!) and CFS is a great environment to really challenge you body physically and mentally!',
    certifications: ['CrossFit Level 1 (CF-L1)'],
    achievements: ['D1 Swimming - Boston University', 'EMT', 'Starting Paramedic School in May', 'Friday morning coach (5am & 6am)']
  },
  {
    name: 'Shannon Scafuri',
    slug: 'shannon-scafuri',
    role: 'Coach',
    image: '/imgs/shannon.png',
    bio: "Background\n\nI have been coaching fitness classes most of my adult life. In college, I taught Spin classes at a local community center and immediately loved the vibe of leading a class. In 2016, I started my own HIIT class called Sweat with Shan and trained both corporate and personal training clients. From 2019-2022 I was a Strength & Conditioning Coach at another local gym, before coming over to CFS. I am passionate about making CrossFit and general fitness accessible to everyone and I truly believe the benefits of exercise pay dividends both mentally and physically!\n\nCertifications\n\nB.S. Exercise Science, CF L-1, Certified Functional Strength Coach, TRX Instructor Certification\n\nClasses I currently coach?\n\nI coach Wednesday at 8:00am and cover wherever is needed during the week!\n\nYears as a Crossfitter?\n\nI started CrossFit almost 3 years ago in the spring of 2022.\n\nYour favorite part of being a CrossFit coach?\n\nWelcoming new people in is definitely a highlight and seeing members progress and get more confident in themselves.\n\nFavorite WOD and Movement?\n\nI love Wes, it's a good long grind. In that same vein, I am a big fan of strict pull-ups and love some pistols!\n\nAthletic background?\n\nI played tennis, lacrosse and ran cross country and track growing up.\n\nAdvice for Newbies and Veterans:\n\nStrength is a privilege. Most people will never take advantage or have access to what we do each day at CFS. Try to appreciate all that your body does for you!\n\nFun Fact:\n\nThere are freckles in my eyes.\n\nWhat I enjoy about the CFS Community:\n\nIt's the people in the CFS community that help me show up each day! Through the ups and downs of life, I really enjoy having familiar faces and having so many wonderful friends to workout with at CFS.\n\nWhat do you do for work?\n\nI'm the Executive Assistant to the Chief HR Officer and the Chief Financial Officer at Beam Therapeutics in Cambridge.\n\nHobbies?\n\nI love to hike, do some Yoga and thrift all of my cool oversized tees.",
    certifications: ['B.S. Exercise Science', 'CF L-1', 'Certified Functional Strength Coach', 'TRX Instructor Certification'],
    achievements: ['Former Strength & Conditioning Coach 2019-2022', 'Founder of Sweat with Shan HIIT class', 'Wednesday 8am coach', 'Started CrossFit spring 2022']
  },
  {
    name: 'Dave Mcgrath',
    slug: 'dave-mcgrath',
    role: 'Coach',
    image: '/imgs/dave.png',
    bio: "Background\n\nI began my CrossFit journey in mid-2021 after joining a group of friends who had been training at Southie for a few years and couldn't stop raving about their experiences. With a background in general fitness and running but no prior CrossFit experience, I dove in. After several years of consistent attendance, extra dedication, and invaluable coaching tips, I'm excited to see my progress and, surprisingly, to find myself coaching others.\n\nCrossFit has been an incredible experience for me. I thrive on the high-intensity workouts and love not having to plan my sessions. Whenever I travel, I make it a point to explore gyms across the country and beyond, from Portugal to Israel to Mexico.\n\nClasses I currently coach?\n\nWednesday 5am and 6am\n\nYears as a Crossfitter?\n\n3 years\n\nYour favorite part of being a CrossFit coach?\n\nHelping people improve their fitness and find the push to get better or work harder.\n\nFavorite WOD and Movement?\n\nI like longer workouts given my endurance background. One of my favorites is the Dry Tri.\n\nThere's nothing cooler than handstand walking. I never thought I'd be able to when I first started but after chipping away it a few times a week for months, I finally acquired the skill.\n\nAthletic background?\n\nI played a lot of Squash in high school and college. Towards the end of my college career I started long distance running. I'm also an avid golfer.\n\nAdvice for Newbies and Veterans:\n\nDon't be afraid to ask others for help. Any time I've ever asked another athlete for a tip they've always shared their time and knowledge. You never know what might click and make the difference.\n\nWhat I enjoy about the CFS Community:\n\nEveryone is so friendly and supportive. It really is a community in the truest sense.",
    certifications: [],
    achievements: ['Wednesday 5am & 6am coach', '3 years of CrossFit experience', 'Handstand walking']
  },
  {
    name: 'Elim Thomas',
    slug: 'elim-thomas',
    role: 'Coach',
    image: '/imgs/elim.png',
    bio: "Classes I currently coach?\n\nFriday 11am, 12pm, 4pm, 5pm, 6pm\n\nHow many years have you been a Crossfitter?\n\nI started CrossFit in 2018 and started coaching in 2019\n\nYour favorite part of being a CrossFit coach?\n\nHelping people learn to do something they thought they couldn't do. That smile on an athlete face when they get their first T2B, pull up, muscle up or PR a lift.\n\nFavorite WOD and Movement?\n\nWorkouts with low volume bar muscle ups. Bar muscle ups because of the long and arduous journey it took to get my first one.\n\nAthletic and fitness background?\n\nHighschool: Soccer, Track, CrossCountry, Field Hockey, Cricket, and Basketball.\nCollege: Soccer\n\nSmall piece of advice for Newbies and/or Veteran athletes?\n\nShow up on the days you don't want to show up.\n\nFun Fact, most people don't know about you?\n\nI can put on different accents when I talk. Mainly, British, Indian, Nigerian, Irish and a southern.\n\nWhat do you enjoy about the CrossFit Community and the CFS community?\n\nHow welcoming it is, when traveling I always like dropping into a new gym and each community is unique but similar. The CFS community is the most driven community I've been a part of and coached in, I feel pushed to better myself each day, plus the programming is the best I've encountered.\n\nEducation/Experience?\n\nCrossFit L1\nStudied Kinesiology at Gordon College\nLifeguard\nCPR/AED",
    certifications: ['CrossFit Level 1', 'Studied Kinesiology at Gordon College', 'Lifeguard', 'CPR/AED'],
    achievements: ['Coaching since 2019', 'Friday 11am, 12pm, 4pm, 5pm, 6pm coach']
  },
  {
    name: 'Carly Stote',
    slug: 'carly-stote',
    role: 'Physical Therapist',
    image: '/imgs/carly.png',
    bio: "Our favorite PT, Carly Stote, has launched her own practice right here inside CrossFit Southie! We're incredibly proud of Carly and excited for her next chapter.\n\nHer new practice is called Strength and Sports Physical Therapy & Recovery Center, and she will continue to see patients in the PT room conveniently located in the back of the gym.\n\nWhat to expect:\n\nPersonalized, one-on-one physical therapy focused on relieving pain, restoring movement, and getting you back to the activities and sports you love. Carly creates customized, goal-oriented exercise plans tailored to your specific needs.\n\nTreatments include hands-on manual therapy techniques such as:\n\nDry needling, Graston, cupping, soft tissue massage, active release techniques, and joint mobilizations to reduce pain, boost mobility, and optimize how your body moves and performs.\n\nThe practice accepts most insurances, and also offers cash-based services plus bodywork recovery options.\n\nIf you're dealing with an injury, want to improve performance, or just need some expert recovery support, reach out to Carly!",
    certifications: ['Doctor of Physical Therapy (DPT)', 'Dry Needling', 'Graston Technique', 'Active Release Techniques (ART)', 'Joint Mobilizations'],
    achievements: [],
    isPT: true,
    contactInfo: {
      scheduleUrl: 'https://www.myclinicportal.com/?mcp=0732b5d89h0qqm9ip0&g=1',
      website: 'https://www.strengthandsportsptboston.com',
      email: 'carlystote@strengthandsportspt.com',
      instagram: 'https://www.instagram.com/carlystote_dpt',
      fax: '(617) 533-3834',
      reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJjanyWVl744kRlax06vxR3R8&source=g.page.m.kd._&laa=lu-desktop-review-solicitation'
    }
  },
  {
    name: 'Jake Medina',
    slug: 'jake-medina',
    role: 'Coach',
    image: '/imgs/jake.png',
    bio: "Which classes do you currently coach?\n\nMonday 6am!\n\nHow many years have you been a Crossfitter?\n\nAbout 7 years, I think I went to an intro class sometime in 2019.\n\nYour favorite part of being a CrossFit coach?\n\nI enjoy being able to share tips or advice that I've learned over the years that might help other athletes improve.\n\nYour Favorite WOD and Movement?\n\nNot sure about an exact WOD, but anything with heavy power cleans and toes to bar are my go to. Favorite movement is probably the snatch.\n\nAthletic and fitness background?\n\nI wrestled in high school and then did mostly bodybuilding workouts.\n\nSmall piece of advice for Newbies and/or Veteran athletes?\n\nThere will always be something to improve on, but enjoy the process and it will click eventually.\n\nFun Fact, most people don't know about you?\n\nI'm from a large family, I'm the 4th out of 10.\n\nWhat do you enjoy about the CrossFit Community and the CFS community?\n\nCFS has always been a welcoming and friendly environment, people always show up to work hard.",
    certifications: [],
    achievements: ['Monday 6am coach', '7 years of CrossFit experience']
  }
]

const Coaches = () => (
  <section className="py-12 px-6 md:px-8" style={{ backgroundColor: '#0c1322' }}>
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>OUR TEAM</h2>
        <p className="text-lg" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>Professional, educated, and dedicated to helping you achieve your goals</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {coaches.map((coach) => (
          <Link key={coach.name} to={`/coaches/${coach.slug}`} className="group block text-left">
            <div className="w-full aspect-square mx-auto mb-3 sm:mb-4 overflow-hidden rounded-lg" style={{ backgroundColor: '#232a3a' }}>
              {coach.image ? (
                <img src={coach.image} alt={coach.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white">
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{coach.name}</h3>
            <p className="font-bold text-xs sm:text-sm uppercase tracking-wider mt-1 text-center" style={{ color: '#dc2626' }}>{coach.role}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

// Schedule CTA Section with grid pattern
const ScheduleCTA = () => (
  <section className="relative py-16 px-8 overflow-hidden" style={{ backgroundColor: '#dc2626' }}>
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="border-r border-b border-white" style={{ borderColor: 'white' }} />
        ))}
      </div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        READY TO GET STARTED?
      </h2>
      <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
        Come experience the intensity and meet the community. With 10+ classes per day and flexible membership options, there's never been a better time to join. No cancellation fees and no long term commitments. Drop-ins welcome.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a
          href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
          className="px-12 py-6 text-2xl font-black uppercase tracking-tighter shadow-xl hover:scale-105 transition-all"
          style={{ backgroundColor: 'white', color: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Try a Free Class
        </a>
        <a
          href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm"
          className="px-12 py-6 text-2xl font-black uppercase tracking-tighter border-2 text-white hover:bg-white/10 transition-all"
          style={{ borderColor: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          View Schedule
        </a>
      </div>
    </div>
  </section>
)

// Location Section
const Location = () => (
  <section className="py-32 px-8" style={{ backgroundColor: '#0c1322' }}>
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            FIND US
          </h2>
          <div className="space-y-4 text-lg" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
            <p className="text-lg">
              <strong className="text-white">Address:</strong><br />
              383 Dorchester Ave Front<br />
              Boston, MA 02127
            </p>
            <p className="text-lg">
              <strong className="text-white">Facility:</strong><br />
              10,000 square feet with 24-hour access available
            </p>
            <p className="text-lg">
              <strong className="text-white">Contact:</strong><br />
              <a href="tel:617-780-9769" className="hover:text-red-500 transition-colors" style={{ color: '#dc2626' }}>Phone: 617-780-9769</a><br />
              <a href="mailto:info@crossfitsouthie.com" className="hover:text-red-500 transition-colors" style={{ color: '#dc2626' }}>Email: info@crossfitsouthie.com</a>
            </p>
            <p className="text-lg">
              <strong className="text-white">Hours:</strong><br />
              Monday - Thursday: 5:00am - 8:00pm<br />
              Friday: 5:00am - 7:00pm<br />
              Saturday: 7:00am - 1:00pm<br />
              Sunday: 9:00am - 12:00pm
            </p>
          </div>
        </div>
        <div className="bg-gray-200 aspect-video flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#232a3a' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10909.146600308768!2d-71.0684605805648!3d42.33547551950219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a670d8f7ec5%3A0xd432a03a504831de!2sCrossFit%20Southie!5e1!3m2!1sen!2sus!4v1771955541380!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CrossFit Southie Location"
          />
        </div>
      </div>
    </div>
  </section>
)

// Footer with old site style
const Footer = () => (
  <footer style={{ backgroundColor: '#141b2b' }}>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
        {/* Brand Section */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-black text-white uppercase mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            CROSSFIT SOUTHIE
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(220, 226, 247, 0.7)' }}>
            Redefining human performance through gritty, practical, and community-driven strength training in South Boston.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#programs" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Programs</a></li>
            <li><a href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Schedule</a></li>
            <li><a href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Free Trial</a></li>
          </ul>
        </div>

        {/* Our Family */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Family</h4>
          <ul className="space-y-3">
            <li><a href="https://strivefitnessandperformance.com/strive-duxbury" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Strive Duxbury</a></li>
            <li><a href="https://strivefitnessandperformance.com/strive-norwell" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Strive Norwell</a></li>
            <li><a href="https://strivefitnessandperformance.com/studio" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>Strive Studio</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact</h4>
          <ul className="space-y-3">
            <li><a href="tel:617-780-9769" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>617-780-9769</a></li>
            <li><a href="mailto:info@crossfitsouthie.com" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>info@crossfitsouthie.com</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Follow Us</h4>
          <ul className="space-y-3">
            <li><a href="https://instagram.com/crossfitsouthie" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>@crossfitsouthie</a></li>
            <li><a href="https://instagram.com/striveboston" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-all" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>@striveboston</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t px-6 md:px-12 py-6" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs tracking-wider" style={{ color: 'rgba(220, 226, 247, 0.5)' }}>
          © {new Date().getFullYear()} CrossFit Southie - All rights reserved. Part of Strive Fitness & Performance.
        </p>
        <a
          href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
          className="px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all text-white"
          style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Join Now
        </a>
      </div>
    </div>
  </footer>
)

// Navigation with logo
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(12, 19, 34, 0.6)' }}>
      <div className="flex justify-between items-center w-full px-8 py-3">
        <Link to="/" className="flex items-center">
          <img src="/imgs/logo.png" alt="CrossFit Southie" className="h-12 md:h-16 w-auto" style={{ opacity: 0.85 }} />
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <div className="relative">
            <button
              className="font-bold uppercase tracking-tighter text-white hover:text-red-500 transition-colors duration-300 flex items-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              Programs
            </button>
            {programsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 py-2 rounded shadow-lg" style={{ backgroundColor: '#191f2f' }}>
                {programs.map((program) => (
                  <Link
                    key={program.slug}
                    to={`/programs/${program.slug}`}
                    className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                    onClick={() => setProgramsOpen(false)}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm" className="font-bold uppercase tracking-tighter text-white hover:text-red-500 transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Schedule</a>
          <div className="relative">
            <button
              className="font-bold uppercase tracking-tighter text-white hover:text-red-500 transition-colors duration-300 flex items-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setInfoOpen(!infoOpen)}
            >
              Info
            </button>
            {infoOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 py-2 rounded shadow-lg" style={{ backgroundColor: '#191f2f' }}>
                <Link
                  to="/team"
                  className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                  onClick={() => setInfoOpen(false)}
                >
                  Our Team
                </Link>
                <Link
                  to="/pricing"
                  className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                  onClick={() => setInfoOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-white hover:bg-gray-800 text-sm font-bold uppercase"
                  onClick={() => setInfoOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
          <a
            href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
            className="px-6 py-2 font-bold uppercase tracking-tighter scale-95 active:scale-90 transition-transform text-white"
            style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Free Trial
          </a>
        </div>
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-8" style={{ backgroundColor: 'rgba(12, 19, 34, 0.95)' }}>
          <div className="flex flex-col space-y-4">
            <button
              className="font-bold uppercase tracking-tighter text-white text-left"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              Programs ▾
            </button>
            {programsOpen && (
              <div className="pl-4 space-y-2 border-l border-gray-700">
                {programs.map((program) => (
                  <Link
                    key={program.slug}
                    to={`/programs/${program.slug}`}
                    className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase"
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            )}
            <a href="https://crossfitsouthie.sites.zenplanner.com/calendar.cfm" className="font-bold uppercase tracking-tighter text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Schedule</a>
            <button
              className="font-bold uppercase tracking-tighter text-white text-left"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setInfoOpen(!infoOpen)}
            >
              Info ▾
            </button>
            {infoOpen && (
              <div className="pl-4 space-y-2 border-l border-gray-700">
                <Link to="/team" className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase">Our Team</Link>
                <Link to="/pricing" className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase">Pricing</Link>
                <Link to="/contact" className="block text-white hover:text-gray-300 transition-colors text-sm font-bold uppercase">Contact Us</Link>
              </div>
            )}
            <a
              href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
              className="px-6 py-2 font-bold uppercase tracking-tighter text-center text-white w-fit"
              style={{ backgroundColor: '#dc2626', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

// Pricing Page
const PricingPage = () => {
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
        'Nutrition guidance'
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
        'Build confidence'
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
            All memberships are monthly, do not require a long term commitment and can be cancelled at any time.
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
      <Footer />
    </div>
  )
}

// Team Page
const TeamPage = () => (
  <div className="font-sans pt-20">
    <Navigation />
    <Coaches />
    <Footer />
  </div>
)

// Coach Detail Page
const CoachDetail = () => {
  const { slug } = useParams()
  const coach = coaches.find(c => c.slug === slug)

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [slug])

  if (!coach) {
    return (
      <div className="font-sans pt-20">
        <Navigation />
        <div className="py-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-white">Coach Not Found</h1>
          <Link to="/" className="hover:underline mt-4 inline-block" style={{ color: '#dc2626' }}>Return Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="font-sans pt-20">
      <Navigation />
      <section className="py-20 px-4" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center mb-8 transition-colors" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="w-40 h-40 mx-auto mb-8 rounded-lg overflow-hidden" style={{ backgroundColor: '#232a3a' }}>
            {coach.image ? (
              <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white">
                {coach.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {coach.name}
          </h1>
          <p className="text-xl mb-6" style={{ color: '#dc2626' }}>{coach.role}</p>
          <div className="max-w-2xl mx-auto text-left">
            {coach.bio.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-lg leading-relaxed mb-4" style={{ color: 'rgba(220, 226, 247, 0.8)' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ backgroundColor: '#141b2b' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Certifications</h3>
              <ul className="space-y-2">
                {coach.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: '#dc2626' }} />
                    <span style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            {coach.achievements && coach.achievements.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Achievements</h3>
                <ul className="space-y-2">
                  {coach.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" style={{ color: '#dc2626' }} />
                      <span style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      {coach.isPT && coach.contactInfo && (
        <section className="py-16 px-4" style={{ backgroundColor: '#0c1322' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CONTACT Carly</h3>
            <div className="grid gap-4">
              <a
                href={coach.contactInfo.scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#dc2626', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                SCHEDULE APPOINTMENT
              </a>
              <a
                href={coach.contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                VISIT WEBSITE
              </a>
              <a
                href={`mailto:${coach.contactInfo.email}`}
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                EMAIL Carly
              </a>
              <a
                href={coach.contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                FOLLOW ON INSTAGRAM
              </a>
              <a
                href={coach.contactInfo.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-6 text-center font-bold uppercase tracking-wide rounded-lg border-2 transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                LEAVE A GOOGLE REVIEW
              </a>
            </div>
            <p className="text-center mt-6 text-sm" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
              Fax: {coach.contactInfo.fax}
            </p>
          </div>
        </section>
      )}
      <section className="py-16 px-4" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MEET THE REST OF OUR TEAM</h3>
          <p className="mb-6" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            Get to know our other coaches who are dedicated to helping you achieve your fitness goals.
          </p>
          <Link
            to="/team"
            className="inline-block px-8 py-4 font-bold tracking-wide transition-colors text-white"
            style={{ backgroundColor: '#dc2626' }}
          >
            VIEW ALL COACHES
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

// Program Detail Page
const ProgramDetail = () => {
  const { slug } = useParams()
  const program = programs.find(p => p.slug === slug)

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [slug])

  if (!program) {
    return (
      <div className="font-sans pt-20">
        <Navigation />
        <div className="py-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-white">Program Not Found</h1>
          <Link to="/" className="hover:underline mt-4 inline-block" style={{ color: '#dc2626' }}>Return Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="font-sans pt-20">
      <Navigation />
      <section className="py-20 px-4" style={{ backgroundColor: '#0c1322' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center mb-8 transition-colors" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="aspect-video overflow-hidden rounded-lg mb-8 max-w-3xl mx-auto">
            <img
              src={program.image}
              alt={program.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {program.name}
          </h1>
          <div className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {program.fullDescription.split('\n\n').map((section, idx) => (
              <div key={idx} className="mb-6">
                {section.split('\n').map((line, lineIdx) => (
                  lineIdx === 0 ? (
                    <p key={lineIdx} className="font-bold mb-2 text-white">{line}</p>
                  ) : (
                    <p key={lineIdx} style={{ color: 'rgba(220, 226, 247, 0.8)' }}>{line}</p>
                  )
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://crossfitsouthie.sites.zenplanner.com/freeTrial.cfm"
              className="px-8 py-4 font-bold tracking-wide transition-colors text-center text-white"
              style={{ backgroundColor: '#dc2626' }}
            >
              TRY A FREE CLASS
            </a>
            <a
              href="https://crossfitsouthie.sites.zenplanner.com/sign-up-now.cfm"
              className="px-8 py-4 border-2 font-bold tracking-wide transition-all text-center text-white"
              style={{ borderColor: 'white' }}
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ backgroundColor: '#141b2b' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>HAVE QUESTIONS?</h3>
          <p className="mb-6" style={{ color: 'rgba(220, 226, 247, 0.6)' }}>
            Our team is here to help you find the perfect program for your goals.
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
      <Footer />
    </div>
  )
}

// Contact Page
const ContactPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, 0)
  }, [])

  return (
    <div className="font-sans pt-20">
      <Navigation />
      <Location />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div className="font-sans" style={{ backgroundColor: '#0c1322' }}>
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <Hero />
            <About />
            <Programs />
            <Community />
            <Coaches />
            <ScheduleCTA />
            <Location />
            <Footer />
          </>
        } />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/coaches/:slug" element={<CoachDetail />} />
        <Route path="/programs/:slug" element={<ProgramDetail />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
