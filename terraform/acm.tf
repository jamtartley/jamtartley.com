resource "aws_acm_certificate" "cert" {
  provider                  = aws.cloudfront
  domain_name               = var.fqdn
  subject_alternative_names = ["www.${var.fqdn}"]
  validation_method         = "DNS"
}

resource "aws_acm_certificate_validation" "cert" {
  provider                = aws.cloudfront
  certificate_arn         = aws_acm_certificate.cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
