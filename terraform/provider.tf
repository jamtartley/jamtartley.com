provider "aws" {
  profile = "jamtartley"
  region  = "eu-west-1"
  alias   = "main"

  default_tags {
    tags = {
      Environment          = "Production"
      Managed_By_Terraform = true
    }
  }
}

# AWS Region for Cloudfront (ACM certs only supports us-east-1)
provider "aws" {
  profile = "jamtartley"
  region  = "us-east-1"
  alias   = "cloudfront"

  default_tags {
    tags = {
      Environment          = "Production"
      Managed_By_Terraform = true
    }
  }
}

provider "gitlab" {
  token = var.gitlab_token
}

