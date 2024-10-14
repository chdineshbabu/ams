const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const bodyparser = require('body-parser')
const app = express()
app.use(cors());
dotEnv.config()
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected Mongo successfully')
}).catch((error)=>{
    console.log(error)  
}) 

app.post('/login',(req,res)=>{
    const { email, password, userType } = req.body;
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('User Type:', userType);
    res.json({ success: true, message: 'Login successful' });
})
app.listen(3001, ()=>{
    console.log('Running on post 3001')
})