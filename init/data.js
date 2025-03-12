const Course = require("../models/course.js");
const mongoose = require("mongoose");

let sampleData = [{
    name : "M.A. (Yoga)",
    college : "School of Yoga",
    seats : 50,
    girlFee : [59832],
    boyFee : [60644],
    description : "MA Yoga is a two-year postgraduate course that focuses on understanding several areas of Yoga which prepares students to practice yoga therapy and helps those with psychosomatic problems",
    eligibility : "Graduate Degree in any subject with 45% marks with one year Yoga Diploma"
},{
    name : "B.Sc. (Hons. Physics)",
    college : "School of Physics",
    seats : 40,
    girlFee : [21422],
    boyFee : [21630],
    description : "BSc Physics Honours is a 3-years undergraduate course which is pursued by students who are interested in an in-depth knowledge of the principles of Physics and its practical application & theories.",
    eligibility : "10+2 with Mathematics as a subject with at least 50% marks in aggregate."
},{
    name : "M.A.in Economics ",
    college : "School of Economics",
    seats : 60,
    girlFee : [7976],
    boyFee : [8156],
    description : "MA Economics is a 2-year postgraduate degree that encompasses a detailed study of the nuances of economic development and various branches of economics.",
    eligibility : "Graduation in any stream with 50 % marks."
},];

main().then((res)=>{
    console.log("connection to DB succesfull");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/davvportal');
}

//deleting already existing data
//adding our new sampledata
const initDB = async ()=>{
    await Course.deleteMany({});
    await Course.insertMany(sampleData);
    console.log("data was initialized");
}

initDB();
//67cfb10e15ec838750d1cbd0
//67cfb10e15ec838750d1cbd1
//67cfb10e15ec838750d1cbd2