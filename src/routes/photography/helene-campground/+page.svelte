<script>
  let selectedIndex = $state(-1);

  const photos = [
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-1-scaled.jpg?w=2560",
      alt: "Entrance to Triple C Campground surrounded by debris",
      caption: "The entrance to Triple C Campground in Marion, N.C., surrounded by debris and caution tape on Oct. 8, 2024, after Hurricane Helene caused severe flooding. On the morning of Sept. 27, 2024, floodwaters swept down from the mountains, carrying away cars and flooding homes, forcing residents to escape through windows."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-2-scaled.jpg?w=2560",
      alt: "Charlie Gowan in front of damaged house",
      caption: "Charlie Gowan stands in front of a house at Triple C Campground in Marion, N.C., on Oct. 8, 2024. The campground, set to celebrate its 50th anniversary next year, is now buried under mud and fallen trees after Hurricane Helene. Gowan grew up playing by the creek and later worked at the campground after getting married. He now faces the damage left by the storm. The floodwaters lifted the house off its foundation."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-3-scaled.jpg?w=2560",
      alt: "House with water stains from floodwaters",
      caption: "A house at Triple C Campground in Marion, N.C., shows water stains from the floodwaters of Hurricane Helene. As water rushed in, the Gowan family escaped through a back window and climbed a hill. Pat and Charlie Gowan said it was confusing at first, but then they realized none of the decisions they were trying to make mattered—they just had to keep moving."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-4-scaled.jpg?w=2560",
      alt: "Interior of damaged house with debris on floor",
      caption: "The interior of a house at Triple C Campground in Marion, N.C., on Oct. 8, 2024. Insulation and debris is scattered across the floor after Hurricane Helene swept through. Floodwaters left the space heavily damaged, with mud covering the ground. Parts of the ceiling collapsed."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-5-scaled.jpg?w=2560",
      alt: "Pat Gowan holds mud-covered poster of her son",
      caption: "Pat Gowan holds a poster of her son, Joseph Gowan, from the 2023 BASS Western North Carolina High School and Junior Series, covered in mud following Hurricane Helene, at the flood-ravaged Triple C Campground in Marion, N.C., on Oct. 8, 2024."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-6-scaled.jpg?w=2560",
      alt: "Pat Gowan searching through debris",
      caption: "Pat Gowan searches through debris at Triple C Campground in Marion, N.C., on Oct. 8, 2024, trying to find her belongings lost during Hurricane Helene. Here she picks up a necklace. She hopes to find her wedding ring, which was swept away during the hurricane."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-7-scaled.jpg?w=2560",
      alt: "Mud-stained photo of Pat and Charlie Gowan",
      caption: "A mud-stained photo of Pat and Charlie Gowan from their younger years, found among the debris at Triple C Campground in Marion, N.C., on Oct. 8, 2024."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-8-scaled.jpg?w=2560",
      alt: "Damaged electrical meter on building exterior",
      caption: "A damaged electrical meter hangs loose from the cracked exterior of a building at Triple C Campground in Marion, N.C., on Oct. 8, 2024. The Gowan family estimates that restoring power, water lines, and a sewer system will cost millions of dollars."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/10/tripleC-story-9-scaled.jpg?w=2560",
      alt: "Pat and Charlie Gowan outside damaged home",
      caption: "Pat and Charlie Gowan outside their damaged home at Triple C Campground in Marion, N.C., on Oct. 8, 2024. The campground was their retirement plan, but now it's gone. Despite losing nearly everything to Hurricane Helene, they remain connected to the community that has rallied around them."
    }
  ];

  function openLightbox(index) {
    selectedIndex = index;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    selectedIndex = -1;
    document.body.style.overflow = '';
  }

  function prev() {
    selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : photos.length - 1;
  }

  function next() {
    selectedIndex = selectedIndex < photos.length - 1 ? selectedIndex + 1 : 0;
  }

  function handleKeydown(e) {
    if (selectedIndex < 0) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>Hurricane Helene Destroys 49-Year-Old Campground | Chrissy Wang</title>
</svelte:head>

<article class="gallery-page">
  <header class="gallery-header">
    <p class="gallery-label">PHOTOJOURNALISM</p>
    <h1 class="gallery-title">Hurricane Helene Destroys 49-Year-Old Campground</h1>
    <p class="gallery-byline">Photo Story by <strong>Chrissy Wang</strong></p>
    <p class="gallery-date">October 23, 2024</p>
    <p class="gallery-intro">
      Originally published on <a href="https://mediahub.unc.edu/hurricane-helene-destroys-49-year-old-campground/" target="_blank" rel="noopener">UNC Media Hub</a>
    </p>
  </header>

  <div class="gallery-grid">
    {#each photos as photo, i}
      <button class="gallery-item" onclick={() => openLightbox(i)}>
        <img src={photo.src} alt={photo.alt} loading="lazy" />
        <div class="gallery-item-overlay">
          <span class="view-icon">&#x2B24;</span>
        </div>
      </button>
    {/each}
  </div>
</article>

<!-- Lightbox -->
{#if selectedIndex >= 0}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="lightbox" onclick={closeLightbox} tabindex="-1" role="dialog" aria-modal="true">
    <button class="lightbox-close" onclick={closeLightbox} aria-label="Close">&#x2715;</button>

    <button class="lightbox-nav lightbox-prev" onclick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">&#x2039;</button>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
      <img src={photos[selectedIndex].src} alt={photos[selectedIndex].alt} />
      <p class="lightbox-caption">{photos[selectedIndex].caption}</p>
      <p class="lightbox-counter">{selectedIndex + 1} / {photos.length}</p>
    </div>

    <button class="lightbox-nav lightbox-next" onclick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">&#x203A;</button>
  </div>
{/if}

<style>
  .gallery-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
  }

  .gallery-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .gallery-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 3px;
    color: #999;
    margin-bottom: 0.5rem;
  }

  .gallery-title {
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.75rem;
    color: #111;
  }

  .gallery-byline {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.25rem;
  }

  .gallery-date {
    font-size: 0.85rem;
    color: #999;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
  }

  .gallery-intro {
    font-size: 0.9rem;
    color: #888;
  }

  .gallery-intro a {
    color: #5192c9;
    text-decoration: underline;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background: #0a0a0a;
    border: none;
    padding: 0;
    line-height: 0;
    box-shadow: 0 2px 16px rgba(0,0,0,0.12);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }

  .gallery-item:hover {
    transform: scale(1.015);
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.4s ease, filter 0.4s ease;
    filter: contrast(1.03) saturate(1.05);
  }

  .gallery-item:hover img {
    opacity: 0.65;
    filter: contrast(1.06) saturate(1.1);
  }

  .gallery-item-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .gallery-item:hover .gallery-item-overlay {
    opacity: 1;
  }

  .view-icon {
    color: rgba(255,255,255,0.9);
    font-size: 0.6rem;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(255,255,255,0.85);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    background: rgba(255,255,255,0.08);
  }

  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.94);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
    cursor: pointer;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .lightbox-close {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    background: none;
    border: none;
    color: rgba(255,255,255,0.7);
    font-size: 1.6rem;
    cursor: pointer;
    z-index: 10;
    transition: color 0.2s ease;
    line-height: 1;
  }

  .lightbox-close:hover {
    color: #fff;
  }

  .lightbox-content {
    max-width: 80vw;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: default;
    animation: scaleIn 0.3s ease;
  }

  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  .lightbox-content img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    display: block;
    box-shadow: 0 4px 60px rgba(0,0,0,0.5);
    filter: contrast(1.03) saturate(1.05);
  }

  .lightbox-caption {
    color: rgba(255,255,255,0.82);
    font-size: 0.9rem;
    line-height: 1.65;
    max-width: 650px;
    text-align: center;
    margin-top: 1.5rem;
    padding: 0 1rem;
    font-family: var(--font-serif, Georgia, 'Times New Roman', serif);
  }

  .lightbox-counter {
    color: rgba(255,255,255,0.4);
    font-size: 0.75rem;
    letter-spacing: 2px;
    margin-top: 0.75rem;
  }

  .lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255,255,255,0.5);
    font-size: 3.5rem;
    cursor: pointer;
    padding: 1rem;
    transition: color 0.2s ease;
    line-height: 1;
    z-index: 10;
  }

  .lightbox-nav:hover {
    color: rgba(255,255,255,0.9);
  }

  .lightbox-prev {
    left: 1rem;
  }

  .lightbox-next {
    right: 1rem;
  }

  @media (max-width: 768px) {
    .gallery-title {
      font-size: 1.8rem;
    }

    .gallery-grid {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }

    .lightbox-content {
      max-width: 95vw;
    }

    .lightbox-content img {
      max-height: 60vh;
    }

    .lightbox-caption {
      font-size: 0.8rem;
    }

    .lightbox-nav {
      font-size: 2.5rem;
      padding: 0.5rem;
    }

    .lightbox-prev {
      left: 0.25rem;
    }

    .lightbox-next {
      right: 0.25rem;
    }
  }
</style>
