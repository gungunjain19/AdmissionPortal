const Course = require("../models/course.js");
const mongoose = require("mongoose");
const initData = require("./data.js");

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
    await Course.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();