import mongoose, { Document } from "mongoose"
import { attachmentCategory } from "../types"

export type AttachmentDocument = Document & {
  name: string;
  filepath: string;
  category: attachmentCategory;
};

const attachmentSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	filepath: {
		type: String,
		require: true,
	},
	category: {
		type: String,
		enum: Object.values(attachmentCategory),
		require: true,
	},
});

export default mongoose.model<AttachmentDocument>(
	"Attachment",
	attachmentSchema

);

