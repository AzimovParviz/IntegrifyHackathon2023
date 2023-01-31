import express from "express";
const router = express.Router();

import   {
    createAttachment,
    findById,
    findAll,
    updateAttachment,
    deleteAttachment
} from "../controllers/attachments.controller";

router.get("/:attachmentId", findById);
router.get("/", findAll);
router.post("/:attachmentId", createAttachment);
router.put("/:attachmentId", updateAttachment)
router.delete("/:attachmentId", deleteAttachment);

export default router;