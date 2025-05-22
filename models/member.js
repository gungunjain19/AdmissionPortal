

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const memberSchema = new schema({
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
   title: {
     type : String,
    required : true
   },
  post : {
    type : String,
    required : true
},
college : {
    type : String
} }
);


const Member = mongoose.model("Member",memberSchema);
module.exports = Member;