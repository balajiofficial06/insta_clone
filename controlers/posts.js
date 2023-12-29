const posts = require("../models/post")

const getPost = async (req, res) => {
    const pageLimt = 10
    const skip = (req.params.pageNumer - 1) * pageLimt
    const results = await posts.find().skip(skip).limit(pageLimt)
    res.send(results)
}



module.exports = {
    getPost
}