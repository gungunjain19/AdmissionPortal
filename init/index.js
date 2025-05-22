const Course = require("../models/course.js");
const Member = require("../models/member.js");
const Hod = require("../models/hod.js");
const mongoose = require("mongoose");
const initData = require("./data.js");
const hodData = require("./dataHod.js");
const memberData = require("./dataMember.js");

main().then((res)=>{
  console.log("connection to DB succesfull");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_LINK);
}

//deleting already existing data
//adding our new sampledata
const initDB = async ()=>{

    await Course.deleteMany({});
    await Member.deleteMany({});
    await Hod.deleteMany({});

    await Course.insertMany(initData.data);
    await Member.insertMany(memberData.data);
    await Hod.insertMany(hodData.data);
    
    console.log("data was initialized");
}

initDB();