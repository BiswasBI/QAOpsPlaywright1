provider "aws" {
  region = "eu-north-1"
}

data "aws_caller_identity" "current" {}