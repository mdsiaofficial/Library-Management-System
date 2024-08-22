import express from "express"
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller"

const userRouter = express.Router()


userRouter.get("/", getAllUsers)
userRouter.get("/:userId", getUserById)
userRouter.put("/", updateUser)
userRouter.delete("/:userId", deleteUser)


export default userRouter