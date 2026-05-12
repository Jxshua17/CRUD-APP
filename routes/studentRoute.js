const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/addStudent", studentController.addStudent);
router.get("/getStudents", studentController.getStudents);
router.get("/getStudent/:id", studentController.getStudent);
router.put("/updateStudentInfo/:id", studentController.updateStudent);
module.exports = router;
