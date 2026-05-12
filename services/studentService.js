const student9 = require("../models/studentModel");

const express = require("express");
const app = express();
app.use(express.json());

exports.displayHomepage = () => {
  return "This is the homepage of an imaginary website that is hosted only in your mind";
};
