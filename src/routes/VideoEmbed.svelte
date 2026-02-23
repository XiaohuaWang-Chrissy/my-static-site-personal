<script>
  // 只需要填入 YouTube 视频 ID (比如链接里的 dQw4w9WgXcQ)
  let {
    videoId = "",
    title = "Video Trailer",
    caption = ""
  } = $props();
</script>

<div class="video-container">
  <figure>
    <div class="iframe-wrapper">
      <iframe
        src="https://www.youtube.com/embed/{videoId}"
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    {#if caption}
      <figcaption>{caption}</figcaption>
    {/if}
  </figure>
</div>

<style>
  .video-container {
    margin: 2rem 0;
    width: 100%;
    max-width: 800px; /* 控制视频最大宽度，防止在大屏幕上大得吓人 */
  }
  
  figure {
    margin: 0;
  }
  
  .iframe-wrapper {
    position: relative;
    width: 100%;
    /* 💥 极简魔法：让视频永远保持 16:9 的电影比例 */
    aspect-ratio: 16 / 9; 
    background-color: #000;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  
  figcaption {
    margin-top: 12px;
    font-size: 0.95rem;
    color: #666;
    font-family: 'Helvetica Neue', sans-serif;
    text-align: center;
    font-style: italic;
  }
</style>