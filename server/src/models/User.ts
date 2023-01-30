import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  fullName: string;
  email: string;
  //there will be a role as well
  assignedTask: mongoose.Schema.Types.ObjectId[];
};

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    index: true,
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
