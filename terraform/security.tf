#resource "aws_securityhub_account" "main" {}

#resource "aws_guardduty_detector" "main" {
#  enable = true
#}

#resource "aws_s3_bucket" "cloudtrail_logs" {
#  bucket = "playwright-cloudtrail-logs-114403655647"
#}

#resource "aws_cloudtrail" "main" {
#  name                          = "playwright-cloudtrail"
#  s3_bucket_name                = aws_s3_bucket.cloudtrail_logs.bucket
#  include_global_service_events = true
#}
