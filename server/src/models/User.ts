import mongoose, { Document } from "mongoose"
import { userRole } from "../types"

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  team: mongoose.Schema.Types.ObjectId;
  role: userRole,
  assignedTask: mongoose.Schema.Types.ObjectId[];
};

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		index: true,
		required: true,
	},
	lastName: {
		type: String,
		index: true,
		required: true,
	},
	role: {
		type: String,
		enum: Object.values(userRole),
		required: true,
	},
	email: {
		type: String,
		index: true,
	},
	assignedTask: {
		type: [mongoose.Schema.Types.ObjectId],
	},
 
})

export default mongoose.model<UserDocument>("User", userSchema)
