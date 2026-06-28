resource "aws_vpc" "playwright" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name = "${var.project_name}-vpc"
  }
}
#checkov:skip=CKV_AWS_130: Public subnet required for ECS Fargate demo environment
resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.playwright.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "eu-north-1a"
}

resource "aws_security_group" "ecs_tasks" {
  name        = "${var.project_name}-sg"
  description = "Playwright ECS tasks"
  vpc_id      = aws_vpc.playwright.id

  #checkov:skip=CKV_AWS_382:ECS Playwright tasks require outbound internet access

  egress {
    description = "Allow outbound internet access"

    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]

  }
}