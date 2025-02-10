import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config()

export class Connection {
    static async connect() {
        const DB_NAME = process.env.MONGODB_DATABASE;
        const MONGO_URI = 'mongodb://localhost:27017';
        const MONGODB_URL = `${MONGO_URI}/${DB_NAME}`;
        try {
            await mongoose.connect(MONGODB_URL as string);
            console.log("Database connected");
        } catch (error) {
            console.error("Database connection error", error);
        }
    }

    static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log("Database disconnected");
        } catch (error) {
            console.error("Database disconnection error", error);
        }
    }
}
