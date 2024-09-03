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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.findAllUser = findAllUser;
exports.findUserById = findUserById;
exports.modifyUser = modifyUser;
exports.removeUser = removeUser;
const config_1 = require("../config/config");
const user_dao_1 = __importDefault(require("../daos/user.dao"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const library_errors_1 = require("../utils/library.errors");
function register(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const rounds = config_1.ROUNDS;
        const isExists = yield user_dao_1.default.findOne({ email: user.email });
        if (isExists) {
            throw new Error("User already exists. Please Login !!!");
        }
        try {
            const hashedPassword = yield bcryptjs_1.default.hash(user.password, rounds);
            const newUser = new user_dao_1.default(Object.assign(Object.assign({}, user), { password: hashedPassword }));
            return yield newUser.save();
        }
        catch (error) {
            // throw new Error("unable to create user at this time.")
            // throw new UnableToSaveUserError("unable to create user at this time.")
            throw new library_errors_1.UnableToSaveUserError(error.message);
        }
    });
}
function login(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
        const rounds = config_1.ROUNDS;
        try {
            const user = yield user_dao_1.default.findOne({ email: credentials.email });
            if (!user) {
                throw new Error("User not exists. Please Register first !!!");
            }
            else {
                console.log(user);
                const validatePassword = yield bcryptjs_1.default.compare(credentials.password, user.password);
                if (validatePassword) {
                    return user;
                }
                else {
                    throw new library_errors_1.InvalidUsernameOrPasswordError("Invalid Password");
                }
            }
        }
        catch (error) {
            console.log(error);
            // throw new Error(error.message)
            throw new library_errors_1.InvalidUsernameOrPasswordError(error.message);
        }
    });
}
function findAllUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield user_dao_1.default.find();
            return users;
        }
        catch (error) {
            return [];
        }
    });
}
function findUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_dao_1.default.findById(userId);
            if (user)
                return user;
            // throw new Error("User not found with this id.")
            throw new library_errors_1.UserDoesNotExistError("User not found with this id.");
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
function modifyUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield user_dao_1.default.findByIdAndUpdate(user === null || user === void 0 ? void 0 : user._id, user, { new: true });
            if (!user) {
                // throw new Error("User not found with this id.")
                throw new library_errors_1.UserDoesNotExistError("User not found with this id.");
            }
            return user;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
function removeUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_dao_1.default.findByIdAndDelete(userId);
            if (!user) {
                throw new library_errors_1.UserDoesNotExistError("User not found with this id.");
            }
            return "User deleted successfully";
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
