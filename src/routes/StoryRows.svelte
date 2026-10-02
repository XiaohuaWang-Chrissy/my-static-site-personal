<!--
@component
StoryRows.svelte — 展开卡片里的作品列表：缩略图 + 标签 + 标题 + 简介。
有 links 时在简介下面列出多个链接（比如 Read on my website / Read on The Sunset Post）。
-->
<script>
  import { base } from '$app/paths';

  let { stories = [] } = $props();

  const resolve = (href) => (href.startsWith('/') ? `${base}${href}` : href);
  const isExternal = (href) => /^https?:/.test(href);
  const linkAttrs = (href) =>
    isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
</script>

<ul class="rows">
  {#each stories as story (story.href)}
    <li class="row">
      <a class="thumb" href={resolve(story.href)} {...linkAttrs(story.href)}>
        <img src={resolve(story.image)} alt="" loading="lazy" />
      </a>
      <div class="text">
        <p class="meta">
          <span class="label">{story.label}</span>
          <span class="date">{story.date}</span>
        </p>
        <h4 class="title">
          <a href={resolve(story.href)} {...linkAttrs(story.href)}>{story.title}</a>
        </h4>
        {#if story.dek}<p class="dek">{story.dek}</p>{/if}
        {#if story.links?.length}
          <ul class="links">
            {#each story.links as link (link.href)}
              <li>
                <a href={resolve(link.href)} {...linkAttrs(link.href)}>
                  {link.text}{#if isExternal(link.href)}&nbsp;↗{/if}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </li>
  {/each}
</ul>

<style>
  .rows {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .row {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  .thumb {
    display: block;
    aspect-ratio: 3 / 2;
    overflow: hidden;
    background: #ddd;
  }

  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .thumb:hover img {
    transform: scale(1.04);
  }

  .meta {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--unc-blue-ink);
  }

  .date {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.9rem;
    color: #666;
  }

  .title {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.35;
    margin: 0 0 0.4rem;
  }

  .title a {
    color: #111;
    text-decoration: none;
  }

  .title a:hover {
    color: var(--cuny-orange-ink);
  }

  .dek {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 0.75rem;
  }

  .links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
  }

  .links a {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #111;
    text-decoration: none;
    border-bottom: 2px solid var(--cuny-orange);
    padding-bottom: 0.1rem;
  }

  .links a:hover {
    color: var(--cuny-orange-ink);
  }

  @media (max-width: 768px) {
    .row {
      grid-template-columns: 110px 1fr;
      gap: 1rem;
    }

    .title {
      font-size: 1rem;
    }

    .dek {
      display: none;
    }
  }
</style>
