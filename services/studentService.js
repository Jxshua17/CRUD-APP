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
