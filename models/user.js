// LISTING WILL INCLUDE : TITLE, DESCRIPTION, IMAGE, PRICE, LOCATION, COUNTRY

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
   fullName : {
    type : String,
    required : true
   },
    email : {
    type : String,
    required : true
   },
   phoneNumber : {
    type : Number,
    required : true
   },
   qualification : {
    type : String,
    enum : ["10+2","Undergraduate","Postgraduate"],
    required : true
   },
   subject : {
    type : String,
    required : true
   },
  preferredCourse : {
    type : String,
    required : true
  }
 
});


const User = mongoose.model("User",userSchema);
module.exports = User;