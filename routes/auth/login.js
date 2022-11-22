const express = require('express');
const router = express.Router();
const {login } = require("../../controllers/auth");

//LOGIN STUDENT
router.post('/',  login)
  

module.exports = router;