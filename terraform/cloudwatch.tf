resource "aws_cloudwatch_log_group" "playwright" {
  name              = "/ecs/playwright"
  retention_in_days = 365

  kms_key_id = aws_kms_key.cloudwatch.arn
}

resource "aws_cloudwatch_log_group" "k6" {
  name              = "/ecs/k6"
  retention_in_days = 7
}