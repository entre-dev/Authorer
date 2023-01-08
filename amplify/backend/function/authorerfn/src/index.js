"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_serverless_express_1 = __importDefault(require("aws-serverless-express"));
const app_1 = __importDefault(require("./app"));
const server = aws_serverless_express_1.default.createServer(app_1.default);
const handler = (event, context) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return aws_serverless_express_1.default.proxy(server, event, context, 'PROMISE').promise;
};
exports.handler = handler;
