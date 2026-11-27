// Posts restored from the previous website. They keep their old addresses because people still find them on Google.
export type ArchiveSection = { heading?: string; paragraphs?: string[]; list?: string[] }
export type ArchivePost = { slug: string; title: string; date: string; note: string; sections: ArchiveSection[] }

export const archivePosts: ArchivePost[] = [
  {
    slug: 'southie-showdown',
    title: 'Southie Showdown',
    date: '2023 event',
    note: 'This page describes the 2023 Southie Showdown, held September 30 and October 1, 2023. Registration for that event is closed.',
    sections: [
      {
        paragraphs: [
          'The Southie Showdown is CrossFit Southie’s two-day competition, running since 2011. Three individual divisions let athletes test their fitness against others of similar ability, and 2023 added a coed team division of two Rx men and two Rx women.',
          'The event welcomed everyone from new competitors to Semifinal athletes, with five workouts for all athletes and a final for the top Rx and Advanced individuals.',
          'The movement standards below were a guide to choosing a division. Workouts could include movements and weights beyond them.',
        ],
      },
      { heading: 'Intermediate: Men', list: ['Front squat, power clean and thruster for reps: 95, 75 and 75 lb', 'Chin-over-bar pull-ups', 'Hand-release push-ups', 'Single-arm dumbbell movements, 35 lb'] },
      { heading: 'Intermediate: Women', list: ['Front squat, power clean and thruster for reps: 65, 55 and 55 lb', 'Chin-over-bar pull-ups', 'Hand-release push-ups', 'Single-arm dumbbell movements, 20 lb'] },
      { heading: 'Rx and Team: Men', list: ['Front squat, power clean and thruster for reps: 135, 115 and 115 lb', 'Single-arm dumbbell movements, 50 lb', 'Chest-to-bar pull-ups and toes-to-bar', 'Handstand push-up variations'] },
      { heading: 'Rx and Team: Women', list: ['Front squat, power clean and thruster for reps: 95, 75 and 75 lb', 'Single-arm dumbbell movements, 35 lb', 'Chest-to-bar pull-ups and toes-to-bar', 'Handstand push-up variations'] },
      { heading: 'Advanced: Men', list: ['Front squat for reps, 225 lb', 'Sandbag stone proficiency, 150 lb', 'Muscle-ups and rope climbs, all variations', 'Handstand walk proficiency'] },
      { heading: 'Advanced: Women', list: ['Front squat for reps, 145 lb', 'Sandbag stone proficiency, 100 lb', 'Muscle-ups, all variations', 'Handstand walk proficiency'] },
    ],
  },
  {
    slug: 'hero-wod-dork-4',
    title: 'Hero WOD “Dork”',
    date: 'December 26, 2020',
    note: 'A workout from our archive.',
    sections: [
      { paragraphs: ['“Dork” honors Michael Kennedy, a 33-year-old Boston firefighter and Marine Corps veteran of Iraq, who died fighting a nine-alarm fire on March 26, 2014. He was well known in the local CrossFit community as a coach and athlete.'] },
      { heading: 'Workout: 6 rounds for time', list: ['60 double-unders', '30 kettlebell swings (1.5 / 1 pood)', '15 burpees'] },
      { heading: 'Scaling', list: ['Level 2: 1 / 0.75 pood', 'Level 1: 0.75 / 0.5 pood', 'Instead of double-unders: 120 single-unders or 60 mountain climbers'] },
      { heading: 'Coach’s tip', paragraphs: ['Choose a scale that lets you finish each round in about 3 to 4 minutes.'] },
    ],
  },
  {
    slug: 'build-that-foundation-crossover-symmetry',
    title: 'Build That Foundation: Crossover Symmetry',
    date: 'March 31, 2014, by Goose',
    note: 'An article from our archive.',
    sections: [
      { paragraphs: ['Anything worth building needs a strong foundation, and the same is true of fitness. Nutrition sits at the base. For the shoulders, trying to build strength on a tight chest, lats and upper back, or on weak shoulder blade stabilizers, limits how strong you can get and invites injury.'] },
      { heading: 'Crossover Symmetry', paragraphs: ['Build a healthy, powerful shoulder by first restoring range of motion with soft tissue work (PVC pipe or softball rolling) and stretching, then strengthening the deep stabilizers of the shoulder. Crossover Symmetry bands and their programs are made for that second step.'] },
      {
        heading: 'How to use the bands',
        list: [
          'Do each exercise on the chart once through, in order. As you progress, you can go through the program twice.',
          'Check the cord height for each exercise (eye level or knee level). Every Scap Jack exercise is done at eye level.',
          'Cross the bands: the right band goes in your left hand and the left band in your right.',
          'Use the tension grid on each chart to pick bands. The suggestions differ between programs.',
          'If your traps and neck are doing the work, lower the tension. Stepping farther from the wall makes a lighter band harder.',
        ],
      },
      {
        heading: 'Which program to use',
        list: [
          'Activation: before shoulder-heavy barbell or gymnastics work. Move at a controlled pace with a pause at the end of each rep.',
          'Recovery: after the workout. Same program, with slow lowering on each rep.',
          'Plyometric: the advanced program. Take each movement to end range, do 5 quick oscillations, then return. Do 6 reps of each exercise before moving on.',
          'Iron Scap: a progressive program for shoulder blade position and movement. Controlled reps, except the final ATYT, which is done as fast as possible.',
        ],
      },
      { paragraphs: ['Ask a coach to walk you through the exercises before you start.'] },
    ],
  },
  {
    slug: 'travel-wods-weekly-strength',
    title: 'Travel WODs and Weekly Strength',
    date: 'August 16, 2015, by Retta',
    note: 'A workout post from our archive.',
    sections: [
      { heading: 'Strength', paragraphs: ['Overhead squat: 5-4-3-2-1'] },
      { heading: 'Workout', paragraphs: ['30 seconds of work and 30 seconds of rest for 4 rounds, then rotate.'], list: ['Airdyne bike', 'Wall balls (20 / 14 lb)', 'Row', 'Ring dips'] },
      { heading: 'Weekly strength schedule', list: ['Monday: box squat with chains', 'Tuesday: squat snatch', 'Thursday: benchmark “Tabata This”', 'Friday: push press and push jerk'] },
      { heading: 'At-home workout', paragraphs: ['50-40-30-20-10 reps of:'], list: ['Air squats', 'Sit-ups'] },
    ],
  },
]
