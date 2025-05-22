const Member = require("../models/member.js");
const Hod = require("../models/hod.js");

module.exports.displayHOD =  async (req,res) => {
    const allHod = await Hod.find({});
    res.render("displayHod.ejs",{allHod});
}

module.exports.displayAdmCommitee = async (req,res) => {
    const allMembers = await Member.find({});
    res.render("displayAdm.ejs", {allMembers});
}