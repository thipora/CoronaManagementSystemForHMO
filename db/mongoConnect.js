// import mongoose from 'mongoose';

// main().catch(err => console.log(err));

// async function main() {
// await mongoose.connect('mongodb+srv://tz0556776105:5ZpRdMRIdy40jepC@cluster.l47zh4d.mongodb.net/koronaHMO');
//   console.log("mongos conect");
// }

import mongoose from 'mongoose';

const dbURI = 'mongodb+srv://tz0556776105:5ZpRdMRIdy40jepC@cluster.l47zh4d.mongodb.net/koronaHMO';

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

