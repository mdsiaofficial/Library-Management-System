"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const validation_1 = require("../middleware/validation");
const userRouter = express_1.default.Router();
userRouter.get("/", user_controller_1.getAllUsers);
userRouter.get("/:userId", (0, validation_1.validateSchema)(validation_1.Schemas.user.userId, 'params'), user_controller_1.getUserById);
userRouter.put("/", (0, validation_1.validateSchema)(validation_1.Schemas.user.update, 'body'), user_controller_1.updateUser);
userRouter.delete("/:userId", (0, validation_1.validateSchema)(validation_1.Schemas.user.userId, 'params'), user_controller_1.deleteUser);
exports.default = userRouter;
