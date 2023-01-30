import express from "express";
const router = express.Router();

import { comments } from "../controllers/comments.controller";

const {
    getAllCommentsFromTask,
    addCommentToTask,
    updateCommentFromTask,
    deleteCommentFromTask
} = comments;


router.get("/:taskId", getAllCommentsFromTask);
router.post("/", addCommentToTask);
router.put("/:commentId", updateCommentFromTask);
router.delete("/:commentId", deleteCommentFromTask);

export default router;