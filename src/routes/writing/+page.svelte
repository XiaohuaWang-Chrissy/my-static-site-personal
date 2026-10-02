<script>
  import OutletCard from '../OutletCard.svelte';
  import ClipList from '../ClipList.svelte';
  import StoryRows from '../StoryRows.svelte';
  import { hbjClips } from '$lib/data/hbjClips.js';
  import { sunsetPostStories, schoolStories } from '$lib/data/writing.js';

  // HBJ 的代表作：World Cup（数据在 hbjClips.js 里，这里补上封面图和简介）
  const hbjIconicUrl =
    'https://www.bizjournals.com/houston/news/2026/07/02/world-cup-parking-strategy-mixed-for-businesses.html';
  const hbjIconic = {
    href: hbjIconicUrl,
    image: '/hbj-world-cup.jpg',
    label: 'Business',
    title: 'World Cup Parking Plan Drives 1.47 Million Visits Downtown, but Not All Businesses Benefit',
    date: 'Jul 2, 2026',
    dek: "Street-level reporting on Main Street during the FIFA World Cup: downtown business owners on how the city's park-downtown, ride-Metro plan played out, set against visit counts and Metro ridership data. Reporting and photography.",
    links: [{ href: hbjIconicUrl, text: 'Read on Houston Business Journal' }]
  };
  const otherHbjClips = hbjClips.filter((c) => c.url !== hbjIconicUrl);

  const [sunsetIconic, ...otherSunset] = sunsetPostStories;
  const [schoolIconic, ...otherSchool] = schoolStories;
</script>

<svelte:head>
  <title>Writing | Chrissy Wang Portfolio</title>
</svelte:head>

<section class="listing-page">
  <h1 class="page-title">WRITING</h1>

  <OutletCard
    id="hbj"
    outlet="Houston Business Journal"
    kicker="Reporting intern, summer 2026"
    intro="Retail and restaurant expansion, commercial real estate, manufacturing, nonprofits and the Who to Know in Fort Bend interview series. Some stories require an HBJ subscription."
    count={hbjClips.length}
    iconic={hbjIconic}
  >
    <ClipList
      outlet="Houston Business Journal"
      clips={otherHbjClips}
      showHeader={false}
      moreHref="https://muckrack.com/chrissy-wang/articles"
      moreText="All clips on Muck Rack →"
    />
  </OutletCard>

  <OutletCard
    id="sunset-post"
    outlet="The Sunset Post"
    kicker="Contributing reporter, 2025–2026"
    intro="Sunset Park's hyperlocal, trilingual newspaper in Brooklyn. Investigations and features built on court records and city data."
    count={sunsetPostStories.length}
    iconic={sunsetIconic}
  >
    <StoryRows stories={otherSunset} />
  </OutletCard>

  <OutletCard
    id="school"
    outlet="School Work"
    kicker="Craig Newmark Graduate School of Journalism at CUNY and UNC-Chapel Hill"
    intro="Data and feature stories reported for classes in the M.A. in Business and Data Journalism at the Craig Newmark Graduate School of Journalism at CUNY and the journalism program at UNC-Chapel Hill."
    count={schoolStories.length}
    iconic={schoolIconic}
  >
    <StoryRows stories={otherSchool} />
  </OutletCard>
</section>

<style>
  .listing-page {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    font-family: var(--font-body);
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .page-title {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 3px;
    color: #999;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .listing-page {
      width: auto;
      padding: 1.5rem 0 3rem;
    }
  }
</style>
