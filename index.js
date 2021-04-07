const mongoose=require('mongoose');
const express=require('express');
const form=require('./router/formRouter');
const app=express();
app.use(express.json());
mongoose.connect('mongodb://localhost/forminformation',{ useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>console.log('connnection is establish.....'))
.catch(err=>console.log(`pls check your connection again.......${err}`));

app.use('/api/form',form);

const port=process.env.port||3000;
app.listen(port,()=>console.log(`listen on port ${port}`))


