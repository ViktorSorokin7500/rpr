import mongoose, { Schema, Document } from "mongoose";

interface News extends Document {
  slug: string;
  title: string;
  content: string;
  image: string;
}

const NewsSchema: Schema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.News || mongoose.model<News>("News", NewsSchema);
