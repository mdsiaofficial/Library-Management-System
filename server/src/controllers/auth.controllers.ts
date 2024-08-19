import { Request, Response } from "express";
import { IUser } from "../models/user.model";
import { register } from "../services/user.service";



export async function handleRegister(req:Request, res: Response) {
  const user: IUser = req.body;

  try {
    const registeredUser = await register(user)

    res
      .status(201)
      .json({
        message: "User successfully created",
        user: registeredUser
    })
  } catch (error) {
    res.status(500).json({message:"Unable to register user at this time."})
  }
}
