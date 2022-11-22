const Certificate = require('../models/certificate');
const student = require('../models/student');

/* ADD CERTIFICATE */
const addCertificate = async (req, res, next) => {
  try {
    const newCertificate = req.body;

    /* CHECK IF THE STUDENT HAS BEEN REGISTERED BEFORE */
    const checkStudentInfo = await Certificate.findOne({ studentID: req.body.studentID });

    if (checkStudentInfo) {
      return res.status(400).json({
        "success": false,
        "status": 401,
        "message": `Student already registered!`
      });
    }

    const certificate = await Certificate.create(newCertificate);
    res.status(200).json({
      "success": true,
      "status": 200,
      "message": `Certificate registered successfully!`
    });
  }

  catch (err) {
    next(createError(400, `An Error occured! Try Again`));
  }
};

/* VERIFY CERTIFICATE */

const verifyCertificate = async (req, res, next) => {
  const id = req.body.certificateID;

  if (id == null | undefined) {
    return res.status(404).json("Kindly input the student Certificate ID");
  }

  try {
    const getCertificate = await Certificate.findOne({ certificateID: id });
    if(getCertificate){
      const getStudent = await student.findById(getCertificate.studentID);

      return res.status(200).json(
        {
          "success": true,
          "status": 200,
          "message": `${getStudent.firstname} ${getStudent.lastname} certificate with ID ${id} is valid`
      });
    }
    return res.status(400).json("Certificate not found");
   
  }
  catch (err) {
    next(err);
  }
}

module.exports = { addCertificate, verifyCertificate }