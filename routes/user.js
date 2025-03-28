const express = require("express");
const router = express.Router({mergeParams : true});
const {emailSending} = require("../middleware.js");
const userController = require("../controllers/user.js");


router.get("/register",userController.renderRegisterPage);
       
router.post("/register", emailSending,userController.register);
    
router.get("/course/:id", userController.display);

module.exports = router;
