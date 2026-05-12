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
let students = [];

app.get("/", (request, response) => {
  //response.send("Hello and welcome to my website.");
  response.send(`the students in this class are ${students}`);
});

app.use("/api", studentRoute);

app.delete("/deleteStudent/:id", (req, res) => {
  let id = req.params.id;

  let i = 0;
  while (i != students.length) {
    if (id == students[i].id) {
      students.splice(i, 1);
      return res.status(200).send("the student has been deleted.");
    }
    i++;
  }

  return res.status(404).send("this nigga isn't in the database");
});

app.listen(process.env.PORT, () => {
  console.log(`the current port should be localhost: ${process.env.PORT} `);
});

//let students = [];
//students.push("fucking this shit up"); //ohk, this is pretty interesting. this gets called and not the rest.
