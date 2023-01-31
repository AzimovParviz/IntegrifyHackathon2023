import express from "express";
const router = express.Router();

import   {
    createAttachment,
    findById,
    findAll,
    updateAttachment,
    deleteAttachment
} from "../controllers/attachments.controller";

router.get("/api/v1/attachments/attachmentIdd", findById);
router.get("/api/v1/attachments/", findAll);
router.post("/api/v1/attachments/", createAttachment);
router.put("/api/v1/attachments/:attachmentId", updateAttachment)
router.delete("/api/v1/attachments/attachmentId", deleteAttachment);
