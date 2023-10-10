## Project Name
ElastiServe

## Description

This project leverages the power of AWS CDK (Cloud Development Kit) to streamline the deployment and management of a web application. By utilizing AWS CDK's capabilities, we can seamlessly package the web application source code, provision the required deployment infrastructure using AWS Elastic Beanstalk resources, and establish a robust CI/CD pipeline through AWS CDK Pipelines.

## Prerequisites

- **AWS Account and CLI**: Set up your [AWS Environment Link](https://aws.amazon.com/getting-started/guides/setup-environment/?sc_channel=el&sc_campaign=devopswave&sc_content=cicdcdkebaws&sc_geo=mult&sc_country=mult&sc_outcome=acq) and ensure the CLI is installed.
- **AWS CDK v2.7.0**: Install the CDK. Refer to the [Get Started with AWS CDK guide](https://aws.amazon.com/getting-started/guides/setup-cdk/?sc_channel=el&sc_campaign=devopswave&sc_content=cicdcdkebaws&sc_geo=mult&sc_country=mult&sc_outcome=acq) for more.
- **GitHub Account**: Create one if necessary at [GitHub](https://github.com).

## Connecting GitHub to CodePipeline

To integrate AWS CodePipeline with your GitHub repository, you'll need to set up your previously created GitHub personal access token.

1. **Store the GitHub Token in AWS Secrets Manager**:

   This token should be a plaintext secret (not JSON) in AWS Secrets Manager with the name `github-token`.

   Execute the following command, making sure to replace `GITHUB_ACCESS_TOKEN` with your actual GitHub token and `REGION` with your AWS region:

   ```bash
   aws secretsmanager create-secret --name github-token --description "Github access token for cdk" --secret-string GITHUB_ACCESS_TOKEN --region REGION

Remember, always keep your GitHub access token confidential. Never expose it in your public repositories or elsewhere.

## Deploy Web Application

1. **Bootstrap CDK in Your Account**

   If you're deploying with the AWS CDK for the first time in a specific account or region, you'll need to bootstrap it. If you're unsure about whether you've bootstrapped already, executing the command below will upgrade the bootstrap stack if needed:
   
   bash
         npx cdk bootstrap aws://ACCOUNT-NUMBER/REGION

For example:

bash

      npx cdk bootstrap aws://123456789012/us-east-1

You can retrieve your account number from the AWS Management Console and the Region name from the official Region list.

These bootstrap resources are contained within an AWS CloudFormation stack, typically named CDKToolkit. You can find it in the CloudFormation console.

2. **Build and Deploy the CDK Application**

   Once you've bootstrapped your account and region, you can build and deploy your CDK application.
   
   bash
   
         npm run build
