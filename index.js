const mongoose = require('mongoose')
const config = require('./config')
const express = require("express")
const { getPost } = require("./controlers/posts")
const cors = require("cors")
const app = require("./app")



mongoose.connect(config.mongoUrl).then(() => {
    console.log("database is conneted")
    app.listen(config.port, () => console.log("App is listening in port " + config.port))
})
    .catch((err) => {
        console.log(err)
    })