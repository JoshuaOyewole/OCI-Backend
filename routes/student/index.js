const express = require('express');
const router = express.Router();
const {
    deleteStudent,
    getStudent,
    updateStudent,
    getAllStudents
} = require("../../controllers/user");
const { verifyAdmin, verifyUser } = require('../../util/verifyToken');


//GET A SPECIFIC STUDENT
//UPDATE A STUDENT INFO
//DELETE A STUDENT
//GET ALL STUDENTS
router.get('/:id', verifyUser, getStudent).patch('/:id', verifyUser, updateStudent).delete('/:id', verifyAdmin, deleteStudent).get('/', verifyAdmin, getAllStudents);


//After research on 8/8/22, --> I discovered no need of doing that. It can be bypass by simply adding the verifyAdmin middleware...


module.exports = router;