<script>
  import CrudeOilChart from '$lib/components/CrudeOilChart.svelte';
  import { env } from '$env/dynamic/public';
</script>

<svelte:head>
  <title>Crude Oil Prices</title>
</svelte:head>

<main style="padding: 3rem 2rem; max-width: 860px; margin: 0 auto;">
  <CrudeOilChart fredApiKey={env.PUBLIC_FRED_KEY ?? ''} />
</main>
