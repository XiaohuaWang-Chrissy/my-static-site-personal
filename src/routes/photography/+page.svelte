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
    imageSrc="{base}/hbj-latino-learning-center.jpg"
    imageAlt="Latino Learning Center President and CEO Rodolfo González at a window inside the center"
    overlayText="View Story →"
    label="PHOTO STORY"
    title="Inside the Latino Learning Center, Seeking Funds for $7M Renovations"
    date="July 17, 2026"
    description="A tour of a century-old East Downtown Houston nonprofit, largely shut since 2024 after a promised federal grant fell through. The photo story ran alongside that week's Houston Business Journal cover story."
    byline="Photos by Chrissy Wang · Story by Chrissy Wang and Janet Miranda · Published in Houston Business Journal"
    links={[
      {
        href: 'https://www.bizjournals.com/houston/news/2026/07/17/houston-latino-learning-center-photo-story.html',
        text: 'View the photo story on HBJ'
      },
      {
        href: `${base}/hbj-latino-learning-center-print.pdf`,
        text: 'See the print cover (PDF)'
      }
    ]}
  />

  <PreviewCard
    href="{base}/photography/western-nc"
    imageSrc="https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/1-scaled.jpg?resize=2048%2C1365&ssl=1"
    imageAlt="Flood damage in Swannanoa, North Carolina"
    overlayText="View Gallery →"
    label="PHOTOJOURNALISM"
    title="Picking Up the Pieces in Western North Carolina"
    date="December 2, 2024"
    description="After Hurricane Helene ravaged Western North Carolina, communities in Swannanoa, Marion, and Saluda face a long road to recovery."
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
    description="Hurricane Helene wiped out Triple C Campground in Marion, N.C. — a family business set to celebrate its 50th anniversary."
    byline="Photo story by Chrissy Wang · Published on UNC Media Hub"
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
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 3px;
    color: #999;
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    color: var(--unc-blue-ink);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
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
