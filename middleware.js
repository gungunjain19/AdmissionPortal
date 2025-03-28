const nodemailer = require("nodemailer");
const mailgen = require("mailgen");

module.exports.emailSending = async (req,res,next) => {
    try{
        let config = {
            service : "gmail",
            secure : true,
            port : 465,
            auth : {
                user : process.env.APP_EMAIL,
                pass : process.env.APP_PASSWORD
            }
          }
          const transporter = nodemailer.createTransport(config);
          let MailGenerator = new mailgen({
            theme : "default",
            product : {
                name : "mailgen",
                link : 'https://mailgen.js/'
            }
          })
         let response = {
           body : {
            name : req.body.name, 
            intro : "Here's a list of brochure for your preferred courses",
            action: {
                instructions: 'To view the brochures, please click here:',
                button: {
                    color: '#22BC66', 
                    text: 'View brochures',
                    link: 'https://ietdavv.edu.in/index.php/academics/syllabus'
                }
            },
            outro : "Best Regards, Team DAVV"
           }
         }
    
         let mail = MailGenerator.generate(response)
    
          let message = {
            from : process.env.APP_EMAIL,
            to : req.body.email,
            subject : "Welcome to Devi Ahilya Vishwa Vidyalaya",
            html : mail
          }
    
         await transporter.sendMail(message).then(() => {
           console.log("email sent");
         }).catch(()=> {
           
            console.log("invalid email")
            // next(new ExpressError(404,"Enter a valid Email"));
            })
          next();
    }
    catch(err){
        console.log(err);
        next();
    }
   
}