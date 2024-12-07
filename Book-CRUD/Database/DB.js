const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/env');

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            serverSelectionTimeoutMS: 5000, 
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    }
};

module.exports = { connectDB };
