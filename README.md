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
