import { ROUNDS } from "../config/config";
import User from "../daos/user.dao";
import { IUserModel } from "../daos/user.dao";
import { IUser } from "../models/user.model";
import bcrypt from "bcryptjs"

export async function register(user:IUser): Promise<IUserModel> {
  const rounds = ROUNDS

  try {
    const hashedPassword = await bcrypt.hash(user.password, rounds)
    const saved = new User({ ...user, password: hashedPassword });
    return await saved.save()
  } catch (error: any) {
    throw new Error("unable to create user at this time.")
  }

}