const express= require("express");
const router= express.Router();

// import controller
const {createBlog} =  require("../controller/createBlog");
const {getAllBlogs} = require("../controller/getBlogs");
const {getBlogById}=  require("../controller/getBlogs");
const {like}=         require("../controller/likeController");
const {dislike}=      require("../controller/likeController");
const deleteBlog =    require("../controller/deleteBlogs");
const { postComment}= require("../controller/commentsController");

// blog -> create, get, delete & update
router.post("/createBlog", createBlog);
router.get("/blogs",getAllBlogs);
router.get("/blogs/:id", getBlogById);
router.delete("/blogs/delete/:id", deleteBlog);

// like & dislike
router.post("/blogs/like", like);
router.delete("/blogs/dislike", dislike);

// comment
router.post("/blogs/create-comment", postComment);

module.exports = router;
