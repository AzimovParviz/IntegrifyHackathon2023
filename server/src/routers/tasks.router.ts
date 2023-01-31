import express from "express";
const router = express.Router();

import {
    createTask,
    updateTask,
    deleteTask,
    findById,
    findAll
} from "../controllers/tasks.controller";

router.get("api/v1/tasks/", findAll);
router.get("api/v1/tasks/", findById);
router.post("api/v1/tasks/", createTask);
router.put("api/v1/tasks/", updateTask);
router.delete("api/v1/tasks/", deleteTask);