<script>
</script>

<svelte:head>
  <title>2024 UNC Women's Soccer NCAA Championship | Chrissy Wang Portfolio</title>
</svelte:head>

<article class="mg-project">
  <div class="video-hero">
    <iframe
      src="https://www.youtube.com/embed/jk_Lj-wW818"
      title="UNC 2024 Women's Soccer NCAA Championship"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <header class="project-header">
    <span class="project-label">CHAMPIONSHIP DOCUMENTARY</span>
    <h1 class="project-title">UNC 2024 Women's Soccer NCAA Championship</h1>
    <p class="project-subtitle">North Carolina Women's Soccer approached a crossroads entering the 2024 season. Roster turnover, retirement of a legend and chatter that the program's iconic stature was just a memory. Follow along with the Tar Heels and Coach Damon Nahas as they recount how all of the adversity served as motivation for a magical National Championship season.</p>
    <div class="project-divider"></div>
  </header>

  <div class="project-meta">
    <div class="meta-item">
      <span class="meta-label">Production</span>
      <span class="meta-value">UNC Hussman Production Team</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Year</span>
      <span class="meta-value">2024</span>
    </div>
  </div>

  <div class="project-credits">
    <div class="credit-block highlight">
      <h3 class="credit-heading">Motion Graphics</h3>
      <p class="credit-names">Chrissy Wang &amp; Yesy Lopez</p>
      <p class="credit-tools">Photoshop · Illustrator · After Effects</p>
    </div>
  </div>
</article>

<style>
  .mg-project {
    max-width: 960px;
    width: 90%;
    margin: 2rem auto 4rem;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
  }

  .video-hero {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
    margin-bottom: 2.5rem;
  }

  .video-hero iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .project-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .project-label {
    display: inline-block;
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    color: #c4a776;
    margin-bottom: 0.6rem;
  }

  .project-title {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #222;
    margin: 0;
    line-height: 1.3;
  }

  .project-divider {
    width: 50px;
    height: 1px;
    background: #c4a776;
    margin: 1.5rem auto 0;
  }

  .project-subtitle {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #666;
    margin: 1rem 0 0;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    font-family: var(--font-serif, Georgia, serif);
  }

  .project-meta {
    display: flex;
    justify-content: center;
    gap: 3rem;
    padding: 1.5rem 0;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 2.5rem;
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }

  .meta-label {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #bbb;
  }

  .meta-value {
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #444;
  }

  .project-credits {
    max-width: 500px;
    margin: 0 auto;
  }

  .credit-block {
    text-align: center;
    padding: 1.5rem 2rem;
    border-radius: 6px;
  }

  .credit-block.highlight {
    background: #faf8f5;
    border: 1px solid #ebe6dd;
  }

  .credit-heading {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #c4a776;
    margin: 0 0 0.5rem;
  }

  .credit-names {
    font-size: 1.05rem;
    font-weight: 600;
    color: #333;
    margin: 0 0 0.3rem;
  }

  .credit-tools {
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    color: #aaa;
    margin: 0;
  }

  @media (max-width: 768px) {
    .mg-project {
      width: 95%;
      margin: 1rem auto 3rem;
    }

    .project-title {
      font-size: 1.4rem;
    }

    .project-meta {
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;
    }
  }
</style>
