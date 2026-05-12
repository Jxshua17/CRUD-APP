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

//i don't even know where to go from where.
app.get("/getStudents", (request, response) => {
  return response.status(200).send(students);
});

app.get("/getStudents/:id", (req, res) => {
  //TODO -> fix issue.
  let id = req.params.id;

  /*for (let i = 0; i < students.length; i++) {
    console.log(id);
    console.log(students[0].id);

    //i was getting an error here because i was using the strict equality(===) which checks both the value and the type instead of loose equality(==) which checks just the value.
    // the error i am getting now is the fact that shit only , that is the loop, only runs once.
    if (id == students[i].id) {
      console.log("the student id is " + students[i].id);
      return res.status(200).send(students[i]);
      //break; stupid me forgot that you can use a brak statement after a return. nothing comes after a return.
    } else {
      return res.status(404).send("this student is not in the database.");
    }
    }*/

  let i = 0;
  while (i != students.length) {
    if (id == students[i].id) {
      return res.status(200).send(students[i]);
    }
    i++;
  }

  return res.status(404).send("this nigga isn't in the database");
});

app.put("/updateStudentInfo/:id", (req, res) => {
  let id = req.params.id;
  let studentSchema = {
    id: "",
    name: "",
    age: "",
    form: "",
  };

  studentSchema = req.body;

  let i = 0;
  while (i != students.length) {
    if (id == students[i].id) {
      students[i] = studentSchema;
      return res
        .status(200)
        .send("the record of this student has been updated.");
    }
    i++;
  }

  return res
    .status(404)
    .send(
      "record couldn't be updated because the student with that id isn't in the database.",
    );
});

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
