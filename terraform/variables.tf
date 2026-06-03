variable "aws_region" {
  default = "eu-central-1"
}

variable "project_name" {
  default = "playwright-tests"
}

variable "vpc_id" {}

variable "subnet_ids" {
  type = list(string)
}