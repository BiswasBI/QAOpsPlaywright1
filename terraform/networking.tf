resource "aws_security_group" "ecs_tasks" {
  name        = "${var.project_name}-sg"
  description = "Playwright ECS tasks"
  vpc_id      = var.vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}