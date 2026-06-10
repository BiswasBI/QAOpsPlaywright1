resource "aws_s3_bucket" "playwright_reports" {
  bucket = "my-playwright-reports-bucket-114403655647"
}

resource "aws_s3_bucket_public_access_block" "playwright" {
  bucket = aws_s3_bucket.playwright_reports.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "playwright" {
  bucket = aws_s3_bucket.playwright_reports.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}


resource "aws_iam_policy" "playwright_s3" {
  name = "${var.project_name}-s3-policy"

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [{
      Effect = "Allow"

      Action = [
        "s3:PutObject",
        "s3:GetObject",
        "s3:ListBucket"
      ]

      Resource = [
        aws_s3_bucket.playwright_reports.arn,
        "${aws_s3_bucket.playwright_reports.arn}/*"
      ]
    }]
  })
}

resource "aws_iam_role_policy_attachment" "playwright_s3" {
  role       = aws_iam_role.ecs_task_role.name
  policy_arn = aws_iam_policy.playwright_s3.arn
}
