import { Request, Response } from "express";
import { findAllUser, findUserById, modifyUser, removeUser } from "../services/user.service";
import { IUserModel } from "../daos/user.dao";
import { UserDoesNotExistError } from "../utils/library.errors";


export async function getAllUsers(req:Request, res: Response) {
  try {
    const users = await findAllUser()
    res.status(200).json({message:"Users retrieved successfully.", users})
  } catch (error:any) {
    res.status(500).json({message:"Could not find users", error:error.message})
  }
}

export async function getUserById(req: Request, res: Response) {
  const userId:string = req.params.userId
  try {
    const user = await findUserById(userId)
    res.status(200).json({message:"User retrieved successfully.", user})
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({message: "User requested does not existed."})
    }
    res.status(500).json({message:"Could not find user", error:error.message})
  }
}

export async function updateUser(req: Request, res: Response) {
  const user: IUserModel = req.body
  console.log(user)
  try {
    const updatedUser = await modifyUser(user)
    console.log(updatedUser)
    res.status(200).json({message:"User updated successfully.", updatedUser})
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({message: "User requested does not existed."})
    }
    res.status(500).json({message:"Unable to update user", error:error.message})
  }
}


export async function deleteUser(req: Request, res: Response) {
  const userId:string = req.params.userId
  try {
    await removeUser(userId)
    res.status(200).json({message:"User removed successfully."})
  } catch (error: any) {
    if (error instanceof UserDoesNotExistError) {
      res.status(404).json({message: "User requested does not existed."})
    }
    res.status(500).json({message:"Unable to delete user", error:error.message})
  }
}