const student1 = require("../models/studentModel");
const service = require("../services/studentService");

const express = require("express");
const app = express();
app.use(express.json());

exports.home = (req, res) => {
  //i am not speaking with databaseo there is  no need for using async()
  const message = service.displayHomepage();
  res.status(200).send(message);
};

exports.addStudent = (req, res) => {
  console.log(req.body);
  service.addStudentToDB(req.body, res);
};

exports.getStudents = async (req, res) => {
  const students = await student1.find();
  res.status(200).json(students);
};

exports.getStudent = async (req, res) => {
  let id = req.params.id;
  const student0 = await student1.findOne({ id: req.params.id });
  if (student0) {
    res.status(200).json(student0);
  } else {
    res.status(400).send("This nigga isn't in the database.");
  }
};

exports.updateStudent = async (req, res) => {
  let id = req.params.id;
  const stud = await student1.findByIdAndUpdate(id, req.body);
  res.status(200).send(`student updated ${stud}`);
};

exports.deleteStudent = async (req, res) => {
  let id = req.params.id;
  await student1.findByIdAndDelete(id);
  res
    .status(200)
    .send(`the student with the following id ${id} has been deleted`);
};
