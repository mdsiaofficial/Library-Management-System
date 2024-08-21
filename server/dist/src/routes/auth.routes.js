"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const auth_controllers_1 = require("../controllers/auth.controllers");
const authRouter = express_1.default.Router();
authRouter.post("/register", auth_controllers_1.handleRegister);
module.exports = authRouter;
