const express=require('express');
const mongoose=require('mongoose');
const Bcryptjs=require('bcryptjs');
const config=require('config');
const jwt=require('jsonwebtoken');
const done=require('../middleware/sendMail')
const _=require('lodash');
const router=express.Router();
const {formSchema,FormClass,validateInputForm}=require('../api/formSchemafile');

router.get('/',async(req,res)=>{
    const formSchema=await FormClass.find().select('-password');
    return res.send(formSchema);
});

router.post('/',async(req,res)=>{
    const value=false;
const {error}=validateInputForm(req.body);
if(error)return res.status(400).send('Please send valid information');
const formSchema=new FormClass({
input:req.body.input,
email:req.body.email,
password:req.body.password,
select:req.body.select,
radio:req.body.radio,
checkbox:req.body.checkbox
});
const salt=await Bcryptjs.genSalt(10);
formSchema.password=await Bcryptjs.hash( formSchema.password,salt);
const token=jwt.sign({_id:formSchema._id,email:formSchema.email},config.get('dynamicform'));
const tokenresult=done(token);
formSchema.token=token;
const result=await formSchema.save();
if(tokenresult){
    return res.header('x-auth-validation',token).send(_.pick(result,['_id','input','email']));
}
else{
    return res.send(`Can't able to send email at ${req.body.email}....`)
}

});

module.exports=router;