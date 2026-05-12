const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  form: { type: Number, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
