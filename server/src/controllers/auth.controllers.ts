import { Request, Response } from "express";
import { IUser } from "../models/user.model";
import { login, register } from "../services/user.service";
import { IUserModel } from "../daos/user.dao";
import { InvalidUsernameOrPasswordError } from "../utils/library.errors";



export async function handleRegister(req: Request, res: Response) {
  const user: IUser = req.body;

  try {
    const registeredUser = await register(user)

    res
      .status(201)
      .json({
        message: "User successfully created",
        user: registeredUser
      })
  } catch (error: any) {
    if (error.message.includes("E11000 duplicate key error collection:")) {
      res.status(409).json({ message: "User with email already exists", error: error.message })
    }
    res.status(500).json({ message: error.message })
  }
}


export async function handleLogin(req: Request, res: Response) {
  const credentials = req.body
  try {
    const user: IUserModel = await login(credentials)
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
      })
  } catch (error: any) {
    if (error instanceof InvalidUsernameOrPasswordError) {
      res
        .status(401)
        .json({ message: "Unable to login user at this time.", error:error.message })
    } else {
      res
        .status(500)
        .json({ message: "Unable to login user at this time", error: error.message })
    }

  }
}