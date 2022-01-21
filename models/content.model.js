const mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
    id: {
        type: String
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