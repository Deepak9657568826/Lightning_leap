const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
 
    creatorID: {
        type: String,
    },
    creatorName: {
        type: String,
        required: true
    }
},
    {
        timestamps: true, 
        versionKey: false
    });

const BlogModel = mongoose.model("blogDetails", blogSchema);

module.exports = {
    BlogModel
}

