export type ProgramAction = { label: string; href: string }

export type ProgramSection = { heading: string; text: string; link?: { label: string; href: string } }

export type Program = {
  name: string
  slug: string
  parent?: string
  shortDescription: string
  fullDescription: string
  image: string
  imagePosition?: string
  isFlagship?: boolean
  // Replaces the free class and join buttons
  actions?: ProgramAction[]
  // Replaces the standard "... in South Boston" search listing text
  seoDescription?: string
  // Longer page content shown under the buttons
  sections?: ProgramSection[]
  faqs?: { q: string; a: string }[]
}

export const programs: Program[] = [
  {
    name: 'CrossFit',
    slug: 'crossfit',
    shortDescription: 'Constant variety, functional movements, high intensity. Our core methodology for total fitness.',
    fullDescription: 'CrossFit is a general physical preparedness program designed to help tackle any fitness or life task. The program is completely scalable and accessible to anyone willing to put their ego aside. CrossFit utilizes compound movements through body-weight, weightlifting, and conditioning elements at varying lengths of duration and intensity. The result is a fully capable and efficient athlete ready to take on any task life or athletics throws at it. Whether you are looking to lose weight, build muscle, improve athletic performance, or simply feel better, CrossFit has something for everyone.\n\nScalability\n\nCrossFit utilizes bodyweight movements (pull-ups, push-ups, sit-ups, box jumps, rope climbs, etc.), weightlifting (kettlebells, barbells, medicine balls, sandbags, etc.), and conditioning (running, rowing, jump roping and biking) in different combinations, rep schemes and time domains. CrossFit is completely scalable. For rope climbs we start from the ground with a pull to stand option. From there, we have a knotted rope, then we teach you how to use your feet and ascend the rope. Finally, we have 10ft, 15ft, 20ft and 25ft ropes. All our weightlifting movements are taught with a PVC pipe and athletes progress to either a 15, 33 or 45lb bar. All of our bumper plates are similar in size and look alike but differ in weight. The scalability of CrossFit makes it the best fitness program regardless of your current level of fitness.\n\nThe Ten Fitness Domains\n\nCrossFit is a core strength and conditioning program designed to optimize physical competence in each of ten recognized fitness domains. The fitness domains include Cardiovascular and Respiratory endurance, Stamina, Strength, Flexibility, Power, Speed, Coordination, Agility, Balance, and Accuracy. Our training employs constantly varied, functional movement executed at a high level of intensity. By constantly varying the workouts your body is left guessing, requiring it to regularly adapt to the training stimulus.\n\nHow Will This Be Beneficial To Me?\n\nThe sessions remain physically and mentally challenging and more importantly, your progress will remain plateau free. Functional movements are essential, everyday movements that are done in real life. Standing from a seated position, safely picking something up off the ground, and putting an object up over your head are all examples of functional movements. These movements move large loads, long distances in a short amount of time, and promote lean muscle gain and a reduction of body fat.\n\nFinally, the high intensity component is the shortcut to quick results. All the good stuff in fitness comes through intensity. Our workouts are scaled so that each individual is able to train at their own high intensity no matter what their current fitness level. With that saying, we train hard.\n\nOur athletes are trained to bike, run, swim, and row at short, middle, and long distances guaranteeing exposure and competency in each of the three main metabolic pathways. We incorporate gymnastics, from rudimentary to advanced movements, garnering great capacity at controlling the body both dynamically and statically while maximizing strength to weight ratio and flexibility. Kettlebells, Olympic weightlifting, and powerlifting are also used to develop an athlete\'s explosive power, control of external objects, and mastery of critical motor recruitment patterns.\n\nWith all these training tools, we produce a well rounded athlete that excels at all aspects of fitness. We produce an athlete that is able to control both their own body in space, as well as the objects in space around their body in short energy tasks, long energy tasks and all those in between. Our specialty is not specializing. We\'ll prepare you for any fitness task that is thrown your way.\n\nAn Effective Approach\n\nIn gyms and health clubs throughout the world the typical workout consists of isolation movements and extended aerobic sessions. The fitness community has the public believing that lateral raises, curls, combined with 20 minutes on the treadmill are going to lead to some kind of great fitness. Well, at CrossFit we work exclusively with compound movements and shorter high intensity cardiovascular sessions. We\'ve replaced the lateral raise with the push press, the curl with pull-ups, and the leg extension with squats.\n\nWhy? Because compound, functional movements and high intensity, anaerobic cardio, is radically effective at eliciting nearly any desired fitness result. Startlingly, this is not a matter of opinion but solid irrefutable scientific fact. Our practices are consistent with elite training programs. CrossFit endeavors to bring state-of-the-art coaching techniques to the general public and athletes who do not have access to current technologies, research, and coaching methods.\n\nIs This For Me?\n\nThe CrossFit program is designed for universal scalability making it the perfect application for any committed individual regardless of experience. Your needs and the Olympic athlete\'s differ by degree not kind. The same methods that yield great success in an Olympic or professional athlete will show true in the elderly. The idea is to scale load and intensity; not to change programs. You won\'t have to lift weights beyond your level or perform movements beyond your skill set.\n\nWe pride ourselves on working with athletes of all different types and ability levels and making them better. Furthermore, our target population is not specific to age or gender. Instead, we are targeting anyone who is willing to work hard and keep an open mind to CrossFit principles. Of course, we can\'t load your grandmother with the same squatting weight that we\'d assign an Olympic skier, but they both need to squat.\n\nIn fact, squatting is essential to maintaining functional independence and improving fitness. Through thorough coaching and incremental load assignment, CrossFit has been able to teach anyone to perform with maximum efficacy. We can surpass the same movements typically utilized by professional coaches in elite and certainly exclusive environments.\n\nWhat If I Don\'t Want To Be An Athlete? I Just Want To Be Healthy.\n\nThe CrossFit view is that fitness and health are the same thing. Fitness, wellness, and pathology (sickness) are measures of the same entity, your health. There are a multitude of measurable parameters that can be ordered from sick (pathological) to well (normal) to fit (better than normal). These include but are not limited to blood pressure, cholesterol, heart rate, body fat, muscle mass, flexibility, and strength. Athletes typically prove to possess exceptional body functionality in areas that could go awry. Athletes experience a protection from the ravages of aging and disease that non-athletes never find.\n\nFor instance, 80-year-old athletes are stronger than non-athletes in their prime at 25 years old. If you think that strength isn\'t important consider that strength loss is what puts people in nursing homes. Athletes have greater bone density, stronger immune systems, less coronary heart disease, reduced cancer risk, fewer strokes, and less depression than non-athletes.',
    image: '/imgs/crossfit.jpg',
    isFlagship: true
  },
  {
    name: 'STRIVE HYROX',
    slug: 'hyrox',
    parent: 'strive',
    shortDescription: 'The world series of fitness racing. High-volume cardio and functional strength endurance.',
    fullDescription: 'HYROX is the World Series of Fitness Racing. Train for competition with running and functional exercises combined. Ideal for athletes preparing for HYROX events. This program combines endurance running with functional fitness exercises in a race format. Whether you are looking to compete in HYROX events or simply improve your overall conditioning, this program will push you to new limits.',
    image: '/imgs/hyrox.jpg'
  },
  {
    name: 'STRIVE HIIT',
    slug: 'hiit',
    parent: 'strive',
    shortDescription: 'Our signature conditioning-focused program. Low skill, maximum effort, total sweat.',
    fullDescription: 'STRIVE HIIT is high-intensity interval training that burns calories and improves cardiovascular fitness. Perfect for those new to fitness or looking for a fast-paced, effective workout. Classes feature a variety of exercises designed to maximize calorie burn and improve overall fitness in a supportive group environment.',
    seoDescription: 'STRIVE HIIT classes at our South Boston gym. Coached, scalable interval training with no barbells. From $125 a month. Try a free class.',
    sections: [
      { heading: 'Who STRIVE HIIT is for', text: 'STRIVE HIIT suits anyone who wants a fast-paced, coached group workout at our South Boston gym, including people who are new to fitness. There are no barbells or high-skill gymnastics, and every class is completely scalable.' },
      { heading: 'What a class trains', text: 'High-intensity interval training alternates hard efforts with recovery. Classes use a variety of exercises to build cardiovascular fitness, burn calories and improve overall conditioning, with a coach leading the group.', link: { label: 'See the class schedule', href: 'https://crossfitsouthie.sites.zenplanner.com/calendar.cfm' } },
      { heading: 'HIIT class pricing', text: 'STRIVE ONLY memberships are $125 a month for 2 classes a week, $150 for 3 and $175 for unlimited. Each includes STRIVE HIIT, STRIVE Strength & Conditioning and STRIVE HYROX. CROSSFIT + STRIVE memberships, from $149 a month, include these classes too. Memberships are monthly and can be cancelled any time. STRIVE class packs are $99 for 5, $180 for 10 and $299 for 20, and a single drop-in class is $30.', link: { label: 'See all pricing', href: '/pricing' } },
      { heading: 'Visit our South Boston gym', text: 'We are at 383 Dorchester Ave Front in South Boston, with two large shared parking lots. Staffed hours are Monday to Thursday 5am to 8pm, Friday 5am to 7pm, Saturday 7am to 1pm and Sunday 9am to 12pm.', link: { label: 'Get directions', href: '/contact' } },
    ],
    faqs: [
      { q: 'Do I need to be in shape to start?', a: 'No. All levels are welcome and every class scales to you.' },
      { q: 'What happens at my first class?', a: 'Your first class is a complimentary intro session. Arrive 5 to 10 minutes early, wear workout gear and bring a water bottle.' },
      { q: 'Are there barbells in STRIVE HIIT?', a: 'No. STRIVE classes have no barbells or high-skill gymnastics.' },
    ],
    image: '/imgs/hiit.jpg'
  },
  {
    name: 'STRIVE Strength & Conditioning',
    slug: 'ssc',
    parent: 'strive',
    shortDescription: 'Building lean muscle and improving athletic performance.',
    fullDescription: 'STRIVE Strength & Conditioning is focused on building lean muscle, improving athletic performance, and enhancing overall fitness through structured strength training and conditioning. This program uses progressive overload and periodization to help you reach your strength and fitness goals.',
    seoDescription: 'Coached strength and conditioning classes at our South Boston gym. Scalable, no barbells, from $125 a month. Try a free class.',
    sections: [
      { heading: 'Who Strength & Conditioning is for', text: 'This class is for people who want structured, coached strength training in a group at our South Boston gym. There are no barbells or high-skill gymnastics, and every class is completely scalable.' },
      { heading: 'How the training works', text: 'Workouts combine strength training with conditioning. Progressive overload means the challenge builds gradually as you get stronger, and periodization organizes training into phases, so you can build lean muscle and improve athletic performance.', link: { label: 'See the class schedule', href: 'https://crossfitsouthie.sites.zenplanner.com/calendar.cfm' } },
      { heading: 'Strength class pricing', text: 'STRIVE ONLY memberships are $125 a month for 2 classes a week, $150 for 3 and $175 for unlimited. Each includes STRIVE HIIT, STRIVE Strength & Conditioning and STRIVE HYROX. CROSSFIT + STRIVE memberships, from $149 a month, include these classes too. Memberships are monthly and can be cancelled any time. STRIVE class packs are $99 for 5, $180 for 10 and $299 for 20, and a single drop-in class is $30.', link: { label: 'See all pricing', href: '/pricing' } },
      { heading: 'Visit our South Boston gym', text: 'We are at 383 Dorchester Ave Front in South Boston, with two large shared parking lots. Staffed hours are Monday to Thursday 5am to 8pm, Friday 5am to 7pm, Saturday 7am to 1pm and Sunday 9am to 12pm.', link: { label: 'Get directions', href: '/contact' } },
    ],
    faqs: [
      { q: 'Do I need strength training experience?', a: 'No. All levels are welcome and every class scales to you.' },
      { q: 'What happens at my first class?', a: 'Your first class is a complimentary intro session. Arrive 5 to 10 minutes early, wear workout gear and bring a water bottle.' },
      { q: 'Does the class use barbells?', a: 'No. STRIVE classes have no barbells or high-skill gymnastics.' },
    ],
    image: '/imgs/ssc.jpg'
  },
  {
    name: 'Fundamentals',
    slug: 'fundamentals',
    shortDescription: 'Build a foundation before joining regular classes. Learn proper movement patterns.',
    fullDescription: 'Our Fundamentals program is a CrossFit program specifically designed for beginners to build a foundation before joining regular classes. This monthly course meets every Monday and Thursday at 7pm (except holidays). It teaches proper movement patterns, builds confidence, and prepares you for group fitness classes. You will learn the basics of weightlifting, gymnastics, and conditioning in a safe and supportive environment. Ideal for those new to CrossFit or high-intensity training.',
    image: '/imgs/fundamentals.jpg'
  },
  {
    name: 'PERSONAL TRAINING',
    slug: 'personal-training',
    shortDescription: 'Individualized programming and 1-on-1 attention for specific goals and accelerated results.',
    fullDescription: 'Our Personal Training program offers one-on-one personalized coaching tailored to your specific fitness goals. Includes custom programming, nutrition guidance, and individual attention from our certified personal trainers. Whether you are looking to lose weight, build muscle, prepare for competition, or rehabilitate an injury, our trainers will create a customized plan to help you achieve your goals.',
    seoDescription: 'One-on-one personal training at our South Boston gym. Custom programming and nutrition guidance, $99 per session.',
    sections: [
      { heading: 'Who personal training is for', text: 'One-on-one coaching at our South Boston gym for beginners who want individual attention, members working on a specific skill or lift, and anyone training toward a goal such as losing weight, building muscle or preparing for a competition.' },
      { heading: "What's included", text: 'Each program is built around you, with one-on-one coaching, custom programming, nutrition guidance and individual attention from our trainers.', link: { label: 'Meet our coaches', href: '/team' } },
      { heading: 'Personal training pricing', text: 'Personal training is $99 per session.', link: { label: 'See all pricing', href: '/pricing' } },
      { heading: 'How to get started', text: 'Email info@crossfitsouthie.com and tell us your goals and the times that work for you.', link: { label: 'Email us', href: 'mailto:info@crossfitsouthie.com?subject=Personal%20Training' } },
      { heading: 'Related one-on-one services', text: 'We also offer nutrition coaching with Coach Bobby Kasmire, and physical therapy with Carly Stote, DPT, whose practice is inside our gym.', link: { label: 'Physical therapy', href: '/programs/physical-therapy' } },
      { heading: 'Visit our South Boston gym', text: 'We are at 383 Dorchester Ave Front in South Boston, with two large shared parking lots. Staffed hours are Monday to Thursday 5am to 8pm, Friday 5am to 7pm, Saturday 7am to 1pm and Sunday 9am to 12pm.', link: { label: 'Get directions', href: '/contact' } },
    ],
    faqs: [
      { q: 'How much is a personal training session?', a: 'Sessions are $99 each.' },
      { q: 'Is personal training good for beginners?', a: 'Yes. Your trainer builds the plan around your experience and goals.' },
      { q: 'How do I book a session?', a: 'Email info@crossfitsouthie.com to get set up.' },
    ],
    image: '/imgs/personaltraining.png'
  },
  {
    name: 'Nutrition Coaching',
    slug: 'nutrition-coaching',
    shortDescription: '1-on-1 nutrition coaching with Coach Bobby Kasmire.',
    fullDescription: 'One-on-one nutrition coaching with Coach Bobby Kasmire, who holds a Bachelor of Science in Nutrition Sciences.\n\nGetting Started\nEmail info@crossfitsouthie.com to set up nutrition coaching.',
    image: '/imgs/bobby.png',
    imagePosition: '50% 15%',
    actions: [
      { label: 'EMAIL US', href: 'mailto:info@crossfitsouthie.com?subject=Nutrition%20Coaching' },
      { label: 'MEET BOBBY', href: '/coaches/bobby-kasmire' }
    ],
    seoDescription: 'One-on-one nutrition coaching with Coach Bobby Kasmire, B.S. in Nutrition Sciences, at CrossFit Southie in South Boston, MA.'
  },
  {
    name: 'Physical Therapy',
    slug: 'physical-therapy',
    shortDescription: 'Carly Stote, DPT: Strength and Sports Physical Therapy, inside our gym.',
    fullDescription: 'Carly Stote, Doctor of Physical Therapy, runs her own practice, Strength and Sports Physical Therapy & Recovery Center, in the PT room at the back of CrossFit Southie.\n\nWhat To Expect\nPersonalized, one-on-one physical therapy focused on relieving pain, restoring movement and getting you back to the activities and sports you love.\n\nTreatments\nDry needling, Graston, cupping, soft tissue massage, active release techniques and joint mobilizations.\n\nInsurance\nThe practice accepts most insurances and also offers cash-based services and bodywork recovery options.',
    image: '/imgs/carly.png',
    imagePosition: 'top',
    actions: [
      { label: 'SCHEDULE PT', href: 'https://www.myclinicportal.com/?mcp=0732b5d89h0qqm9ip0&g=1' },
      { label: 'PRACTICE WEBSITE', href: 'https://www.strengthandsportsptboston.com' },
      { label: 'MEET CARLY', href: '/coaches/carly-stote' }
    ],
    seoDescription: 'Physical therapy in South Boston with Carly Stote, DPT, of Strength and Sports Physical Therapy & Recovery Center, inside CrossFit Southie.'
  },
  {
    name: 'STRIVE',
    slug: 'strive',
    shortDescription: 'HIIT, Strength & Conditioning and HYROX classes in one program.',
    fullDescription: 'STRIVE is our program for people who want coached group training that builds conditioning, strength and endurance. One program gives you access to three types of classes: HIIT, Strength & Conditioning and HYROX.\n\nThree Ways To Train\nSTRIVE HIIT is our signature conditioning class: low skill, maximum effort. STRIVE Strength & Conditioning builds lean muscle and athletic performance through progressive strength training. STRIVE HYROX combines running with functional exercises to prepare you for fitness racing or simply improve your overall conditioning.\n\nMembership\nSTRIVE memberships include HIIT, Strength & Conditioning and HYROX classes, with 2x per week, 3x per week and unlimited options. They are monthly and can be cancelled at any time. CrossFit memberships also include access to these classes.',
    image: '/imgs/hiit.jpg'
  }
]

// Programs with a parent live under it, e.g. /programs/strive/hyrox
export const programPath = (program: { slug: string; parent?: string }) =>
  program.parent ? `/programs/${program.parent}/${program.slug}` : `/programs/${program.slug}`

export const subPrograms = (slug: string) => programs.filter((p) => p.parent === slug)

// Menu order for the top-level programs
export const menuPrograms = ['crossfit', 'strive', 'fundamentals', 'personal-training', 'nutrition-coaching', 'physical-therapy'].map(
  (slug) => programs.find((p) => p.slug === slug)!
)
