const dotenv = require("dotenv")
const path = require("path")
const joi = require('joi')
const { model } = require("mongoose")



dotenv.config({ path: path.join(__dirname, "./.env") })



const envSchema = joi.object({
    MONGO_URL: joi.string(),
    PORT: joi.number()
}).unknown()

const { error, value } = envSchema.validate(process.env)

if (error) {
    console.log(error.message)
}

module.exports = {
    mongoUrl: value.MONGO_URL,
    port: value.PORT
}


