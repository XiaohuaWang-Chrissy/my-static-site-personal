<script>
  let {
    href = "",
    imageSrc = "",
    imageAlt = "",
    overlayText = "View Project →",
    label = "",
    title = "",
    subtitle = "",
    date = "",
    description = "",
    byline = "",
    note = "",
    external = false,
    links = [] // 可选：[{ href, text }]。给了多个链接时，卡片不再整体可点，图片链到第一个
  } = $props();
</script>

{#if links.length}
  <div class="project-card multi-link">
    <a href={links[0].href} target="_blank" rel="noopener noreferrer" class="project-image">
      <img src={imageSrc} alt={imageAlt} />
      <div class="image-overlay">
        <span class="overlay-text">{overlayText}</span>
      </div>
    </a>
    <div class="project-info">
      {#if label}<span class="project-label">{label}</span>{/if}
      <h2 class="project-title">{title}</h2>
      {#if subtitle}<p class="project-subtitle">{subtitle}</p>{/if}
      {#if date}<p class="project-date">{date}</p>{/if}
      {#if description}<p class="project-description">{description}</p>{/if}
      {#if note}<p class="project-note">{note}</p>{/if}
      <ul class="project-links">
        {#each links as link (link.href)}
          <li><a href={link.href} target="_blank" rel="noopener noreferrer">{link.text} ↗</a></li>
        {/each}
      </ul>
    </div>
  </div>
{:else if external}
  <a {href} target="_blank" rel="noopener noreferrer" class="project-card">
    <div class="project-image">
      <img src={imageSrc} alt={imageAlt} />
      <div class="image-overlay">
        <span class="overlay-text">{overlayText}</span>
      </div>
    </div>
    <div class="project-info">
      {#if label}<span class="project-label">{label}</span>{/if}
      <h2 class="project-title">{title}</h2>
      {#if subtitle}<p class="project-subtitle">{subtitle}</p>{/if}
      {#if date}<p class="project-date">{date}</p>{/if}
      {#if description}<p class="project-description">{description}</p>{/if}
      {#if note}<p class="project-note">{note}</p>{/if}
    </div>
  </a>
{:else}
  <a {href} class="project-card">
    <div class="project-image">
      <img src={imageSrc} alt={imageAlt} />
      <div class="image-overlay">
        <span class="overlay-text">{overlayText}</span>
      </div>
    </div>
    <div class="project-info">
      {#if label}<span class="project-label">{label}</span>{/if}
      <h2 class="project-title">{title}</h2>
      {#if subtitle}<p class="project-subtitle">{subtitle}</p>{/if}
      {#if date}<p class="project-date">{date}</p>{/if}
      {#if description}<p class="project-description">{description}</p>{/if}
      {#if note}<p class="project-note">{note}</p>{/if}
    </div>
  </a>
{/if}

<style>
  .project-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--paper);
    text-decoration: none;
    color: inherit;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
  }

  .project-card:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  .project-image {
    position: relative;
    overflow: hidden;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.03);
  }

  .image-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .image-overlay {
    opacity: 1;
  }

  .overlay-text {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0.7rem 1.8rem;
  }

  .project-info {
    padding: 2.5rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .project-label {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--unc-blue-ink);
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .project-title {
    font-family: var(--font-body);
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.3;
    margin: 0 0 0.5rem;
    color: #111;
  }

  .project-subtitle {
    font-family: var(--font-body);
    font-size: 1rem;
    color: #888;
    margin: 0 0 0.5rem;
    font-weight: 400;
    font-style: italic;
  }

  .project-date {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.95rem;
    color: #666;
    margin: 0 0 1rem;
  }

  .project-description {
    font-family: var(--font-body);
    font-size: 0.95rem;
    line-height: 1.7;
    color: #555;
    margin: 0 0 1.2rem;
  }

  .project-note {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.82rem;
    line-height: 1.6;
    color: #888;
    margin: 0 0 1.2rem;
    padding-top: 0.9rem;
    border-top: 1px solid #eee;
  }

  .project-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .project-links a {
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--unc-blue-ink);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }

  .project-links a:hover {
    border-bottom-color: var(--unc-blue-ink);
  }

  @media (max-width: 768px) {
    .project-card {
      grid-template-columns: 1fr;
    }

    .project-image {
      aspect-ratio: 16 / 10;
    }

    .project-info {
      padding: 1.5rem 1.5rem 2rem;
    }

    .project-title {
      font-size: 1.4rem;
    }
  }
</style>
