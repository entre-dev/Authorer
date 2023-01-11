"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodePassword = exports.hashString = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const hashString = async (str) => {
    try {
        const SALT_ROUNDS = +Math.random().toFixed(5);
        const hash = await bcryptjs_1.default.hash(str, SALT_ROUNDS);
        return {
            hash,
            salt: SALT_ROUNDS,
        };
    }
    catch (e) {
        console.error(e);
        return;
    }
};
exports.hashString = hashString;
const decodePassword = async (str, hash) => {
    return await bcryptjs_1.default.compare(str, hash);
};
exports.decodePassword = decodePassword;
