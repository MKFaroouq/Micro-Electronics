const express = require("express");


const router = express.Router();

const {registrer,login} = require("../controllers/authController");

router.post("/register",registrer);

router.post("/login",login);

module.exports = router