import { ROUNDS } from "../config/config";
import User from "../daos/user.dao";
import { IUserModel } from "../daos/user.dao";
import { IUser } from "../models/user.model";
import bcrypt from "bcryptjs"
import { UnableToSaveUserError } from "../utils/library.errors";

export async function register(user:IUser): Promise<IUserModel> {
  const rounds = ROUNDS
  const isExists: Object | null = await User.findOne({ email: user.email })
  
  if (isExists) {
    throw new Error("User already exists. Please Login !!!");
  }

  try {
    const hashedPassword = await bcrypt.hash(user.password, rounds)
    const saved = new User({ ...user, password: hashedPassword });
    return await saved.save()
  } catch (error: any) {
    // throw new Error("unable to create user at this time.")
    // throw new UnableToSaveUserError("unable to create user at this time.")
    throw new UnableToSaveUserError(error.message)

  }

}