require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 3006;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const userRouter = require("./routes/user.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"public"))); 

main().then((res)=>{
    console.log("connection to DB succesfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/davvportal');
}


app.get("/",(req,res) => {
  res.render("index.ejs");
});

app.use("/user",userRouter);

app.all( "*", (req,res,next) => {
    next(new ExpressError(404,"Page Not Found!"));
});


//handling custom error 
app.use((err ,req ,res ,next ) => {
    let {statusCode = 500, message = "something went wrong"} = err;
   console.log(err);
   res.status(statusCode).render("error.ejs",{message});
});

app.listen(port,()=>{
    console.log("app is listening on port " + port);
});