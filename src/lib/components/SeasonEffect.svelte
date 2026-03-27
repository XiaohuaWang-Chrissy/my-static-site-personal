<script>
  import { onMount, tick } from 'svelte';

  let canvas;
  let playing = false;
  let currentSeason = 'spring';

  // Auto-detect season by month
  function detectSeason() {
    const m = new Date().getMonth(); // 0-11
    if (m >= 2 && m <= 4)  return 'spring';
    if (m >= 5 && m <= 7)  return 'summer';
    if (m >= 8 && m <= 10) return 'autumn';
    return 'winter';
  }

  const SEASONS = {
    spring: { zh: '春', en: 'Spring', color: '#f0a0b4' },
    summer: { zh: '夏', en: 'Summer', color: '#7eb8d8' },
    autumn: { zh: '秋', en: 'Autumn', color: '#d4964a' },
    winter: { zh: '冬', en: 'Winter', color: '#b0c4de' },
  };

  // ── season palettes & configs ─────────────────────────────────────
  const SPRING_PALETTE = [
    { fill: 'rgba(255,183,197,A)', stroke: 'rgba(234,150,168,A)' },
    { fill: 'rgba(255,209,220,A)', stroke: 'rgba(240,180,195,A)' },
    { fill: 'rgba(255,228,235,A)', stroke: 'rgba(240,200,212,A)' },
    { fill: 'rgba(248,200,220,A)', stroke: 'rgba(225,170,195,A)' },
    { fill: 'rgba(255,240,245,A)', stroke: 'rgba(235,210,220,A)' },
    { fill: 'rgba(242,170,190,A)', stroke: 'rgba(215,140,165,A)' },
  ];

  const SUMMER_PALETTE = [
    { fill: 'rgba(200,220,255,A)', stroke: 'rgba(180,200,240,A)' },
    { fill: 'rgba(210,225,250,A)', stroke: 'rgba(190,210,240,A)' },
    { fill: 'rgba(220,235,255,A)', stroke: 'rgba(200,215,245,A)' },
    { fill: 'rgba(190,215,250,A)', stroke: 'rgba(170,195,235,A)' },
    { fill: 'rgba(230,240,255,A)', stroke: 'rgba(210,225,250,A)' },
  ];

  const AUTUMN_PALETTE = [
    { fill: 'rgba(210,120,50,A)',  stroke: 'rgba(180,95,35,A)' },
    { fill: 'rgba(195,85,40,A)',   stroke: 'rgba(165,65,25,A)' },
    { fill: 'rgba(220,170,60,A)',  stroke: 'rgba(190,140,40,A)' },
    { fill: 'rgba(180,70,30,A)',   stroke: 'rgba(150,50,15,A)' },
    { fill: 'rgba(230,150,50,A)',  stroke: 'rgba(200,125,35,A)' },
    { fill: 'rgba(160,100,40,A)',  stroke: 'rgba(130,75,25,A)' },
  ];

  const WINTER_PALETTE = [
    { fill: 'rgba(220,230,245,A)', stroke: 'rgba(195,210,230,A)' },
    { fill: 'rgba(235,240,250,A)', stroke: 'rgba(210,220,240,A)' },
    { fill: 'rgba(200,215,235,A)', stroke: 'rgba(175,195,220,A)' },
    { fill: 'rgba(245,248,255,A)', stroke: 'rgba(220,228,240,A)' },
    { fill: 'rgba(210,225,245,A)', stroke: 'rgba(185,200,230,A)' },
  ];

  function getPalette(season) {
    if (season === 'summer') return SUMMER_PALETTE;
    if (season === 'autumn') return AUTUMN_PALETTE;
    if (season === 'winter') return WINTER_PALETTE;
    return SPRING_PALETTE;
  }

  onMount(() => {
    currentSeason = detectSeason();
  });

  async function play(season) {
    currentSeason = season;
    playing = true;
    await tick();

    const ctx = canvas.getContext('2d');
    const W = window.innerWidth;
    const H = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const DURATION = season === 'winter' ? 4400 : 3400;
    const startTime = performance.now();
    const particles = [];
    let animId, lastSpawn = 0;
    const palette = getPalette(season);

    // Wind from top-left, summer more vertical
    const BASE_ANGLE = season === 'summer' ? Math.PI * 0.42 : Math.PI * 0.3;
    let mIX = 0, mIY = 0, mMoved = false;

    function onMM(e) {
      mMoved = true;
      mIX = (e.clientX - W/2) / W * 0.6;
      mIY = (e.clientY - H/2) / H * 0.6;
    }
    window.addEventListener('mousemove', onMM);

    function windAngle() {
      if (!mMoved) return BASE_ANGLE;
      return BASE_ANGLE + mIX * 0.35 + mIY * 0.25;
    }

    // ── spawn ───────────────────────────────────────────────────────
    function spawn(now) {
      const wa = windAngle();
      const angle = wa + (Math.random() - 0.5) * 0.55;
      const pal = palette[Math.floor(Math.random() * palette.length)];
      const depth = 0.35 + Math.random() * 0.65;

      if (season === 'summer') {
        // Rain: spawn across entire top edge
        const x = -20 + Math.random() * (W + 40);
        const y = -20 - Math.random() * 60;
        return spawnSummer(now, x, y, angle, pal, depth);
      }

      if (season === 'winter') {
        // Snow: spawn across top edge + some from left
        let x, y;
        if (Math.random() < 0.8) {
          x = -20 + Math.random() * (W + 40);
          y = -20 - Math.random() * 50;
        } else {
          x = -20 - Math.random() * 30;
          y = Math.random() * H * 0.6;
        }
        return spawnWinter(now, x, y, angle, pal, depth);
      }

      // Spring & autumn: from top-left
      let x, y;
      if (Math.random() < 0.6) {
        x = -40 + Math.random() * (W * 0.8);
        y = -20 - Math.random() * 40;
      } else {
        x = -20 - Math.random() * 40;
        y = -40 + Math.random() * (H * 0.7);
      }

      if (season === 'spring') return spawnSpring(now, x, y, angle, pal, depth);
      return spawnAutumn(now, x, y, angle, pal, depth);
    }

    function spawnSpring(now, x, y, angle, pal, depth) {
      const speed = 1.4 + Math.random() * 2.8;
      const kind = Math.random();
      return {
        type: kind < 0.3 ? 'sakura' : kind < 0.7 ? 'petal' : kind < 0.85 ? 'bokeh' : 'speck',
        palette: pal, x, y, depth,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        size: kind < 0.3 ? 10 + Math.random()*14 : kind < 0.7 ? 7 + Math.random()*13 : 4 + Math.random()*8,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random()-0.5) * 0.07,
        waveAmp: 0.6 + Math.random()*1.6, waveFreq: 0.003+Math.random()*0.003,
        wavePhase: Math.random()*Math.PI*2,
        born: now, lifetime: 1100+Math.random()*1500,
      };
    }

    function spawnSummer(now, x, y, angle, pal, depth) {
      // Varied speeds — some fast, some gentle
      const speed = 2.0 + Math.random() * 3.5;
      // Slight angle variation — not all perfectly vertical
      const rainAngle = Math.PI * 0.44 + (Math.random()-0.5) * 0.25;
      const kind = Math.random();
      const d = 0.3 + Math.random() * 0.7; // depth variety
      // Wide size range — big drops, medium, tiny mist
      let type, size;
      if (kind < 0.35) {
        type = 'raindrop'; size = 10 + Math.random() * 10;   // medium drops
      } else if (kind < 0.55) {
        type = 'raindrop'; size = 5 + Math.random() * 6;     // small drops
      } else if (kind < 0.70) {
        type = 'raindrop'; size = 16 + Math.random() * 8;    // larger drops
      } else if (kind < 0.85) {
        type = 'droplet';  size = 2 + Math.random() * 3;     // tiny mist
      } else {
        type = 'bokeh';    size = 4 + Math.random() * 8;     // soft splash glow
      }
      return {
        type, palette: pal, x, y, depth: d,
        vx: Math.cos(rainAngle) * speed * 0.2,
        vy: Math.sin(rainAngle) * speed,
        size,
        rotation: rainAngle,
        rotSpeed: 0,
        waveAmp: 0.15 + Math.random()*0.2,
        waveFreq: 0.004 + Math.random()*0.003,
        wavePhase: Math.random()*Math.PI*2,
        born: now, lifetime: 800 + Math.random() * 1000,
      };
    }

    function spawnAutumn(now, x, y, angle, pal, depth) {
      const speed = 1.0 + Math.random() * 2.2;
      const kind = Math.random();
      return {
        type: kind < 0.55 ? 'leaf' : kind < 0.80 ? 'petal' : 'speck',
        palette: pal, x, y, depth,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        size: kind < 0.55 ? 10+Math.random()*16 : kind < 0.80 ? 7+Math.random()*12 : 2+Math.random()*3,
        rotation: Math.random()*Math.PI*2,
        rotSpeed: (Math.random()-0.5) * 0.09,
        waveAmp: 1.0 + Math.random()*2.5, waveFreq: 0.002+Math.random()*0.003,
        wavePhase: Math.random()*Math.PI*2,
        born: now, lifetime: 1400+Math.random()*1800,
      };
    }

    function spawnWinter(now, x, y, angle, pal, depth) {
      const speed = 0.5 + Math.random() * 1.2;
      const kind = Math.random();
      return {
        type: kind < 0.35 ? 'snowflake' : kind < 0.65 ? 'bokeh' : 'speck',
        palette: pal, x, y, depth,
        vx: Math.cos(angle) * speed * 0.4 + (Math.random()-0.5)*0.3,
        vy: speed * 0.8 + 0.4,
        size: kind < 0.35 ? 7+Math.random()*12 : kind < 0.65 ? 6+Math.random()*14 : 2+Math.random()*4,
        rotation: Math.random()*Math.PI*2,
        rotSpeed: (Math.random()-0.5)*0.02,
        waveAmp: 1.2+Math.random()*2.5, waveFreq: 0.0015+Math.random()*0.002,
        wavePhase: Math.random()*Math.PI*2,
        born: now, lifetime: 2000+Math.random()*2200,
      };
    }

    // ── draw functions ──────────────────────────────────────────────
    function drawSakura(p, a) {
      const s = p.size * p.depth;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rotation);
      for (let i=0;i<5;i++){
        ctx.save(); ctx.rotate((Math.PI*2/5)*i);
        ctx.beginPath(); ctx.moveTo(0,0);
        ctx.bezierCurveTo(s*0.22,-s*0.35,s*0.35,-s*0.55,0,-s*0.7);
        ctx.bezierCurveTo(-s*0.35,-s*0.55,-s*0.22,-s*0.35,0,0);
        ctx.fillStyle=p.palette.fill.replace('A',a*0.65); ctx.fill();
        ctx.restore();
      }
      ctx.beginPath(); ctx.arc(0,0,s*0.08,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,220,140,${a*0.7})`; ctx.fill();
      ctx.restore();
    }

    function drawPetal(p, a) {
      const s = p.size * p.depth;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rotation);
      ctx.beginPath(); ctx.moveTo(0,-s*0.5);
      ctx.bezierCurveTo(s*0.45,-s*0.30,s*0.40,s*0.25,0,s*0.5);
      ctx.bezierCurveTo(-s*0.40,s*0.25,-s*0.45,-s*0.30,0,-s*0.5);
      ctx.fillStyle=p.palette.fill.replace('A',a*0.7);
      ctx.strokeStyle=p.palette.stroke.replace('A',a*0.3);
      ctx.lineWidth=0.5; ctx.fill(); ctx.stroke();
      ctx.restore();
    }

    function drawLeaf(p, a) {
      const s = p.size * p.depth;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rotation);
      ctx.beginPath(); ctx.moveTo(0,-s*0.7);
      ctx.bezierCurveTo(s*0.3,-s*0.3,s*0.25,s*0.4,0,s*0.7);
      ctx.bezierCurveTo(-s*0.25,s*0.4,-s*0.3,-s*0.3,0,-s*0.7);
      ctx.fillStyle=p.palette.fill.replace('A',a*0.7);
      ctx.strokeStyle=p.palette.stroke.replace('A',a*0.35);
      ctx.lineWidth=0.5; ctx.fill(); ctx.stroke();
      // Vein
      ctx.beginPath(); ctx.moveTo(0,-s*0.5); ctx.lineTo(0,s*0.5);
      ctx.strokeStyle=p.palette.stroke.replace('A',a*0.2);
      ctx.lineWidth=0.4; ctx.stroke();
      ctx.restore();
    }

    function drawRaindrop(p, a) {
      const s = p.size * p.depth;
      ctx.save(); ctx.translate(p.x, p.y);
      // Teardrop shape — pointed top, round bottom
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.6);
      ctx.bezierCurveTo( s*0.25, -s*0.15,  s*0.25,  s*0.35, 0, s*0.5);
      ctx.bezierCurveTo(-s*0.25,  s*0.35, -s*0.25, -s*0.15, 0, -s*0.6);
      ctx.fillStyle = p.palette.fill.replace('A', a * 0.8);
      ctx.fill();
      // Inner highlight
      ctx.beginPath();
      ctx.ellipse(s*0.04, -s*0.05, s*0.06, s*0.15, 0.2, 0, Math.PI*2);
      ctx.fillStyle = `rgba(235,245,255,${a*0.4})`;
      ctx.fill();
      ctx.restore();
    }

    function drawDroplet(p, a) {
      const r = p.size * p.depth * 0.5;
      ctx.save(); ctx.translate(p.x, p.y);
      ctx.fillStyle = p.palette.fill.replace('A', a * 0.75);
      ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill();
      ctx.restore();
    }

    function drawSnowflake(p, a) {
      const s = p.size * p.depth;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rotation);
      // Soft glow behind
      const g = ctx.createRadialGradient(0,0,0,0,0,s*0.6);
      g.addColorStop(0, `rgba(220,230,255,${a*0.15})`);
      g.addColorStop(1, `rgba(220,230,255,0)`);
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(0,0,s*0.6,0,Math.PI*2); ctx.fill();
      // Six-armed crystal
      ctx.strokeStyle=`rgba(235,240,255,${a*0.9})`;
      ctx.lineWidth=1;
      for(let i=0;i<6;i++){
        ctx.save(); ctx.rotate((Math.PI/3)*i);
        ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-s*0.5);
        ctx.moveTo(0,-s*0.3); ctx.lineTo(s*0.13,-s*0.42);
        ctx.moveTo(0,-s*0.3); ctx.lineTo(-s*0.13,-s*0.42);
        ctx.stroke();
        ctx.restore();
      }
      // Centre dot
      ctx.beginPath(); ctx.arc(0,0,s*0.07,0,Math.PI*2);
      ctx.fillStyle=`rgba(240,245,255,${a*0.8})`; ctx.fill();
      ctx.restore();
    }

    function drawBokeh(p, a) {
      const r = p.size*p.depth*0.5;
      ctx.save(); ctx.translate(p.x,p.y);
      const g=ctx.createRadialGradient(0,0,0,0,0,r);
      g.addColorStop(0,p.palette.fill.replace('A',a*0.4));
      g.addColorStop(0.6,p.palette.fill.replace('A',a*0.15));
      g.addColorStop(1,p.palette.fill.replace('A','0'));
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(0,0,r,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }

    function drawSpeck(p, a) {
      const r=p.size*p.depth*0.5;
      ctx.save(); ctx.translate(p.x,p.y);
      ctx.fillStyle=p.palette.fill.replace('A',a*0.55);
      ctx.beginPath(); ctx.arc(0,0,r,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }

    function drawParticle(p, a) {
      switch(p.type) {
        case 'sakura':    drawSakura(p,a); break;
        case 'petal':     drawPetal(p,a); break;
        case 'leaf':      drawLeaf(p,a); break;
        case 'raindrop':  drawRaindrop(p,a); break;
        case 'droplet':   drawDroplet(p,a); break;
        case 'splash':    drawDroplet(p,a); break;
        case 'snowflake': drawSnowflake(p,a); break;
        case 'bokeh':     drawBokeh(p,a); break;
        default:          drawSpeck(p,a); break;
      }
    }

    // ── main loop ───────────────────────────────────────────────────
    function draw(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / DURATION, 1);

      let bgA;
      if      (t < 0.05) bgA = t / 0.05;
      else if (t < 0.60) bgA = 1;
      else               bgA = 1 - (t - 0.60) / 0.40;

      // Season-specific veil: summer & winter use a darker tint
      let veilColor, veilStrength;
      if (season === 'summer') {
        veilColor = '25,35,55';     // dark storm blue
        veilStrength = 0.55;
      } else if (season === 'winter') {
        veilColor = '30,35,55';     // deep twilight
        veilStrength = 0.38;
      } else {
        veilColor = '255,252,248';  // warm white
        veilStrength = 0.30;
      }
      bgA *= veilStrength;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = `rgba(${veilColor},${bgA})`;
      ctx.fillRect(0, 0, W, H);

      if (t < 0.72) {
        let density;
        if      (t < 0.18) density = t / 0.18;
        else if (t < 0.50) density = 1;
        else               density = 1 - (t - 0.50) / 0.22;

        const baseInterval = season === 'summer' ? 18 : season === 'winter' ? 14 : 22;
        const interval = baseInterval + (1 - density) * 45;
        if (now - lastSpawn > interval) {
          particles.push(spawn(now));
          if (density > 0.3) particles.push(spawn(now));
          if (density > 0.6) particles.push(spawn(now));
          // Summer: gentle steady rain
          if (season === 'summer' && density > 0.4) {
            particles.push(spawn(now));
          }
          // Winter: thick snow
          if (season === 'winter' && density > 0.3) {
            particles.push(spawn(now));
            particles.push(spawn(now));
          }
          lastSpawn = now;
        }
      }

      const wa  = windAngle();
      const wpx = Math.cos(wa) * 0.03;
      const wpy = Math.sin(wa) * 0.03;

      particles.sort((a, b) => a.depth - b.depth);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p   = particles[i];
        const age = now - p.born;
        const lt  = age / p.lifetime;

        if (lt >= 1 || p.x > W+100 || p.y > H+100 || p.x < -120 || p.y < -120) {
          particles.splice(i, 1);
          continue;
        }

        let pA;
        if      (lt < 0.10) pA = lt / 0.10;
        else if (lt < 0.60) pA = 1;
        else                pA = 1 - (lt - 0.60) / 0.40;
        const globalDim = t > 0.60 ? 1 - (t - 0.60) / 0.40 : 1;
        const alpha = pA * globalDim;

        p.vx += wpx * p.depth;
        p.vy += wpy * p.depth;
        p.x  += p.vx * p.depth;
        p.y  += p.vy * p.depth;
        p.x  += Math.sin(age * p.waveFreq + p.wavePhase) * p.waveAmp * 0.03;
        p.y  += Math.cos(age * p.waveFreq * 0.7 + p.wavePhase) * p.waveAmp * 0.02;
        p.rotation += p.rotSpeed * p.depth;
        p.vx *= 1.003;
        p.vy *= 1.003;

        drawParticle(p, alpha);
      }

      if (t < 1) {
        animId = requestAnimationFrame(draw);
      } else {
        playing = false;
        window.removeEventListener('mousemove', onMM);
      }
    }

    animId = requestAnimationFrame(draw);
  }
</script>

<!-- Season icons -->
<div class="season-bar">
  {#each ['spring','summer','autumn','winter'] as s}
    <button
      class="season-btn"
      class:active={currentSeason === s}
      on:click={() => play(s)}
      title={SEASONS[s].en}
      style="--ring-color: {SEASONS[s].color}"
    >
      <span class="season-ring">
        <span class="season-zh">{SEASONS[s].zh}</span>
      </span>
      <span class="season-en">{SEASONS[s].en}</span>
    </button>
  {/each}
</div>

<!-- Canvas overlay -->
{#if playing}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="effect-overlay" on:click={() => (playing = false)}>
    <canvas bind:this={canvas}></canvas>
  </div>
{/if}

<style>
  .season-bar {
    display: flex;
    gap: 22px;
    justify-content: center;
    margin-top: 0.8rem;
  }

  .season-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 4px;
    transition: transform 0.2s ease;
  }

  .season-btn:hover {
    transform: translateY(-2px);
  }

  .season-ring {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid var(--ring-color);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    transition: opacity 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  }

  .season-btn:hover .season-ring {
    opacity: 0.85;
    transform: scale(1.1);
    box-shadow: 0 0 10px color-mix(in srgb, var(--ring-color) 40%, transparent);
  }

  .season-btn.active .season-ring {
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 0 12px color-mix(in srgb, var(--ring-color) 50%, transparent);
  }

  .season-zh {
    font-family: 'Long Cang', cursive;
    font-size: 0.9rem;
    color: var(--ring-color);
    line-height: 1;
    opacity: 0.85;
  }

  .season-btn:hover .season-zh,
  .season-btn.active .season-zh {
    opacity: 1;
  }

  .season-en {
    font-size: 0.6rem;
    color: #aaa;
    letter-spacing: 0.5px;
    transition: color 0.2s ease;
  }

  .season-btn:hover .season-en {
    color: #777;
  }

  .season-btn.active .season-en {
    color: #666;
  }

  .effect-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: auto;
    cursor: pointer;
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
