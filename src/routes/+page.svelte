<script>
  import { base } from '$app/paths';
  import { hbjClips } from '$lib/data/hbjClips.js';

  // 首页精选作品：想换哪几个，直接改这个列表
  const selectedWork = [
    {
      href: 'https://www.sunsetpost.org/en/stories/burned-out-condo-stuck-between-insurance-gaps-and-tenant-rights/',
      external: true,
      image: `${base}/project-fire-cover.jpg`,
      label: 'Investigative',
      title: 'A Burned-Out Sunset Park Condo Is Stuck Between Insurance Gaps and Tenant Rights'
    },
    {
      href: 'https://www.bizjournals.com/houston/news/2026/07/02/world-cup-parking-strategy-mixed-for-businesses.html',
      external: true,
      image: `${base}/hbj-world-cup.jpg`,
      label: 'Business',
      title: 'World Cup Parking Plan Drives 1.47 Million Visits Downtown, but Not All Businesses Benefit'
    },
    {
      href: 'https://www.bizjournals.com/houston/news/2026/07/17/houston-latino-learning-center-photo-story.html',
      external: true,
      image: `${base}/hbj-latino-learning-center.jpg`,
      label: 'Photo Story',
      title: 'Inside the Latino Learning Center, Seeking Funds for $7M Renovations'
    },
    {
      href: `${base}/documentary/la-forma-del-diamante`,
      image: `${base}/documentary-cover.jpg`,
      label: 'Documentary',
      title: 'La Forma del Diamante'
    },
    {
      href: `${base}/animation/womens-lacrosse-2025`,
      image: 'https://i.ytimg.com/vi/SvSYQCwHkP0/maxresdefault.jpg',
      label: 'Motion Graphics',
      title: "2025 National Champion Carolina Women's Lacrosse"
    },
    {
      href: `${base}/photography/western-nc`,
      image: 'https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/1-scaled.jpg?resize=2048%2C1365&ssl=1',
      label: 'Photojournalism',
      title: 'Picking Up the Pieces in Western North Carolina'
    }
  ];

  // 最新的 3 篇 HBJ 稿子（按日期）
  const recentClips = [...hbjClips].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  const formatDate = (iso) =>
    new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC'
    });

  const sections = [
    { href: `${base}/writing`, label: 'Writing' },
    { href: `${base}/photography`, label: 'Photography' },
    { href: `${base}/documentary`, label: 'Documentary' },
    { href: `${base}/animation`, label: 'Motion Graphics' }
  ];
</script>

<svelte:head>
  <title>Chrissy Wang | Reporter</title>
</svelte:head>

<div class="home">
  <header class="intro">
    <h1 class="name">Chrissy Wang</h1>
    <p class="role">Reporter</p>
    <nav class="intro-links" aria-label="Contact">
      <a href="{base}/about">About</a>
      <a href="https://www.linkedin.com/in/xiaohuawang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://muckrack.com/chrissy-wang/articles" target="_blank" rel="noopener noreferrer">Muck Rack</a>
    </nav>
  </header>

  <section class="block">
    <h2 class="block-heading">Selected Work</h2>
    <div class="work-grid">
      {#each selectedWork as work (work.href)}
        <a
          class="work-card"
          href={work.href}
          target={work.external ? '_blank' : undefined}
          rel={work.external ? 'noopener noreferrer' : undefined}
        >
          <div class="work-image">
            <img src={work.image} alt="" loading="lazy" />
          </div>
          <span class="work-label">{work.label}</span>
          <h3 class="work-title">{work.title}</h3>
        </a>
      {/each}
    </div>
  </section>

  <section class="block">
    <div class="block-head-row">
      <h2 class="block-heading">Latest from the Houston Business Journal</h2>
      <a class="block-more" href="{base}/writing#hbj">All clips →</a>
    </div>
    <ul class="clip-rows">
      {#each recentClips as clip (clip.url)}
        <li>
          <a href={clip.url} target="_blank" rel="noopener noreferrer">
            <span class="clip-date">{formatDate(clip.date)}</span>
            <span class="clip-title">{clip.title}</span>
            <span class="clip-arrow">↗</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>

  <nav class="sections" aria-label="All work">
    {#each sections as s (s.href)}
      <a href={s.href}>{s.label}</a>
    {/each}
  </nav>
</div>

<style>
  .home {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 4rem 1.5rem 5rem;
    font-family: var(--font-body);
  }

  /* ── intro ── */
  .intro {
    margin-bottom: 4rem;
  }

  .name {
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 1px;
    color: #000;
    margin: 0 0 0.75rem;
  }

  .role {
    font-size: 1.3rem;
    font-weight: 300;
    color: #555;
    margin: 0 0 1.5rem;
  }

  .intro-links {
    display: flex;
    gap: 1.5rem;
  }

  .intro-links a {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #111;
    text-decoration: none;
    border-bottom: 1px solid var(--cuny-orange);
    padding-bottom: 0.15rem;
  }

  .intro-links a:hover {
    color: var(--cuny-orange-ink);
  }

  /* ── blocks ── */
  .block {
    margin-bottom: 4rem;
  }

  .block-heading {
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #999;
    margin: 0 0 1.5rem;
  }

  .block-head-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }

  .block-more {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #111;
    text-decoration: none;
    white-space: nowrap;
  }

  .block-more:hover {
    color: var(--cuny-orange-ink);
  }

  /* ── selected work ── */
  .work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem 2rem;
  }

  .work-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
  }

  .work-image {
    aspect-ratio: 3 / 2;
    overflow: hidden;
    background: var(--paper);
    margin-bottom: 1rem;
  }

  .work-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .work-card:hover .work-image img {
    transform: scale(1.03);
  }

  .work-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--unc-blue-ink);
    margin-bottom: 0.5rem;
  }

  .work-title {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.4;
    color: #111;
    margin: 0;
  }


  .work-card:hover .work-title {
    color: var(--cuny-orange-ink);
  }

  /* ── recent clips ── */
  .clip-rows {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--rule);
  }

  .clip-rows li {
    border-bottom: 1px solid var(--rule);
  }

  .clip-rows a {
    display: grid;
    grid-template-columns: 7.5rem 1fr auto;
    gap: 1.5rem;
    align-items: baseline;
    padding: 1rem 0;
    text-decoration: none;
    color: inherit;
  }

  .clip-date {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.95rem;
    color: #666;
    white-space: nowrap;
  }

  .clip-title {
    font-size: 1.05rem;
    line-height: 1.5;
    color: #222;
  }

  .clip-arrow {
    color: #999;
  }

  .clip-rows a:hover .clip-title,
  .clip-rows a:hover .clip-arrow {
    color: var(--cuny-orange-ink);
  }

  /* ── section links ── */
  .sections {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid #eaeaea;
  }

  .sections a {
    font-size: 0.85rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #555;
    text-decoration: none;
  }

  .sections a:hover {
    color: var(--cuny-orange-ink);
  }

  /* ── responsive ── */
  @media (max-width: 1000px) {
    .work-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .home {
      width: auto;
      padding: 2.5rem 0 3rem;
    }

    .name {
      font-size: 2.5rem;
    }

    .work-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .clip-rows a {
      grid-template-columns: 1fr auto;
      gap: 0.25rem 1rem;
    }

    .clip-date {
      grid-column: 1 / -1;
    }

    .block-head-row {
      flex-direction: column;
      gap: 0;
      margin-bottom: 1.5rem;
    }

    .block-head-row .block-heading {
      margin-bottom: 0.25rem;
    }
  }
</style>
