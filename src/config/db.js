import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = async () => {
  dotenv.config();
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Great! Connecting MongoDB"))
    .catch((error) => console.log("Error connecting to MongoDB:", error));
};

export default connectDB;
