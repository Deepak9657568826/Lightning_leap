
const express =require("express");
const { addblog, getAllBlog, updateblog, deleteblog, getindividualBlog } = require("../controller/blog.controller");
const { authMiddleware } = require("../middleware/auth.middleware");
const { upload } = require("../middleware/multer");

const blogRouter = express.Router();




blogRouter.post("/blog", authMiddleware, upload.single("avatar"),  addblog)


blogRouter.get("/blog",  authMiddleware, getAllBlog)

blogRouter.get("/individualblog",  authMiddleware, getindividualBlog )

blogRouter.put("/blog/:id",  authMiddleware, updateblog)

blogRouter.delete("/blog/:id",  authMiddleware, deleteblog)


module.exports = {
    blogRouter
}



