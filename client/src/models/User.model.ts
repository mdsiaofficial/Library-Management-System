export interface IUser {
  _id: string;
  type: "ADMIN" | "EMPLOYEE" | "PATRON";
  firstName: string;
  lastName: string;
  email: string;
}

export interface ILoginUserPayload {
  email: string;
  password: string;
}

export interface IRegisterUserPayload {
  type: "ADMIN" | "EMPLOYEE" | "PATRON",
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}