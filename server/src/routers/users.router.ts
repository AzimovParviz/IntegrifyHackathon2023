import express from "express";
const router = express.Router();

import {
	getListOfUsers,
	getUser,
	createNewUser,
	updateUserInfo,
	deleteUser
} from "../services/users.service";

router.get("/", getListOfUsers);
router.get("/:id", getUser);
router.post("/", createNewUser);
router.put("/:id", updateUserInfo);
router.delete("/:id", deleteUser);

export default router;