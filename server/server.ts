import express, { Express, Request, Response } from "express";
import cors from "cors"
import { MONGO_URL, PORT } from "./src/config/config";
import mongoose from "mongoose"
import { registerRoutes } from "./src/routes/routes";

const app: Express = express()

app.use(express.json())
app.use(cors());


(async function starUp() {
  try {
    await mongoose.connect(MONGO_URL)
    console.log("MongoDB connected")

    registerRoutes(app)
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log("Error: ", error)
  }
})()


