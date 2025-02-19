import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let isConnected: boolean = false;

async function connectToDatabase() {
  if (isConnected) {
    return mongoose.connection;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });

    isConnected = true;
    console.log("MongoDB connected successfully");
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default connectToDatabase;
