const User = require("../models/user.js");
const Course = require("../models/course.js");
const nodemailer = require("nodemailer");
const mailgen = require("mailgen");

module.exports.renderRegisterPage =  (req,res) => {
    res.render("registrationNew.ejs");
}

module.exports.register = async (req,res) => {
    try{
        let {name,email,phoneNumber,qualification,subject,preferredCourse} = req.body;
        if(!name || !email || !phoneNumber || !qualification || !preferredCourse || !subject){
          return res.status(400).json({
            message : "Something is missing",
            success : false
        });
      }
        const newUser = new User({name,email,phoneNumber,qualification,subject,preferredCourse});
        await newUser.save();

      // start sending email
      let config = {
        service : "gmail",
        secure : true,
        port : 465,
        auth : {
            user : process.env.APP_EMAIL,
            pass : process.env.APP_PASSWORD
        }
      }

      const transporter = nodemailer.createTransport(config);
      let MailGenerator = new mailgen({
        theme : "default",
        product : {
            name : "mailgen",
            link : 'https://mailgen.js/'
        }
      })

     let linkForEmail = process.env.EMAIL_LINK + '/user/email/' + newUser._id;

     let response = {
       body : {
        signature : "Best Regards, Team DAVV",
        name : req.body.name, 
        intro : "Here's a list of brochure for your preferred courses",
        action: {
            instructions: 'To view the brochures, please click here:',
            button: {
                color: '#22BC66', 
                text: 'View brochures',
                link: linkForEmail
            }
        },
      
       }
     }

     let mail = MailGenerator.generate(response)

      let message = {
        from : process.env.APP_EMAIL,
        to : req.body.email,
        subject : "Welcome to Devi Ahilya Vishwa Vidyalaya",
        html : mail
      }
 let isSent = true;
     await transporter.sendMail(message).then(() => {
      console.log("email has been sent");
     }).catch((err)=> {
       isSent = false;
        console.log("invalid email")
        console.log(err);
        // next(new ExpressError(404,"Enter a valid Email"));
        })
        // end sending email
      let allCourses = await Course.find( { name : {$in : preferredCourse}});
      
      return res.render("show.ejs",{allCourses,isSent});
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

module.exports.emailDisplay = async (req,res) => {
    try{
      let {id} = req.params;
      const requestedUser = await User.findById(id);
      let allCourses = await Course.find( { name : {$in : requestedUser.preferredCourse}});
      let username = requestedUser.name;
      res.render("emailDisplay.ejs",{allCourses,username});
    }
    catch(err){
        console.log(err);    }
}

module.exports.displayAllCourses = async (req,res) => {
  try{
const allCourses = await Course.find({});
res.render("allCourse.ejs",{allCourses});
  }
  catch(err){
    console.log(err);
  }
}