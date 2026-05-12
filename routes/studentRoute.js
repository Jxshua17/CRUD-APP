const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/addStudent", studentController.addStudent);
router.get("/getStudents", studentController.getStudents);
module.exports = router;
