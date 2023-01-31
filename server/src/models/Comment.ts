import mongoose, { Document } from "mongoose";

export type CommentDocument = Document & {
  author: mongoose.Schema.Types.ObjectId;
  task: mongoose.Schema.Types.ObjectId;
  content: string;
  id: mongoose.Schema.Types.ObjectId;
};

const commentSchema = new mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
	},
	task: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
	},
	content: String,
	id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	}
});

export default mongoose.model<CommentDocument>("Comment", commentSchema);
