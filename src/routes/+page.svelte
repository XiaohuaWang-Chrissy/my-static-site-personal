<script>
  import { base } from '$app/paths';
  
  let bubbleState = 0; // 0 = 无，1,2,3 = 下次应该显示的气泡
  let showBubble = false; // 是否显示气泡

  function handleMouseEnter() {
    bubbleState = bubbleState === 3 ? 1 : bubbleState + 1;
    showBubble = true;
  }

  function handleMouseLeave() {
    showBubble = false;
  }
</script>

<svelte:head>
  <title>Home | Chrissy Wang Portfolio</title>
</svelte:head>

<main class="home-container">
  
  <a href="{base}/about" class="about-link"><h1 class="main-title">Chrissy Wang</h1></a>

  <div class="hero-grid">
    <!-- 左侧按钮列 -->
    <div class="nav-col left-col">
      <div class="nav-dropdown">
        <button class="nav-block grey-light">WRITING</button>
        <div class="nav-dropdown-content">
          <a href="{base}/data-journalism">Data</a>
          <a href="{base}/writing">Investigative</a>
        </div>
      </div>
    </div>

    <!-- 中间照片 -->
    <div class="photo-col">
      <div class="photo-wrapper"
        on:mouseenter={handleMouseEnter}
        on:mouseleave={handleMouseLeave}>
        <img 
          src="{base}/Chrissy_photo.JPG" 
          alt="Chrissy Wang holding a camera" 
          class="hero-photo"
        />
        {#if showBubble && bubbleState === 1}
          <div class="thought-bubble bubble-top-left">
            <p>This is the sunset from the 86th floor of the Empire State Building in New York.</p>
          </div>
        {/if}
        {#if showBubble && bubbleState === 2}
          <div class="thought-bubble bubble-top-right">
            <p>I captured it with my 70-year-old Rolleiflex 6x6 camera. I used Kodak Portra 800 film.</p>
          </div>
        {/if}
        {#if showBubble && bubbleState === 3}
          <div class="thought-bubble bubble-bottom-left">
            <p>What a beautiful day it was, and I hope for many more beautiful days like this.</p>
          </div>
        {/if}
      </div>
    </div>

    <!-- 右侧按钮列 -->
    <div class="nav-col right-col">
      <div class="nav-dropdown">
        <button class="nav-block brown-light">VISUAL ARTS</button>
        <div class="nav-dropdown-content">
          <a href="{base}/photography">Photography</a>
          <a href="{base}/documentary">Documentary</a>
          <a href="{base}/animation">Motion Graphics</a>
        </div>
      </div>
    </div>
  </div>

  <a href="{base}/about" class="about-link"><h2 class="portfolio-text">PORTFOLIO</h2></a>
  <a href="{base}/about" class="about-link"><p class="subtitle">Data Journalist · Documentary Producer · Motion Graphics Designer</p></a>

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
    border: none;
    cursor: pointer;
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
    overflow: visible;
  }

  .photo-wrapper {
    position: relative;
    display: inline-block;
  }

  .hero-photo {
    width: 300px;
    height: auto;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    display: block;
  }

  /* 思考气泡样式 */
  .thought-bubble {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid #000;
    border-radius: 25px;
    padding: 18px 22px;
    max-width: 280px;
    width: 280px;
    box-shadow: none;
    z-index: 100;
    animation: bubbleAppear 0.3s ease-out;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  }

  /* 创建卡通云形边缘 */
  .thought-bubble::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid #000;
    border-radius: 25px;
    pointer-events: none;
  }

  /* 左上方气泡 */
  .bubble-top-left {
    top: -120px;
    left: -280px;
  }

  .bubble-top-left::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -18px;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid #000;
    border-radius: 50%;
  }

  /* 右上方气泡 */
  .bubble-top-right {
    top: -120px;
    right: -280px;
  }

  .bubble-top-right::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: -18px;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid #000;
    border-radius: 50%;
  }

  /* 左下方气泡 */
  .bubble-bottom-left {
    bottom: -120px;
    left: -280px;
  }

  .bubble-bottom-left::after {
    content: '';
    position: absolute;
    top: -15px;
    right: -18px;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid #000;
    border-radius: 50%;
  }

  .thought-bubble p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #000;
    font-weight: 400;
    position: relative;
    z-index: 10;
  }

  @keyframes bubbleAppear {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
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

  .about-link {
    text-decoration: none;
    color: inherit;
  }

  .about-link:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease;
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

    .photo-wrapper {
      overflow: visible;
    }

    .thought-bubble {
      max-width: 140px;
      width: 140px;
      padding: 12px 14px;
      border: 2px solid #000;
    }

    .thought-bubble::before {
      border: 2px solid #000;
    }

    .thought-bubble p {
      font-size: 0.75rem;
      line-height: 1.3;
    }

    .bubble-top-left {
      top: -110px;
      left: -60px;
    }

    .bubble-top-left::after {
      width: 14px;
      height: 14px;
      border: 2px solid #000;
      right: -12px;
      bottom: -8px;
    }

    .bubble-top-right {
      top: -110px;
      right: -60px;
    }

    .bubble-top-right::after {
      width: 14px;
      height: 14px;
      border: 2px solid #000;
      left: -12px;
      bottom: -8px;
    }

    .bubble-bottom-left {
      bottom: -110px;
      left: -60px;
    }

    .bubble-bottom-left::after {
      width: 14px;
      height: 14px;
      border: 2px solid #000;
      right: -12px;
      top: -8px;
    }

    .portfolio-text {
      font-size: 3rem;
    }
  }
</style>
