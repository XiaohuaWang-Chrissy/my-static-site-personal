<script>
  import { base } from '$app/paths';

  let funFactIndex = $state(0);
  let showEmail = $state(false);
  const funFacts = [
    'My Chinese name is 小花 — it means "little flower." 🌸',
    'I once timed the NYC Marathon at the five-mile mark in Sunset Park.',
    'I\'ve documented Hurricane Helene aftermath across three NC towns in one week.',
    'My first documentary was about a 64-year-old Olympic gymnastics coach.',
    'I traveled to Miami for a visual storytelling conference and made an animation about rising sea levels.',
    'I filmed a diamond-cutting story in Buenos Aires — in Spanish.',
    'I patrol Brooklyn Chinatown at night... for a story, not as a vigilante. 🚔',
  ];
  function nextFact() {
    funFactIndex = (funFactIndex + 1) % funFacts.length;
  }
</script>

<svelte:head>
  <title>About | Chrissy Wang Portfolio</title>
</svelte:head>

<section class="about-page">

  <!-- ══ HERO ══ -->
  <div class="hero">
    <div class="hero-photo">
      <img src="{base}/IMG_1344.JPG" alt="Chrissy Wang" />
    </div>
    <div class="hero-text">
      <p class="hero-greeting">Hey, I'm</p>
      <h1 class="hero-name">Chrissy Wang</h1>
      <p class="hero-name-cn">汪小花</p>
      <p class="hero-tagline">
        I tell stories with <span class="highlight">data</span>,
        <span class="highlight">cameras</span>, and
        <span class="highlight">motion</span>.
      </p>
    </div>
  </div>


  <!-- ══ WHAT I DO (simple links) ══ -->
  <div class="roles-section">
    <h2 class="section-heading">What I Do</h2>
    <div class="role-cards simple">
      <a class="role-link" href="{base}/data-journalism" style="font-size: 0.9rem;">Data Journalist</a>
      <a class="role-link" href="{base}/documentary" style="font-size: 0.9rem;">Documentary Producer</a>
      <a class="role-link" href="{base}/animation" style="font-size: 0.9rem;">Motion Graphics Designer</a>
    </div>
  </div>

  <!-- ══ A LITTLE BIT MORE ABOUT ME (click to cycle) ══ -->
  <div class="fun-section">
    <h2 class="section-heading">A Little Bit More About Me</h2>
    <button class="fun-card" onclick={nextFact}>
      <span class="fun-text">{funFacts[funFactIndex]}</span>
      <span class="fun-hint">click for another →</span>
    </button>
  </div>

  <!-- ══ CONNECT LINKS (moved to bottom) ══ -->
  <div class="connect-links hero-connect">
    <a href="https://github.com/XiaohuaWang-Chrissy" target="_blank" rel="noopener" class="connect-btn">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/xiaohuawang/" target="_blank" rel="noopener" class="connect-btn">
      LinkedIn
    </a>
    <a href="{base}/" class="connect-btn">
      Portfolio
    </a>
    <button class="connect-btn email-btn" onclick={() => showEmail = !showEmail}>
      {showEmail ? 'xiaohuaw765@gmail.com' : 'Reveal Email'}
    </button>
  </div>

</section>

<style>
  /* ── base ── */
  .about-page {
    max-width: 860px;
    width: 90%;
    margin: 0 auto;
    padding: 3rem 1.5rem 5rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #222;
  }

  .section-heading {
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #c4a776;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }

  .section-sub {
    font-size: 0.9rem;
    color: #999;
    margin-bottom: 1.5rem;
  }

  /* ── hero ── */
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
  }

  .hero-photo {
    margin-bottom: 1.5rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-photo img {
    width: 260px;
    height: 260px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    transition: transform 0.4s ease;
  }

  .hero-photo img:hover {
    transform: scale(1.05) rotate(2deg);
  }

  .hero-text {
    flex: 1;
    text-align: left;
  }

  .hero-greeting {
    font-size: 1rem;
    color: #999;
    letter-spacing: 1px;
    margin: 0 0 0.3rem;
  }

  .hero-name {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.1;
  }

  .hero-name-cn {
    font-size: 1.6rem;
    font-weight: 300;
    color: #c4a776;
    margin: 0.3rem 0 1.2rem;
  }

  .hero-tagline {
    font-size: 1.15rem;
    line-height: 1.7;
    color: #444;
  }

  .highlight {
    color: #c4a776;
    font-weight: 600;
    transition: color 0.2s;
  }

  .highlight:hover {
    color: #7a5c3a;
  }

  .connect-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  /* ── role cards ── */
  .roles-section {
    margin-bottom: 2rem;
  }

  .role-cards.simple {
    display: flex;
    gap: 1.2rem;
    margin: 1.5rem 0 2.5rem;
    justify-content: flex-start;
  }
  .role-link {
    display: inline-block;
    padding: 1.1rem 2.2rem;
    background: #faf8f5;
    border: 2px solid #eee;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #7a5c3a;
    text-decoration: none;
    letter-spacing: 1px;
    transition: all 0.2s;
  }
  .role-link:hover {
    background: #c4a776;
    color: #fff;
    border-color: #c4a776;
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 4px 16px rgba(196, 167, 118, 0.13);
  }

  .role-detail {
    margin-top: 1.2rem;
    padding: 1.2rem 1.5rem;
    background: #faf8f5;
    border-left: 4px solid var(--accent);
    border-radius: 0 8px 8px 0;
    font-size: 1rem;
    line-height: 1.7;
    color: #333;
    animation: slideIn 0.3s ease;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── skills ── */
  .skills-section {
    margin-bottom: 4rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 2.5rem;
    margin-top: 1rem;
  }

  .skill-row {
    cursor: default;
  }

  .skill-label {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    font-weight: 500;
    color: #555;
    margin-bottom: 0.35rem;
  }

  .skill-pct {
    color: #c4a776;
    font-weight: 600;
    animation: fadeInPct 0.2s ease;
  }

  @keyframes fadeInPct {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .skill-track {
    height: 6px;
    background: #eee;
    border-radius: 3px;
    overflow: hidden;
  }

  .skill-fill {
    height: 100%;
    background: linear-gradient(90deg, #c4a776, #7a5c3a);
    border-radius: 3px;
    transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .skill-row:hover .skill-fill {
    filter: brightness(1.1);
  }

  /* ── fun facts ── */
  .fun-section {
    margin-bottom: 4rem;
  }

  .fun-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    width: 100%;
    padding: 1.5rem 2rem;
    background: linear-gradient(135deg, #faf8f5, #f5f0e8);
    border: 1px solid #e8e0d4;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-align: left;
    font-family: inherit;
  }

  .fun-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(196, 167, 118, 0.15);
  }

  .fun-card:active {
    transform: scale(0.99);
  }

  .fun-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    min-height: 1.8em;
  }

  .fun-hint {
    font-size: 0.8rem;
    color: #bbb;
    letter-spacing: 1px;
  }

  /* ── connect ── */
  .connect-btn {
    display: inline-block;
    padding: 0.5rem 1.2rem;
    border: 1.5px solid #c4a776;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #7a5c3a;
    text-decoration: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.25s ease;
  }

  .connect-btn:hover {
    background: #c4a776;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(196, 167, 118, 0.3);
  }

  .email-btn {
    min-width: 180px;
  }

  /* ── responsive ── */
  @media (max-width: 768px) {
    .hero {
      flex-direction: column-reverse;
      text-align: center;
      gap: 2rem;
    }

    .hero-name {
      font-size: 2.2rem;
    }

    .hero-photo img {
      width: 200px;
      height: 200px;
    }

    .role-cards {
      flex-direction: column;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }

    .connect-links {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
