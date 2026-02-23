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

<section class="doc-card">
  <h1 class="doc-title">{title}</h1>
  <h2 class="doc-subtitle">{subtitle}</h2>

  <div class="doc-main">
    <div class="doc-date">{date}
      {#if location}<span class="doc-location">{location}</span>{/if}
    </div>

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

    <div class="doc-authors">
      <span class="by-label">BY</span>
      {#each authors.split(',') as author}
        <span class="author-name">{author.trim()}</span>
      {/each}
    </div>
  </div>

  <div class="doc-description">
    {#each description.split('\n') as line}
      <p>{line}</p>
    {/each}
  </div>
</section>

<style>
  .doc-card {
    max-width: 1200px;
    width: 90%;
    margin: 2rem auto;
    padding: 3rem 3.5rem;
    background: #f9f8f6;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    color: #3a3a3a;
  }

  .doc-title {
    text-align: center;
    font-size: 2.6rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 0;
    color: #333;
    text-transform: uppercase;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
  }

  .doc-subtitle {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 0.4rem 0 2rem;
    color: #666;
    text-transform: uppercase;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
  }

  .doc-main {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .doc-date {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #555;
    text-align: center;
  }

  .doc-location {
    display: block;
    margin-top: 0.4rem;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    color: #888;
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
  }

  .doc-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .doc-authors {
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #555;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .by-label {
    font-size: 0.75rem;
    letter-spacing: 3px;
    margin-bottom: 0.3rem;
  }

  .author-name {
    font-weight: 500;
    font-size: 0.9rem;
    color: #333;
  }

  .doc-description {
    max-width: 700px;
    margin: 0 auto;
  }

  .doc-description p {
    font-size: 0.85rem;
    line-height: 1.7;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #555;
    margin: 0 0 0.3rem;
  }

  @media (max-width: 768px) {
    .doc-card {
      width: 95%;
      padding: 2rem 1.5rem;
    }

    .doc-title {
      font-size: 1.6rem;
    }

    .doc-subtitle {
      font-size: 1.1rem;
    }

    .doc-main {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .doc-date,
    .doc-authors {
      text-align: center;
    }
  }
</style>
