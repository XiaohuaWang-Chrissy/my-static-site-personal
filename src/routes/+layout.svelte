<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import '$lib/styles/palette.css';

  // About 页有落花特效，蓝橙线放在那里太突兀，不显示
  let isAbout = $derived($page.url.pathname.replace(/\/$/, '') === `${base}/about`);
</script>

<nav class="portfolio-nav" class:no-stripe={isAbout}>
  <a href="{base}/" class="nav-brand">Chrissy Wang 小花</a>
  <div class="nav-links">
    <a href="{base}/writing">Writing</a>
    <div class="dropdown">
      <button class="dropbtn">Visual Arts ▾</button>
      <div class="dropdown-content">
        <a href="{base}/photography">Photography</a>
        <a href="{base}/documentary">Documentary</a>
        <a href="{base}/animation">Motion Graphics</a>
      </div>
    </div>
    <a href="{base}/about">About</a>
  </div>
</nav>

<main class="content-wrapper">
  <slot />
</main>

<style>
  .portfolio-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.95);
    font-family: var(--font-body);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  /* 导航下方的蓝橙双色细线：UNC 蓝 + CUNY 橙 */
  .portfolio-nav::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background: linear-gradient(to right, var(--unc-blue) 50%, var(--cuny-orange) 50%);
  }

  .portfolio-nav.no-stripe::after {
    display: none;
  }

  .nav-brand {
    font-family: var(--font-hand);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    color: #333;
    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;
  }

  .nav-brand:hover {
    color: #000;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .nav-links a {
    text-decoration: none;
    color: #666;
    font-size: 0.95rem;
    transition: color 0.2s ease;
  }

  .nav-links a:hover {
    color: var(--cuny-orange-ink);
  }

  /* 下拉菜单 */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropbtn {
    background-color: transparent;
    border: none;
    color: #666;
    font-size: 0.95rem;
    font-family: var(--font-body);
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .dropdown:hover .dropbtn {
    color: var(--cuny-orange-ink);
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.98);
    min-width: 150px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.08);
    border-radius: 6px;
    z-index: 101;
    top: 100%;
    left: -15px;
    overflow: hidden;
    border: 1px solid #eaeaea;
  }

  .dropdown-content a {
    color: #444;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 0.9rem;
  }

  .dropdown-content a:hover {
    background-color: #f8f9fa;
    color: var(--cuny-orange-ink);
  }

  .dropdown:hover .dropdown-content,
  .dropdown:focus-within .dropdown-content {
    display: block;
  }

  .content-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
  }

  /* 手机适配：导航收紧，保证一行放得下 */
  @media (max-width: 600px) {
    .portfolio-nav {
      padding: 0.75rem 1rem;
    }

    .nav-brand {
      font-size: 1.3rem;
    }

    .nav-links {
      gap: 14px;
    }

    .nav-links a,
    .dropbtn {
      font-size: 0.85rem;
    }

    .dropdown-content {
      left: auto;
      right: -10px;
    }
  }
</style>