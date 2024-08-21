export interface IUser {
  _id: string;
  type: "ADMIN" | "EMPLOYEE" | "PATRON";
  firstName: string;
  lastName: string;
  email: string;
}