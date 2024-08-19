"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.MONGO_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
exports.MONGO_URL = `mongodb+srv://mdsiaofficial:librarydb@librarydb.fwrzr.mongodb.net/librarydb?retryWrites=true&w=majority&appName=librarydb`;
exports.PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8000;
