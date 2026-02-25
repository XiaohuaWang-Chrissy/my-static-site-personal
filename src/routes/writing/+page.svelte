<script>
  import { base } from '$app/paths';
  import PreviewCard from '../PreviewCard.svelte';
</script>

<svelte:head>
  <title>Writing | Chrissy Wang Portfolio</title>
</svelte:head>

<section class="listing-page">
  <h1 class="page-title">WRITING</h1>

  <PreviewCard
    href="https://XiaohuaWang-Chrissy.github.io/Project_Fire/"
    external={true}
    imageSrc="{base}/project-fire-cover.jpg"
    imageAlt="One Sunset Park Condominium"
    overlayText="View Project →"
    label="INVESTIGATIVE JOURNALISM"
    title="A Burned-Out Sunset Park Condo Is Stuck Between Insurance Gaps and Tenant Rights"
    subtitle="A Legal Limbo in Sunset Park, Brooklyn"
    date="December 22, 2025"
    description="Six and a half years after a candle fire ignited One Sunset Park Condominium in Sunset Park, Brooklyn, homeowners found themselves trapped in a rare legal dispute due to gaps within the insurance plan. An investigative story with data visualizations exploring the intersection of insurance gaps, tenant rights, and housing policy."
    byline="Reporting, data analysis, photography and web design by Chrissy Wang"
  />

  <PreviewCard
    href="{base}/writing/nyc-marathon"
    imageSrc="{base}/NYC_marathon.jpg"
    imageAlt="New York City Marathon"
    overlayText="Read Story →"
    label="WRITING"
    title="Every Mile Counts: Behind NYC Marathon's Precision"
    subtitle="Accurate timing is crucial — especially in an event this large"
    date="November 2025"
    description="Richard Blake III has timed the NYC Marathon at the five-mile mark for eight years. This story follows the people behind the clocks — from the split-course timing stations in Sunset Park to the cheering crowds at Central Park."
    byline="By Chrissy Wang"
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

  .listing-page :global(.project-card + .project-card) {
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    .listing-page {
      width: 95%;
      padding: 1.5rem 1rem 3rem;
    }
  }
</style>
