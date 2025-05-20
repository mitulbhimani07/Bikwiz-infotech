const mongoose = require('mongoose');
const { Schema } = mongoose;

const freelancerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
     fname: {
        type: String,
        required: true,
        // trim: true,
    },
    lname: {
        type: String,
        required: true,
        // trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        enum: ['client', 'admin', 'freelancer'],
        default: 'freelancer'
    },
    country: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('freelancer', freelancerSchema);