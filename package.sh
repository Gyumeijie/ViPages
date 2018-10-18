#!/usr/bin/env bash

mkdir tmp
git archive HEAD --format=zip > tmp/ViPages.zip

pushd tmp >&/dev/null

zip -d ViPages.zip .gitignore
zip -d ViPages.zip README.md

popd >&/dev/null

if [ ! -f ViPages.zip ]; 
then
  rm -f ViPages.zip 2>/dev/null
fi

mv tmp/ViPages.zip .
rm -rf tmp

zipinfo ViPages.zip
