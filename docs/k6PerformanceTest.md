                           Developer
                               │
                               ▼
                   Private GitHub Repository
                               │
                               ▼
                GitHub Actions CI/CD Pipeline
                               │
         ┌─────────────────────┼─────────────────────┐
         │                     │                     │
         ▼                     ▼                     ▼
   Secret Scan           SAST Scan          Dependency Scan
   (Gitleaks)      (CodeQL / Semgrep)   (npm audit / Dependabot)

                               │
                               ▼
                    Build Playwright Image
                               │
                               ▼
                     Docker Image Build
                               │
                               ▼
                  Container Scan (Trivy)
                               │
                               ▼
             Terraform / IaC Security Scan
                  (Checkov / tfsec)
                               │
                               ▼
               Playwright Functional Tests
                               │
                               ▼
          CI k6 Load Test (20–50 Virtual Users)
                               │
                 Threshold Validation
                               │
          ┌────────────────────┴──────────────────┐
          │                                       │
          ▼                                       ▼
      PASS                                    FAIL
          │                                       │
          ▼                                       ▼
   Push Image to ECR                    Stop Pipeline
          │
          ▼
      Terraform Apply
          │
          ▼
 Deploy / Update ECS Services
          │
          ▼
    ECS Fargate Application
          │
          ▼
 Trigger ECS k6 Stress Task
 (1000–5000+ Virtual Users)
          │
          ▼
  Custom k6 Docker Image
 (AWS CLI + Report Upload)
          │
          ▼
      Run stressTest.js
          │
          ▼
 Generate k6 JSON Report
          │
          ▼
 aws s3 cp results.json
          │
          ▼
      Amazon S3 Reports
          │
          ▼
   CloudWatch Logs & Metrics