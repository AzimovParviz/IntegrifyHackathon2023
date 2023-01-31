import mongoose, { Document } from "mongoose"
import { taskStatus } from "../types"
//TODO: add priority to tasks 
export type TaskDocument = Document & {
  name: string;
  description: string;
  comments: mongoose.Schema.Types.ObjectId[]; //Comment IDs
  attachments: mongoose.Schema.Types.ObjectId[]; //Attachment IDs
  usersAssigned: mongoose.Schema.Types.ObjectId[]; //User IDs
  status: taskStatus;
  startingDate: Date;
  dueDate: Date;
};

const taskSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	description: {
		type: String,
	},
	comments: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Comment",
	},
	attachments: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Attachment",
	},
	usersAssigned: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "User",
	},
	status: {
		type: String,
		enum: Object.values(taskStatus),
		require: true,
	},
	startingDate: {
		type: Date,
	},
	dueDate: {
		type: Date,
	},
});

export default mongoose.model<TaskDocument>("Task", taskSchema)
