const course = require('../models/course');

 const getCourse = async (req,res,next) =>{
    try{
        const get_course = await course.findById(req.params.id);
        res.status(200).json(get_course);
      }
       catch(err){ 
        next(err);
      }
}

 const getAllCourse = async (req,res,next)=>{
    try{
        const allCourse = await course.find({});
        res.status(200).json(allCourse);
      }
       catch(err){ 
        next(err);
      }
}

 const addCourse = async (req,res,next)=>{
    try{
        const newCourse = await course.create(req.body);
        res.status(201).json(`${newCourse.name} course - successfully added`);
      }
       catch(err){
        next(err);
      }
}

 const updateCourse = async (req,res,next)=>{
    try{
        await course.findByIdAndUpdate(
          req.params.id, 
          {$set:req.body},
          {new:true});
        res.status(201).json('Course successfully Updated');
      }
       catch(err){
        next(err);
      }
}

 const deleteCourse = async (req,res, next)=>{
    try{
       await course.findByIdAndDelete(req.params.id);
        res.status(201).json(`course successfully deleted`);
      }
       catch(err){
        next(err);
      }
}



module.exports = {addCourse,getCourse,getAllCourse, updateCourse, deleteCourse}