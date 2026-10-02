// Writing page data: The Sunset Post stories and school work.
// HBJ clips live in hbjClips.js. The first story in each list is the
// "iconic" one shown on the collapsed card; the rest appear when expanded.
// Site paths (starting with /) get the `base` prefix where they're rendered.

export const sunsetPostStories = [
  {
    href: 'https://www.sunsetpost.org/en/stories/burned-out-condo-stuck-between-insurance-gaps-and-tenant-rights/',
    external: true,
    image: '/project-fire-cover.jpg',
    label: 'Investigative',
    title: 'A Burned-Out Sunset Park Condo Is Stuck Between Insurance Gaps and Tenant Rights',
    date: 'Dec 20, 2025',
    dek: 'Six and a half years after a candle fire, homeowners at One Sunset Park Condominium are trapped between an insurance shortfall and a tenant right-to-return lawsuit. Built from court filings, insurance records and FDNY data.',
    links: [
      {
        href: 'https://www.sunsetpost.org/en/stories/burned-out-condo-stuck-between-insurance-gaps-and-tenant-rights/',
        text: 'Read on The Sunset Post'
      },
      {
        href: 'https://XiaohuaWang-Chrissy.github.io/Project_Fire/',
        text: 'Interactive version',
        note: 'With data visualizations and web design, built as my final project at the Craig Newmark Graduate School of Journalism at CUNY.'
      }
    ]
  },
  {
    href: '/writing/nyc-marathon',
    image: '/NYC_marathon.jpg',
    label: 'Feature',
    title: "Every Mile Counts: Behind NYC Marathon's Precision",
    date: 'Nov 2025',
    dek: 'Richard Blake III has timed the NYC Marathon at the five-mile mark for eight years. A same-day story on the people behind the clocks.',
    links: [
      { href: '/writing/nyc-marathon', text: 'Read on my website' },
      { href: 'https://www.sunsetpost.org/en/stories/every-mile-counts-behind-nyc-marathon-s-precision/', text: 'Read on The Sunset Post' }
    ]
  },
  {
    href: '/data-journalism/bacop',
    image: '/BACOP1WEB.jpg',
    label: 'Feature',
    title: 'BACOP Patrols Brooklyn Chinatown Nightly',
    date: 'Oct 2025',
    dek: 'Every night from 10 p.m. to 2 a.m., volunteers drive two cars through Sunset Park. They are not police, and they have done it for 11 years.',
    links: [
      { href: '/data-journalism/bacop', text: 'Read on my website' },
      { href: 'https://www.sunsetpost.org/en/stories/bacop-patrols-brooklyn-chinatown-nightly/', text: 'Read on The Sunset Post' }
    ]
  }
];

export const schoolStories = [
  {
    href: '/data-journalism/savings-jobs',
    image: '/piggy bank.png',
    label: 'Data',
    title: "Americans Are Spending Their Savings. The Jobs Market Isn't Helping.",
    date: 'Mar 2026',
    dek: 'As retail sales slipped and the job market shed 92,000 positions, Americans are draining their savings to cover what their paychecks no longer can.'
  },
  {
    href: '/data-journalism/retail-sales',
    image: '/cover-image.png',
    label: 'Data',
    title: 'Winter Storms May Deepen Economic Chill After Retail Sales Stagnant in December',
    date: 'Feb 2026',
    dek: 'Retail sales stalled in December, and economists warned the downward trend would continue into January.'
  },
  {
    href: '/data-journalism/bird-collisions',
    image: '/bird-story-cover-image.webp',
    label: 'Feature',
    title: 'Making Windows Safer for Birds',
    date: 'Dec 2024',
    dek: 'Up to 1 billion birds die each year crashing into U.S. windows. Campus initiatives from UNC to Duke are documenting collisions and retrofitting buildings.'
  }
];
