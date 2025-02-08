const mongoose = require('mongoose')

const userScheema = new mongoose.Schema({
    name : {type :string , require:true},
    email: {type:string , require:true , unique:true},
    age : {type:Number ,require: true }
})


const User = userScheema.model('User',userScheema);
module.exports = User;