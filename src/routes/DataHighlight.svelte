<script>
  let {
    metric = "+3.2%",
    description = "U.S. Consumer Spending Growth in Q4",
    trend = "up" // 可以是 "up", "down", 或 "neutral"
  } = $props();

  // Svelte 5 用 $derived 替代 $:
  let trendColor = $derived(
    trend === 'up' ? '#137333' :
    trend === 'down' ? '#d93025' :
    '#5f6368'
  );

  let arrow = $derived(trend === 'up' ? '▲' : trend === 'down' ? '▼' : '—');
</script>

<div class="data-highlight" style="border-left-color: {trendColor};">
  <div class="metric" style="color: {trendColor};">
    {arrow} {metric}
  </div>
  <div class="description">{description}</div>
</div>

<style>
  .data-highlight {
    background: #f8f9fa;
    border-left: 6px solid;
    padding: 20px;
    margin: 20px 0;
    max-width: 100%;
    font-family: var(--font-sans, 'Helvetica Neue', sans-serif);
  }
  .metric {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .description {
    font-family: sans-serif;
    color: #444;
    font-size: 1.1rem;
    line-height: 1.4;
  }
</style>