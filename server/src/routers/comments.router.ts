import express from "express";
import { comments } from "../controllers/comments.controller";

const {
    getAllCommentsFromTask,
    addCommentToTask,
    updateCommentFromTask,
    deleteCommentFromTask
} = comments;
const router = express.Router();

router.get("/:taskId", getAllCommentsFromTask);
router.post("/", addCommentToTask);
router.put("/:commentId", updateCommentFromTask);
router.delete("/:commentId", deleteCommentFromTask);

export default router;