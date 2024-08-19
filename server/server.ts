import express, { Express, Request, Response } from "express";
import cors from "cors"
import { MONGO_URL, PORT } from "./src/config/config";
import mongoose from "mongoose"

const app: Express = express()

app.use(express.json())
app.use(cors());



(async function starUp() {
  try {
    await mongoose.connect(MONGO_URL)
    console.log("MongoDB connected")

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log("Error: ", error)
  }
})()

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Home..." })
})

app.get("/health", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Server is running..." })
})

