"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.get("/", user_controller_1.getAllUsers);
userRouter.get("/:userId", user_controller_1.getUserById);
userRouter.put("/", user_controller_1.updateUser);
userRouter.delete("/:userId", user_controller_1.deleteUser);
exports.default = userRouter;
