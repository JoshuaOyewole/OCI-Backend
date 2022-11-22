const user = require('../models/student');
const createError = require("../util/error");




//GET A SINGLE STUDENT
const getStudent = async (req,res,next)=>{
  try{
    const getStudent = await user.findById(req.params.id);

    if(!getStudent){
      return next(createError(404, "User not Found!"))
    }
    const {createdAt, updatedAt, password, isAdmin, ...otherDetails } = getStudent._doc;

    res.status(200).json({...otherDetails});
  }
   catch(err){ 
    next(err);
  }
}

//GET ALL STUDENTS
const getAllStudents = async (req,res,next)=>{
    try {
      const newStudent = await user.find({});

      if(!newStudent) return next(createError(404, "No student Available!"))
      const refinedData = newStudent.map(student=>{
        const { password, isAdmin, ...otherDetails } = student._doc;
        return {...otherDetails};
      })
      res.status(200).json(refinedData);
    } catch (err) {
      next(err);
    }
}

//UPDATE STUDENT
const updateStudent = async (req,res,next)=>{
  try{
    const updateStudent = await user.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body },
      {new:true}
    );
    if(!updateStudent){
        res.status(404).json(`Student ID not found!`)
    }
    res.status(201).json('User Information successfully Updated');
  }
   catch(err){
    next(err);
  }
}

//DELETE STUDENT
const deleteStudent = async (req,res,next)=>{
  try{
    const deletedUser = await user.findByIdAndDelete(req.params.id);
    if(!deletedUser){
     res.status(404).json(`User ID does not Exist, Kindly try again!`);
    }
    else{
     res.status(201).json(`${deletedUser.firstname} ${deletedUser.lastname} deleted successfully`);
    }
  }
   catch(err){
    next(err);
  }
 }

 module.exports = {getStudent, getAllStudents, updateStudent, deleteStudent}