"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = registerRoutes;
const auth_routes_1 = __importDefault(require("./auth.routes"));
function registerRoutes(app) {
    app.get("/health", (req, res) => {
        res
            .status(200)
            .json({ message: "Server is running..." });
    });
    app.use("/auth", auth_routes_1.default);
}
