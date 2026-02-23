<script>
  import { page } from '$app/stores';
</script>

{#if $page.url.pathname === '/'}
  <!-- 主页只显示简洁的品牌名 -->
  <nav class="portfolio-nav home-nav">
    <a href="/" class="nav-brand">Chrissy Wang 小花</a>
  </nav>
{:else}
  <!-- 其他页面显示完整导航 -->
  <nav class="portfolio-nav">
    <a href="/" class="nav-brand">Chrissy Wang 小花</a>
    <div class="nav-links">
      <a href="/">Home</a>
      <div class="dropdown">
        <button class="dropbtn">Visual Arts ▾</button>
        <div class="dropdown-content">
          <a href="/photography">Photography</a>
          <a href="/documentary">Documentary</a>
          <a href="/animation">Animation</a>
        </div>
      </div>
      <a href="/writing">Writing</a>
      <a href="/data-journalism">Data Journalism</a>
      <a href="/about">About</a>
    </div>
  </nav>
{/if}

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
    border-bottom: 1px solid #eaeaea;
    font-family: 'Helvetica Neue', sans-serif;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .home-nav {
    justify-content: flex-start;
  }

  .nav-brand {
    font-weight: 400;
    font-size: 1.1rem;
    letter-spacing: 0.3px;
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
    color: #d93025;
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
    font-family: 'Helvetica Neue', sans-serif;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .dropdown:hover .dropbtn {
    color: #d93025;
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
    color: #d93025;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .content-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
  }
</style>