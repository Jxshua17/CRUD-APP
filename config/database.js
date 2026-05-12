require("dotenv").config();
const mongoose1 = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose1.connect(process.env.MONGOURI);
    console.log("MongoDB connected.");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
