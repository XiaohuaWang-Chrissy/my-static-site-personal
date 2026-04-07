<script>
  import CrudeOilChart from '$lib/components/CrudeOilChart.svelte';
  import { PUBLIC_FRED_KEY } from '$env/static/public';
</script>

<svelte:head>
  <title>Crude Oil Prices</title>
</svelte:head>

<main style="padding: 3rem 2rem; max-width: 860px; margin: 0 auto;">
  <CrudeOilChart fredApiKey={PUBLIC_FRED_KEY} />
</main>
