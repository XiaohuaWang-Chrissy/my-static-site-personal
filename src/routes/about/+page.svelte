<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>About | Chrissy Wang Portfolio</title>
</svelte:head>

<section class="about-container">
  <div class="about-content">
    <div class="about-text">
      <h1 class="about-title">ABOUT ME</h1>
      <h2 class="about-title-cn">关于...我</h2>

      <p class="about-desc">
        Multimedia Journalist & Visual Creator
      </p>
      <p class="about-desc">
        Exploring the intersection of economic data and culture, with a passion for digital art, photography, and visual storytelling.
      </p>

      <div class="about-links">
        <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
        <span> • </span>
        <a href="{base}/" rel="noopener">Portfolio</a>
      </div>

      <p class="about-email">xiaohuaw765@gmail.com</p>
    </div>

    <div class="about-photo">
      <img src="{base}/IMG_1344.JPG" alt="Chrissy Wang working" />
    </div>
  </div>
</section>

<style>
  .about-container {
    padding: 4rem 2rem;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .about-content {
    display: flex;
    gap: 4rem;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto;
  }

  .about-text {
    flex: 1;
  }

  .about-title {
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 4px;
    margin: 0;
    color: #000;
  }

  .about-title-cn {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0.2rem 0 2rem;
    color: #000;
  }

  .about-desc {
    font-size: 1.15rem;
    line-height: 1.7;
    color: #333;
    margin: 0 0 0.3rem;
  }

  .about-links {
    margin-top: 1rem;
    font-size: 1.15rem;
  }

  .about-links a {
    color: #000;
    text-decoration: underline;
    font-weight: 500;
  }

  .about-links a:hover {
    color: #555;
  }

  .about-email {
    margin-top: 2rem;
    font-size: 1.15rem;
    color: #000;
  }

  .about-photo {
    flex-shrink: 0;
  }

  .about-photo img {
    width: 300px;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .about-content {
      flex-direction: column;
      gap: 2rem;
    }

    .about-title {
      font-size: 2.2rem;
    }

    .about-title-cn {
      font-size: 1.8rem;
    }

    .about-photo img {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
