const mongoose = require('mongoose')
const config = require('./config')
const express = require("express")
const { getPost } = require("./controlers/posts")
const cors = require("cors")



mongoose.connect(config.mongoUrl).then(() => {
    console.log("database is conneted")
})
    .catch((err) => {
        console.log(err)
    })





const app = express()

app.use(cors())

app.get('/', getPost)