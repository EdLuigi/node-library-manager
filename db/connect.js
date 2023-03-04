const mongoose = require("mongoose");

const connectDB = (url) => {
    console.log("Loading database connection...");
    return mongoose.connect(url);
};

module.exports = connectDB;
