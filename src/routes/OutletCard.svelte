<!--
@component
OutletCard.svelte — Writing 页面上的一张可展开卡片（一个媒体 / 一类作品）。
收起时只显示最有代表性的一篇；点按钮展开其余作品（通过 children 传入）。
网址带 #id 时（比如 /writing#hbj）会自动展开并滚动到这张卡片。
-->
<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { base } from '$app/paths';

  let {
    id,
    outlet,
    kicker = '',
    intro = '',
    count = 0,
    iconic,
    children
  } = $props();

  let open = $state(false);
  let el;

  const resolve = (href) => (href.startsWith('/') ? `${base}${href}` : href);
  const isExternal = (href) => /^https?:/.test(href);

  onMount(() => {
    if (location.hash === `#${id}`) {
      open = true;
      el?.scrollIntoView({ block: 'start' });
    }
  });
</script>

<section class="outlet" {id} bind:this={el}>
  <header class="outlet-header">
    {#if kicker}<p class="outlet-kicker">{kicker}</p>{/if}
    <h2 class="outlet-name">{outlet}</h2>
    {#if intro}<p class="outlet-intro">{intro}</p>{/if}
  </header>

  <article class="iconic">
    <a
      class="iconic-image"
      href={resolve(iconic.href)}
      target={isExternal(iconic.href) ? '_blank' : undefined}
      rel={isExternal(iconic.href) ? 'noopener noreferrer' : undefined}
    >
      <img src={resolve(iconic.image)} alt="" />
    </a>
    <div class="iconic-info">
      <span class="iconic-label">{iconic.label}</span>
      <h3 class="iconic-title">
        <a
          href={resolve(iconic.href)}
          target={isExternal(iconic.href) ? '_blank' : undefined}
          rel={isExternal(iconic.href) ? 'noopener noreferrer' : undefined}
        >{iconic.title}</a>
      </h3>
      <p class="iconic-date">{iconic.date}</p>
      {#if iconic.dek}<p class="iconic-dek">{iconic.dek}</p>{/if}
      {#if iconic.links?.length}
        <ul class="iconic-links">
          {#each iconic.links as link (link.href)}
            <li>
              <a href={link.href} target="_blank" rel="noopener noreferrer">{link.text} ↗</a>
              {#if link.note}<span class="link-note">{link.note}</span>{/if}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </article>

  {#if children}
    <button
      class="toggle"
      aria-expanded={open}
      aria-controls="{id}-more"
      onclick={() => (open = !open)}
    >
      {open ? 'Show less' : `Show all ${count} stories`}
      <span class="chevron" class:up={open} aria-hidden="true">▾</span>
    </button>

    {#if open}
      <div class="more" id="{id}-more" transition:slide={{ duration: 300 }}>
        {@render children()}
      </div>
    {/if}
  {/if}
</section>

<style>
  .outlet {
    position: relative;
    background: var(--paper);
    padding: 2.5rem 2.5rem 2rem;
    scroll-margin-top: 80px; /* 别被顶部导航挡住 */
  }

  /* 左侧蓝橙双色竖条：网站的个人标记 */
  .outlet::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--unc-blue) 50%, var(--cuny-orange) 50%);
  }

  .outlet-header {
    margin-bottom: 1.75rem;
  }

  .outlet-kicker {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.05rem;
    color: var(--unc-blue-ink);
    margin-bottom: 0.25rem;
  }

  .outlet-name {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.2;
    color: #111;
    margin-bottom: 0.5rem;
  }

  .outlet-intro {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #555;
    max-width: 46rem;
  }

  /* ── 代表作 ── */
  .iconic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  .iconic-image {
    display: block;
    aspect-ratio: 3 / 2;
    overflow: hidden;
    background: #ddd;
  }

  .iconic-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  .iconic-image:hover img {
    transform: scale(1.03);
  }

  .iconic-label {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    background: var(--unc-blue-ink);
    padding: 0.2rem 0.55rem;
    margin-bottom: 0.8rem;
  }

  .iconic-title {
    font-size: 1.45rem;
    font-weight: 700;
    line-height: 1.3;
    margin: 0 0 0.5rem;
  }

  .iconic-title a {
    color: #111;
    text-decoration: none;
  }

  .iconic-title a:hover {
    color: var(--cuny-orange-ink);
  }

  .iconic-date {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 0.9rem;
  }

  .iconic-dek {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 1rem;
  }

  .iconic-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .iconic-links a {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #111;
    text-decoration: none;
    border-bottom: 2px solid var(--cuny-orange);
    padding-bottom: 0.1rem;
  }

  .iconic-links a:hover {
    color: var(--cuny-orange-ink);
  }

  .link-note {
    display: block;
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #555;
    margin-top: 0.3rem;
  }

  /* ── 展开按钮 ── */
  .toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 2rem auto 0;
    padding: 0.7rem 1.4rem;
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--unc-blue-ink);
    background: #fff;
    border: 1px solid var(--rule);
    border-radius: 999px;
    cursor: pointer;
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  .toggle:hover {
    color: var(--cuny-orange-ink);
    border-color: var(--cuny-orange);
  }

  .chevron {
    display: inline-block;
    transition: transform 0.25s ease;
  }

  .chevron.up {
    transform: rotate(180deg);
  }

  .more {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--rule);
  }

  @media (max-width: 768px) {
    .outlet {
      padding: 1.75rem 1.25rem 1.5rem 1.5rem;
    }

    .outlet-name {
      font-size: 1.6rem;
    }

    .iconic {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .iconic-title {
      font-size: 1.25rem;
    }
  }
</style>
