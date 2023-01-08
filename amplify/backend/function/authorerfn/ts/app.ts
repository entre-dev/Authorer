import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";
import bodyParser from "body-parser";
import type { NextFunction, Request, Response } from "express";
import express from "express";

import * as routers from './routes'

// declare a new express app
const app = express();


app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api/v1/auth", routers.auth.default);
app.get('/testGet', (req: Request, res: Response) => {
  res.status(200).send("Hello world");
})

app.listen(9999, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
export default app;