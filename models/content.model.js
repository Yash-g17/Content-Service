const mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
    Title: {
        type: String
    },
    Story: {
        type: String
    },
    Date_published: {
        type: Date
    },
    User_ID: {
        type: String
    },
    User_interaction: {
        reads: {
            type: Number
        },
        likes: {
            type: Number
        }
    }
})

mongoose.model('Content', contentSchema)