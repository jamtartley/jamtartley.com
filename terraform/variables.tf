variable "fqdn" {
  description = "The fully-qualified domain name of the resulting S3 website."
  default     = "jamtartley.com"
}

variable "domain" {
  description = "The domain name."
  default     = "jamtartley.com"
}

variable "allowed_ips" {
  type = list(string)
  default = [
    "0.0.0.0/0"
  ]
}
