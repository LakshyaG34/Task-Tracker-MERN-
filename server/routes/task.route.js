import express from "express"
import { createTask, getTask, updateTask } from "../controller/task.controller.js";

const router = express.Router();

router.post("/task", createTask);
router.get("/task", getTask);
router.put("/task/:taskId", updateTask);

export default router;