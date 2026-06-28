#Create an ECS task that runs k6
resource "aws_ecs_task_definition" "k6" {
  family                   = "k6-stress-test"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 4096
  memory                   = 8192

  execution_role_arn = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn      = aws_iam_role.k6_task_role.arn

  container_definitions = jsonencode([
    {
      name      = "k6"
      #image     = "grafana/k6:latest"
      image = "${aws_ecr_repository.k6.repository_url}:latest"
      essential = true

      command = [
        "run",
        "/scripts/stressTest.js"
      ]

      environment = [
        {
          name  = "BASE_URL"
          value = var.base_url
        }
      ]

      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = "/ecs/k6"
          awslogs-region        = var.aws_region
          awslogs-stream-prefix = "k6"
        }
      }
    }
  ])
}