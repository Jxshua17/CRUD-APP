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
