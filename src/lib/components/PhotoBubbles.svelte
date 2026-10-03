<!--
@component
PhotoBubbles.svelte — 照片 + 悬停时轮流出现的三个思考气泡（原首页的小巧思）
-->
<script>
  import { base } from '$app/paths';

  let bubbleState = $state(0); // 0 = 无，1,2,3,4 = 下次应该显示的气泡
  let showBubble = $state(false); // 是否显示气泡
  let lastTouch = 0; // 记录最近一次触摸，用来忽略触摸产生的"假"鼠标事件

  // 切到下一个气泡（电脑和手机共用）
  function nextBubble() {
    bubbleState = bubbleState === 4 ? 1 : bubbleState + 1;
    showBubble = true;
  }

  // 电脑：悬停进入
  function handleMouseEnter() {
    if (Date.now() - lastTouch < 600) return; // 触摸触发的假事件，忽略
    nextBubble();
  }

  // 电脑：悬停离开
  function handleMouseLeave() {
    if (Date.now() - lastTouch < 600) return;
    showBubble = false;
  }

  // 手机：每次点照片就切到下一个气泡，不需要先点空白处
  function handleTouchStart() {
    lastTouch = Date.now();
    nextBubble();
  }
</script>

<div class="photo-wrapper"
  role="button"
  tabindex="0"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  ontouchstart={handleTouchStart}
  onkeydown={(e) => e.key === 'Enter' && nextBubble()}>
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
  {#if showBubble && bubbleState === 4}
    <div class="thought-bubble bubble-bottom-right">
      <p>Want to say hello? You can connect with me through the ways below!</p>
    </div>
  {/if}
</div>

<p class="hover-hint" class:faded={bubbleState > 0} aria-hidden="true">
  <span class="hint-text">hover over my photo</span>
</p>

<style>
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

  /* 思考气泡样式 — 毛玻璃柔和风格 */
  .thought-bubble {
    position: absolute;
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 22px;
    padding: 18px 22px;
    max-width: 280px;
    width: 280px;
    z-index: 100;
    animation: bubbleAppear 0.3s ease-out;
    box-shadow:
      0 4px 20px rgba(0, 0, 0, 0.06),
      0 1px 6px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  /* 左上方气泡 */
  .bubble-top-left {
    top: -120px;
    left: -280px;
  }

  /* 尾部小圆点 — 渐隐效果 */
  .bubble-top-left::before {
    content: '';
    position: absolute;
    bottom: -16px;
    right: -14px;
    width: 20px;
    height: 20px;
    background: rgba(235, 235, 235, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .bubble-top-left::after {
    content: '';
    position: absolute;
    bottom: -28px;
    right: -26px;
    width: 12px;
    height: 12px;
    background: rgba(230, 230, 230, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  }

  /* 右上方气泡 */
  .bubble-top-right {
    top: -120px;
    right: -280px;
  }

  .bubble-top-right::before {
    content: '';
    position: absolute;
    bottom: -16px;
    left: -14px;
    width: 20px;
    height: 20px;
    background: rgba(235, 235, 235, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .bubble-top-right::after {
    content: '';
    position: absolute;
    bottom: -28px;
    left: -26px;
    width: 12px;
    height: 12px;
    background: rgba(230, 230, 230, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  }

  /* 左下方气泡 */
  .bubble-bottom-left {
    bottom: -120px;
    left: -280px;
  }

  .bubble-bottom-left::before {
    content: '';
    position: absolute;
    top: -16px;
    right: -14px;
    width: 20px;
    height: 20px;
    background: rgba(235, 235, 235, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .bubble-bottom-left::after {
    content: '';
    position: absolute;
    top: -28px;
    right: -26px;
    width: 12px;
    height: 12px;
    background: rgba(230, 230, 230, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  }

  /* 右下方气泡 */
  .bubble-bottom-right {
    bottom: -120px;
    right: -280px;
  }

  .bubble-bottom-right::before {
    content: '';
    position: absolute;
    top: -16px;
    left: -14px;
    width: 20px;
    height: 20px;
    background: rgba(235, 235, 235, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }

  .bubble-bottom-right::after {
    content: '';
    position: absolute;
    top: -28px;
    left: -26px;
    width: 12px;
    height: 12px;
    background: rgba(230, 230, 230, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  }

  .thought-bubble p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #3a3a3a;
    font-weight: 400;
    letter-spacing: 0.2px;
  }

  /* 悬停提示 — 小巧、柔和，和页面风格一致；悬停过一次后淡出 */
  .hover-hint {
    margin-top: 1.1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-family: var(--font-body);
    font-style: italic;
    font-size: 0.82rem;
    letter-spacing: 0.4px;
    color: #a9a9a9;
    opacity: 1;
    transition: opacity 0.6s ease;
    animation: hintFloat 2.8s ease-in-out infinite;
    pointer-events: none;
    user-select: none;
  }

  .hover-hint.faded {
    opacity: 0;
  }

  @keyframes hintFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(2px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .hover-hint {
      animation: none;
    }
  }

  @keyframes bubbleAppear {
    from {
      opacity: 0;
      transform: scale(0.85) translateY(4px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }


  /* 手机适配 */
  @media (max-width: 768px) {
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
    }

    .thought-bubble p {
      font-size: 0.75rem;
      line-height: 1.3;
    }

    .bubble-top-left {
      top: -110px;
      left: -60px;
    }

    .bubble-top-left::before {
      width: 10px;
      height: 10px;
      right: -8px;
      bottom: -8px;
    }

    .bubble-top-left::after {
      width: 6px;
      height: 6px;
      right: -16px;
      bottom: -16px;
    }

    .bubble-top-right {
      top: -110px;
      right: -60px;
    }

    .bubble-top-right::before {
      width: 10px;
      height: 10px;
      left: -8px;
      bottom: -8px;
    }

    .bubble-top-right::after {
      width: 6px;
      height: 6px;
      left: -16px;
      bottom: -16px;
    }

    .bubble-bottom-left {
      bottom: -110px;
      left: -60px;
    }

    .bubble-bottom-left::before {
      width: 10px;
      height: 10px;
      right: -8px;
      top: -8px;
    }

    .bubble-bottom-left::after {
      width: 6px;
      height: 6px;
      right: -16px;
      top: -16px;
    }

    .bubble-bottom-right {
      bottom: -110px;
      right: -60px;
    }

    .bubble-bottom-right::before {
      width: 10px;
      height: 10px;
      left: -8px;
      top: -8px;
    }

    .bubble-bottom-right::after {
      width: 6px;
      height: 6px;
      left: -16px;
      top: -16px;
    }

  }
</style>
