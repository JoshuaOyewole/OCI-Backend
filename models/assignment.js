const mongoose = require ('mongoose');

const assignmentSchema = new mongoose.Schema({
    course:{
        type: String,
        unique:true,
        required:true,
    }
},  {timestamps:true});   

module.exports = mongoose.model('assignment', assignmentSchema);
