<script>
  import { base } from '$app/paths';
  import DataHighlight from '../../DataHighlight.svelte';
</script>

<svelte:head>
  <title>Retail Sales Story | Chrissy Wang</title>
</svelte:head>

<article class="article">
  <header class="article-header">
    <p class="article-label">BUSINESS JOURNALISM</p>
    <h1 class="article-title">Winter Storms May Deepen Economic Chill After Retail Sales Stagnant in December</h1>
    <p class="article-byline">By <strong>Chrissy Wang</strong></p>
  </header>

  <figure class="cover-figure">
    <img src="{base}/cover-image.png" alt="Retail sales story cover" class="cover-image" />
  </figure>

  <div class="article-body">
    <p class="article-lede">
      Retail sales growth remained stagnant in December, and economists say the downward trend will probably continue into January.
    </p>

    <DataHighlight
      metric="-0.02%"
      description="Retail sales declined in December from November, falling short of expectations for holiday-season growth."
      trend="down"
    />

    <p>
      Retail sales declined by approximately 0.02% in December from November, falling short of many economists' expectations for modest holiday-season growth, data released by the Commerce Department on Tuesday showed. This stagnation marks a reversal of the consumer boom that the U.S. economy had been riding for most of 2025.
    </p>

    <p>
      December's retail sales data indicates that U.S. consumers had already begun cutting back on spending before extreme weather arrived in January, which could cause household spending to weaken further in the first quarter of 2026.
    </p>

    <p>
      A cooling labor market and last fall's government shutdown have primarily weighed on lower- and middle-income shoppers. While high-income households, the main group driving previous retail sales growth, had offset this by spending freely because of a strong stock market, that momentum is now weakening.
    </p>

    <p>
      Stan Shipley, an economist at financial services company Evercore ISI, pointed out that the weakness was widespread rather than isolated.
    </p>

    <blockquote>
      "There was a weakness in electronic spending. There was also weakness in online spending. Those are discretionary categories, and when you see multiple discretionary categories weaken, then that's often the sign of trouble."
      <cite>— Stan Shipley, Evercore ISI</cite>
    </blockquote>

    <p>
      Economists warn that December's poor performance foreshadows an even tougher start to the new year. Shipley emphasized that the real shock would come next month in the January data.
    </p>

    <blockquote>
      "In January, because of that huge storm that hit most of the U.S. at the end of the month, car sales were more than 7% lower than in December. We're going to start the first quarter with another negative number."
      <cite>— Stan Shipley, Evercore ISI</cite>
    </blockquote>

    <!-- Datawrapper Chart -->
    <figure class="chart-figure">
      <iframe title="Quarterly Percentage Change in Real Retail Sales (2024-2025)" aria-label="Column Chart" id="datawrapper-chart-AEGxx" src="https://datawrapper.dwcdn.net/AEGxx/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="387" data-external="1"></iframe>
    </figure>

    <p>
      Even before the storm, American consumer spending had begun to cool down. In December, consumers shifted their food spending from restaurants to groceries – a typical sign of financial distress – showing the lingering effects of the government shutdown and delayed Supplemental Nutrition Assistance Program (SNAP) benefits.
    </p>

    <p>
      Adjusted for inflation, retail sales declined throughout the last quarter of 2025, Shipley said, showing that Americans were actually buying fewer goods. Normally, the holiday season drives a surge in the volume of purchases, making such a sustained quarterly shrinking abnormal.
    </p>

    <DataHighlight
      metric="6.54M"
      description="U.S. job openings in December — the lowest level since 2020."
      trend="down"
    />

    <p>
      The pause in retail sales showed anxieties that go far beyond the weather or disruptions: U.S. job openings fell to 6.54 million in December, the lowest level since 2020. Such "sluggish hiring" and "weak population growth" were the fundamental issues causing "hesitancy among many Americans about the future for their own employment prospects," according to Avery Shenfeld, chief economist at CIBC Capital Markets.
    </p>

    <p>
      The Federal Reserve has kept rates high to constrain inflation, but that makes borrowing money expensive for everything from credit cards to cars and houses. With the consumer sector currently more fragile than expected, Federal Reserve officials might abandon their wait-and-see approach and put interest rate cuts back on the agenda to prevent a further economic chill.
    </p>
  </div>
</article>

<style>
  .article {
    max-width: 900px;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    color: #222;
  }

  .article-header {
    margin-bottom: 2rem;
  }

  .article-label {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #c4a776;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .article-title {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.25;
    margin: 0 0 1rem;
    color: #111;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
  }

  .article-byline {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 0.95rem;
    color: #666;
  }

  .cover-figure {
    margin: 0 0 2.5rem;
  }

  .cover-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .article-body p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.4rem;
  }

  .article-lede {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 1.7 !important;
    color: #333;
  }

  blockquote {
    border-left: 4px solid #c4a776;
    margin: 2rem 0;
    padding: 1rem 1.5rem;
    background: #faf8f5;
    font-style: italic;
    font-size: 1.05rem;
    line-height: 1.7;
    color: #444;
  }

  blockquote cite {
    display: block;
    margin-top: 0.8rem;
    font-style: normal;
    font-size: 0.9rem;
    font-weight: 600;
    color: #888;
  }

  .chart-figure {
    margin: 2.5rem 0;
  }

  @media (max-width: 768px) {
    .article-title {
      font-size: 1.6rem;
    }

    .article-body p {
      font-size: 1rem;
    }

    blockquote {
      padding: 0.8rem 1rem;
    }
  }
</style>