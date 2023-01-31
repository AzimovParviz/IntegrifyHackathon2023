import mongoose, {Document} from "mongoose"
import { projectStatus } from "../types"

export type ProjectDocument = Document & {
	name: string,
	categories: mongoose.Schema.Types.ObjectId[],
	status: projectStatus,
	creationDate: Date,
}

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	categories: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Category",
	},
	status: {
		type: String,
		enum: Object.values(projectStatus)
	},
	creationDate: Date,
})

export default mongoose.model<ProjectDocument>("Project",projectSchema)
