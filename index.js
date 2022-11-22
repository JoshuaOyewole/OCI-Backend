const express = require('express');
const app = express();
const dbConnect = require("./util/dbConect");
const dotenv = require("dotenv");
const cookieParser= require("cookie-parser");
const cors= require("cors");
dotenv.config();
var nodemailer = require('nodemailer');

//ROUTES IMPORTATION
const studentRoute= require("./routes/student/index");
const courseRoute= require("./routes/course/index");
const loginRoute= require("./routes/auth/login");
const logoutRoute= require("./routes/auth/logout");
const registerRoute= require("./routes/auth/register");
const certificate = require("./routes/certificate/index");
//const adminRoute= require("./routes/admin/index");
//const curriculumRoute= require("./routes/curriculum/index");
const assignmentRoute= require("./routes/assignment/index");

const PORT = 5000 || process.env.PORT ;

//DB INITIALIZATION
dbConnect();

//Middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

//ROUTES
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/logout", logoutRoute);

app.use("/dashboard", ((req, res)=>{
  res.send('Logout successfully!')
}));
app.use("/api/student", studentRoute);
app.use("/api/course", courseRoute);
app.use("/certificate", certificate);
//app.use("/api/cirriculum", curriculumRoute);
app.use("/api/assignment", assignmentRoute);



//ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  const errorCode = err.status || 500;
  const errorMessage = err.message || "Error Occured!";
  return res.status(errorCode).json({
    success: false,
    message: errorMessage,
    code: errorCode,
    stack: err.stack
  })
})


app.listen(PORT, ()=>{
    console.log(`server connected on PORT 5000`);
})

