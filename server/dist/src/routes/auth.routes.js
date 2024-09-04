"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../controllers/auth.controllers");
const validation_1 = require("../middleware/validation");
const authRouter = express_1.default.Router();
authRouter.post("/register", (0, validation_1.validateSchema)(validation_1.Schemas.user.create, 'body'), auth_controllers_1.handleRegister);
authRouter.post("/login", (0, validation_1.validateSchema)(validation_1.Schemas.user.login, 'body'), auth_controllers_1.handleLogin);
exports.default = authRouter;
