import mongoose, { Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
}

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
  },
  {
    versionKey: false,
  },
);

export default mongoose.model<ITask>('Task', taskSchema);
