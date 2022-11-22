const mongoose = require ('mongoose');

const curriculumSchema = new mongoose.Schema({
    courseName:{
            type: String,
            required: true,
            enum: {
            values:[
                'Front-end Development', 'Backend Development','Full-Stack Enginneer', 'Desktop Publishing', 'Graphic Design', 'Application Package', 'Mobile App Development','Mobile App Development'
            ]
        }
    },
    module:{
        type: String,
        required:true
    },
},  {timestamps:true});   

module.exports = mongoose.model('curriculum', curriculumSchema);
