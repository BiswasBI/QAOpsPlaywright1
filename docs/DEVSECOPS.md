Security is integrated into the CI/CD pipeline using a **shift-left DevSecOps approach**, ensuring vulnerabilities are detected early in the development lifecycle.

### Security Scanning Layers

The pipeline includes multiple automated security checks:

* **Secrets Detection** → Gitleaks
* **SAST (Static Code Analysis)** → CodeQL / Semgrep
* **Dependency Scanning** → npm audit / Dependabot
* **Container Security** → Trivy image scanning
* **Infrastructure as Code Security** → Checkov / tfsec

---

### Infrastructure Security Coverage (Terraform)

The IaC security scanner validates AWS infrastructure for:

* KMS encryption & key rotation compliance
* Secure S3 bucket configuration (versioning, encryption, logging)
* ECS container security (read-only filesystem, logging enabled)
* ECR image immutability & encryption
* VPC & networking security rules
* Security group least-privilege enforcement

---

### DevSecOps Outcome

All detected issues are:

* Reported in GitHub Actions pipeline
* Tracked through pull requests
* Fixed iteratively before production deployment

This ensures a **secure-by-default cloud-native automation framework** aligned with enterprise DevSecOps practices.

---

### Architecture

Playwright + AWS + Terraform + Docker + GitHub Actions setup, Below is the DevSecOps flow:
                   Developer Commit
                           │
                           ▼
                  GitHub Pull Request
                           │
                           ▼
                GitHub Actions Triggered
                           │
       ┌───────────────────┼───────────────────┐
       │                   │                   │
       ▼                   ▼                   ▼
  Secret Scan         SAST Scan         Dependency Scan
  (Gitleaks)      (CodeQL/Semgrep)   (npm audit/Dependabot)
       │                   │                   │
       └───────────────────┼───────────────────┘
                           │
                           ▼
                   Build Playwright
                           │
                           ▼
                 Docker Image Build
                           │
                           ▼
                 Container Scan
                      (Trivy)
                           │
                           ▼
             Terraform/IaC Security Scan
                 (Checkov / tfsec)
                           │
                           ▼
                   Push Image to ECR
                           │
                           ▼
               Deploy Test Environment
                 (ECS/EKS/EC2 etc.)
                           │
                           ▼
               Run Playwright Tests
                           │
           ┌───────────────┼───────────────┐
           │               │               │
           ▼               ▼               ▼
      UI Tests        API Tests      Load Tests (Under developement)
                                        (k6/JMeter)
           │
           ▼
      Generate Reports
           │
           ▼
      Publish Results

---

### Security Status

- Initial Checkov scan: Multiple misconfigurations detected
- Current status: Issues actively being remediated
- Goal: Achieve 100% IaC compliance
👉 [View DevSecOps Security Report](docs/SECURITY_REPORT.md)
