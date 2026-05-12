require("dotenv").config();
//import express, { response } from "express";
const connectDB = require("./config/database");
const studentRoute = require("./routes/studentRoute");
//app.use(express());
const express = require("express");
//ln1 to 4 can also be written as
// const app = require("express");
//app.whateverMethod();
const app = express();
app.use(express.json()); //this was the solution to my problem.it is called middleware.
connectDB();

app.use("/api", studentRoute);

app.listen(process.env.PORT, () => {
  console.log(`the current port should be localhost: ${process.env.PORT} `);
});
