import express from "express";
const router = express.Router();

import {
	getAllCommentsFromTask,
	addCommentToTask,
	updateCommentFromTask,
	deleteCommentFromTask

} from "../services/comments.service";



router.get("/:taskId", getAllCommentsFromTask);
router.post("/", addCommentToTask);
router.put("/:commentId", updateCommentFromTask);
router.delete("/:commentId", deleteCommentFromTask);

export default router;