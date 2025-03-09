require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 3006;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname,"public")));

main().then((res)=>{
    console.log("connection to DB succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/davvportal');
}


app.get("/",(req,res) => {
res.send("contacted root path");
});

app.get("/user/register",(req,res) => {
res.render("registration.ejs");
});

app.post("/user/register",(req,res) => {
    res.send("registered successfully");
});

app.get("/user/:id",(req,res) => {
res.send("brochure display page");
});

app.all( "*", (req,res,next) => {
    next(new ExpressError(404,"Page Not Found!"));
});


//handling custom error 
app.use((err ,req ,res ,next ) => {
    let {statusCode = 500, message = "something went wrong"} = err;
    //res.status(statusCode).send(message);
   // res.render("error.ejs",{message});
   res.status(statusCode).render("error.ejs",{message});
});

app.listen(port,()=>{
    console.log("app is listening");
});