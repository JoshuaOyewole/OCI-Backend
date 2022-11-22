const mongoose = require ('mongoose');

const CourseSchema = new mongoose.Schema({
    name:{
        type: String,
        unique:true,
        required:true,
    },
    price:{
        type: Number,
        required: true
    },
    duration:{
        type: String,
        required:true,
    },
},  {timestamps:true});   

module.exports = mongoose.model('Course', CourseSchema);
