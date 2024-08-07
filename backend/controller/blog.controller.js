const { BlogModel } = require("../model/blog.model");




const addBlog = async (req, res) => {
    const { title, content } = req.body;
    const profilePhoto = req.file.filename;
    try {
        const blog = new BlogModel({
            title,
            profilePhoto,
            content
        });
        await blog.save();
        res.status(200).json({ message: "New blog added" });
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
};

const getAllBlog = async (req, res) => {
    try {
        const allBlog = await BlogModel.find({});
        const length = allBlog.length;
        res.status(200).json({ message: "Details of all blog", size: length, allBlog });
    } catch (error) {
        res.status(500).json({ Error: error.message });
    }
};


const updateblog = async (req, res) => {
    const payload = req.body;
    const { id } = req.params

    try {

        const blog1 = await BlogModel.findOne({ _id: id })


        if (req.body.creatorID == blog1.creatorID) {

            const blog = await BlogModel.findByIdAndUpdate({ _id: id }, payload)
            res.status(200).json({ "message": "Blog updated successfull" })
        }
        else {
            res.status(200).json({ "message": "You are not authorized to update post" })
        }
    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }
}

const getindividualBlog = async (req, res) => {
    try {
        const blog = await BlogModel.find({ creatorID: req.body.creatorID })
        res.status(200).json({ "message": "indivudual blog details", blog })

    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }
}




const deleteblog = async (req, res) => {
    const { id } = req.params
    try {
        // if(req.body.creatorID == "")
        const blog1 = await BlogModel.findOne({ _id: id })

        if (req.body.creatorID == blog1.creatorID) {

            const blog = await BlogModel.findByIdAndDelete({ _id: id })
            res.status(200).json({ "message": "Blog deleted successfull" })
        }
        else {
            res.status(200).json({ "message": "You are not authorized to delete post" })
        }
    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }
}

module.exports = {
    addBlog,
    getAllBlog,
    updateblog,
    deleteblog,
    getindividualBlog
}