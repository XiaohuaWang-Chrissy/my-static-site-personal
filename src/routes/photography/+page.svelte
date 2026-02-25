<script>
  import { base } from '$app/paths';
  import PreviewCard from '../PreviewCard.svelte';
</script>

<svelte:head>
  <title>Photography | Chrissy Wang Portfolio</title>
</svelte:head>

<section class="listing-page">
  <h1 class="page-title">PHOTOGRAPHY</h1>

  <h2 class="section-title">PHOTOJOURNALISM</h2>

  <PreviewCard
    href="{base}/photography/western-nc"
    imageSrc="https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/1-scaled.jpg?resize=2048%2C1365&ssl=1"
    imageAlt="Flood damage in Swannanoa, North Carolina"
    overlayText="View Gallery →"
    label="PHOTOJOURNALISM"
    title="Picking Up the Pieces in Western North Carolina"
    date="December 2, 2024"
    description="After Hurricane Helene ravaged Western North Carolina, communities in Swannanoa, Marion, and Saluda face a long road to recovery. A photo story documenting the aftermath — the destruction, the volunteers, and the resilience."
    byline="Photo story by Chrissy Wang · Published on UNC Media Hub"
  />

  <PreviewCard
    href="{base}/photography/helene-campground"
    imageSrc="https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-1-scaled.jpg?w=2560"
    imageAlt="Triple C Campground destroyed by Hurricane Helene"
    overlayText="View Gallery →"
    label="PHOTOJOURNALISM"
    title="Hurricane Helene Destroys 49-Year-Old Campground"
    date="October 23, 2024"
    description="Hurricane Helene wiped out Triple C Campground in Marion, N.C. — a family business set to celebrate its 50th anniversary. Pat and Charlie Gowan lost nearly everything but remain connected to the community that has rallied around them."
    byline="Photo story by Chrissy Wang · Published on UNC Media Hub"
  />

  <h2 class="section-title">FILM PHOTOGRAPHY</h2>
  <p class="section-placeholder">Coming soon.</p>
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

  .section-title {
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    color: #c4a776;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  .section-placeholder {
    font-size: 1rem;
    color: #aaa;
    font-style: italic;
    margin-bottom: 3rem;
  }

  .listing-page :global(.project-card) {
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    .listing-page {
      width: 95%;
      padding: 1.5rem 1rem 3rem;
    }
  }
</style>
