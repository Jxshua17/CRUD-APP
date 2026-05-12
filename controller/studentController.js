const student1 = require("../models/studentModel");

const express = require("express");
const app = express();
app.use(express.json());

exports.addStudent = async (req, res) => {
  try {
    //  let studentSchema = {
    //  id: "",
    //name: "",
    //age: "",
    //form: "",
    //};

    //studentSchema = req.body;
    console.log(req.body);
    await student1.create(req.body);
    return res
      .status(200)
      .json({ message: "the student has been added successfully.", student1 });
  } catch (err) {
    console.error(err.message);
  }
};

exports.getStudents = async (req, res) => {
  const students = await student1.find();
  res.status(200).json(students);
};

exports.getStudent = async (req, res) => {
  let id = req.params.id;
  const student0 = await student1.findById(id);
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
