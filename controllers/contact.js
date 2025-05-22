const Member = require("../models/member.js");
const Hod = require("../models/hod.js");

module.exports.displayHOD =  async (req,res) => {
    try{
 const allHod = await Hod.find({});
    res.render("displayHod.ejs",{allHod});
    }
   catch(err){
    console.log(err);
   }
}

module.exports.displayAdmCommitee = async (req,res) => {
    try{
 const allMembers = await Member.find({});
    res.render("displayAdm.ejs", {allMembers});
    }
   catch(err){
    console.log(err);
   }
}

