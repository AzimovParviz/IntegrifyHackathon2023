import express from "express";
const router = express.Router();

import {
    createCategory,
    updateCategory,
    deleteCategory,
    findById,
    findAll
} from "../controllers/category.controller";

router.get("/api/v1/categories/", findAll);
router.get("/api/v1/categories/:categoryId", findById);
router.post("/api/v1/categories/", createCategory);
router.put("/api/v1/categories/:categoryId", updateCategory);
router.delete("/api/v1/categories/:categoryId", deleteCategory);