import express from "express"
import { getMe, login, register } from "../controller/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/me", protectRoute, getMe)
// router.get("/auth", (req, res)=>{
//     res.send("hello")
// })

export default router;