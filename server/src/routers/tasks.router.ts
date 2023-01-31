import express from "express";
const router = express.Router();

import {
    createTask,
    updateTask,
    deleteTask,
    findById,
    findAll
} from "../controllers/tasks.controller";

router.get("/", findAll);
router.get("/:taskId", findById);
router.post("/", createTask);
router.put("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);

export default router;