output "ecr_repository" {
  value = aws_ecr_repository.playwright.name
}

output "ecr_repository_url" {
  value = aws_ecr_repository.playwright.repository_url
}

output "ecs_cluster" {
  value = aws_ecs_cluster.playwright.name
}

output "task_definition_family" {
  value = aws_ecs_task_definition.playwright.family
}

output "security_group_id" {
  value = aws_security_group.ecs_tasks.id
}