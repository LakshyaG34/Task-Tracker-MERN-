import express from "express"
import { getMe, getUsersByRole, login, logout, register } from "../controller/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.get("/me", protectRoute, getMe)
router.get("/users", getUsersByRole)
export default router;