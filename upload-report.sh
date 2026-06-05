#!/bin/sh

set -e

echo "Running Playwright tests..."
npx playwright test --grep @web

echo "Uploading report to S3..."

aws s3 cp playwright-report s3://my-bucket/reports/ --recursive

echo "Upload complete"