import express from "express";
const router = express.Router();

import {
    createCategory,
    updateCategory,
    deleteCategory,
    findById,
    findAll
} from "../controllers/category.controller";

router.get("/", findAll);
router.get("/:categoryId", findById);
router.post("/", createCategory);
router.put("/:categoryId", updateCategory);
router.delete("/:categoryId", deleteCategory);

export default router;