"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const getErrorMessages = (error) => {
    if (error instanceof TypeError) {
        return error.message;
    }
    if (error instanceof SyntaxError) {
        return error.message;
    }
    if (error instanceof EvalError) {
        return error.message;
    }
    if (error instanceof RangeError) {
        return error.message;
    }
    if (error instanceof ReferenceError) {
        return error.message;
    }
    if (error instanceof URIError) {
        return error.message;
    }
    if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
            return 'username is already taken';
        }
        return 'Internal Server Error register service';
    }
    return 'Internal server error';
};
exports.default = getErrorMessages;
