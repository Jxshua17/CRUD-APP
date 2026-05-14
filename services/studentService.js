const student9 = require("../models/studentModel");

const express = require("express");
const app = express();
app.use(express.json());

exports.displayHomepage = () => {
  return "This is the homepage of an imaginary website that is hosted only in your mind";
};

exports.addStudentToDB = async (stud, response) => {
  try {
    console.log(stud);
    await student9.create(stud);
    return response
      .status(200)
      .json({ message: "the student has been added successfully.", stud });
  } catch (err) {
    console.error(err.message);
  }
};

exports.getAllStudents = async (res) => {
  const students = await student9.find();
  res.status(200).json(students);
};

exports.getStudentById = async (req, res) => {
  const student0 = await student9.findOne({ id: req.params.id });
  if (student0) {
    res.status(200).json(student0);
  } else {
    res.status(400).send("This nigga isn't in the database.");
  }
};

exports.findAndUpdateStudent = async (req, res) => {
  let id = req.params.id;
  const stud = await student9.findByIdAndUpdate(id, req.body);
  res.status(200).json({ message: "the student has been updated", data: stud });
};

exports.findAndDeleteStudent = async (req, res) => {
  let id = req.params.id;
  await student9.findByIdAndDelete(id);
  res
    .status(200)
    .send(`the student with the following id ${id} has been deleted`);
};
