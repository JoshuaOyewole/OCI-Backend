const express = require('express');
const router = express.Router();
const {logout } = require("../../controllers/auth");

//LOGOUT STUDENT
router.get('/',  logout)
  

module.exports = router;