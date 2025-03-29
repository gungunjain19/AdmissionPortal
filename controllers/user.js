const User = require("../models/user.js");
const Course = require("../models/course.js");


module.exports.renderRegisterPage =  (req,res) => {
    res.render("registrationNew.ejs");
}

module.exports.register = async (req,res) => {
    try{
        let {name,email,phoneNumber,qualification,subject,preferredCourse} = req.body;
        const newUser = new User({name,email,phoneNumber,qualification,subject,preferredCourse});
        await newUser.save();
      
      let allCourses = await Course.find( { name : {$in : preferredCourse}});
      return res.render("show.ejs",{allCourses});
    }
   catch(err){
    console.log(err);
   }
}

module.exports.display = async (req,res) => {
    try{
        let {id} = req.params;
        let course = await Course.findById(id);
        res.render("displayCourse.ejs",{course});
    }
    catch(err){
        console.log(err);
    }
}