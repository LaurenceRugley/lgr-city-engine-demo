/* capture-videos.mjs — drive the lab's in-engine recorder (capture.js, Lesson 15) to
   regenerate the demo videos from the CURRENT engine. Hands-off: `?capture=<seq>` arms
   MediaRecorder, runs the authored shot list, and triggers a download; Playwright catches it.
   The canvas stream excludes all DOM overlay, and ?capture implies demo mode → NO LGR branding.

   Usage: node capture-videos.mjs <baseUrl> <rawOutDir>
     baseUrl   e.g. http://localhost:8082
     rawOutDir where to drop the raw (12 Mbps) mp4s; refresh-demo-media.sh transcodes them.
   Run via refresh-demo-media.sh (it builds the lab, serves dist, and transcodes after). */
import pw from '/Users/lencho/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.js';
const { chromium } = pw;
const [baseUrl, rawOut] = process.argv.slice(2);
if (!baseUrl || !rawOut) { console.error('usage: node capture-videos.mjs <baseUrl> <rawOutDir>'); process.exit(1); }

// Each job → one demo video. Add a job here when a new sequence is worth showing.
const JOBS = [
  { seq: 'tour',   params: 'cam=dimetric', out: 'city-showcase.mp4' }, // the full range pitch
  { seq: 'cities', params: 'cam=dimetric', out: 'three-cities.mp4' },  // multi-city showreel
  { seq: 'office', params: 'cam=dimetric', out: 'office-tour.mp4' },   // the office-dive life (L23 beat)
  { seq: 'water',  params: 'cam=dimetric', out: 'water-tour.mp4' },    // boats carve wakes (L26 beat)
  { seq: 'morph',  params: 'cam=dimetric', out: 'pixel-morph.mp4' },   // zoom→pixel-art ladder (L27 beat)
];

// headed Chrome = reliable WebGL + MediaRecorder (headless can drop the GPU path).
const b = await chromium.launch({ channel: 'chrome', headless: false });
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 }, acceptDownloads: true });
for (const j of JOBS) {
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  console.log(`capturing ${j.seq} → ${j.out} …`);
  await p.goto(`${baseUrl}/?capture=${j.seq}&${j.params}`, { waitUntil: 'load' });
  const dl = await p.waitForEvent('download', { timeout: 180000 }); // fires when the shot list ends
  await dl.saveAs(`${rawOut}/${j.out}`);
  console.log(`  saved ${j.out}  (pageerrors: ${errs.length})`);
  await p.close();
}
await b.close();
console.log('capture done');
