const mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId
    },
    title: {
        type: String
    },
    story: {
        type: String
    },
    date_published: {
        type: Date
    },
    user_id: {
        type: String
    },
    reads: {
        type: Number
    },
    likes: {
        type: Number
    }
})

mongoose.model('Content', contentSchema)