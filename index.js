const mongoose = require('mongoose')
const config = require('./config')
const app = require("./app")


app.listen(config.port, () => {
    mongoose.connect(config.mongoUrl).then(() => {
        console.log("database is conneted")
    })
        .catch((err) => {
            console.log(err)
        })
    console.log("sever is runing")
})