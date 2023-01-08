"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = __importDefault(require("aws-serverless-express/middleware"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
// import * as routers from './routers';
// declare a new express app
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(middleware_1.default.eventContext());
// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
// app.use("/users", routers.userRoute)
app.listen(3000, function () {
    console.log("App started");
});
// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
exports.default = app;
