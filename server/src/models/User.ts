import mongoose, { Document } from "mongoose";
import { userRole } from "../types";

export type UserDocument = Document & {
  id: mongoose.Schema.Types.ObjectId;
  fullName: string;
  email: string;
  team: mongoose.Schema.Types.ObjectId;
    //there will be a role as well
  role: userRole,
  assignedTask: mongoose.Schema.Types.ObjectId[];
};

const userSchema = new mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		auto: true
	},
	fullName: {
		type: String,
		index: true,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		index: true,
	},
	assignedTask: {
		type: [mongoose.Schema.Types.ObjectId],
	},
 
});

export default mongoose.model<UserDocument>("User", userSchema);
