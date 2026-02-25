<script>
  import { base } from '$app/paths';
  import PreviewCard from '../PreviewCard.svelte';
</script>

<svelte:head>
  <title>Motion Graphics | Chrissy Wang Portfolio</title>
</svelte:head>

<section class="listing-page">
  <h1 class="page-title">MOTION GRAPHICS</h1>

  <PreviewCard
    href="{base}/animation/womens-lacrosse-2025"
    imageSrc="https://i.ytimg.com/vi/SvSYQCwHkP0/maxresdefault.jpg"
    imageAlt="2025 National Champion Carolina Women's Lacrosse"
    overlayText="Watch →"
    label="CHAMPIONSHIP DOCUMENTARY"
    title="2025 National Champion Carolina Women's Lacrosse"
    subtitle=""
    description="Produced motion graphics for the UNC Women's Lacrosse 2025 championship documentary."
    byline="Motion Graphics by Chrissy Wang & Yesy Lopez · UNC Hussman Production Team · 2025"
  />

  <PreviewCard
    href="{base}/animation/womens-soccer-2024"
    imageSrc="https://i.ytimg.com/vi/jk_Lj-wW818/maxresdefault.jpg"
    imageAlt="UNC 2024 Women's Soccer NCAA Championship"
    overlayText="Watch →"
    label="CHAMPIONSHIP DOCUMENTARY"
    title="UNC 2024 Women's Soccer NCAA Championship"
    subtitle=""
    description="Produced motion graphics for UNC's 2024 Women's Soccer NCAA championship documentary."
    byline="Motion Graphics by Chrissy Wang & Yesy Lopez · UNC Hussman Production Team · 2024"
  />

  <h2 class="section-title">PERSONAL PROJECTS</h2>

  <PreviewCard
    href="{base}/animation/rising-coast"
    imageSrc="https://i.ytimg.com/vi/3DZzJCx1vNk/maxresdefault.jpg"
    imageAlt="Rising Coast, Rising Cost"
    overlayText="Watch →"
    label="VISUAL DISCOVERY 2024 · MIAMI"
    title="Rising Coast, Rising Cost"
    subtitle=""
    description="Created at the Visual Discovery 2024 Conference in Miami."
    byline="Animation by Chrissy Wang · Animation Design by Elian · June 2024"
  />

  <PreviewCard
    href="{base}/animation/mission-impossible"
    imageSrc="https://i.ytimg.com/vi/AS3PO9cRWOI/maxresdefault.jpg"
    imageAlt="Mission Impossible Title Sequence Recreation"
    overlayText="Watch →"
    label="TITLE SEQUENCE RECREATION"
    title="Mission Impossible — Title Sequence"
    subtitle=""
    description="A recreation of the iconic Mission Impossible opening title sequence using motion graphics."
    byline="By Chrissy Wang & Christian Baudet · March 2024"
  />
</section>

<style>
  .listing-page {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
  }

  .page-title {
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 3px;
    color: #999;
    margin-bottom: 2.5rem;
  }

  :global(.listing-page .project-card + .project-card) {
    margin-top: 3rem;
  }

  .section-title {
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 3px;
    color: #c4a776;
    margin: 4rem 0 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #e8e8e8;
  }

  @media (max-width: 768px) {
    .listing-page {
      width: 95%;
      padding: 1.5rem 1rem 3rem;
    }
  }
</style>