import mongoose, { Document } from "mongoose"

export type CommentDocument = Document & {
  author: mongoose.Schema.Types.ObjectId;
  task: mongoose.Schema.Types.ObjectId;
  content: string;
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
	
});

export default mongoose.model<CommentDocument>("Comment", commentSchema)
