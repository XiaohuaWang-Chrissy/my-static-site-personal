<script>
  let {
    imageOne = "",
    captionOne = "",
    imageTwo = "",
    captionTwo = ""
  } = $props();
</script>

<div class="diptych-container">
  <figure class="image-box">
    <img src={imageOne} alt={captionOne} />
    <figcaption>{captionOne}</figcaption>
  </figure>
  <figure class="image-box">
    <img src={imageTwo} alt={captionTwo} />
    <figcaption>{captionTwo}</figcaption>
  </figure>
</div>

<style>
  .diptych-container {
    display: flex;
    gap: 20px;
    margin: 2rem 0;
  }
  .image-box {
    flex: 1;
    margin: 0;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: transform 0.3s ease;
  }
  img:hover {
    transform: scale(1.02);
  }
  figcaption {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #666;
    font-family: 'Helvetica Neue', sans-serif;
    text-align: center;
    font-style: italic;
  }
  @media (max-width: 600px) {
    .diptych-container {
      flex-direction: column;
    }
  }
</style>