#!/bin/sh

echo "Running k6 stress test..."

k6 run \
  --out json=/tmp/results.json \
  /app/stressTest.js

echo "Uploading report to S3..."

aws s3 cp \
  /tmp/results.json \
  s3://$S3_BUCKET/k6/$RUN_ID/results.json

echo "Upload completed."
