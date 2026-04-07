<script>
  import { onMount } from 'svelte';

  // ── FRED API key — get free key at fred.stlouisfed.org ────────────
  // Pass as prop: <CrudeOilChart fredApiKey="your_key_here" />
  export let fredApiKey = '';

  // ── historical monthly data (2019 – Mar 2025) ─────────────────────
  const MONTHLY = [
    // 2019
    {d:'2019-01',wti:53.1,brent:59.9},{d:'2019-02',wti:54.9,brent:64.4},
    {d:'2019-03',wti:58.2,brent:67.2},{d:'2019-04',wti:63.9,brent:71.2},
    {d:'2019-05',wti:60.8,brent:70.2},{d:'2019-06',wti:54.8,brent:64.3},
    {d:'2019-07',wti:57.3,brent:63.9},{d:'2019-08',wti:54.9,brent:59.5},
    {d:'2019-09',wti:56.9,brent:62.8},{d:'2019-10',wti:53.9,brent:59.7},
    {d:'2019-11',wti:57.1,brent:62.4},{d:'2019-12',wti:60.1,brent:67.3},
    // 2020
    {d:'2020-01',wti:57.5,brent:63.7},{d:'2020-02',wti:50.5,brent:55.7},
    {d:'2020-03',wti:29.2,brent:33.9},{d:'2020-04',wti:16.6,brent:21.3},
    {d:'2020-05',wti:28.6,brent:30.3},{d:'2020-06',wti:38.3,brent:40.3},
    {d:'2020-07',wti:40.7,brent:43.2},{d:'2020-08',wti:42.3,brent:44.7},
    {d:'2020-09',wti:39.6,brent:41.5},{d:'2020-10',wti:39.5,brent:41.5},
    {d:'2020-11',wti:40.9,brent:43.3},{d:'2020-12',wti:47.0,brent:50.1},
    // 2021
    {d:'2021-01',wti:52.2,brent:55.5},{d:'2021-02',wti:59.0,brent:62.4},
    {d:'2021-03',wti:61.5,brent:65.6},{d:'2021-04',wti:61.7,brent:65.3},
    {d:'2021-05',wti:65.2,brent:68.4},{d:'2021-06',wti:71.4,brent:74.5},
    {d:'2021-07',wti:72.2,brent:75.0},{d:'2021-08',wti:68.0,brent:71.0},
    {d:'2021-09',wti:71.6,brent:75.3},{d:'2021-10',wti:81.5,brent:84.3},
    {d:'2021-11',wti:79.4,brent:82.0},{d:'2021-12',wti:71.7,brent:74.5},
    // 2022
    {d:'2022-01',wti:83.2,brent:86.2},{d:'2022-02',wti:91.6,brent:96.8},
    {d:'2022-03',wti:108.5,brent:116.7},{d:'2022-04',wti:101.4,brent:108.0},
    {d:'2022-05',wti:109.5,brent:113.3},{d:'2022-06',wti:114.8,brent:121.9},
    {d:'2022-07',wti:98.6,brent:105.1},{d:'2022-08',wti:91.7,brent:100.0},
    {d:'2022-09',wti:84.2,brent:91.8},{d:'2022-10',wti:85.6,brent:93.6},
    {d:'2022-11',wti:82.6,brent:91.9},{d:'2022-12',wti:76.4,brent:82.4},
    // 2023
    {d:'2023-01',wti:78.0,brent:83.2},{d:'2023-02',wti:77.7,brent:83.8},
    {d:'2023-03',wti:72.9,brent:79.3},{d:'2023-04',wti:79.4,brent:83.5},
    {d:'2023-05',wti:72.5,brent:76.4},{d:'2023-06',wti:68.6,brent:74.9},
    {d:'2023-07',wti:77.8,brent:82.7},{d:'2023-08',wti:81.0,brent:86.2},
    {d:'2023-09',wti:88.8,brent:93.4},{d:'2023-10',wti:85.5,brent:90.5},
    {d:'2023-11',wti:77.4,brent:82.5},{d:'2023-12',wti:73.7,brent:79.0},
    // 2024
    {d:'2024-01',wti:73.9,brent:79.0},{d:'2024-02',wti:76.9,brent:82.7},
    {d:'2024-03',wti:81.1,brent:85.9},{d:'2024-04',wti:85.2,brent:89.4},
    {d:'2024-05',wti:79.7,brent:83.6},{d:'2024-06',wti:82.1,brent:84.9},
    {d:'2024-07',wti:77.3,brent:82.6},{d:'2024-08',wti:76.1,brent:80.0},
    {d:'2024-09',wti:71.0,brent:74.5},{d:'2024-10',wti:70.2,brent:75.1},
    {d:'2024-11',wti:68.7,brent:73.4},{d:'2024-12',wti:69.5,brent:74.7},
    // 2025
    {d:'2025-01',wti:75.8,brent:79.6},{d:'2025-02',wti:72.3,brent:76.1},
    {d:'2025-03',wti:67.1,brent:71.4},{d:'2025-04',wti:60.5,brent:64.2},
    {d:'2025-05',wti:61.0,brent:65.3},{d:'2025-06',wti:72.0,brent:76.5},
    {d:'2025-07',wti:65.8,brent:70.0},{d:'2025-08',wti:62.5,brent:67.0},
    {d:'2025-09',wti:63.2,brent:68.0},{d:'2025-10',wti:59.5,brent:64.0},
    {d:'2025-11',wti:57.5,brent:62.0},{d:'2025-12',wti:57.5,brent:63.0},
    // 2026
    {d:'2026-01',wti:57.0,brent:61.5},{d:'2026-02',wti:58.5,brent:63.0},
    {d:'2026-03',wti:79.0,brent:90.0},
  ];

  const EVENTS = [
    { d:'2020-04', label:'COVID crash',          sub:'WTI briefly negative',        side:'right' },
    { d:'2022-03', label:'Russia invades Ukraine',sub:'Brent hits $117',             side:'right' },
    { d:'2023-10', label:'Hamas attacks Israel',  sub:'Middle East risk premium',    side:'left'  },
    { d:'2024-01', label:'Houthi Red Sea attacks',sub:'Shipping disruption fears',   side:'right' },
    { d:'2025-03', label:'U.S. tariff escalation',sub:'Demand outlook weakens',      side:'left'  },
    { d:'2025-06', label:'Israel/US strike Iran', sub:'Brent surges to $80+',        side:'right' },
    { d:'2026-03', label:'U.S.-Israel war on Iran',sub:'Brent hits $112',            side:'left'  },
  ];

  const RANGES = ['1Y','3Y','5Y'];

  // ── chart geometry ─────────────────────────────────────────────────
  const W = 760, H = 360;
  const M = { top: 28, right: 24, bottom: 48, left: 52 };
  const CW = W - M.left - M.right;
  const CH = H - M.top  - M.bottom;

  // ── state ──────────────────────────────────────────────────────────
  let activeRange = '3Y';
  let hovered     = null;
  let liveDaily   = [];    // fetched from FRED
  let liveStatus  = '';    // '', 'loading', 'ok', 'error'

  // ── FRED fetch — last 40 trading days ──────────────────────────────
  // Series: DCOILWTICO (WTI) and DCOILBRENTEU (Brent), daily
  onMount(async () => {
    if (!fredApiKey) return;
    liveStatus = 'loading';
    try {
      const since = new Date(Date.now() - 45 * 86400000).toISOString().slice(0,10);
      const base  = 'https://api.stlouisfed.org/fred/series/observations';
      const common = `&api_key=${fredApiKey}&file_type=json&sort_order=asc&observation_start=${since}`;

      const [wRes, bRes] = await Promise.all([
        fetch(`${base}?series_id=DCOILWTICO${common}`),
        fetch(`${base}?series_id=DCOILBRENTEU${common}`),
      ]);
      const [wData, bData] = await Promise.all([wRes.json(), bRes.json()]);

      if (wData.error_code || bData.error_code) {
        console.warn('FRED API error:', wData.error_message || bData.error_message);
        liveStatus = '';
        return;
      }

      // FRED returns '.' for missing values (weekends/holidays)
      const wMap = {};
      for (const o of (wData.observations ?? []))
        if (o.value !== '.') wMap[o.date] = parseFloat(o.value);

      const bMap = {};
      for (const o of (bData.observations ?? []))
        if (o.value !== '.') bMap[o.date] = parseFloat(o.value);

      const days = [...new Set([...Object.keys(wMap), ...Object.keys(bMap)])].sort();
      liveDaily = days
        .filter(d => wMap[d] && bMap[d])
        .map(d => ({ d, wti: wMap[d], brent: bMap[d], daily: true }));

      liveStatus = liveDaily.length ? 'ok' : '';
    } catch (err) {
      console.warn('FRED fetch failed:', err);
      liveStatus = '';
    }
  });

  // ── merge monthly + daily ──────────────────────────────────────────
  $: mergedData = (() => {
    if (!liveDaily.length) return MONTHLY;
    // Remove monthly points that overlap with live daily range
    const firstLive = liveDaily[0]?.d.slice(0,7);
    const base = MONTHLY.filter(r => r.d < firstLive);
    return [...base, ...liveDaily];
  })();

  // ── range filter ───────────────────────────────────────────────────
  $: data = (() => {
    if (activeRange === 'All') return mergedData;
    const years = activeRange === '1Y' ? 1 : activeRange === '3Y' ? 3 : 5;
    const last = mergedData[mergedData.length - 1]?.d ?? '';
    const cutoff = new Date(last.slice(0, 7) + '-01');
    cutoff.setFullYear(cutoff.getFullYear() - years);
    const cutoffStr = cutoff.toISOString().slice(0, 7);
    return mergedData.filter(r => r.d.slice(0, 7) >= cutoffStr);
  })();

  // ── scales ─────────────────────────────────────────────────────────
  $: minPrice = Math.floor(Math.min(...data.flatMap(r=>[r.wti,r.brent]))/10)*10 - 5;
  $: maxPrice = Math.ceil (Math.max(...data.flatMap(r=>[r.wti,r.brent]))/10)*10 + 5;
  $: xScale = (i) => M.left + (i / (data.length - 1)) * CW;
  $: yScale = (v) => M.top  + CH - ((v - minPrice) / (maxPrice - minPrice)) * CH;
  $: wtiPts  = data.map((r,i) => ({ x: xScale(i), y: yScale(r.wti),   v: r.wti  }));
  $: brentPts = data.map((r,i) => ({ x: xScale(i), y: yScale(r.brent), v: r.brent }));

  $: yTicks = (() => {
    const step = (maxPrice - minPrice) > 100 ? 20 : 10;
    const t = [];
    for (let v = Math.ceil(minPrice/step)*step; v <= maxPrice; v += step) t.push(v);
    return t;
  })();

  $: xTicks = (() => {
    // 1Y: every 2 months → ~6 ticks; 3Y/5Y: every 6 months (Jan+Jul) → ~6-10 ticks
    const monthStep = activeRange === '1Y' ? 2 : 6;
    const mo = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const seen = new Set();
    return data.reduce((acc, r, i) => {
      const m  = +r.d.slice(5, 7);
      const ym = r.d.slice(0, 7);
      if (m % monthStep === 1 && !seen.has(ym)) {
        seen.add(ym);
        acc.push({ i, label: `${mo[m-1]} '${r.d.slice(2, 4)}` });
      }
      return acc;
    }, []);
  })();

  $: visibleEvents = (() => {
    const first = data[0]?.d.slice(0,7);
    const last  = data[data.length-1]?.d.slice(0,7);
    const events = EVENTS
      .filter(e => e.d >= first && e.d <= last)
      .map(e => {
        const idx = data.findIndex(r => r.d.slice(0,7) === e.d);
        if (idx < 0) return null;
        const ex = xScale(idx);
        // Estimate text width (label font ~5.5px/char, sub ~5px/char) + padding
        const tw = Math.max(e.label.length * 5.5, e.sub.length * 5.0) + 14;
        const xLeft  = e.side === 'left'  ? ex - tw : ex;
        const xRight = e.side === 'right' ? ex + tw : ex;
        return { ...e, idx, ex, xLeft, xRight };
      })
      .filter(Boolean);
    // Assign rows: greedy, based on actual text extents
    const rows = events.map(() => 0);
    for (let i = 1; i < events.length; i++) {
      const occupied = new Set();
      for (let j = 0; j < i; j++) {
        if (events[i].xLeft < events[j].xRight && events[i].xRight > events[j].xLeft) {
          occupied.add(rows[j]);
        }
      }
      let row = 0;
      while (occupied.has(row)) row++;
      rows[i] = row;
    }
    return events.map((e, i) => ({ ...e, yRow: rows[i] }));
  })();

  // ── path generation ────────────────────────────────────────────────
  function smoothPath(pts) {
    if (pts.length < 2) return '';
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const prev = pts[i-1] ?? pts[i];
      const next = pts[i+2] ?? pts[i+1];
      const cp1x = pts[i].x   + (pts[i+1].x - prev.x)     / 6;
      const cp1y = pts[i].y   + (pts[i+1].y - prev.y)     / 6;
      const cp2x = pts[i+1].x - (next.x      - pts[i].x)  / 6;
      const cp2y = pts[i+1].y - (next.y      - pts[i].y)  / 6;
      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)} ${cp2x.toFixed(1)} ${cp2y.toFixed(1)} ${pts[i+1].x.toFixed(1)} ${pts[i+1].y.toFixed(1)}`;
    }
    return d;
  }

  $: spreadPoly = (() => {
    const top = brentPts.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    const bot = [...wtiPts].reverse().map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    return `${top} ${bot}`;
  })();

  // Live daily segment highlight (right edge)
  $: liveSegStart = (() => {
    if (!liveDaily.length) return null;
    const idx = data.findIndex(r => r.daily);
    return idx >= 0 ? idx : null;
  })();

  // ── hover ──────────────────────────────────────────────────────────
  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const svgX  = (e.clientX - rect.left) * (W / rect.width);
    const inner = svgX - M.left;
    if (inner < 0 || inner > CW) { hovered = null; return; }
    const idx = Math.max(0, Math.min(data.length-1, Math.round((inner / CW) * (data.length-1))));
    hovered = { idx, x: xScale(idx), ...data[idx] };
  }
  function onMouseLeave() { hovered = null; }

  // ── formatting ─────────────────────────────────────────────────────
function fmtTooltipDate(dateStr) {
    const [y, m, dd] = dateStr.split('-');
    const mo = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return dd ? `${mo[+m-1]} ${+dd}, ${y}` : `${mo[+m-1]} ${y}`;
  }
  function fmtP(v) { return `$${v.toFixed(2)}`; }
  function tooltipLeft(x) { return x + 140 > W ? x - 150 : x + 12; }
</script>

<div class="chart-wrap">
  <!-- Header -->
  <div class="chart-header">
    <div class="titles">
      <h3>Global vs. U.S. Crude Oil Prices</h3>
      <p>Brent (global) · WTI (U.S.) · $/barrel</p>
    </div>
    <div class="header-right">
      {#if liveStatus === 'loading'}
        <span class="live-badge loading">● Updating…</span>
      {:else if liveStatus === 'ok'}
        <span class="live-badge ok">● Live</span>
      {/if}
      <div class="range-btns">
        {#each RANGES as r}
          <button class:active={activeRange === r} on:click={() => activeRange = r}>{r}</button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Chart -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <svg viewBox="0 0 {W} {H}" class="chart-svg"
    on:mousemove={onMouseMove} on:mouseleave={onMouseLeave}>

    <defs>
      <filter id="shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="rgba(0,0,0,0.07)"/>
      </filter>
      <!-- Clip for live region highlight -->
      {#if liveSegStart !== null}
        <clipPath id="live-clip">
          <rect x={xScale(liveSegStart)} y={M.top} width={CW} height={CH}/>
        </clipPath>
      {/if}
    </defs>

    <!-- Y grid -->
    {#each yTicks as v}
      <line x1={M.left} x2={M.left+CW} y1={yScale(v)} y2={yScale(v)}
        stroke="#ebebeb" stroke-width="1"/>
    {/each}

    <!-- Spread fill -->
    <polygon points={spreadPoly} fill="rgba(180,158,110,0.10)"/>

    <!-- Live region subtle tint -->
    {#if liveSegStart !== null}
      <rect x={xScale(liveSegStart)} y={M.top} width={M.left+CW - xScale(liveSegStart)} height={CH}
        fill="rgba(0,51,161,0.03)"/>
    {/if}

    <!-- Brent line -->
    <path d={smoothPath(brentPts)} fill="none" stroke="#c4a776" stroke-width="2"/>

    <!-- WTI line -->
    <path d={smoothPath(wtiPts)} fill="none" stroke="#0033A1" stroke-width="2"/>

    <!-- Event annotations -->
    {#each visibleEvents as ev}
      {@const ex = ev.ex}
      {@const ey1 = M.top + 13 + ev.yRow * 26}
      {@const ey2 = M.top + 24 + ev.yRow * 26}
      <line x1={ex} x2={ex} y1={M.top} y2={M.top+CH}
        stroke="#d0d0d0" stroke-width="1" stroke-dasharray="3,3"/>
      {#if ev.side === 'left'}
        <text x={ex - 5} y={ey1} class="ev-label" text-anchor="end">{ev.label}</text>
        <text x={ex - 5} y={ey2} class="ev-sub"   text-anchor="end">{ev.sub}</text>
      {:else}
        <text x={ex + 5} y={ey1} class="ev-label">{ev.label}</text>
        <text x={ex + 5} y={ey2} class="ev-sub">{ev.sub}</text>
      {/if}
    {/each}

    <!-- Y axis labels -->
    {#each yTicks as v}
      <text x={M.left-8} y={yScale(v)+4} class="ax" text-anchor="end">${v}</text>
    {/each}

    <!-- X axis labels -->
    {#each xTicks as t}
      <text x={xScale(t.i)} y={M.top+CH+18} class="ax" text-anchor="middle">{t.label}</text>
    {/each}

    <!-- Baseline -->
    <line x1={M.left} x2={M.left+CW} y1={M.top+CH} y2={M.top+CH} stroke="#ddd"/>

    <!-- Hover -->
    {#if hovered}
      <line x1={hovered.x} x2={hovered.x} y1={M.top} y2={M.top+CH}
        stroke="#aaa" stroke-width="1" stroke-dasharray="3,3"/>
      <circle cx={hovered.x} cy={yScale(hovered.brent)} r="4"
        fill="#fff" stroke="#c4a776" stroke-width="2"/>
      <circle cx={hovered.x} cy={yScale(hovered.wti)} r="4"
        fill="#fff" stroke="#0033A1" stroke-width="2"/>

      {@const tx = tooltipLeft(hovered.x)}
      {@const spread = (hovered.brent - hovered.wti).toFixed(2)}
      <rect x={tx} y={M.top+16} width="144" height="86"
        rx="6" fill="rgba(255,255,255,0.97)" stroke="#e2e2e2"
        filter="url(#shadow)"/>
      <text x={tx+10} y={M.top+33} class="tt-date">{fmtTooltipDate(hovered.d)}</text>
      {#if hovered.daily}
        <text x={tx+10} y={M.top+43} class="tt-live">● live</text>
      {/if}
      <circle cx={tx+14} cy={M.top+54} r="4" fill="#c4a776"/>
      <text x={tx+24} y={M.top+58} class="tt-lbl">Brent</text>
      <text x={tx+134} y={M.top+58} class="tt-val" text-anchor="end">{fmtP(hovered.brent)}</text>
      <circle cx={tx+14} cy={M.top+70} r="4" fill="#0033A1"/>
      <text x={tx+24} y={M.top+74} class="tt-lbl">WTI</text>
      <text x={tx+134} y={M.top+74} class="tt-val" text-anchor="end">{fmtP(hovered.wti)}</text>
      <text x={tx+10} y={M.top+90} class="tt-spread">Spread: +${spread}/bbl</text>
    {/if}
  </svg>

  <!-- Legend + source -->
  <div class="legend">
    <span class="leg"><svg width="20" height="8"><line x1="0" y1="4" x2="20" y2="4" stroke="#c4a776" stroke-width="2.5"/></svg>Brent (global)</span>
    <span class="leg"><svg width="20" height="8"><line x1="0" y1="4" x2="20" y2="4" stroke="#0033A1" stroke-width="2.5"/></svg>WTI (U.S.)</span>
    <span class="leg"><svg width="20" height="8"><rect x="0" y="1" width="20" height="6" fill="rgba(180,158,110,0.25)" rx="1"/></svg>Spread</span>
    {#if !fredApiKey}
      <span class="leg-note">Add <code>fredApiKey</code> prop for live daily data · <a href="https://fred.stlouisfed.org/docs/api/api_key.html" target="_blank" rel="noopener">Get free key</a></span>
    {/if}
    <span class="leg-source">Source: FRED / EIA</span>
  </div>
</div>

<style>
  .chart-wrap {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    padding: 24px 20px 18px;
    max-width: 820px;
    margin: 0 auto;
  }

  .chart-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }

  .titles h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #111;
    margin: 0 0 3px;
  }
  .titles p {
    font-size: 0.73rem;
    color: #999;
    margin: 0;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .live-badge {
    font-size: 0.68rem;
    border-radius: 3px;
    padding: 2px 7px;
    letter-spacing: 0.2px;
  }
  .live-badge.ok      { color: #2a7a3b; background: #eaf5ec; }
  .live-badge.loading { color: #888; background: #f4f4f4; }

  .range-btns { display: flex; gap: 3px; }
  .range-btns button {
    padding: 4px 9px;
    border: 1px solid #ddd;
    background: none;
    border-radius: 4px;
    font-size: 0.7rem;
    color: #888;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.15s;
  }
  .range-btns button:hover { border-color: #aaa; color: #333; }
  .range-btns button.active { background: #111; border-color: #111; color: #fff; }

  .chart-svg {
    width: 100%;
    height: auto;
    display: block;
    cursor: crosshair;
  }

  .ax       { font-size: 10px; fill: #bbb; font-family: 'Helvetica Neue', sans-serif; }
  .ev-label { font-size: 9.5px; fill: #aaa; font-family: 'Helvetica Neue', sans-serif; font-weight: 500; }
  .ev-sub   { font-size: 8.5px; fill: #ccc; font-family: 'Helvetica Neue', sans-serif; }
  .tt-date  { font-size: 11px; font-weight: 600; fill: #222; font-family: 'Helvetica Neue', sans-serif; }
  .tt-live  { font-size: 8.5px; fill: #2a7a3b; font-family: 'Helvetica Neue', sans-serif; }
  .tt-lbl   { font-size: 10.5px; fill: #666; font-family: 'Helvetica Neue', sans-serif; }
  .tt-val   { font-size: 10.5px; font-weight: 600; fill: #111; font-family: 'Helvetica Neue', sans-serif; }
  .tt-spread{ font-size: 9.5px; fill: #aaa; font-family: 'Helvetica Neue', sans-serif; }

  .legend {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 10px;
    padding-top: 12px;
    border-top: 1px solid #f0f0f0;
  }
  .leg {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.7rem;
    color: #666;
  }
  .leg-note {
    font-size: 0.68rem;
    color: #bbb;
  }
  .leg-note code {
    background: #f5f5f5;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 0.65rem;
    color: #888;
  }
  .leg-note a { color: #0033A1; }
  .leg-source {
    margin-left: auto;
    font-size: 0.67rem;
    color: #ccc;
    font-style: italic;
  }
</style>
