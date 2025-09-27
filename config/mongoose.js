import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";


const setupListeners = () => {
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
        console.log(`MongoDB connection error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB disconnected");
        setTimeout(connectDB, 5000); // Reconnect after 5 seconds
    });

    mongoose.connection.on("reconnected", () => {
        console.log("MongoDB reconnected");
    });
}

const connectDB = async () => {
    try {
        if(!MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
        

        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);

        setupListeners();
        
    } catch (error) {
        console.log("Failed to connect to MongoDB");
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
