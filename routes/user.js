const express = require("express");
const router = express.Router({mergeParams : true});

const userController = require("../controllers/user.js");


router.get("/register",userController.renderRegisterPage);
       
router.post("/register", userController.register);
    
router.get("/course/:id", userController.display);

module.exports = router;
