const express = require("express");
const router = express.Router({mergeParams : true});
const userController = require("../controllers/user.js");


router.get("/register",userController.renderRegisterPage);
       
router.post("/register",userController.register);
    
router.get("/course/:id", userController.display);

router.get("/email/:id",userController.emailDisplay);

router.get("/course",userController.displayAllCourses);

module.exports = router;
