"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpDeveloper = exports.signIn = exports.signUp = void 0;
const constant_1 = require("../configs/constant");
const USER_SERVICE = __importStar(require("../services/user.serv"));
const zod_1 = __importDefault(require("zod"));
const DecryptEncryptString_1 = require("../utils/DecryptEncryptString");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const uuid_1 = require("uuid");
dotenv_1.default.config();
const signUp = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const schema = zod_1.default.object({
            name: zod_1.default.string().optional(),
            email: zod_1.default.string().email(),
            password: zod_1.default.string().min(6),
            phone: zod_1.default.string().optional(),
        });
        const result = schema.safeParse({ name, email, password, phone });
        if (!result.success) {
            return res.status(constant_1.HTTP_STATUS.BAD_REQUEST).send({ message: result.error });
        }
        const { done, message } = await USER_SERVICE.$addUser({ name, email, password, phone });
        if (!done) {
            return res.status(constant_1.HTTP_STATUS.BAD_REQUEST).send({ message });
        }
        return res.status(constant_1.HTTP_STATUS.CREATED).send({ message });
    }
    catch (e) {
        return res.status(constant_1.HTTP_STATUS.INTERNAL_SERVER_ERROR).send({ message: e });
    }
};
exports.signUp = signUp;
const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const schema = zod_1.default.object({
            email: zod_1.default.string().email(),
            password: zod_1.default.string().min(6),
        });
        const result = schema.safeParse({ email, password });
        if (!result.success) {
            return res.status(constant_1.HTTP_STATUS.BAD_REQUEST).send({ message: result.error });
        }
        const { done, message, data } = await USER_SERVICE.$getUserByEmail(email);
        if (!done || !data) {
            return res.status(constant_1.HTTP_STATUS.BAD_REQUEST).send({ message: message || 'User not found' });
        }
        const isValid = await (0, DecryptEncryptString_1.decodePassword)(password, data.password);
        if (!isValid) {
            return res.status(constant_1.HTTP_STATUS.BAD_REQUEST).send({ message: 'Email or Password is not correct' });
        }
        const userAccessToken = jsonwebtoken_1.default.sign({ id: data.id }, process.env.JWT_SECRET || '', { expiresIn: '1d' });
        const csrfToken = (0, uuid_1.v4)();
        res.cookie('csrfToken', csrfToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        return res.status(constant_1.HTTP_STATUS.OK).send({ message: 'Login success', data: { userAccessToken, csrfToken } });
    }
    catch (e) {
        console.error(e);
        return res.status(constant_1.HTTP_STATUS.INTERNAL_SERVER_ERROR).send({ message: e });
    }
};
exports.signIn = signIn;
const signUpDeveloper = async (req, res) => {
    try {
        const jwtObject = req.jwtObject;
        const user = await USER_SERVICE.$getUser(jwtObject.id);
        if (!user.data) {
            return res.status(constant_1.HTTP_STATUS.BAD_REQUEST).send({ message: 'User not found' });
        }
        const { done, message } = await USER_SERVICE.$addDeveloper(user.data);
        if (!done) {
            return res.status(constant_1.HTTP_STATUS.BAD_REQUEST).send({ message });
        }
        return res.status(constant_1.HTTP_STATUS.CREATED).send({ message });
    }
    catch (error) {
        console.log(error);
        return res.status(constant_1.HTTP_STATUS.INTERNAL_SERVER_ERROR).send({ message: error });
    }
};
exports.signUpDeveloper = signUpDeveloper;
