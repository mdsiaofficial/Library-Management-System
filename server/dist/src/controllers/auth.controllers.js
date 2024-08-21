"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRegister = handleRegister;
exports.handleLogin = handleLogin;
const user_service_1 = require("../services/user.service");
const library_errors_1 = require("../utils/library.errors");
function handleRegister(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        try {
            const registeredUser = yield (0, user_service_1.register)(user);
            res
                .status(201)
                .json({
                message: "User successfully created",
                user: registeredUser
            });
        }
        catch (error) {
            if (error.message.includes("E11000 duplicate key error collection:")) {
                res.status(409).json({ message: "User with email already exists", error: error.message });
            }
            res.status(500).json({ message: error.message });
        }
    });
}
function handleLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = req.body;
        try {
            const user = yield (0, user_service_1.login)(credentials);
            res
                .status(200)
                .json({
                message: "User logged in successfully.",
                user: {
                    _id: user._id,
                    type: user.type,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }
            });
        }
        catch (error) {
            if (error instanceof library_errors_1.InvalidUsernameOrPasswordError) {
                res
                    .status(401)
                    .json({ message: "Unable to login user at this time.", error: error.message });
            }
            else {
                res
                    .status(500)
                    .json({ message: "Unable to login user at this time", error: error.message });
            }
        }
    });
}
