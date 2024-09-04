import express from "express"
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller"
import { Schemas, validateSchema } from "../middleware/validation"

const userRouter = express.Router()


userRouter.get("/", getAllUsers)
userRouter.get("/:userId", validateSchema(Schemas.user.userId, 'params'), getUserById)
userRouter.put("/",validateSchema(Schemas.user.update, 'body'),  updateUser)
userRouter.delete("/:userId",validateSchema(Schemas.user.userId, 'params'),  deleteUser)


export default userRouter