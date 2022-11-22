const mongoose = require ('mongoose');

const StudentSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: true,
        maxLength:200,
    },
    lastname: {
        type: String,
        required: true,
        maxLength:200,
    },
    email:{
        type: String,
        required: true,
        maxLength: 200,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        maxLength: 200,
    },
    phone: {
        type: Number,
        required: true,
        unique:true,
    },
    gender: {
        type: String,
        required: true,
        maxLength:50,
	enum: {values:['Male', 'Female'], message:  '{VALUE} is not supported'}
    },
    course:{
        type: String,
        required: true,
	    enum: {
        values:[
            'Front-end Web Development', 'Backend Web Enginner','Full-Stack Enginneer', 'Desktop Publishing', 'Graphic Design', 'Mobile App Development', 'Computer Enginnering'
        ], 
        message:  '{VALUE} is not supported'}
    },
    studentStatus:{
        type:String,
        required: true,
	enum: ['Yes', 'No']
    },
    address:{
        type:String,
        maxLength:200,
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    laptopStatus:{
        type:String,
        required: true,
	    enum: 
            {
                values:['Yes', 'No'], message:  '{VALUE} is not supported'
            }
    },
    passport:{
        type:String
    },
},{timestamps:true});   

module.exports = mongoose.model('Student', StudentSchema);
