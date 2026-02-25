<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Every Mile Counts: Behind NYC Marathon's Precision | Chrissy Wang</title>
</svelte:head>

<article class="article">
  <header class="article-header">
    <p class="article-label">WRITING</p>
    <h1 class="article-title">Every Mile Counts: Behind NYC Marathon's Precision</h1>
    <p class="article-byline">By <strong>Chrissy Wang</strong></p>
  </header>

  <figure class="cover-figure">
    <img src="{base}/NYC_marathon.jpg" alt="New York City Marathon" class="cover-image" />
  </figure>

  <div class="article-body">
    <p class="article-lede">
      Accurate timing is crucial in any road race, but especially in an event as large as the New York City Marathon.
    </p>

    <p>
      Richard Blake III is general manager of Yankee Timing, a New England–based race-timing company. Blake was back in Sunset Park on Sunday — his eighth year timing the marathon at the five-mile point.
    </p>

    <p>
      The New York Road Runners' 55th annual marathon began as usual. It started on Staten Island, passed through Brooklyn and Queens, entered Midtown Manhattan, headed north to the Bronx, then turned back toward West 67th Street of Central Park, covering the standard distance of 26.2 miles.
    </p>

    <p>
      This year, the NYRR reinstated the tradition of timed per-mile splits for the first time since the pandemic, Blake said. "When COVID hit, they would only do every 5K," he said. "So this is the first year since 2019 that they brought back every mile."
    </p>

    <p>
      Before Mile 8 the course is split into two routes, and each mile's timing point corresponds to two separate stations. At the Mile 5 mark in the heart of Sunset Park, Blake and his colleague Justin Platt sat on opposite sides of 43rd Street, monitoring their equipment. Because the two routes' curves and gradients differ, their distances vary slightly. Platt's route is a few feet longer than Blake's.
    </p>

    <p>
      "This is certified," Platt said. "Someone from USATF — USA Track and Field — measured it — very precise."
    </p>

    <p>
      At Mile 8 the two routes finally merge at Lafayette and Flatbush Avenues in Downtown Brooklyn.
    </p>

    <p>
      "The courses start at different spots on the bridge," Blake said, referring to the Verrazzano-Narrows, "so they're slightly different in distance. Way back there, there's a lot of differences, and they get closer and closer. At Mile 8 they're equal, so they merge."
    </p>

    <p>
      From there, thousands of runners surged forward, continuing their race toward Queens, the Bronx and Manhattan. Eventually, the clamor on the streets merged with the cheers from Central Park.
    </p>

    <p>
      Near the finish line, Eric Baloyo, 25, a designer from Long Island who had completed the race, was still watching the course with excitement and cheering other runners. Baloyo said he had been running marathons for three years and training systematically for this marathon since December. He started the race at 9 a.m. and finished in 3 hours, 27 minutes.
    </p>

    <p>
      "It was probably one of the best experiences I've ever had," he said. "Going through Brooklyn and Queens — the energy was unmatched."
    </p>
  </div>
</article>

<style>
  .article {
    max-width: 780px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    font-family: var(--font-serif, Georgia, 'Times New Roman', serif);
    color: #1a1a1a;
    line-height: 1.8;
  }

  .article-header {
    margin-bottom: 2rem;
    text-align: left;
  }

  .article-label {
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    color: #999;
    margin-bottom: 0.5rem;
  }

  .article-title {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
  }

  .article-byline {
    font-size: 0.95rem;
    color: #666;
  }

  .cover-figure {
    margin: 0 0 2.5rem;
  }

  .cover-image {
    width: 100%;
    display: block;
  }

  .article-body p {
    font-size: 1.1rem;
    margin-bottom: 1.4rem;
  }

  .article-lede {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 1.7;
  }

  blockquote {
    border-left: 3px solid #c4a776;
    margin: 2rem 0;
    padding: 1rem 1.5rem;
    background: #faf8f5;
    font-style: italic;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  blockquote cite {
    display: block;
    margin-top: 0.75rem;
    font-style: normal;
    font-size: 0.85rem;
    color: #888;
  }

  @media (max-width: 768px) {
    .article {
      padding: 1.5rem 1rem 3rem;
    }

    .article-title {
      font-size: 1.6rem;
    }

    .article-body p {
      font-size: 1rem;
    }
  }
</style>
