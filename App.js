import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
  //response.send("Hello and welcome to my website.");
  response.send(`the students in this class are ${students}`);
});

app.post("/addStudent", (request, response) => {
  //i am trying a different approach because what i am getting has some kind of error which is funny. so try creating an object and then assigning the body to it.
  let studentSchema = {
    name: "",
    age: "",
    class: "",
  };
  //const { name, age, class } = request.body;
  studentSchema = request.body;

  students = studentSchema;
  console.log(students);
  return response.status(200).send("the student has been added successfully.");
});

app.get("/getStudents", (request, response) => {
  return response
    .status(200)
    .send("there are students but you can't get them here.");
});

app.listen(8080, () => {
  console.log("the current port should be localhost:8080");
});

let students = [];
