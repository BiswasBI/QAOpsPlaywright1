#!/bin/sh

set -e

echo "Running Playwright tests..."
CMD sh -c "npx playwright test --grep @web --shard=$SHARD"

echo "Uploading report to S3..."

aws s3 cp -r playwright-report \
s3://my-playwright-reports-bucket-114403655647/$(date +%s)/

echo "Upload complete"