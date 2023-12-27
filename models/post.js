const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
    },
    userImg: {
        type: String,
        require: true,
    },
    postMedia: {
        type: String,
        require: true,
    },
    comments: {
        type: Number,
        default: 0,
    },
    likes: {
        type: Number,
        default: 0,
    },
    caption: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    }

}, { timestamps: true })


const Posts = mongoose.model('Posts', postSchema)

module.exports = Posts