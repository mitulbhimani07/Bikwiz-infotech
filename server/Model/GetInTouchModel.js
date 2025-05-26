const mongoose = require('mongoose');

var ContactSchema=new mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
})

module.exports=mongoose.model('Contact',ContactSchema);