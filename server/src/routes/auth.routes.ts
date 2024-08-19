import express from "express"
import { handleRegister } from "../controllers/auth.controllers"

const authRouter = express.Router()

authRouter.post("/register", handleRegister)

export = authRouter