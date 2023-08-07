data "aws_route53_zone" "main" {
  provider     = aws.main
  name         = var.domain
  private_zone = false
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


resource "aws_route53_record" "web" {
  provider = aws.main
  zone_id  = data.aws_route53_zone.main.zone_id
  name     = var.fqdn
  type     = "A"

  alias {
    name                   = module.website.cf_domain_name
    zone_id                = module.website.cf_hosted_zone_id
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

