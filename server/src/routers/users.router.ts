import express from "express"
const router = express.Router()
import { users } from "../controllers/users.controller"

const {
	getListOfUsers,
	getUser,
	createNewUser,
	updateUserInfo,
	deleteUser
} = users

router.get("/all", getListOfUsers)
router.get("/:userId", getUser)
router.post("/", createNewUser)
router.put("/:userId", updateUserInfo)
router.delete("/:userId", deleteUser)

export default router