const mongoose = require('mongoose');
const { Schema } = mongoose;
const clientSignUpSchema = new Schema({
    clientName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    clientEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    clientPassword: {
        type: String,
        required: true,
        trim: true,
    },
    clientCountry: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
module.exports = mongoose.model('ClientSignUp', clientSignUpSchema);