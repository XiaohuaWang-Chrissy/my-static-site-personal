<script>
  import { base } from '$app/paths';
  import PreviewCard from '../PreviewCard.svelte';
</script>

<svelte:head>
  <title>Documentary | Chrissy Wang Portfolio</title>
</svelte:head>

<section class="listing-page">
  <h1 class="page-title">DOCUMENTARY</h1>

  <PreviewCard
    href="{base}/documentary/la-forma-del-diamante"
    imageSrc="{base}/documentary-cover.jpg"
    imageAlt="La Forma del Diamante"
    overlayText="Watch Film →"
    label="SHORT DOCUMENTARY"
    title="La Forma del Diamante"
    subtitle="The Shape of a Diamond"
    description="In a country where inflation runs faster than time, Marisol Fernández is trying to rebuild herself. She crossed borders for love, and returned home with scars. A story about work, survival, and self-worth — about shining, even when it hurts."
    byline="Directed by Chrissy Wang and Jing Chen · Buenos Aires, Argentina · April 2025"
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

  @media (max-width: 768px) {
    .listing-page {
      width: 95%;
      padding: 1.5rem 1rem 3rem;
    }
  }
</style>
