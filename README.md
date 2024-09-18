# Notice: Repository Deprecation
This repository is deprecated and no longer actively maintained. It contains outdated code examples or practices that do not align with current MongoDB best practices. While the repository remains accessible for reference purposes, we strongly discourage its use in production environments.
Users should be aware that this repository will not receive any further updates, bug fixes, or security patches. This code may expose you to security vulnerabilities, compatibility issues with current MongoDB versions, and potential performance problems. Any implementation based on this repository is at the user's own risk.
For up-to-date resources, please refer to the [MongoDB Developer Center](https://mongodb.com/developer).


# nodejs-aws-lambda-iam

# Quick Start NodeJS & MongoDB Atlas which can be deployed on AWS Lambda and authenticated using AWS IAM
This is a demo NodeJs application which connects to MongoDB using AWS IAM once deployed on AWS Lambda

## Supported versions:

- Node.js 18.x
- AWS 4 1.12.0
- MongoDB NodeJS Driver 5.2.0

## MongoDB Atlas

- Get started with a Free Tier Cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Read this blog post: [Quick Start - Getting your Free MongoDB Atlas Cluster](https://developer.mongodb.com/quickstart/free-atlas-cluster).
- You will need to add AWS IAM Role ARN from the AWS Lambda function to the Database Access in MongoDB Atlas Cluster

## How To Run

- Install packages using `npm install`
- Replace the cluster URI and DB name in the MONGODB_URI in index.js
- Zip and upload to AWS Lambda

## Disclaimer
Use at your own risk; not a supported MongoDB product

## Author
- Megha Arora @ MongoDB.
