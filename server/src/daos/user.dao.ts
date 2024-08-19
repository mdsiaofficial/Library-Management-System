import mongoose, { Document } from "mongoose";
import { IUser } from "../models/user.model";

export interface IUserModel extends IUser, Document { };

const userSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

export default mongoose.model<IUserModel>("User", userSchema);
