export interface IUser {
  _id: string;
  type: "ADMIN" | "EMPLOYEE" | "PATRON";
  firstName: string;
  lastName: string;
  email: string;
}

export interface LoginUserPayload {
  email: string;
  password: string;
}