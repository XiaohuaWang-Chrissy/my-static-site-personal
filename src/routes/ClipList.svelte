<script>
  let {
    outlet = "",
    intro = "",
    clips = [],
    moreHref = "",
    moreText = "See all clips →",
    showHeader = true
  } = $props();

  // Featured clips keep the order they're listed in the data file (best first);
  // the rest are sorted newest first.
  const byDate = (a, b) => b.date.localeCompare(a.date);
  const featured = $derived(clips.filter((c) => c.featured));
  const rest = $derived(clips.filter((c) => !c.featured).sort(byDate));

  // Dates are plain YYYY-MM-DD strings; format in UTC so they don't shift a day.
  const formatDate = (iso) =>
    new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC'
    });
</script>

<section class="clips">
  {#if showHeader}
    <header class="clips-header">
      <h2 class="clips-outlet">{outlet}</h2>
      {#if intro}<p class="clips-intro">{intro}</p>{/if}
    </header>
  {/if}

  {#if featured.length}
    <div class="featured-grid">
      {#each featured as clip (clip.url)}
        <a class="featured-clip" href={clip.url} target="_blank" rel="noopener noreferrer">
          <span class="clip-section">{clip.section}</span>
          <h3 class="featured-title">{clip.title}</h3>
          <p class="clip-meta">
            {formatDate(clip.date)}{#if clip.with}, with {clip.with}{/if}
          </p>
          {#if clip.summary}<p class="featured-summary">{clip.summary}</p>{/if}
          <span class="read-link">Read on {outlet} ↗</span>
        </a>
      {/each}
    </div>
  {/if}

  {#if rest.length}
    <h3 class="more-heading">More clips</h3>
    <ul class="clip-list">
      {#each rest as clip (clip.url)}
        <li>
          <a href={clip.url} target="_blank" rel="noopener noreferrer">
            <span class="list-date">{formatDate(clip.date)}</span>
            <span class="list-title">
              {clip.title}{#if clip.with}<span class="list-with">, with {clip.with}</span>{/if}
            </span>
            <span class="list-section">{clip.section}</span>
          </a>
        </li>
      {/each}
    </ul>
  {/if}

  {#if moreHref}
    <a class="more-link" href={moreHref} target="_blank" rel="noopener noreferrer">{moreText}</a>
  {/if}
</section>

<style>
  .clips {
    font-family: var(--font-body);
  }

  .clips-header {
    border-top: 1px solid #e5e2dc;
    padding-top: 2rem;
    margin-bottom: 2rem;
  }

  .clips-outlet {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.3;
    color: #111;
    margin: 0 0 0.5rem;
  }

  .clips-intro {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #555;
    max-width: 46rem;
  }

  .featured-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .featured-clip {
    display: flex;
    flex-direction: column;
    background: var(--paper);
    padding: 2rem 2.25rem;
    text-decoration: none;
    color: inherit;
    transition: box-shadow 0.3s ease;
  }

  .featured-clip:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  .clip-section {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--unc-blue-ink);
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .featured-title {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.35;
    color: #111;
    margin: 0 0 0.5rem;
  }

  .clip-meta {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.95rem;
    color: #666;
    margin: 0 0 1rem;
  }

  .featured-summary {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #555;
    margin: 0 0 0.75rem;
  }


  .read-link {
    margin-top: auto;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #111;
  }

  .featured-clip:hover .read-link {
    color: var(--cuny-orange-ink);
  }

  .more-heading {
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #999;
    margin: 3rem 0 0.5rem;
  }

  .clip-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .clip-list li {
    border-bottom: 1px solid var(--rule);
  }

  .clip-list a {
    display: grid;
    grid-template-columns: 7.5rem 1fr auto;
    gap: 1.5rem;
    align-items: baseline;
    padding: 0.9rem 0;
    text-decoration: none;
    color: inherit;
  }

  .list-date {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.9rem;
    color: #666;
    white-space: nowrap;
  }

  .list-title {
    font-size: 1rem;
    line-height: 1.5;
    color: #222;
  }

  .clip-list a:hover .list-title {
    color: var(--cuny-orange-ink);
  }

  .list-with {
    color: #999;
    font-size: 0.85rem;
  }

  .list-section {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--unc-blue-ink);
    white-space: nowrap;
  }

  .more-link {
    display: inline-block;
    margin-top: 2rem;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #111;
    text-decoration: none;
    border-bottom: 1px solid var(--cuny-orange);
    padding-bottom: 0.2rem;
  }

  .more-link:hover {
    color: var(--cuny-orange-ink);
  }

  @media (max-width: 768px) {
    .featured-grid {
      grid-template-columns: 1fr;
    }

    .featured-clip {
      padding: 1.5rem;
    }

    .clip-list a {
      grid-template-columns: 1fr;
      gap: 0.2rem;
    }

    .list-section {
      order: -1;
    }
  }
</style>
