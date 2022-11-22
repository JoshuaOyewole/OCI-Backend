const express = require("express");
const { addCourse,getAllCourse,getCourse,updateCourse,deleteCourse } = require("../../controllers/course");
const { verifyUser, verifyAdmin } = require("../../util/verifyToken");
const router = express.Router();

//GET LIST OF ALL COURSES
//GET A SPECIFIC COURSE
//UPDATE A COURSES
 //DELETE A COURSES
 //CREATE A COURSES
router.get('/', verifyUser, getAllCourse).get('/:id', verifyUser, getCourse).patch('/:id', verifyAdmin, updateCourse).delete('/:id', verifyAdmin, deleteCourse).post('/', verifyAdmin, addCourse);


module.exports = router;



