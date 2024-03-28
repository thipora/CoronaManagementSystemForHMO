import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const USER=process.env.USER;
const PASSWORD=process.env.PASSWORD;

const dbURI = `mongodb+srv://${USER}:${PASSWORD}@cluster.l47zh4d.mongodb.net/koronaHMO`;

async function connectToDatabase() {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

async function disconnectFromDatabase() {
    try {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Failed to disconnect from MongoDB:", error);
    }
}

export {connectToDatabase, disconnectFromDatabase}