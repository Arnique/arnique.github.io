#!/usr/bin/env sh

# Build
yarn build

# Commit
git add -A
git commit -m 'deploy'

# Push
git push origin
