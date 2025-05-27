const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema=new Schema({
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
}, {
    timestamps: true,
})

module.exports=mongoose.model('Contact',ContactSchema);