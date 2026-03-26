<script>
  import { onMount } from 'svelte';

  let canvas;
  let visible = true;
  const DURATION = 3400;

  // ── sakura palette ────────────────────────────────────────────────
  const PALETTE = [
    { fill: 'rgba(255, 183, 197, A)', stroke: 'rgba(234, 150, 168, A)' },
    { fill: 'rgba(255, 209, 220, A)', stroke: 'rgba(240, 180, 195, A)' },
    { fill: 'rgba(255, 228, 235, A)', stroke: 'rgba(240, 200, 212, A)' },
    { fill: 'rgba(248, 200, 220, A)', stroke: 'rgba(225, 170, 195, A)' },
    { fill: 'rgba(255, 240, 245, A)', stroke: 'rgba(235, 210, 220, A)' },
    { fill: 'rgba(242, 170, 190, A)', stroke: 'rgba(215, 140, 165, A)' },
    { fill: 'rgba(255, 220, 230, A)', stroke: 'rgba(238, 190, 205, A)' },
    { fill: 'rgba(230, 160, 180, A)', stroke: 'rgba(200, 130, 155, A)' },
  ];

  onMount(() => {
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth;
    let H = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const startTime = performance.now();
    const particles = [];
    let animId, lastSpawn = 0;

    // ── wind direction ──────────────────────────────────────────────
    const BASE_WIND_ANGLE = Math.PI * 0.3;
    let mouseInfluenceX = 0, mouseInfluenceY = 0, mouseMoved = false;

    function onMouseMove(e) {
      mouseMoved = true;
      const cx = W / 2, cy = H / 2;
      mouseInfluenceX = (e.clientX - cx) / W * 0.6;
      mouseInfluenceY = (e.clientY - cy) / H * 0.6;
    }
    window.addEventListener('mousemove', onMouseMove);

    function getWindAngle() {
      if (!mouseMoved) return BASE_WIND_ANGLE;
      return BASE_WIND_ANGLE + mouseInfluenceX * 0.35 + mouseInfluenceY * 0.25;
    }

    // ── spawn ───────────────────────────────────────────────────────
    function spawn(now) {
      const windAngle = getWindAngle();
      const angle = windAngle + (Math.random() - 0.5) * 0.55;
      const speed = 1.4 + Math.random() * 2.8;

      let x, y;
      if (Math.random() < 0.6) {
        x = -40 + Math.random() * (W * 0.8);
        y = -20 - Math.random() * 40;
      } else {
        x = -20 - Math.random() * 40;
        y = -40 + Math.random() * (H * 0.7);
      }

      const kind = Math.random();
      let shape;
      if      (kind < 0.25) shape = 0;
      else if (kind < 0.60) shape = 1;
      else if (kind < 0.78) shape = 2;
      else                  shape = 3;

      const sizeBase = shape === 3 ? 1.5 + Math.random() * 2.5
                     : shape === 2 ? 5 + Math.random() * 12
                     : shape === 0 ? 10 + Math.random() * 14
                     : 7 + Math.random() * 13;

      return {
        shape,
        palette: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: sizeBase,
        rotation:  Math.random() * Math.PI * 2,
        rotSpeed:  (Math.random() - 0.5) * 0.07,
        waveAmp:   0.6 + Math.random() * 1.6,
        waveFreq:  0.003 + Math.random() * 0.003,
        wavePhase: Math.random() * Math.PI * 2,
        born: now,
        lifetime: 1100 + Math.random() * 1500,
        depth: 0.35 + Math.random() * 0.65,
      };
    }

    // ── draw helpers ────────────────────────────────────────────────
    function drawSakura(p, alpha) {
      const s = p.size * p.depth;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      for (let i = 0; i < 5; i++) {
        ctx.save();
        ctx.rotate((Math.PI * 2 / 5) * i);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo( s*0.22, -s*0.35,  s*0.35, -s*0.55, 0, -s*0.7);
        ctx.bezierCurveTo(-s*0.35, -s*0.55, -s*0.22, -s*0.35, 0,  0);
        ctx.fillStyle = p.palette.fill.replace('A', alpha * 0.65);
        ctx.fill();
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.08, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 220, 140, ${alpha * 0.7})`;
      ctx.fill();
      ctx.restore();
    }

    function drawPetal(p, alpha) {
      const s = p.size * p.depth;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.5);
      ctx.bezierCurveTo( s*0.45, -s*0.30,  s*0.40,  s*0.25, 0, s*0.5);
      ctx.bezierCurveTo(-s*0.40,  s*0.25, -s*0.45, -s*0.30, 0, -s*0.5);
      ctx.fillStyle   = p.palette.fill.replace('A', alpha * 0.7);
      ctx.strokeStyle = p.palette.stroke.replace('A', alpha * 0.3);
      ctx.lineWidth   = 0.5;
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    function drawBokeh(p, alpha) {
      const r = p.size * p.depth * 0.5;
      ctx.save();
      ctx.translate(p.x, p.y);
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
      grad.addColorStop(0,   p.palette.fill.replace('A', alpha * 0.4));
      grad.addColorStop(0.6, p.palette.fill.replace('A', alpha * 0.15));
      grad.addColorStop(1,   p.palette.fill.replace('A', '0'));
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawSpeck(p, alpha) {
      const r = p.size * p.depth * 0.5;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.fillStyle = p.palette.fill.replace('A', alpha * 0.55);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // ── main loop ──────────────────────────────────────────────────
    function draw(now) {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / DURATION, 1);

      let bgA;
      if      (t < 0.05) bgA = t / 0.05;
      else if (t < 0.60) bgA = 1;
      else               bgA = 1 - (t - 0.60) / 0.40;
      bgA *= 0.38;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = `rgba(255, 252, 248, ${bgA})`;
      ctx.fillRect(0, 0, W, H);

      // Spawn
      if (t < 0.72) {
        let density;
        if      (t < 0.18) density = t / 0.18;
        else if (t < 0.50) density = 1;
        else               density = 1 - (t - 0.50) / 0.22;

        const interval = 22 + (1 - density) * 50;
        if (now - lastSpawn > interval) {
          particles.push(spawn(now));
          if (density > 0.4) particles.push(spawn(now));
          if (density > 0.7) particles.push(spawn(now));
          lastSpawn = now;
        }
      }

      const wa  = getWindAngle();
      const wpx = Math.cos(wa) * 0.03;
      const wpy = Math.sin(wa) * 0.03;

      particles.sort((a, b) => a.depth - b.depth);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p   = particles[i];
        const age = now - p.born;
        const lt  = age / p.lifetime;

        if (lt >= 1 || p.x > W + 100 || p.y > H + 100 || p.x < -120 || p.y < -120) {
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

        if      (p.shape === 0) drawSakura(p, alpha);
        else if (p.shape === 1) drawPetal(p, alpha);
        else if (p.shape === 2) drawBokeh(p, alpha);
        else                    drawSpeck(p, alpha);
      }

      if (t < 1) {
        animId = requestAnimationFrame(draw);
      } else {
        visible = false;
      }
    }

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
    };
  });
</script>

{#if visible}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="wind-overlay" on:click={() => (visible = false)}>
    <canvas bind:this={canvas}></canvas>
  </div>
{/if}

<style>
  .wind-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    cursor: pointer;
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
