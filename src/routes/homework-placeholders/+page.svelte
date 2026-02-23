<script>
  import { base } from '$app/paths';
  import PreviewCard from '../PreviewCard.svelte';
  import DocumentaryProject from '../DocumentaryProject.svelte';
  import DataHighlight from '../DataHighlight.svelte';
  import JournalistBio from '../JournalistBio.svelte';
  import VideoEmbed from '../VideoEmbed.svelte';
  import ProjectDiptych from '../ProjectDiptych.svelte';
</script>

<svelte:head>
  <title>Homework Placeholders | Chrissy Wang</title>
</svelte:head>

<section class="hw-page">
  <h1 class="page-title">HOMEWORK PLACEHOLDERS</h1>
  <p class="page-note">This page showcases all reusable Svelte components with placeholder data. It will be removed after grading.</p>

  <!-- 1. PreviewCard -->
  <div class="component-section">
    <h2 class="component-name">1. PreviewCard</h2>
    <p class="component-file">File: <code>src/routes/PreviewCard.svelte</code></p>
    <p class="component-desc">Reusable project preview card with image, title, date, description, and hover overlay. Supports internal and external links.</p>

    <PreviewCard
      href="{base}/homework-placeholders"
      imageSrc="https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80"
      imageAlt="Placeholder newspaper image"
      overlayText="View Project →"
      label="PLACEHOLDER CATEGORY"
      title="Sample Project Title Goes Here"
      subtitle="A subtitle for the project"
      date="January 1, 2026"
      description="This is a placeholder description showing how the PreviewCard component renders. It supports label, title, subtitle, date, description, and byline props."
      byline="By Placeholder Author"
    />
  </div>

  <!-- 2. DocumentaryProject -->
  <div class="component-section">
    <h2 class="component-name">2. DocumentaryProject</h2>
    <p class="component-file">File: <code>src/routes/DocumentaryProject.svelte</code></p>
    <p class="component-desc">Editorial-style documentary card with three-column layout: date/location, video or image, and authors. Supports Vimeo iframe embed.</p>

    <DocumentaryProject
      title="Sample Documentary Title"
      subtitle="Subtitle of the Film"
      date="March 15, 2025"
      location="New York City, USA"
      authors="Director One, Director Two"
      description={"This is a placeholder description for the DocumentaryProject component.\nIt supports multi-line text via newline characters.\nEach line becomes a separate paragraph."}
      imageSrc="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80"
      imageAlt="Placeholder film still"
    />
  </div>

  <!-- 3. DataHighlight -->
  <div class="component-section">
    <h2 class="component-name">3. DataHighlight</h2>
    <p class="component-file">File: <code>src/routes/DataHighlight.svelte</code></p>
    <p class="component-desc">Data metric display with colored border and trend arrow. Supports "up" (green), "down" (red), and "neutral" (gray) trends.</p>

    <div class="highlight-row">
      <DataHighlight
        metric="+3.2%"
        description="Placeholder metric going up — this shows the 'up' trend style with green color and upward arrow."
        trend="up"
      />
      <DataHighlight
        metric="-1.5%"
        description="Placeholder metric going down — this shows the 'down' trend style with red color and downward arrow."
        trend="down"
      />
      <DataHighlight
        metric="0.0%"
        description="Placeholder neutral metric — this shows the 'neutral' trend style with gray color and dash."
        trend="neutral"
      />
    </div>
  </div>

  <!-- 4. JournalistBio -->
  <div class="component-section">
    <h2 class="component-name">4. JournalistBio</h2>
    <p class="component-file">File: <code>src/routes/JournalistBio.svelte</code></p>
    <p class="component-desc">Journalist bio card with avatar, name, title, bio text, and social links.</p>

    <JournalistBio
      name="Jane Doe"
      title="Senior Data Reporter"
      bio="A placeholder bio demonstrating the JournalistBio component. This journalist covers economics, housing policy, and urban development with a focus on data-driven storytelling."
      avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
    />
  </div>

  <!-- 5. VideoEmbed -->
  <div class="component-section">
    <h2 class="component-name">5. VideoEmbed</h2>
    <p class="component-file">File: <code>src/routes/VideoEmbed.svelte</code></p>
    <p class="component-desc">Responsive YouTube video embed with 16:9 aspect ratio and optional caption.</p>

    <VideoEmbed
      videoId="dQw4w9WgXcQ"
      title="Placeholder Video"
      caption="This is a placeholder caption for the VideoEmbed component. It embeds a YouTube video by ID."
    />
  </div>

  <!-- 6. ProjectDiptych -->
  <div class="component-section">
    <h2 class="component-name">6. ProjectDiptych</h2>
    <p class="component-file">File: <code>src/routes/ProjectDiptych.svelte</code></p>
    <p class="component-desc">Side-by-side image comparison with hover zoom effect and italic captions.</p>

    <ProjectDiptych
      imageOne="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80"
      captionOne="Placeholder image one — urban cityscape"
      imageTwo="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80"
      captionTwo="Placeholder image two — city skyline"
    />
  </div>
</section>

<style>
  .hw-page {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
  }

  .page-title {
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 3px;
    color: #999;
    margin-bottom: 0.5rem;
  }

  .page-note {
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    font-size: 0.9rem;
    color: #c4a776;
    margin-bottom: 3rem;
    font-style: italic;
  }

  .component-section {
    margin-bottom: 4rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid #eee;
  }

  .component-section:last-child {
    border-bottom: none;
  }

  .component-name {
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    font-size: 1.3rem;
    font-weight: 600;
    color: #333;
    margin: 0 0 0.3rem;
  }

  .component-file {
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    font-size: 0.8rem;
    color: #999;
    margin: 0 0 0.5rem;
  }

  .component-file code {
    background: #f5f5f5;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 0.8rem;
  }

  .component-desc {
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
    font-size: 0.9rem;
    color: #666;
    line-height: 1.6;
    margin: 0 0 1.5rem;
    max-width: 700px;
  }

  .highlight-row {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .hw-page {
      width: 95%;
      padding: 1.5rem 1rem 3rem;
    }

    .highlight-row {
      flex-direction: column;
    }
  }
</style>
