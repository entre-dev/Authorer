"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$getUserByEmail = exports.$getUser = exports.$addDeveloper = exports.$addUser = void 0;
const client_1 = __importDefault(require("@prisma/client"));
const getErrorMsg_1 = __importDefault(require("../utils/getErrorMsg"));
const DecryptEncryptString_1 = require("../utils/DecryptEncryptString");
const uuid_1 = require("uuid");
const prisma = new client_1.default.PrismaClient();
const $addUser = async (user) => {
    var _a;
    try {
        const prefixPhone = (_a = user.phone) === null || _a === void 0 ? void 0 : _a.slice(0, 3);
        const hashedPassword = await (0, DecryptEncryptString_1.hashString)(user.password);
        if (!hashedPassword)
            throw new Error('Internal server error');
        const newUser = await prisma.users.create({
            data: {
                name: user.name,
                email: user.email,
                password: hashedPassword.hash,
                phone: user.phone,
                prefixPhone
            }
        });
        await prisma.audit.create({
            data: {
                action: 'create account',
                userId: newUser.id,
            }
        });
        return {
            done: true,
            message: 'User created',
        };
    }
    catch (error) {
        console.log(error);
        const errorMessage = (0, getErrorMsg_1.default)(error);
        return {
            done: false,
            message: errorMessage,
        };
    }
};
exports.$addUser = $addUser;
const $addDeveloper = async (user) => {
    try {
        await prisma.client.create({
            data: {
                userId: user.id,
                secret: (0, uuid_1.v4)(),
                clientId: (0, uuid_1.v4)(),
            }
        });
        return {
            done: true,
            message: 'Developer created',
        };
    }
    catch (error) {
        const errorMessage = (0, getErrorMsg_1.default)(error);
        return {
            done: false,
            message: errorMessage,
            data: null
        };
    }
};
exports.$addDeveloper = $addDeveloper;
const $getUser = async (id) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                id
            }
        });
        return {
            done: true,
            message: 'User found',
            data: user
        };
    }
    catch (error) {
        const errorMessage = (0, getErrorMsg_1.default)(error);
        return {
            done: false,
            message: errorMessage,
            data: null
        };
    }
};
exports.$getUser = $getUser;
const $getUserByEmail = async (email) => {
    try {
        const user = await prisma.users.findUnique({
            where: {
                email
            }
        });
        return {
            done: true,
            message: 'User found',
            data: user
        };
    }
    catch (error) {
        const errorMessage = (0, getErrorMsg_1.default)(error);
        return {
            done: false,
            message: errorMessage,
            data: null
        };
    }
};
exports.$getUserByEmail = $getUserByEmail;
