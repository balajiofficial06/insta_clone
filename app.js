const express = require("express")
const { getPost } = require("./controlers/posts")
const cors = require("cors")




const app = express()

app.use(cors())

app.get('/', getPost)

module.exports = app