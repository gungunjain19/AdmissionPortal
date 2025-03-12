require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 3006;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const User = require('./models/user.js');
const Course = require('./models/course.js');
const nodemailer = require("nodemailer");
const mailgen = require("mailgen");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname,"public")));

main().then((res)=>{
    console.log("connection to DB succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/davvportal');
}


app.get("/",(req,res) => {
res.send("contacted root path");
});

app.get("/user/register",(req,res) => {
res.render("registration.ejs");
});

const mapping = {
    PCM : ["67cfb10e15ec838750d1cbd0","67cfb10e15ec838750d1cbd1"],
    BEorBtech : ["67cfb10e15ec838750d1cbd1","67cfb10e15ec838750d1cbd2"],
    Psychology : ["67cfb10e15ec838750d1cbd0","67cfb10e15ec838750d1cbd2"]
}

app.post("/user/register", async (req,res) => {
   let {fullName,email,phoneNumber,qualification,subject,preferredCourse} = req.body;
   const newUser = new User({fullName,email,phoneNumber,qualification,subject});
   if(preferredCourse){
     newUser.preferredCourse = preferredCourse;
   }
   await newUser.save();
//    if(preferredCourse){
// const course = await Course.find({name : preferredCourse});
// return res.render("displayCourse.ejs",{course});
//    }
 //starting sending email
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
 let response = {
   body : {
    name : fullName, 
    intro : "Here are the courses you are eligible for",
    table : {
        data : [
            {
               course : subject,
               link : "https://www.dauniv.ac.in/",
            }
        ]
    },
    outro : "Regards, Team DAVV"
   }
 }

 let mail = MailGenerator.generate(response)

  let message = {
    from : process.env.APP_EMAIL,
    to : email,
    subject : "Welcome to DAVV",
    html : mail
  }

 await transporter.sendMail(message).then(() => {
   console.log("email sent") 
 }).catch((err)=> {
    console.log("invalid email" + err)
    })
  //ending sending email
const idArray = mapping[subject];
const allCourses = await Course.find({_id:{$in : idArray}});
return res.render("show.ejs",{allCourses});
});

app.get("/user/:id",(req,res) => {
res.send("brochure display page");
});

app.all( "*", (req,res,next) => {
    next(new ExpressError(404,"Page Not Found!"));
});


//handling custom error 
app.use((err ,req ,res ,next ) => {
    let {statusCode = 500, message = "something went wrong"} = err;
    //res.status(statusCode).send(message);
   // res.render("error.ejs",{message});
   console.log(err);
   res.status(statusCode).render("error.ejs",{message});
});

app.listen(port,()=>{
    console.log("app is listening");
});