import { Express, Request, Response } from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";


export function registerRoutes(app: Express) {
  app.get("/health", (req: Request, res: Response) => {
    res
      .status(200)
      .json({ message: "Server is running..." })
  })
  app.use("/auth", authRouter)
  app.use("/users", userRouter)
}