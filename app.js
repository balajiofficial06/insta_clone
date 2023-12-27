const express = require("express")
const { getPost } = require("./controlers/posts")


const app = express()

app.get('/', getPost)

module.exports = app