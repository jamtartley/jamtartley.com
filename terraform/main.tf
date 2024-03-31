terraform {
  required_version = "~> 1.5.3"

  required_providers {
    aws = {
      source                = "hashicorp/aws"
      configuration_aliases = [aws.main, aws.cloudfront]
      version               = "~> 4.0"
    }

    gitlab = {
      source  = "gitlabhq/gitlab"
      version = "16.1.0"
    }
  }

  backend "s3" {
    bucket = "jamtartley.com-terraform-state"
    key    = "terraform.tfstate"
    region = "eu-west-1"
  }
}

module "website" {
  source = "github.com/riboseinc/terraform-aws-s3-cloudfront-website"

  fqdn                = var.fqdn
  aliases             = ["www.${var.fqdn}"]
  ssl_certificate_arn = aws_acm_certificate_validation.cert.certificate_arn
  allowed_ips         = var.allowed_ips

  index_document = "index.html"
  error_document = "error.html"

  refer_secret = base64sha512("REFER-SECRET-19265125-${var.fqdn}-52865926")

  force_destroy = "true"

  providers = {
    aws.main       = aws.main
    aws.cloudfront = aws.cloudfront
  }
}
