resource "aws_ecs_cluster" "playwright" {
  name = var.project_name
}

resource "aws_ecs_task_definition" "playwright" {
  family                   = "playwright-tests"
  requires_compatibilities = ["FARGATE"]

  network_mode = "awsvpc"

  cpu    = 4096
  memory = 8192

  execution_role_arn = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn      = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([
    {
      name  = "playwright"
      image = "${aws_ecr_repository.playwright.repository_url}:latest"

      essential = true

      environment = [
        {
          name  = "REPORT_BUCKET"
          value = aws_s3_bucket.playwright_reports.bucket
        }
      ]
    }
  ])
}