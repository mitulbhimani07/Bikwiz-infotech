const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    img: {
        type: [String], // array of image names
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    title: {
        type: String,
    },
    profileImg: {
        type: String
    },
    bloggerName: {
        type: String,
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
    }
});

module.exports = mongoose.model('Blog', blogSchema);