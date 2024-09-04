import express from "express"
import { handleLogin, handleRegister } from "../controllers/auth.controllers"
import { Schemas, validateSchema } from "../middleware/validation"

const authRouter = express.Router()

authRouter.post("/register", validateSchema(Schemas.user.create, 'body'), handleRegister)
authRouter.post("/login", validateSchema(Schemas.user.login, 'body'), handleLogin)

export default authRouter