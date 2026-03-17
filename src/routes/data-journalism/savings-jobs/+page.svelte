<script>
  import { base } from '$app/paths';
  import DataHighlight from '../../DataHighlight.svelte';
</script>

<svelte:head>
  <title>Americans Are Spending Their Savings | Chrissy Wang</title>
</svelte:head>

<article class="article">
  <header class="article-header">
    <p class="article-label">EMPLOYMENT & RETAIL</p>
    <h1 class="article-title">Americans Are Spending Their Savings. The Jobs Market Isn't Helping.</h1>
    <p class="article-byline">By <strong>Chrissy Wang</strong></p>
  </header>

  <figure class="cover-figure">
    <img src="{base}/piggy bank.png" alt="Piggy bank representing savings" class="cover-image" />
  </figure>

  <div class="article-body">
    <p class="article-lede">
      As retail sales slipped and the job market weakened, Americans are draining their savings to cover what their paychecks no longer can.
    </p>

    <DataHighlight
      metric="-0.2%"
      description="Retail sales declined in January from December according to the U.S. Census Bureau."
      trend="down"
    />

    <p>
      Retail sales fell 0.2% in January from the month before, the Census Bureau reported Friday. The February jobs report, also released on Friday, showed that the economy shed 92,000 job positions. Together, the two reports are deepening concerns that American consumers are increasingly spending down their savings since their paychecks are not enough to pay their living expenses.
    </p>

    <p>
      One reason for the decline in spending was auto sales, down 7.3% from December, largely because of back-to-back blizzards. Remove auto sales from the January numbers, and the rest of retail held nearly flat.
    </p>

    <DataHighlight
      metric="3.5%"
      description="Personal savings rate in December 2025, down from 5.5% in April 2025."
      trend="down"
    />

    <p>
      Tax refund season is expected to bring a short-term rebound in cash spending, and slowing inflation has offered some relief: the Consumer Price Index rose just 2.4% year-over-year in January, its lowest figure since last spring. But the second quarter of 2026 looks shakier, and the risks are piling up.
    </p>

    <p>
      The personal savings rate has already fallen from 5.5% in April 2025 to around 3.5% in December 2025, indicating that consumers are saving less of their paychecks. Once the refunds are spent, they may not have much left over.
    </p>

    <!-- Datawrapper Chart -->
    <figure class="chart-figure">
      <iframe title="Auto Sales Slump Dragged Down January Retail" aria-label="Split Bars" id="datawrapper-chart-qdfRK" src="https://datawrapper.dwcdn.net/qdfRK/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="458" data-external="1"></iframe>
    </figure>

    <script type="text/javascript">window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}});</script>

    <p>
      The auto business has yet to bounce back. At Lansdale Speed Motor, a used-car dealership outside Philadelphia, the owner, Jacob Cao, said he had expected a sunny, busy Saturday last weekend, but barely anyone came in. He figured customers who had been cooped up for weeks weren't heading to a dealership on their first sunny weekend.
    </p>

    <p>
      Now Cao is waiting for tax return season. "Most people buy cars between March and May because that's when tax returns come in. People have extra cash, and a lot of them use that money as a down payment to buy a car," Cao said.
    </p>

    <p>
      Stan Shipley, an economist at financial services company Evercore ISI, said he was optimistic. "Refund checks should be very high this year," he said. "That's good news for discretionary spending." The reason is partially because of President Trump's tax bill, signed last July, which included retroactive cuts for 2025 that are expected to boost refunds for many people this season.
    </p>

    <p>
      But long-term consumer spending relies on paychecks, not tax refunds. And with 92,000 jobs gone in February, fewer people have steady paychecks to rely on. "If the labor market is weakening more than we expected — and this morning's report was pretty weak across the board — it may be a little bit softer spending than what we've so far assumed," said Kevin Cummins, director and chief U.S. economist at NatWest Markets Securities Inc.
    </p>

    <p>
      Consumer spending last year was resilient mainly because Americans were raiding their piggy banks just to keep up. This dynamic of robbing Peter to pay Paul leaves the economy on thin ice. "That can only last for so long. We could see more people spending their savings in order to continue to spend, but at some point, they probably will pull back," Cummins said.
    </p>

    <p>
      Borrowing isn't getting any cheaper, either. The Federal Reserve held rates steady at its January meeting, signaling it needs more evidence that inflation is cooling before making any decision. For consumers already stretched thin, that means car loans, credit cards, and mortgages all stay expensive. "Everyone relies on loans to get by," said Mike Wu, owner of Carolina Motor Co.
    </p>

    <p>
      Even buyers with good credit now face used-car loan rates of 6% to 7%, and that's roughly double the pre-pandemic average, which directly limits how much car a monthly paycheck can afford, Wu noted.
    </p>

    <p>
      February's jobs number is a sign that the second quarter of 2026 could look very different from the first if consumers continue to cut back on spending. At some point, they may simply have nothing left to spend. That may be the moment the Federal Reserve can no longer afford to wait to cut interest rates.
    </p>
  </div>
</article>

<style>
  .article {
    max-width: 900px;
    width: 90%;
    margin: 0 auto;
    padding: 3rem 1.5rem 4rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #333;
    line-height: 1.8;
  }

  .article-header {
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .article-label {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #c4a776;
    margin: 0 0 1rem;
  }

  .article-title {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: #000;
  }

  .article-byline {
    font-size: 1rem;
    color: #666;
    margin: 0;
  }

  .cover-figure {
    margin: 2rem 0 3rem;
    text-align: center;
  }

  .cover-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  .article-body {
    font-size: 1.05rem;
  }

  .article-lede {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    color: #444;
  }

  .article-body p {
    margin-bottom: 1.5rem;
  }

  .chart-figure {
    margin: 3rem 0;
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    .article {
      padding: 2rem 1rem 3rem;
    }

    .article-title {
      font-size: 1.6rem;
    }
  }
</style>
