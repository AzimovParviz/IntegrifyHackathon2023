import express from "express";
const router = express.Router();

import {
	createProject,
	findById,
	findAll,
	updateProject,
	deleteProject
} from "../controllers/projects.controller";

router.get("/", findAll);
router.get("/:projectId", findById);
router.post("/", createProject);
router.put("/:projectId", updateProject);
router.delete("/:projectId", deleteProject);

export default router;