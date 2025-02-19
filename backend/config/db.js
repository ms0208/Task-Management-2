const mongoose = require('mongoose');

const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URL);
        console.log("Database is connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit process if DB connection fails
    }
};

module.exports = dbconnection;