AI-Powered Playwright Test Automation Framework
Overview
This repository contains a cloud-native test automation framework built using Playwright, TypeScript, Cucumber BDD, Docker, Terraform, AWS, and GitHub Actions.
The framework supports scalable, containerized test execution with automated infrastructure provisioning, CI/CD integration, cloud deployment, and centralized reporting.

Key Features
Playwright-based end-to-end automation
TypeScript implementation
Cucumber BDD support
Page Object Model (POM)
Cross-browser testing
Parallel test execution
Docker containerization
GitHub Actions CI/CD pipeline
AWS ECS-based test execution
AWS S3 report and artifact storage
Infrastructure as Code using Terraform
Scalable cloud-native automation architecture

Technology Stack
Area
Technology
Automation
Playwright, TypeScript, Cucumber
CI/CD
GitHub Actions
Containerization
Docker
Infrastructure as Code
Terraform
Container Registry
AWS ECR
Test Execution Platform
AWS ECS
Artifact Storage
AWS S3
Source Control
GitHub


Architecture
Developer
    │
    ▼
Private GitHub Repository
    │
    ▼
GitHub Actions CI/CD Pipeline
    │
    ├── Terraform Infrastructure Deployment
    │
    ├── Docker Image Build
    │
    └── Push Image to AWS ECR
                    │
                    ▼
              AWS ECS Cluster
                    │
                    ▼
          Playwright Test Execution
                    │
                    ▼
         Reports / Screenshots / Videos
                    │
                    ▼
                 AWS S3

I have also implemented security scanner with Playwright + AWS + Terraform + Docker + GitHub Actions setup, Below is the DevSecOps flow:
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


CI/CD Workflow
Code is committed to the private GitHub repository.
GitHub Actions pipeline is automatically triggered.
Terraform provisions or updates AWS infrastructure.
Docker image is built and pushed to AWS ECR.
ECS task is launched using the latest image.
Playwright tests execute inside ECS containers.
Reports, screenshots, traces, and videos are uploaded to AWS S3.
Execution status is published through GitHub Actions.

Infrastructure Components
Terraform
Infrastructure provisioning includes:
AWS ECS Cluster
ECS Task Definitions
ECS Services
AWS ECR Repository
IAM Roles and Policies
S3 Buckets
Networking Components
AWS ECR
Stores versioned Docker images used for automated test execution.
AWS ECS
Provides scalable containerized execution of Playwright test suites.
AWS S3
Stores:
Playwright HTML Reports
Screenshots
Execution Videos
Trace Files
Test Artifacts

Benefits
Fully automated CI/CD execution
Cloud-native test execution
Infrastructure managed as code
Scalable and maintainable architecture
Faster regression execution
Centralized artifact management
Enterprise-ready automation solution

Future Enhancements
AI-based test case generation
MCP Server integration
AI Agent-assisted execution analysis
Self-healing locators
Slack and Teams notifications
Test impact analysis

This project follows a full DevSecOps approach with multi-layer security scanning.
👉 [View DevSecOps overview](docs/DEVSECOPS.md)
Detailed security scan reports and findings are documented here:
👉 [View DevSecOps Security Report](docs/SECURITY_REPORT.md)
Performance test including load+stress included in the DEVSECOPS PIPELINE
👉 [View Performance testing with k6 overview here](docs/k6PerformanceTest.md)
👉 [View Load and Stress Report here](docs/k6PerformanceTestReport.md)

Author
Arpita Biswas
Senior SDET | QA Automation Architect
Specializations:
Playwright | TypeScript | DevOps Testing | Terraform | AWS | GitHub Actions | AI-Powered Testing | Selenium | Java | JMeter | Bitbucket

