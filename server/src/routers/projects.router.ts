import express from "express";
const router = express.Router();

import {
    createProject,
    findById,
    findAll,
    updateProject,
    deleteProject
} from "../controllers/projects.controller";

router.get("/api/v1/projects", findAll);
router.get("/api/v1/projects/:projectId", findById);
router.post("/api/v1/projects/", createProject);
router.put("/api/v1/projects/:projectId", updateProject);
router.delete("/api/v1/projects/:projectId", deleteProject);