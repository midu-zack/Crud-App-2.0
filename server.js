require('dotenv').config();
const express = require("express")
const mongoose = require('mongoose')
const app = express()
 
const PORT = process.env.PORT || 3000


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
 
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));


app.get('/',(req,res)=>{
    res.send("hellooo cording am back ")
})

app.listen(PORT, ()=>{
    console.log(`server running port ${PORT}`);
    
})