resource "aws_cloudwatch_log_group" "playwright" {
  name              = "/ecs/playwright"
  retention_in_days = 7
}