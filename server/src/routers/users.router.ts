import express from "express";
const router = express.Router();
import { users } from "../controllers/users.controller";

const {
	getListOfUsers,
	getUser,
	createNewUser,
	updateUserInfo,
	deleteUser
} = users;

router.get("/all", getListOfUsers);
router.get("/:id", getUser);
router.post("/", createNewUser);
router.put("/:id", updateUserInfo);
router.delete("/:id", deleteUser);

export default router;