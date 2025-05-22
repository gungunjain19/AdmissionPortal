const mongoose = require('mongoose');
const schema = mongoose.Schema;

const hodSchema = new schema({
   name : {
    type : String,
    required : true
   },
    email : {
    type : String,
   },
   phoneNumber : {
    type : Number,
    required : true
   },
  college : {
    type : String,
    required: true
  }
 
});


const Hod = mongoose.model("Hod",hodSchema);
module.exports = Hod;