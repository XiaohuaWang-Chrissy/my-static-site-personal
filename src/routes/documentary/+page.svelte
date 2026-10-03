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
    description="In a country where inflation runs faster than time, Marisol Fernández is trying to rebuild herself."
    byline="Directed by Chrissy Wang and Jing Chen · Buenos Aires, Argentina · April 2025"
    note={"La Forma del Diamante was produced for Almas al Viento, under Economy: Hustles and Survival (Gig Work and Multiple Jobs Now Defining Life in Buenos Aires)."}
  />

  <PreviewCard
    href="{base}/documentary/home-burma"
    imageSrc="https://i.ytimg.com/vi/QRJinFZrSRM/maxresdefault.jpg"
    imageAlt="Home, Burma"
    overlayText="Watch Film →"
    label="SHORT DOCUMENTARY"
    title="Home, Burma"
    subtitle=""
    description="What does home mean?"
    byline="By Chrissy Wang and Jing Chen · In collaboration with UCA Waves · Funded by Blue Cross and Blue Shield of NC · February 2025"
    note={"Home, Burma was created as Aim 6 (Video Project) of UCA WAVES’ report “Identifying AAPI Health Priorities in North Carolina,” prepared for the Blue Cross NC Foundation."}
  />

  <PreviewCard
    href="{base}/documentary/the-dream-gym"
    imageSrc="https://i.vimeocdn.com/video/1673840336-54c0e982badd5c0abd53297ae9737d4de676f7539e56baef7f5dc29b9482a082-d"
    imageAlt="The Dream Gym"
    overlayText="Watch Film →"
    label="SHORT DOCUMENTARY"
    title="The Dream Gym"
    subtitle=""
    description="Miles Avery, a four-time Olympic coach, is still loving coaching at the age of 64."
    byline="By Chrissy Wang · Fletcher, NC · May 2023"
    note={"The Dream Gym was produced for Hallowed Hills, the 2023 Carolina Photojournalism Workshop project."}
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

  :global(.listing-page .project-card + .project-card) {
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    .listing-page {
      width: 95%;
      padding: 1.5rem 1rem 3rem;
    }
  }
</style>
