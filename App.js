import express, { response } from "express";

//app.use(express());
const app = express();
//ln1 to 4 can also be written as
// const app = require("express");
//app.whateverMethod();
app.use(express.json()); //this was the solution to my problem.it is called middleware.

let students = [];

app.get("/", (request, response) => {
  //response.send("Hello and welcome to my website.");
  response.send(`the students in this class are ${students}`);
});

app.post("/addStudent", (request, response) => {
  //i am trying a different approach because what i am getting has some kind of error which is funny. so try creating an object and then assigning the body to it.
  let studentSchema = {
    id: "",
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

app.listen(8080, () => {
  console.log("the current port should be localhost:8080");
});

//let students = [];
//students.push("fucking this shit up"); //ohk, this is pretty interesting. this gets called and not the rest.
