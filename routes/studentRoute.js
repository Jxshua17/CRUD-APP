const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/addStudent", studentController.addStudent);

module.exports = router;
