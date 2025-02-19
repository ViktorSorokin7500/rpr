import mongoose, { Schema, Document } from "mongoose";

interface Poll extends Document {
  link: string;
  title: string;
  image: string;
}

const PollSchema: Schema = new Schema(
  {
    link: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Poll || mongoose.model<Poll>("Poll", PollSchema);
