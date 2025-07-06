const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    roll_no:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        enum:['It','Cs','Entc'],
        required:true
    },
    phone_no:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const Form = mongoose.model('Form',formSchema);
module.exports = Form;