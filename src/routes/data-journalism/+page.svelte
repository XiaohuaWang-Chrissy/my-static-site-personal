<script>
  import { base } from '$app/paths';
  import PreviewCard from '../PreviewCard.svelte';
</script>

<svelte:head>
  <title>Data Journalism | Chrissy Wang Portfolio</title>
</svelte:head>

<section class="listing-page">
  <h1 class="page-title">DATA JOURNALISM</h1>

  <PreviewCard
    href="{base}/data-journalism/retail-sales"
    imageSrc="{base}/cover-image.png"
    imageAlt="Retail sales story cover"
    overlayText="Read Article →"
    label="BUSINESS JOURNALISM"
    title="Winter Storms May Deepen Economic Chill After Retail Sales Stagnant in December"
    date="February 10, 2026"
    description="Retail sales growth remained stagnant in December, and economists say the downward trend will probably continue into January. An in-depth data story examining retail decline, labor market cooling, and what it means for Fed policy."
    byline="Reporting and data analysis by Chrissy Wang"
  />

  <PreviewCard
    href="{base}/data-journalism/bacop"
    imageSrc="{base}/BACOP1WEB.jpg"
    imageAlt="BACOP patrol car in Brooklyn Chinatown"
    overlayText="Read Article →"
    label="COMMUNITY SAFETY"
    title="BACOP Patrols Brooklyn Chinatown Nightly"
    date="October 2025"
    description="Every night from 10 p.m. to 2 a.m., four volunteers drive two cars through Sunset Park. They are not police — they are members of a group that has spent 11 years working to keep their community safe."
    byline="Reporting and data analysis by Chrissy Wang"
  />

  <PreviewCard
    href="{base}/data-journalism/bird-collisions"
    imageSrc="{base}/bird-story-cover-image.webp"
    imageAlt="Bird window collision"
    overlayText="Read Article →"
    label="ENVIRONMENT"
    title="Making Windows Safer for Birds"
    date="December 2024"
    description="Each year, up to 1 billion birds in the United States die from crashing into windows. From UNC-Chapel Hill to Duke, campus initiatives are documenting collisions and retrofitting buildings with bird-safe film."
    byline="Reporting, data analysis and photography by Chrissy Wang"
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
