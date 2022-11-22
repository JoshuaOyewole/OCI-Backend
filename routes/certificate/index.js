const express = require("express");
const { addCertificate, verifyCertificate } = require("../../controllers/certificate");
const {verifyAdmin } = require("../../util/verifyToken");
const router = express.Router();

router.post('/', verifyAdmin, addCertificate).post('/verify', verifyCertificate)


module.exports = router;



