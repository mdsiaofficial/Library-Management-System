import dotenv from "dotenv"

dotenv.config()

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || ""
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || ""

export const MONGO_URL: string = `mongodb+srv://mdsiaofficial:librarydb@librarydb.fwrzr.mongodb.net/librarydb?retryWrites=true&w=majority&appName=librarydb`

export const PORT: number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8000
export const ROUNDS: number = process.env.SERVER_ROUNDS ? Number(process.env.SERVER_ROUNDS) : Math.floor(Math.random()*12)