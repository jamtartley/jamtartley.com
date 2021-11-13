terraform {
  required_version = "1.0.10"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }

    gitlab = {
      source  = "gitlabhq/gitlab"
      version = "3.7.0"
    }
  }

  backend "s3" {
    bucket = "jamtartley-com-terraform-state"
    key    = "terraform.tfstate"
    region = "eu-west-1"
  }
}

provider "aws" {
  region = "eu-west-1"
  alias  = "main"
}

# AWS Region for Cloudfront (ACM certs only supports us-east-1)
provider "aws" {
  region = "us-east-1"
  alias  = "cloudfront"
}

provider "gitlab" {
  token = var.gitlab_token
}

module "main" {
  source = "github.com/riboseinc/terraform-aws-s3-cloudfront-website"

  fqdn                = var.fqdn
  aliases             = ["www.${var.fqdn}"]
  ssl_certificate_arn = aws_acm_certificate_validation.cert.certificate_arn
  allowed_ips         = var.allowed_ips

  index_document = "index.html"
  error_document = "404.html"

  refer_secret = base64sha512("REFER-SECRET-19265125-${var.fqdn}-52865926")

  force_destroy = "true"

  providers = {
    aws.main       = aws.main
    aws.cloudfront = aws.cloudfront
  }
}

resource "aws_acm_certificate" "cert" {
  provider                  = aws.cloudfront
  domain_name               = var.fqdn
  subject_alternative_names = ["www.${var.fqdn}"]
  validation_method         = "DNS"
}

resource "aws_route53_record" "cert_validation" {
  provider = aws.cloudfront
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.main.zone_id
}

resource "aws_acm_certificate_validation" "cert" {
  provider                = aws.cloudfront
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

data "aws_route53_zone" "main" {
  provider     = aws.main
  name         = var.domain
  private_zone = false
}

resource "aws_route53_record" "web" {
  provider = aws.main
  zone_id  = data.aws_route53_zone.main.zone_id
  name     = var.fqdn
  type     = "A"

  alias {
    name                   = module.main.cf_domain_name
    zone_id                = module.main.cf_hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www" {
  provider = aws.main
  zone_id  = data.aws_route53_zone.main.zone_id
  name     = "www.${var.fqdn}"
  type     = "CNAME"
  records  = ["${var.fqdn}"]
  ttl      = 300
}

resource "gitlab_project_variable" "cf_distro" {
  project   = local.gitlab_project_id
  key       = "AWS_CLOUDFRONT_DISTRIBUTION_ID"
  value     = module.main.cf_distribution_id
  protected = true
}

resource "gitlab_project_variable" "s3_bucket" {
  project   = local.gitlab_project_id
  key       = "AWS_BUCKET_NAME"
  value     = module.main.s3_bucket_id
  protected = true
}

resource "gitlab_pipeline_trigger" "trigger" {
  project     = local.gitlab_project_id
  description = "Trigger jamtartley.com build + deploy"

  depends_on = [
    gitlab_project_variable.cf_distro,
    gitlab_project_variable.s3_bucket
  ]

  provisioner "local-exec" {
    command = "curl -X POST -F token=${gitlab_pipeline_trigger.trigger.token} -F ref=master https://gitlab.com/api/v4/projects/${local.gitlab_project_id}/trigger/pipeline"
  }
}