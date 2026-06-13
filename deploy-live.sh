#!/usr/bin/env bash
# deploy-live.sh — rebuild the live interactive engine from the lab's latest
# VERIFIED commit and publish it to /live/ on the public demo site.
#
# Builds from the lab repo's committed HEAD in an isolated git worktree, so it
# NEVER touches whatever the IMPLEMENT terminal session has in its working tree
# (one-writer-at-a-time stays intact). Run this from DESIGN after a lesson is
# reviewed to refresh John's live link.
#
#   cd ~/Desktop/lgr-city-engine-demo-site && ./deploy-live.sh
set -euo pipefail

LAB=~/Desktop/lgr-webgl-lab
SITE=~/Desktop/lgr-city-engine-demo-site
WT=/tmp/lab-live-deploy

echo "==> building lab HEAD ($(git -C "$LAB" rev-parse --short HEAD)) in an isolated worktree"
rm -rf "$WT"
git -C "$LAB" worktree add -q "$WT" HEAD
ln -s "$LAB/node_modules" "$WT/node_modules"
( cd "$WT" && npm run build >/dev/null 2>&1 )

echo "==> publishing dist/ -> $SITE/live/"
rm -rf "$SITE/live"
mkdir "$SITE/live"
cp -R "$WT/dist/"* "$SITE/live/"

git -C "$LAB" worktree remove "$WT" --force

cd "$SITE"
if git diff --quiet && git diff --cached --quiet; then
  echo "==> live build unchanged — nothing to deploy"
else
  git add -A
  git commit -q -m "refresh live engine from lab $(git -C "$LAB" rev-parse --short HEAD)"
  git push -q origin master
  echo "==> pushed — live at https://laurencerugley.github.io/lgr-city-engine-demo/live/"
fi
