<script>
  import { base } from '$app/paths';
  import WindIntro from '$lib/components/WindIntro.svelte';
  import SeasonEffect from '$lib/components/SeasonEffect.svelte';
  import PhotoBubbles from '$lib/components/PhotoBubbles.svelte';

  let showEmail = $state(false);
</script>

<svelte:head>
  <title>About | Chrissy Wang Portfolio</title>
</svelte:head>

<WindIntro />

<section class="about-page">

  <header class="intro">
    <h1 class="name">Chrissy Wang</h1>
    <p class="name-cn">汪小花</p>
  </header>

  <!-- ══ BEHIND THE LENS ══ -->
  <figure class="lens">
    <PhotoBubbles />
  </figure>

  <div class="columns">
    <!-- ══ WHAT I DO ══ -->
    <div class="block">
      <h2 class="section-heading">What I Do</h2>
      <nav class="text-links stacked" aria-label="What I do">
        <a href="{base}/writing">Business Reporter</a>
        <a href="{base}/documentary">Documentary Producer</a>
        <a href="{base}/animation">Motion Graphics Designer</a>
      </nav>
    </div>

    <!-- ══ CONNECT ══ -->
    <div class="block">
      <h2 class="section-heading">Connect</h2>
      <div class="text-links stacked">
        <a href="https://github.com/XiaohuaWang-Chrissy" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/xiaohuawang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <button class:revealed={showEmail} onclick={() => showEmail = !showEmail}>
          {showEmail ? 'xiaohuaw765@gmail.com' : 'Reveal Email'}
        </button>
      </div>
    </div>
  </div>

  <SeasonEffect />

</section>

<style>
  /* ── base ── */
  .about-page {
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
    padding: 4rem 1.5rem 5rem;
    font-family: var(--font-body);
    color: #000;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-heading {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #000;
    margin: 0 0 0.5rem;
  }

  /* ── intro ── */
  .intro {
    margin-bottom: 2.5rem;
  }

  .name {
    font-family: var(--font-hand);
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 0.5rem;
  }

  .name-cn {
    font-size: 1.3rem;
    font-weight: 300;
    color: #999;
    letter-spacing: 1px;
  }

  /* ── behind the lens ── */
  .lens {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 2.5rem;
  }

  .hint {
    margin-top: 0.9rem;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #999;
  }

  /* ── what I do / connect ── */
  .columns {
    width: 100%;
    max-width: 620px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding-top: 2.5rem;
    margin-bottom: 2rem;
    border-top: 1px solid #eaeaea;
  }

  .block .section-heading {
    margin-bottom: 1.25rem;
  }

  .text-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 2rem;
  }

  .text-links.stacked {
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
  }

  .text-links a,
  .text-links button {
    font-family: inherit;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #333;
    text-decoration: none;
    background: none;
    border: none;
    border-bottom: 1px solid var(--cuny-orange);
    padding: 0 0 0.2rem;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  /* 显示出来的邮箱保持原样大小写 */
  .text-links button.revealed {
    text-transform: none;
    letter-spacing: 0.5px;
  }

  .text-links a:hover,
  .text-links button:hover {
    color: var(--cuny-orange-ink);
  }

  /* ── responsive ── */
  @media (max-width: 768px) {
    .about-page {
      width: auto;
      padding: 2.5rem 0 3rem;
    }

    .name {
      font-size: 3.2rem;
    }

    .columns {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }
</style>
