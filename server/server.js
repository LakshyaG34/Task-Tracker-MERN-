import express from "express"
import dotenv from "dotenv"
import { dbConnect } from "./lib/db.js";
import authRouter from "./routes/auth.route.js"
import cors from "cors"

dotenv.config();

const PORT = 5000 || process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use("/api", authRouter)

app.listen(PORT, ()=>{
    dbConnect();
    console.log(`The server is runnning on ${PORT}`)
})