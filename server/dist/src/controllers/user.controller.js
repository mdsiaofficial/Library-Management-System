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
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const user_service_1 = require("../services/user.service");
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, user_service_1.findAllUser)();
            res.status(200).json({ message: "Users retrieved successfully.", users });
        }
        catch (error) {
            res.status(500).json({ message: "Could not find users", error: error.message });
        }
    });
}
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.userId;
        try {
            const user = yield (0, user_service_1.findUserById)(userId);
            res.status(200).json({ message: "User retrieved successfully.", user });
        }
        catch (error) {
            res.status(500).json({ message: "Could not find user", error: error.message });
        }
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        console.log(user);
        try {
            const updatedUser = yield (0, user_service_1.modifyUser)(user);
            console.log(updatedUser);
            res.status(200).json({ message: "User updated successfully.", updatedUser });
        }
        catch (error) {
            res.status(500).json({ message: "Unable to update user", error: error.message });
        }
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.userId;
        try {
            yield (0, user_service_1.removeUser)(userId);
            res.status(200).json({ message: "User removed successfully." });
        }
        catch (error) {
            res.status(500).json({ message: "Unable to delete user", error: error.message });
        }
    });
}
