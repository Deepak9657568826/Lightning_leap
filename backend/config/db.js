
const mongoose =require("mongoose")

require('dotenv').config()


const connection_To_DB  = mongoose.connect(process.env.monngodb_URL)

module.exports ={
    connection_To_DB
}