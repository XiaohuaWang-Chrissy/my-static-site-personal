<script>
  let {
    name = "Chrissy Wang",
    title = "Multimedia Journalist & Visual Creator",
    bio = "Exploring the intersection of economic data and culture, with a passion for digital art, photography, and visual storytelling.",
    avatarUrl = "https://via.placeholder.com/150" // 先用占位图顶替，之后你可以换成自己的酷炫头像
  } = $props();
</script>

<div class="bio-box">
  <img src={avatarUrl} alt={name} class="avatar" />
  <div class="bio-content">
    <h2>{name}</h2>
    <span class="title">{title}</span>
    <p>{bio}</p>
    <div class="social-links">
      <a href="#github">GitHub</a> • 
      <a href="#portfolio">Portfolio</a>
    </div>
  </div>
</div>

<style>
  .bio-box {
    display: flex;
    gap: 20px;
    padding: 24px;
    background: #fdfdfd;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    font-family: 'Helvetica Neue', sans-serif;
    max-width: 600px;
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  .bio-content h2 {
    margin: 0 0 5px 0;
    font-size: 1.5rem;
  }
  .title {
    color: #d93025;
    font-weight: bold;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  p {
    color: #555;
    line-height: 1.5;
    margin: 10px 0;
  }
  .social-links a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
  }
  .social-links a:hover {
    color: #d93025;
  }
</style>