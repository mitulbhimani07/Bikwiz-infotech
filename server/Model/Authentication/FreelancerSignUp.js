const mongoose = require('mongoose');
const { Schema } = mongoose;
const FreelancerSignUpSchema = new Schema({
    freelancerName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    freelancerEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    freelancerPassword: {
        type: String,
        required: true,
        trim: true,
    },
    freelancerCountry: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model('FreelancerSignUp', FreelancerSignUpSchema);
// This code defines a Mongoose schema for a Freelancer sign-up model in a Node.js application.