import express from "express"
import dotenv from "dotenv"
import { dbConnect } from "./lib/db.js";
import authRouter from "./routes/auth.route.js"
import taskRouter from "./routes/task.route.js"
import cors from "cors"
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = 5000 || process.env.PORT;

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter)
app.use("/api", taskRouter)

app.listen(PORT, ()=>{
    dbConnect();
    console.log(`The server is runnning on ${PORT}`)
})