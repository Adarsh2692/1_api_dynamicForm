const nodemailer=require('nodemailer');
const {formSchema,FormClass,validateInputForm}=require('../api/formSchemafile');

function done(tokenVal) {
    var token=tokenVal;
}


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'earthh17@gmail.com',
      pass: '11££@++&##'
    }
  });
 
  var mailOptions = {
    from: 'earthh17@gmail.com',
    to: '1032180162@tcetmumbai.in',
    subject: 'This is your token for access the form',
    text:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjY2RhMGFmZTk4ZTM4MzBkODQ4YTQiLCJlbWFpbCI6ImR1cmdlc2gudGl3MzQzNUBnbWFpbC5jb20iLCJpYXQiOjE2MTc3NDMyNjR9.wgmnYs-oC7HbZn89dkpYGhD5QwLLxOp2pfB9K8JETsQ`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      return true;
    }
  });

  module.exports=done;
