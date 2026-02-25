<script>
  let {
    title = "",
    subtitle = "",
    date = "",
    authors = "",
    description = "",
    imageSrc = "",
    imageAlt = "",
    location = "",
    videoUrl = ""
  } = $props();
</script>

<section class="doc-page">
  <!-- Hero video area -->
  <div class="doc-hero">
    <div class="doc-media">
      {#if videoUrl}
        <div class="doc-video">
          <iframe
            src={videoUrl}
            title={title}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      {:else if imageSrc}
        <img src={imageSrc} alt={imageAlt} class="doc-image" />
      {/if}
    </div>
  </div>

  <!-- Title block -->
  <div class="doc-header">
    <h1 class="doc-title">{title}</h1>
    <p class="doc-subtitle">{subtitle}</p>
    <div class="doc-divider"></div>
  </div>

  <!-- Meta row -->
  <div class="doc-meta">
    <div class="doc-meta-item">
      <span class="meta-label">Date</span>
      <span class="meta-value">{date}</span>
    </div>
    {#if location}
      <div class="doc-meta-item">
        <span class="meta-label">Location</span>
        <span class="meta-value">{location}</span>
      </div>
    {/if}
    <div class="doc-meta-item">
      <span class="meta-label">Directed by</span>
      {#each authors.split(',') as author}
        <span class="meta-value">{author.trim()}</span>
      {/each}
    </div>
  </div>

  <!-- Description -->
  <div class="doc-description">
    {#each description.split('\n') as line}
      <p>{line}</p>
    {/each}
  </div>
</section>

<style>
  .doc-page {
    max-width: 960px;
    width: 90%;
    margin: 2rem auto 4rem;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    color: #3a3a3a;
  }

  /* ── Hero Video ── */
  .doc-hero {
    width: 100%;
    margin-bottom: 2.5rem;
  }

  .doc-media {
    width: 100%;
  }

  .doc-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .doc-video {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }

  .doc-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  /* ── Title ── */
  .doc-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .doc-title {
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 0;
    color: #222;
    text-transform: uppercase;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
  }

  .doc-subtitle {
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 3px;
    margin: 0.5rem 0 0;
    color: #999;
    text-transform: uppercase;
  }

  .doc-divider {
    width: 50px;
    height: 1px;
    background: #c4a776;
    margin: 1.5rem auto 0;
  }

  /* ── Meta Row ── */
  .doc-meta {
    display: flex;
    justify-content: center;
    gap: 3rem;
    padding: 1.5rem 0;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 2.5rem;
  }

  .doc-meta-item {
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
    text-transform: uppercase;
  }

  /* ── Description ── */
  .doc-description {
    max-width: 640px;
    margin: 0 auto;
    text-align: left;
  }

  .doc-description p {
    font-size: 0.95rem;
    line-height: 1.8;
    color: #666;
    margin: 0 0 0.6rem;
    font-family: var(--font-serif, Georgia, serif);
    font-style: italic;
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .doc-page {
      width: 95%;
      margin: 1rem auto 3rem;
    }

    .doc-title {
      font-size: 1.6rem;
    }

    .doc-subtitle {
      font-size: 0.9rem;
    }

    .doc-meta {
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;
    }

    .doc-description p {
      font-size: 0.88rem;
    }
  }
</style>
