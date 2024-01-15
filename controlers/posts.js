const posts = require("../models/post")
const axios = require("axios");

const scrabData = async (pageNumber) => {
    try {


        const response = await axios.get(
            `https://api.unsplash.com/photos/?page=${pageNumber}&client_id=8yVRkJgY7djhIKerz9JEM5hVFLqEItFK8hRvsqdD9EY`
        )
        // .then((res) => console.log(res.data.length))
        // console.log(response.data.length)
        const data = response.data
        const formattedData = data.map((item) => {
            return {
                username: item.user.username,
                time: '2 d',
                userImg: item.user.profile_image.small,
                postMedia: item.urls.full,
                likes: item.likes,
                comments: 120,
                caption: item.description,
                location: 'New York'
            };
        });

        posts.insertMany(formattedData).then(console.log("data hasbeen inserted"))
        return formattedData
    } catch (err) {

        console.log("error is captured")

    }



}

const getPost = async (req, res) => {
    const pageLimt = 10
    const skip = (req.query.pageNumber - 1) * pageLimt
    var results = await posts.find().skip(skip).limit(pageLimt)
    console.log(results.length)
    if (!results.length) {
        results = await scrabData(req.query.pageNumber + 1)

    }
    res.send(results)
}



module.exports = {
    getPost
}