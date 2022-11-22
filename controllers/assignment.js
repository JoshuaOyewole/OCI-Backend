const assignment = require("../models/assignment.js") ;

const getAssignments = async (req,res)=>{
    try{
      const getAssignment = await assignment.find(req.body.course);
      res.status(200).json(getAssignment);
    }
     catch(err){ 
        next(err);
    }
  }

  const getAssignment = async (req,res)=>{
    try{
      const getAssignment = await assignment.findById(req.params.id);
      res.status(200).json(getAssignment);
    }
     catch(err){ 
        next(err);
    }
  }

  const addAssignment =  async (req,res)=>{
    try{
      const addAssignment = await assignment.create(req.body);
      res.status(200).json(addAssignment);
    }
     catch(err){ 
        next(err);
    }
  }

  const updateAssignment =  async (req,res)=>{
    try{
      const updateAssignment = await assignment.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
      );
      if(!updateAssignment){
          res.status(400).json(`Assignment ID not found!`)
      }
      res.status(201).json('assignment Information successfully Updated');
    }
     catch(err){
        next(err);
    }
  }

  const deleteAssignment =  async (req,res)=>{
    try{
      const deletedAssignment = await assignment.findByIdAndDelete(req.params.id);
     
      //CHECK IF THE ID IS VALID
      if(!deletedAssignment){
       res.status(400).json(`Assignment ID does not Exist, Kindly try again!`);
      }
      else{
       res.status(201).json(`${deletedAssignment.name}  deleted successfully`);
      }
    }
     catch(err){
        next(err);
    }
   }

   module.exports = { getAssignments, getAssignment, addAssignment, updateAssignment, deleteAssignment};