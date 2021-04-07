const mongoose=require('mongoose');
const Joi=require('joi');
const { boolean } = require('joi');

const formSchema=new mongoose.Schema({
input:{
    type:Array,

    require:true
},
email:{
    type:String,
   require:true
},
password:{
type:String,
max:30,
min:10
},
select:{
    type:String,
    require:true
},
radio:{
    type:Boolean,
    require:true
},
checkBox:{
    type:Boolean,
    require:true
},
token:String
});

const FormClass=mongoose.model('FormClass',formSchema);

function validateInputForm({email,password}){
    const schema=Joi.object({

        email:Joi.string().max(100).required().email(),
        password:Joi.string().min(10).max(30).required()
    });
    return schema.validate({email,password});
}


module.exports={formSchema,FormClass,validateInputForm};