import mongoose, { Document } from "mongoose";
import { categoryStatus } from "../types";

//1. Id: MongoDBId
//
//2. Name: string
//3. Color: string
//4. Description: string
//5. Number of tasks: number
//6. Users assigned to category: Users[]
//7. Status (Inactive, Active, Finished): enum
//

export type CategoryDocument = Document & {
  name: string;
  description: string;
  numberOfTasks: number;
  usersAssigned: mongoose.Schema.Types.ObjectId[];
  status: categoryStatus;
};

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		index: true,
	},
	description: {
		type: String,
	},
	numberOfTasks: {
		type: Number,
	},
	usersAssigned: {
		type: String,
		enum: Object.values(categoryStatus),
		ref: "User",
	},
});

export default mongoose.model<CategoryDocument>("Category", categorySchema);
