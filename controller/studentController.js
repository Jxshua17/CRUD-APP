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
  service.getAllStudents(res);
};

exports.getStudent = async (req, res) => {
  service.getStudentById(req, res);
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
