<script>
  let selectedIndex = $state(-1);

  const photos = [
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/1-scaled.jpg?resize=2048%2C1365&ssl=1",
      alt: "Daniel Wright stands in flood-damaged home",
      caption: "Daniel Wright stands in the back of his flood-damaged home in Swannanoa, N.C., on Oct. 26, 2024. After flood waters filled his house with mud and debris, Wright has spent weeks clearing out ruined belongings. The rebuilding is still ongoing. \"You don't think your life will change indefinitely in just a few hours,\" Wright said."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/2-scaled.jpg?resize=2048%2C1365&ssl=1",
      alt: "Mud-covered car in Beacon Village",
      caption: "A mud-covered car sits abandoned in the Beacon Village neighborhood in Swannanoa, N.C., on Oct. 25, 2024. Cleanup has been slow for residents like Daniel Wright, who said it took days with 10 to 12 people shoveling heavy, thick mud out of flooded homes."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/3-scaled.jpg?resize=2048%2C1365&ssl=1",
      alt: "Daniel Wright in exposed home structure",
      caption: "Daniel Wright stands in the exposed structure of his home in Swannanoa, N.C., on Oct. 25, 2024. Cleanup requires heavy equipment, including a backhoe to clear debris and mud from around the house. The process has involved tearing up floors, taking down walls, removing the ceiling, and discarding insulation and other porous materials that could harbor mud, water, bacteria and mold."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/4-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Muddy football jersey on debris",
      caption: "A muddy football jersey hangs on a pile of debris in the Beacon Village neighborhood in Swannanoa, N.C., on Oct. 26, 2024. Daniel Wright recalled the first day after the flood: \"It was a long day—eight or nine hours felt like days. We were tired, wet, cold, and hungry, just trying to make sense of what was happening. It was the first taste of what the next little while would be like,\" he said."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/5-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Pat Gowan searching through debris",
      caption: "Pat Gowan searches through debris at her family's Triple C Campground in Marion, N.C., on Oct. 8, 2024, hoping to find belongings lost during Hurricane Helene. She and her husband, Charlie Gowan, had planned to celebrate the campground's 50th anniversary next year, but those plans now seem unlikely."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/7-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Damaged building at Triple C Campground",
      caption: "The exterior of a damaged building at Triple C Campground bears visible scars from the flood and a door lies partially buried in mud. According to the U.S. Geological Survey, floodwaters in Buck Creek near the campground surged to a record 21.44 feet—an increase of about 1,389% above the normal depth."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/tripleC-story-4-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Interior of house at Triple C Campground",
      caption: "The interior of a house at Triple C Campground in Marion, N.C., on Oct. 8, 2024. Insulation and debris scattered across the now-dried mud, and parts of the ceiling have collapsed."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/11-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Samaritan's Purse volunteers clearing debris",
      caption: "Volunteers from Samaritan's Purse clear debris from a house in Swannanoa, N.C., on Oct. 26, 2024. The faith-based disaster relief organization has mobilized volunteers to remove mud, salvage personal belongings, and clear yards to prepare homes for repairs. Samaritan's Purse airdropped essentials, including generators, Starlink devices, baby supplies and drinking water in the early days following the hurricane."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/10-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Flooded basement with belongings in mud",
      caption: "The flooded basement of the house that Samaritan's Purse worked on in Swannanoa, N.C., on Oct. 26, 2024, had belongings submerged in mud. Volunteers from Samaritan's Purse are working to clear four feet of mud, salvage personal items and remove debris. \"There's always a huge rush of volunteers in the beginning of the disaster, and then it wanes when the media stops covering it,\" said Jodie Yoder, program manager for U.S. disaster relief with Samaritan's Purse. \"But the need is still here.\""
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/20.jpg?resize=1536%2C1023&ssl=1",
      alt: "Reeda and Nora Ward in flood-damaged home",
      caption: "Reeda Ward (left) and her sister Nora Ward stand in a room packed with belongings moved from other parts of Reeda's flood-damaged home in Saluda, N.C., on Oct. 27, 2024, as repairs begin in the rest of the house. The hurricane dumped more than 15 inches of rain, triggered mudslides that cut off major roads, and left Saluda without power or clean water for days."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/11/5-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Cayte Gowan serving free meals",
      caption: "Cayte Gowan serves free meals to residents and volunteers in the Ingles parking lot in Swannanoa, N.C., on Oct. 26, 2024. Gowan is a professional chef who lost her job after Hurricane Helene. Gowan prepares meals including gluten-free, dairy-free, and vegan options, supported mostly by donations. \"I like seeing the joy in people's faces when they get hot food that's well flavored, that's safe for them,\" Gowan said. On her third day of service, a woman who had been vegan for 23 years cried with relief upon finding meals she could eat."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/13-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Climate Change signs on utility pole",
      caption: "Two handwritten signs on a wooden utility pole read, \"Climate Change is Chaos\" and \"Climate Change is Death,\" in Swannanoa, N.C., on Oct. 26, 2024. The hurricane caused widespread damage, and recovery has been slow, with many homes still uninhabitable."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/9-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Overturned vehicle on eroded riverbank",
      caption: "An overturned vehicle rests on an eroded riverbank in Swannanoa, N.C., on Oct. 27, 2024. Significant erosion triggered landslides, stripped away trees and topsoil and left bedrock exposed. With no ground cover remaining, spring runoff is expected to worsen the risk of further landslides in the area."
    },
    {
      src: "https://i0.wp.com/mediahub.unc.edu/wp-content/uploads/2024/12/22-scaled.jpg?resize=1536%2C1024&ssl=1",
      alt: "Sign of encouragement amid destroyed gas station",
      caption: "A sign of encouragement stands amid the wreckage of a destroyed gas station in Swannanoa, N.C., on Oct. 26, 2024. Smaller communities like Swannanoa continue to face challenges — many lack the financial resources to rebuild, and rising costs are compounding their struggles. Rebuilding has been delayed as volunteers leave and donations decline."
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
  <title>Picking Up the Pieces in Western North Carolina | Chrissy Wang</title>
</svelte:head>

<article class="gallery-page">
  <header class="gallery-header">
    <p class="gallery-label">PHOTOJOURNALISM</p>
    <h1 class="gallery-title">Picking Up the Pieces in Western North Carolina</h1>
    <p class="gallery-byline">Photo Story by <strong>Chrissy Wang</strong></p>
    <p class="gallery-date">December 2, 2024</p>
    <p class="gallery-intro">
      Originally published on <a href="https://mediahub.unc.edu/picking-up-the-pieces-in-western-north-carolina/" target="_blank" rel="noopener">UNC Media Hub</a>
    </p>
  </header>

  <aside class="related-section">
    <p class="related-label">RELATED DOCUMENTARY</p>
    <a href="https://www.pbs.org/video/meet-the-local-heroes-rebuilding-western-nc-after-hurricane-helene-hrkbzz/" target="_blank" rel="noopener" class="related-card">
      <div class="related-badge">
        <span class="badge-icon">&#9654;</span>
        <span class="badge-text">PBS VIDEO</span>
      </div>
      <div class="related-info">
        <p class="related-series">Emmy Award–Winning Series</p>
        <h3 class="related-title">My Home, NC</h3>
        <p class="related-subtitle">Meet the Local Heroes Rebuilding Western NC After Hurricane Helene</p>
        <div class="related-credits">
          <div class="credit-row">
            <span class="credit-role">Director / Producer / DP / Editor</span>
            <span class="credit-name">Max Feliu</span>
          </div>
          <div class="credit-row">
            <span class="credit-role">Executive Producer</span>
            <span class="credit-name">Heather Burgiss</span>
          </div>
          <div class="credit-row">
            <span class="credit-role">Series Producers</span>
            <span class="credit-name">Emily Frachtling, Cliff Bumgardner</span>
          </div>
          <div class="credit-row highlight">
            <span class="credit-role">Contributing Reporters</span>
            <span class="credit-name">Chrissy Wang, Samantha Hoffman, Olivia Gschwind</span>
          </div>
          <div class="credit-row">
            <span class="credit-role">Archival Footage</span>
            <span class="credit-name">Food Network, WLOS News 13, Samaritans Purse</span>
          </div>
          <div class="credit-row">
            <span class="credit-role">Produced By</span>
            <span class="credit-name">UNC Media Hub &amp; Honors Carolina</span>
          </div>
        </div>
      </div>
      <span class="related-arrow">&#x2192;</span>
    </a>
  </aside>

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
  /* ── Page ── */
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

  /* ── Grid ── */
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

  /* ── Lightbox ── */
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

  /* ── Responsive ── */
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

    .related-card {
      flex-direction: column;
      padding: 1.5rem;
    }

    .related-arrow {
      display: none;
    }
  }

  /* ── Related Documentary ── */
  .related-section {
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-top: 2.5rem;
    border-top: 1px solid #e5e5e5;
  }

  .related-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 3px;
    color: #999;
    margin-bottom: 1.25rem;
  }

  .related-card {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    padding: 1.75rem 2rem;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    overflow: hidden;
    position: relative;
  }

  .related-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(196,167,118,0.08) 0%, transparent 60%);
    pointer-events: none;
  }

  .related-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 36px rgba(0,0,0,0.25);
  }

  .related-badge {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .badge-icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgba(196,167,118,0.2);
    border: 2px solid rgba(196,167,118,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: #c4a776;
  }

  .badge-text {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: rgba(196,167,118,0.8);
  }

  .related-info {
    flex: 1;
    min-width: 0;
  }

  .related-series {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: #c4a776;
    margin-bottom: 0.35rem;
    text-transform: uppercase;
  }

  .related-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    color: #fff;
    line-height: 1.3;
  }

  .related-subtitle {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.7);
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  .related-credits {
    margin-top: 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .credit-row {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    font-size: 0.72rem;
    line-height: 1.5;
  }

  .credit-role {
    flex-shrink: 0;
    color: rgba(255,255,255,0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.6rem;
    font-weight: 600;
    min-width: 140px;
    text-align: left;
  }

  .credit-name {
    color: rgba(255,255,255,0.75);
    font-weight: 500;
  }

  .credit-row.highlight .credit-name {
    color: #c4a776;
    font-weight: 600;
  }

  .related-arrow {
    flex-shrink: 0;
    font-size: 1.5rem;
    color: rgba(196,167,118,0.5);
    transition: color 0.2s ease, transform 0.2s ease;
  }

  .related-card:hover .related-arrow {
    color: #c4a776;
    transform: translateX(4px);
  }
</style>
