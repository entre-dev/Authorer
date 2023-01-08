import type { APIGatewayProxyHandler } from 'aws-lambda';
import awsServerlessExpress from 'aws-serverless-express';
import type { Server } from 'http';
import app from './app';

const server: Server = awsServerlessExpress.createServer(app);

export const handler: APIGatewayProxyHandler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};