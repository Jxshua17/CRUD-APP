import express, { response } from "express";

//app.use(express());
const app = express();
app.use(express.json()); //this was the solution to my problem.

let students = [];

app.get("/", (request, response) => {
  //response.send("Hello and welcome to my website.");
  response.send(`the students in this class are ${students}`);
});

app.post("/addStudent", (request, response) => {
  //i am trying a different approach because what i am getting has some kind of error which is funny. so try creating an object and then assigning the body to it.
  let studentSchema = {
    name: "",
    age: "",
    form: "",
  };

  //const { name, age, class } = request.body;
  studentSchema = request.body;

  //ohk, the problem turned out to be the fact that i was using the keyword class. just changed it to classes and that seemed to do the trick.
  //ohk. i think i just realised my mistake and it is the fact that i am not pushing. i should be pushing.
  students.push(studentSchema);
  console.log(studentSchema);
  console.log(students);
  return response.status(200).send("the student has been added successfully.");
});

//i don't even know where to go from where.
app.get("/getStudents", (request, response) => {
  return response.status(200).send(students);
});

app.listen(8080, () => {
  console.log("the current port should be localhost:8080");
});

//let students = [];
//students.push("fucking this shit up"); //ohk, this is pretty interesting. this gets called and not the rest.
