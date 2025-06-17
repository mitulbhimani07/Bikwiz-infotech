const mongoose = require('mongoose');

const eventCategory=new mongoose.Schema({
    CategoryName:{
        type:String
    },
    color:{
        type:String
    }
}, { timestamps: true })

module.exports = mongoose.model('EventCategory', eventCategory);