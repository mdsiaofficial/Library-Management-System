import { ROUNDS } from "../config/config";
import User from "../daos/user.dao";
import { IUserModel } from "../daos/user.dao";
import { IUser } from "../models/user.model";
import bcrypt from "bcryptjs"
import { InvalidUsernameOrPasswordError, UnableToSaveUserError, UserDoesNotExistError } from "../utils/library.errors";

export async function register(user: IUser): Promise<IUserModel> {
  const rounds = ROUNDS
  const isExists: Object | null = await User.findOne({ email: user.email })

  if (isExists) {
    throw new Error("User already exists. Please Login !!!");
  }

  try {
    const hashedPassword = await bcrypt.hash(user.password, rounds)
    const newUser = new User({ ...user, password: hashedPassword });
    return await newUser.save()
  } catch (error: any) {
    // throw new Error("unable to create user at this time.")
    // throw new UnableToSaveUserError("unable to create user at this time.")
    throw new UnableToSaveUserError(error.message)

  }

}


export async function login(credentials: { email: string, password: string }): Promise<IUserModel> {
  const rounds = ROUNDS
  try {
    const user: Object | null = await User.findOne({ email: credentials.email })
    if (!user) {
      throw new Error("User not exists. Please Register first !!!");
    } else {
      console.log(user)
      const validatePassword: boolean = await bcrypt.compare(credentials.password, (user as IUserModel).password)
      if (validatePassword) {
        return user as IUserModel
      } else {
        throw new InvalidUsernameOrPasswordError("Invalid Password")
      }
    }

  } catch (error: any) {
    console.log(error)
    // throw new Error(error.message)
    throw new InvalidUsernameOrPasswordError(error.message)
  }

}

export async function findAllUser(): Promise<IUserModel[]> {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    return []
  }
}

export async function findUserById(userId: string): Promise<IUserModel> {
  try {
    const user = await User.findById(userId)
    if (user) return user
    // throw new Error("User not found with this id.")
    throw new UserDoesNotExistError("User not found with this id.")

  } catch (error: any) {
    throw new Error(error.message)
  }
}

export async function modifyUser(user: IUserModel): Promise<IUserModel> {
  try {
    await User.findByIdAndUpdate(user?._id, user, { new: true })
    if (!user) {
      // throw new Error("User not found with this id.")
      throw new UserDoesNotExistError("User not found with this id.")
    }
    return user
  } catch (error:any) {
    throw new Error(error.message)
  }
}

export async function removeUser(userId: string): Promise<string> {
  try {
    const user = await User.findByIdAndDelete(userId)
    if (!user) {
      throw new UserDoesNotExistError("User not found with this id.")
    }
    return "User deleted successfully"
  } catch (error: any) {
    throw new Error(error.message)
  }
}