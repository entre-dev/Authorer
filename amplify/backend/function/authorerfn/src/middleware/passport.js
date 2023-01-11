"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("./../configs/constant");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const auth = (req, res, next) => {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined');
        }
        console.log('auth middleware request');
        const token = req.header('Authorization');
        if (!token)
            return res.status(403).send({
                success: false,
                msg: 'Access denied.',
            });
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.jwtObject = decoded;
        next();
    }
    catch (e) {
        console.error(e);
        return res.status(constant_1.HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
            msg: 'internal error'
        });
    }
};
exports.default = auth;
