#!/usr/bin/env bash
# refresh-demo-media.sh — regenerate the demo VIDEOS from the current lab engine.
# Run this after a lesson lands that CHANGES THE VISUALS (skip pure-refactor lessons —
# don't refresh footage that wouldn't look any different). Stills are captured separately
# by the DESIGN review; deploy-live.sh / CI handles the playable `live/` build.
#
# What it does: builds the lab, serves the build, drives the in-engine recorder
# (capture.js, Lesson 15) via tools/capture-videos.mjs to record the authored sequences
# hands-off (no LGR branding), then transcodes to web-optimized H.264 (small + faststart
# + yuv420p) so the autoplay hero stays light on mobile. Review, then commit + push.
#
# Deps: node + Playwright (the lab's npx playwright cache), ffmpeg, a built-able lab repo.
set -euo pipefail

LAB="${LAB:-$HOME/Desktop/lgr-webgl-lab}"
DEMO="$(cd "$(dirname "$0")" && pwd)"
PORT="${PORT:-8082}"
RAW="$(mktemp -d)"

echo "▶ building lab ($LAB)…"
( cd "$LAB" && npm run build >/dev/null )

echo "▶ serving build on :$PORT…"
( cd "$LAB/dist" && python3 -m http.server "$PORT" >/dev/null 2>&1 ) &
SRV=$!
trap 'kill $SRV 2>/dev/null || true; rm -rf "$RAW"' EXIT
sleep 1

echo "▶ recording sequences (a Chrome window will open briefly)…"
node "$DEMO/tools/capture-videos.mjs" "http://localhost:$PORT" "$RAW"

echo "▶ transcoding to web-optimized H.264…"
for f in city-showcase three-cities office-tour; do
  ffmpeg -y -loglevel error -i "$RAW/$f.mp4" \
    -c:v libx264 -crf 25 -preset slow -pix_fmt yuv420p -movflags +faststart -an \
    "$DEMO/$f.mp4"
  echo "  $f.mp4 → $(du -h "$DEMO/$f.mp4" | cut -f1)"
done

echo "✓ done. Review the new mp4s, then:  git add *.mp4 && git commit && git pull --rebase && git push"
