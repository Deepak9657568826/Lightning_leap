
const express =require("express");
const {  getAllBlog, updateblog, deleteblog, getindividualBlog, addBlog } = require("../controller/blog.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const { upload } = require("../middleware/multer");

const blogRouter = express.Router();




blogRouter.post("/blog", authMiddleware, upload.single("avatar"),  addBlog)

blogRouter.get("/blog",  authMiddleware, getAllBlog)

blogRouter.get("/individualblog",  authMiddleware, getindividualBlog )

blogRouter.put("/blog/:id",  authMiddleware, updateblog)

blogRouter.delete("/blog/:id",  authMiddleware, deleteblog)


module.exports = {
    blogRouter
}



