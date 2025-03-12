// LISTING WILL INCLUDE : TITLE, DESCRIPTION, IMAGE, PRICE, LOCATION, COUNTRY

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const courseSchema = new schema({
   name : {
    type : String,
    required : true
   },
    college : {
    type : String,
    required : true
   },
   seats : {
    type : Number,
    required : true
   },
   girlFee : [{
    type : Number,
    required : true
   }],
   boyFee : [{
    type : Number,
    required : true
   }],
   description : {
    type : String,
    required : true
   },
  eligibility : {
    type : String,
    required : true
  }
 
});


const Course = mongoose.model("Course",courseSchema);
module.exports = Course;