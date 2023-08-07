resource "gitlab_project_variable" "cf_distro" {
  project   = local.gitlab_project_id
  key       = "AWS_CLOUDFRONT_DISTRIBUTION_ID"
  value     = module.website.cf_distribution_id
  protected = true
}

resource "gitlab_project_variable" "s3_bucket" {
  project   = local.gitlab_project_id
  key       = "AWS_BUCKET_NAME"
  value     = module.website.s3_bucket_id
  protected = true
}

