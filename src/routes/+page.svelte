<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Home | Chrissy Wang Portfolio</title>
</svelte:head>

<main class="home-container">
  
  <h1 class="main-title">Chrissy Wang</h1>

  <div class="hero-grid">
    <!-- 左侧按钮列 -->
    <div class="nav-col left-col">
      <a href="{base}/" class="nav-block grey-dark">HOME</a>
      <a href="{base}/writing" class="nav-block grey-light">WRITING</a>
    </div>

    <!-- 中间照片 -->
    <div class="photo-col">
      <img 
        src="{base}/Chrissy_photo.JPG" 
        alt="Chrissy Wang holding a camera" 
        class="hero-photo"
      />
    </div>

    <!-- 右侧按钮列 -->
    <div class="nav-col right-col">
      <div class="nav-dropdown">
        <a href="{base}/photography" class="nav-block brown-light">VISUAL ARTS</a>
        <div class="nav-dropdown-content">
          <a href="{base}/photography">Photography</a>
          <a href="{base}/documentary">Documentary</a>
          <a href="{base}/animation">Animation</a>
        </div>
      </div>
      <a href="{base}/data-journalism" class="nav-block brown-dark">DATA WORK</a>
    </div>
  </div>

  <h2 class="portfolio-text">PORTFOLIO</h2>
  <p class="subtitle">Data Journalist</p>

  <a href="{base}/homework-placeholders" class="hw-btn">📋 HOMEWORK PLACEHOLDERS</a>

</main>

<style>
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh; 
    text-align: center;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 2rem 1rem;
  }

  .main-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #000;
  }

  /* 三列网格布局 */
  .hero-grid {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 2.5rem;
  }

  /* 按钮列 */
  .nav-col {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  /* 通用按钮块样式 */
  .nav-block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 95px;
    text-decoration: none;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 2px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .nav-block:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }

  /* 左侧灰色系 */
  .grey-dark {
    background-color: #8e8e8e;
  }

  .grey-light {
    background-color: #b0b5b9;
  }

  /* 右侧棕色系 */
  .brown-light {
    background-color: #c4a776;
  }

  .brown-dark {
    background-color: #7a5c3a;
  }

  /* VISUAL ARTS 下拉菜单 */
  .nav-dropdown {
    position: relative;
  }

  .nav-dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(255, 255, 255, 0.98);
    min-width: 170px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    border-radius: 6px;
    z-index: 50;
    overflow: hidden;
    border: 1px solid #eaeaea;
  }

  .nav-dropdown-content a {
    color: #444;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0;
  }

  .nav-dropdown-content a:hover {
    background-color: #f5f0e8;
    color: #7a5c3a;
  }

  .nav-dropdown:hover .nav-dropdown-content {
    display: block;
  }

  /* 照片 */
  .photo-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-photo {
    width: 300px;
    height: auto;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }

  /* PORTFOLIO 大字 */
  .portfolio-text {
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: 8px;
    color: #000;
    margin: 1rem 0 0.5rem;
  }

  /* 副标题 */
  .subtitle {
    font-size: 1.3rem;
    color: #555;
    font-weight: 300;
    margin-top: 0.5rem;
  }

  /* Homework 按钮 */
  .hw-btn {
    display: inline-block;
    margin-top: 2rem;
    padding: 10px 28px;
    background-color: #f0e6d3;
    color: #7a5c3a;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 4px;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }

  .hw-btn:hover {
    background-color: #e4d5bc;
    transform: translateY(-2px);
  }

  /* 手机适配 */
  @media (max-width: 768px) {
    .main-title {
      font-size: 2rem;
    }

    .hero-grid {
      flex-direction: column;
      gap: 1.5rem;
    }

    .nav-col {
      flex-direction: row;
      gap: 1rem;
    }

    .nav-block {
      width: 130px;
      height: 70px;
      font-size: 0.8rem;
    }

    .hero-photo {
      width: 250px;
    }

    .portfolio-text {
      font-size: 3rem;
    }
  }
</style>
