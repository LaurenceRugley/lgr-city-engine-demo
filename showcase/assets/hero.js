/* ============================================================
   hero.js — L103: the LIGHT-LIVE HERO scene (slim, no-build, lazy-loaded over the poster).
   ------------------------------------------------------------
   WHAT THIS IS (and is NOT): a PURPOSE-BUILT lightweight golden-hour scene — graded sky + rolling
   terrain + a sea that catches the low sun + aerial fog — with a slow camera drift and subtle
   mouse-parallax. It is deliberately NOT the full engine (no editor, no pilot, no UI, no GLTF
   buildings). The homepage's instant first paint is the POSTER <img>; this canvas hydrates ON TOP
   of it only AFTER the poster has painted, and only on capable devices. The poster always stays
   underneath as the safety floor — if anything here bails, we fade the canvas out and the poster
   is already there. (See docs/showcase-design-2026-06-23.md §4.)

   NO-BUILD: this is a plain ES module the page `import()`s at runtime. three is vendored next to it
   as three.module.min.js (the exact lab version, ~87 KB gzip, self-contained). We reuse the L78
   profiler + the L90 QualityGovernor unchanged (both are pure ESM, three-agnostic).

   C++ anchors (Laurence learns via C++): a uniform ≈ a const global handed to a GPU kernel; a typed
   array (Float32Array of vertex positions) ≈ a raw float buffer; the scene graph ≈ a tree of owned
   pointers; the render-target ≈ an off-screen framebuffer we draw into, then sample as a texture in
   a second pass (the post/grade pass).
   ============================================================ */

import * as THREE from './three.module.min.js';   // self-contained pair: this re-exports ./three.core.min.js (both vendored)
import { createEngineProfiler }   from './profiler.js';
import { createQualityGovernor }  from './quality-governor.js';

const DPR_CAP   = 2;     // CLAUDE.md invariant: never supersample past 2× (4× the pixels already).
const FPS_CAP   = 48;    // capped framerate (brief mandate) — slow drift looks smooth at 48; saves ~20% GPU vs 60.
const WATER_Y   = 0;     // sea level.

/* initHero(canvas, opts) — build everything, start the loop, return a teardown handle.
   opts.onBail()  — called if the scene gives up (governor floor + still slow): the caller fades the
                    canvas out so the poster shows. opts.forceBail — test hook to exercise that path. */
export function initHero(canvas, opts = {}) {
  const onReady = opts.onReady || (() => {});
  const onBail  = opts.onBail  || (() => {});

  // ── renderer ──────────────────────────────────────────────────────────────
  // alpha:false — opaque; the sky fills every pixel. antialias on (cheap at this triangle count).
  // powerPreference high-performance — ask for the discrete GPU on laptops that have one.
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  const deviceDpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
  renderer.setPixelRatio(deviceDpr);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // ── palette (golden hour — echoes hero-poster-l101.jpg) ─────────────────────
  const SKY_ZENITH  = new THREE.Color('#2a3a6e');   // deep blue-violet overhead
  const SKY_HORIZON = new THREE.Color('#f3b46a');   // warm gold at the horizon (also the fog tint)
  const sunWarm     = new THREE.Color('#ffe2b0');   // warm sun colour

  // ── scene + fog (aerial perspective: fog colour = sky-horizon tint, §5 #2) ──
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(SKY_HORIZON.getHex(), 0.0072);   // FogExp2: far geometry dissolves into gold haze.

  // ── camera ──────────────────────────────────────────────────────────────────
  const camera = new THREE.PerspectiveCamera(52, canvas.clientWidth / canvas.clientHeight, 0.1, 600);
  const CAM_BASE = new THREE.Vector3(0, 7.5, 46);     // looking across the hills toward the low sun
  const CAM_LOOK = new THREE.Vector3(0, 5.5, 0);
  camera.position.copy(CAM_BASE);
  camera.lookAt(CAM_LOOK);

  // ── the sun direction (low on the horizon, slightly to the right) ───────────
  const sunDir = new THREE.Vector3(0.42, 0.16, -1).normalize();   // low elevation = long warm light

  // ── lights ──────────────────────────────────────────────────────────────────
  // DirectionalLight = the sun (warm key). HemisphereLight = cheap sky/ground ambient (no flatness,
  // no env-map needed). We deliberately use NO shadow maps — a stylized golden scene reads from the
  // grade + flat-shading, and skipping shadows is a big reliability/perf win on weak mobile GPUs.
  const sun = new THREE.DirectionalLight(sunWarm, 2.4);
  sun.position.copy(sunDir).multiplyScalar(100);
  scene.add(sun);
  scene.add(new THREE.HemisphereLight(SKY_HORIZON.getHex(), 0x14110c, 0.65));

  // ── SKY dome ────────────────────────────────────────────────────────────────
  // A big BackSide sphere with a vertical gradient + a soft sun glow. Pure fragment math, one draw,
  // fog:false (the sky IS the far backdrop). 'h' = view-ray height (zenith→horizon lerp).
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(400, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, fog: false, depthWrite: false,
      uniforms: {
        uZenith:  { value: SKY_ZENITH }, uHorizon: { value: SKY_HORIZON },
        uSun:     { value: sunWarm },    uSunDir:  { value: sunDir.clone() },
      },
      vertexShader: /* glsl */`
        varying vec3 vDir;
        void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */`
        precision highp float;
        varying vec3 vDir; uniform vec3 uZenith, uHorizon, uSun, uSunDir;
        void main(){
          float h = clamp(vDir.y * 1.4 + 0.15, 0.0, 1.0);       // 0 at/below horizon → 1 overhead
          vec3 col = mix(uHorizon, uZenith, pow(h, 0.7));        // warm band near the horizon
          float d  = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
          col += uSun * pow(d, 220.0) * 1.6;                     // tight sun disc
          col += uSun * pow(d, 8.0)  * 0.22;                     // broad warm bloom around it
          gl_FragColor = vec4(col, 1.0);
        }`,
    })
  );
  sky.frustumCulled = false;
  scene.add(sky);

  // ── TERRAIN — rolling hills, flat-shaded, elevation-tinted ──────────────────
  // A subdivided plane displaced by layered sines (cheap, deterministic — no noise texture to fetch).
  // flatShading gives the faceted, stylised read (matches our toon tiers); vertexColors paint a
  // valley→ridge gradient. Built ONCE (static geometry) — only the camera moves.
  const TERR = 600, TSEG = 140;
  const terrGeo = new THREE.PlaneGeometry(TERR, TERR, TSEG, TSEG);
  terrGeo.rotateX(-Math.PI / 2);                                  // lay it flat (XZ plane)
  const tpos = terrGeo.attributes.position;
  const valley = new THREE.Color('#33402a'), ridge = new THREE.Color('#c8a86a');   // green valley → golden ridge
  const tcol = [];
  for (let i = 0; i < tpos.count; i++) {
    const x = tpos.getX(i), z = tpos.getZ(i);
    // layered sines → rolling hills; flatten a basin near the camera/sea so the water reads.
    const ridgeFalloff = THREE.MathUtils.smoothstep(Math.abs(z), 20, 120);
    let y = (Math.sin(x * 0.045) * 4.2 + Math.cos(z * 0.05) * 3.6
           + Math.sin((x + z) * 0.02) * 6.0 + Math.cos(x * 0.013 - z * 0.017) * 7.5);
    y *= ridgeFalloff;
    tpos.setY(i, y);
    const t = THREE.MathUtils.clamp(y / 16 + 0.25, 0, 1);
    const c = valley.clone().lerp(ridge, t);
    tcol.push(c.r, c.g, c.b);
  }
  terrGeo.setAttribute('color', new THREE.Float32BufferAttribute(tcol, 3));
  terrGeo.computeVertexNormals();
  const terrain = new THREE.Mesh(terrGeo, new THREE.MeshStandardMaterial({
    vertexColors: true, flatShading: true, roughness: 0.96, metalness: 0.0,
  }));
  terrain.position.y = -2;
  scene.add(terrain);

  // ── SEA — flat plane that catches the low sun as a specular streak; gentle live ripple ─────
  // Low roughness + a little metalness → the DirectionalLight reflects as the golden glint (the
  // money shot of a golden-hour scene). Vertices wobble with sines each frame for life; we refresh
  // normals every other frame (the specular needs moving normals; recomputing every frame is the
  // one real per-frame CPU cost, so we halve it).
  const SSEG = 72;
  const seaGeo = new THREE.PlaneGeometry(620, 620, SSEG, SSEG);
  seaGeo.rotateX(-Math.PI / 2);
  const sea = new THREE.Mesh(seaGeo, new THREE.MeshStandardMaterial({
    color: new THREE.Color('#1c2f3a'), roughness: 0.14, metalness: 0.55,
  }));
  sea.position.y = WATER_Y;
  scene.add(sea);
  const seaBase = Float32Array.from(seaGeo.attributes.position.array);   // rest positions to wobble around

  // ── POST: render the scene to an off-screen target, then a fullscreen grade pass ────────────
  // The grade (S-curve + split-tone + vibrance + vignette, §5 #1/#6) makes it look SHOT not rendered.
  // Manual post (no EffectComposer addon) keeps us in core three = slim. A single clip-space triangle
  // covers the screen with no vertex buffer (gl_VertexID trick via three's built-in attributes).
  const makeRT = () => new THREE.WebGLRenderTarget(1, 1, {
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    type: THREE.UnsignedByteType, colorSpace: THREE.SRGBColorSpace,
  });
  let rt = makeRT();
  const postScene  = new THREE.Scene();
  const postCam    = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const postMat = new THREE.ShaderMaterial({
    uniforms: { tDiffuse: { value: rt.texture }, uVignette: { value: 0.16 }, uMorph: { value: 0 } },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
    fragmentShader: /* glsl */`
      precision highp float;
      varying vec2 vUv; uniform sampler2D tDiffuse; uniform float uVignette; uniform float uMorph;
      // split-tone: cool shadows (hue ~205), warm highlights (hue ~40) — §5 #1.
      const vec3 COOL = vec3(0.22, 0.42, 0.62);
      const vec3 WARM = vec3(0.98, 0.80, 0.52);
      void main(){
        // ── THE STYLE-MORPH (the engine's signature, played as a one-shot beat) ──
        // uMorph 0 = beauty. The toon tier = posterising the colour into bands; the pixel tier =
        // snapping screen UVs to a coarse grid (screen-space pixelation). Ramp toon in first, then
        // pixel — so the beat reads beauty → toon → pixel and back, exactly our three tiers.
        float toon = smoothstep(0.05, 0.55, uMorph);   // colour-banding amount
        float pix  = smoothstep(0.50, 1.00, uMorph);   // pixelation amount
        float cells = mix(2400.0, 132.0, pix);          // 2400 ≈ no snap; 132 cells = chunky pixel-art
        vec2 uv = (floor(vUv * cells) + 0.5) / cells;
        vec3 c = texture2D(tDiffuse, uv).rgb;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        // S-curve: lift the blacks a touch, hold the highlights → filmic contrast.
        c = clamp(mix(c, c*c*(3.0-2.0*c), 0.55), 0.0, 1.0);     // smoothstep-ish toe+shoulder
        c = c * 1.02 + 0.012;
        // split-tone by luminance (toe→COOL, shoulder→WARM), gently.
        c = mix(c, c * COOL * 1.7, (1.0 - smoothstep(0.0, 0.5, l)) * 0.10);
        c = mix(c, c * WARM * 1.25, smoothstep(0.5, 1.0, l) * 0.10);
        // vibrance: boost low-saturation pixels more than already-saturated ones (+ ~22%).
        float mx = max(max(c.r, c.g), c.b), mn = min(min(c.r, c.g), c.b);
        c = mix(vec3(l), c, 1.0 + (1.0 - (mx - mn)) * 0.22);
        // toon: posterise into bands (64 → 5) + a saturation punch as the morph deepens.
        float bands = mix(64.0, 5.0, toon);
        c = floor(c * bands + 0.5) / bands;
        float l2 = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(c, mix(vec3(l2), c, 1.45), toon);       // punchier, flatter colour in the toon/pixel tiers
        // vignette.
        float v = smoothstep(0.95, 0.35, distance(vUv, vec2(0.5)));
        c *= mix(1.0, v, uVignette);
        gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
      }`,
    depthTest: false, depthWrite: false,
  });
  postScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMat));

  // ── sizing (DPR-aware; the governor adjusts the effective dpr via apply()) ──
  let effDpr = deviceDpr;
  function resize() {
    const w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    renderer.setPixelRatio(effDpr);
    renderer.setSize(w, h, false);
    rt.setSize(Math.round(w * effDpr), Math.round(h * effDpr));
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);

  // ── profiler + governor (L78 / L90 — reused verbatim) ───────────────────────
  const profiler = createEngineProfiler({ renderer });
  // apply(): the governor's only knob here is the DPR cap (we run no shadows). Level 0 = device dpr
  // (a no-op). Each rung down lowers the supersample → fewer pixels shaded = the big, safe lever.
  const governor = createQualityGovernor({
    profiler,
    apply: (_level, rung) => { effDpr = Math.min(rung.dpr ?? deviceDpr, DPR_CAP); resize(); },
    targetFps: 30, strongFps: 58,
  });
  const GOV_MAX = 4;   // LADDER has 5 rungs (0..4); 4 = the floor.

  // ── mouse parallax (lerped; touch devices just get the drift) ───────────────
  const mouse = { x: 0, y: 0 }, mLerp = { x: 0, y: 0 };
  window.addEventListener('pointermove', (e) => {
    mouse.x = (e.clientX / window.innerWidth)  * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  // ── the loop (FPS-capped, visibility-aware) ─────────────────────────────────
  let raf = 0, last = 0, t0 = performance.now(), faded = false, frame = 0;
  let bailFrames = 0, dead = false;
  const minDelta = 1000 / FPS_CAP;
  // the morph beat — a ONE-SHOT signature flourish: after the scene settles, play beauty→toon→pixel
  // →beauty once, then rest in beauty (the premium default; a looping morph would distract on a
  // conversion hero). Timed from the first faded frame. DESIGN can ask for a scroll re-trigger later.
  const MORPH_DELAY = 3.4, MORPH_DUR = 4.4;
  let morphStart = null, morphManual = false;   // null = not yet armed; armed value may be ~0/negative, so don't use a numeric sentinel

  function frameTick(now) {
    raf = requestAnimationFrame(frameTick);
    if (document.hidden) return;                      // pause work when the tab is backgrounded
    if (now - last < minDelta) return;                // FPS cap
    last = now;
    const t = (now - t0) / 1000;
    profiler.frameStart();

    // slow camera drift (a composed shot that breathes) + lerped mouse parallax.
    mLerp.x += (mouse.x - mLerp.x) * 0.04; mLerp.y += (mouse.y - mLerp.y) * 0.04;
    camera.position.x = CAM_BASE.x + Math.sin(t * 0.06) * 4.0 + mLerp.x * 3.2;
    camera.position.y = CAM_BASE.y + Math.sin(t * 0.045) * 1.1 - mLerp.y * 1.6;
    camera.position.z = CAM_BASE.z + Math.cos(t * 0.05) * 2.0;
    camera.lookAt(CAM_LOOK);

    // the morph beat: sin envelope (0→1→0) across the window after the settle delay; rests at 0.
    if (!morphManual && morphStart !== null) {
      const mt = (t - morphStart - MORPH_DELAY) / MORPH_DUR;
      postMat.uniforms.uMorph.value = (mt > 0 && mt < 1) ? Math.sin(mt * Math.PI) : 0;
    }

    // live sea ripple — wobble around the rest positions; refresh normals every other frame.
    const sp = seaGeo.attributes.position;
    for (let i = 0; i < sp.count; i++) {
      const x = seaBase[i * 3], z = seaBase[i * 3 + 2];
      sp.setY(i, Math.sin(x * 0.08 + t * 0.9) * 0.22 + Math.cos(z * 0.10 + t * 0.7) * 0.18);
    }
    sp.needsUpdate = true;
    if ((frame & 1) === 0) seaGeo.computeVertexNormals();
    frame++;

    // draw: scene → off-screen RT, then the grade pass → screen.
    renderer.setRenderTarget(rt);  renderer.render(scene, camera);
    renderer.setRenderTarget(null); renderer.render(postScene, postCam);

    profiler.frameEnd();
    governor.update();

    // governor-bail: at the floor rung AND still over a 30 fps budget for ~3 s → give up to the poster.
    const p95 = profiler.p95Now();
    if ((governor.level >= GOV_MAX && p95 > 1000 / 30) || opts.forceBail) {
      if (++bailFrames > 140) return bail();
    } else bailFrames = Math.max(0, bailFrames - 2);

    // first good frame → tell the caller to fade the canvas in over the poster; start the morph clock.
    if (!faded) { faded = true; if (!morphManual) morphStart = t; onReady(); }
  }
  raf = requestAnimationFrame(frameTick);

  // ── teardown / bail ─────────────────────────────────────────────────────────
  function dispose() {
    if (dead) return; dead = true;
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) { const m = o.material; (Array.isArray(m) ? m : [m]).forEach((x) => x.dispose()); } });
    postMat.dispose(); rt.dispose(); renderer.dispose();
  }
  function bail() { onBail(); dispose(); }

  resize();
  // setMorph(v): pin the morph to a fixed value (0=beauty,~0.5=toon,1=pixel) — cancels the auto beat.
  // A test/preview hook (forced-tier verification + DESIGN tier previews).
  const setMorph = (v) => { morphManual = true; postMat.uniforms.uMorph.value = Math.max(0, Math.min(1, v)); };
  return { dispose, setMorph };
}
