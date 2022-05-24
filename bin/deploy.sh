#!/usr/bin/env sh

rm -rf dist &&
#yarn build &&
yarn build --base=/data-visualization/ &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:Howardyangyixuan/data-visualization.git &&
git push -uf origin master:gh-pages &&
cd -;