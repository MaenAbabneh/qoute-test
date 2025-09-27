import dotenv from "dotenv";

dotenv.config({path: '.env.local'});

export const PORT = process.env.PORT || 5500;
export const MONGODB_URI = process.env.MONGODB_URI;