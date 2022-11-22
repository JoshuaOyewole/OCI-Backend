const express = require ('express');
const router = express.Router();
const { addAssignment, deleteAssignment, getAssignment, getAssignments, updateAssignment } = require("../../controllers/assignment");



//GET ALL ASSIGNMENT
router.get('api/student/:course/assignment', getAssignments)

//GET A SPECIFIC ASSIGNMENT
router.get('api/student/:course/assignment/:id', getAssignment)

//ADD AN ASSIGNMENT
router.post('api/student/:course', addAssignment)

//UPDATE ASSIGNMENT
router.patch('api/student/:course/:id', updateAssignment)
  

 //DELETE AN ASSIGNMENT
 router.delete('api/student/:course/:id', deleteAssignment)

 module.exports = router;