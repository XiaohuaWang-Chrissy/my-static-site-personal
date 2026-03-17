<script>
  import { base } from '$app/paths';

  let showEmail = $state(false);
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
      <h1 class="hero-name">Chrissy Wang</h1>
      <p class="hero-name-cn">汪小花</p>
      <div class="roles-section hero-roles">
        <h2 class="section-heading">What I Do</h2>
        <div class="role-cards simple">
          <a class="role-link" href="{base}/data-journalism" style="font-size: 0.9rem;">Data Journalist</a>
          <a class="role-link" href="{base}/documentary" style="font-size: 0.9rem;">Documentary Producer</a>
          <a class="role-link" href="{base}/animation" style="font-size: 0.9rem;">Motion Graphics Designer</a>
        </div>
      </div>
      <div class="connect-links hero-connect">
        <a href="https://github.com/XiaohuaWang-Chrissy" target="_blank" rel="noopener" class="connect-btn">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/xiaohuawang/" target="_blank" rel="noopener" class="connect-btn">
          LinkedIn
        </a>
        <button class="connect-btn email-btn" onclick={() => showEmail = !showEmail}>
          {showEmail ? 'xiaohuaw765@gmail.com' : 'Reveal Email'}
        </button>
      </div>
    </div>
  </div>

</section>

<style>
  /* ── base ── */
  .about-page {
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
    padding: 4rem 1.5rem 5rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #000;
    text-align: center;
  }

  .section-heading {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #000;
    margin-bottom: 2rem;
    padding-bottom: 0;
    border-bottom: none;
  }

  .hero-roles .section-heading {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .section-sub {
    font-size: 1rem;
    color: #666;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  /* ── hero ── */
  .hero {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
    text-align: left;
    margin-bottom: 4rem;
  }

  .hero-photo {
    margin-bottom: 0;
    flex: 0 0 240px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .hero-photo img {
    width: 240px;
    height: 240px;
    object-fit: cover;
    border-radius: 0;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    transition: transform 0.2s ease;
  }

  .hero-photo img:hover {
    transform: scale(1.02);
  }

  .hero-text {
    text-align: left;
    flex: 1;
  }

  .hero-name {
    font-size: 3.5rem;
    font-weight: 900;
    margin: 0 0 0.5rem;
    line-height: 1;
    letter-spacing: 1px;
  }

  .hero-name-cn {
    font-size: 1.4rem;
    font-weight: 300;
    color: #999;
    margin: 0.5rem 0 2rem;
    letter-spacing: 1px;
  }

  /* ── role cards ── */
  .roles-section {
    margin-bottom: 3rem;
    text-align: left;
  }

  .hero-roles {
    margin-bottom: 2rem;
  }

  .role-cards.simple {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0 0;
    justify-content: flex-start;
  }

  .role-link {
    display: inline-block;
    padding: 1rem 2rem;
    background: #f5f5f5;
    border: none;
    border-radius: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    text-decoration: none;
    letter-spacing: 1.5px;
    transition: all 0.2s ease;
  }

  .role-link:hover {
    background: #e8e8e8;
    color: #000;
    border-color: transparent;
    transform: none;
    box-shadow: none;
  }

  .role-detail {
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    background: transparent;
    border-left: none;
    border-radius: 0;
    font-size: 1rem;
    line-height: 1.7;
    color: #333;
    animation: none;
  }

  /* ── connect ── */
  .connect-btn {
    display: inline-block;
    padding: 0.8rem 1.6rem;
    border: 2px solid #000;
    border-radius: 0;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: #000;
    text-decoration: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease;
    text-transform: uppercase;
  }

  .connect-btn:hover {
    background: #000;
    color: #fff;
    transform: none;
    box-shadow: none;
  }

  .email-btn {
    min-width: auto;
  }

  .connect-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    margin-top: 2rem;
    margin-bottom: 0;
    flex-wrap: wrap;
  }

  .hero-connect {
    flex-direction: row;
    gap: 1rem;
  }

  /* ── responsive ── */
  @media (max-width: 768px) {
    .about-page {
      padding: 2.5rem 1rem 3rem;
    }

    .hero {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 3rem;
      gap: 2rem;
    }

    .hero-photo {
      flex: 1;
      margin-bottom: 0;
    }

    .hero-photo img {
      width: 200px;
      height: 200px;
    }

    .hero-text {
      text-align: center;
      width: 100%;
    }

    .hero-name {
      font-size: 2.5rem;
    }

    .roles-section {
      text-align: center;
    }

    .role-cards.simple {
      flex-direction: row;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .role-link {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
      background: #f5f5f5;
    }

    .role-link:hover {
      background: #e8e8e8;
    }

    .connect-links {
      flex-direction: row;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: 0;
    }
  }
</style>
