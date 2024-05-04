// import modals
const comment= require("../modals/comments");
const Blog= require("../modals/blog");

// controller
exports.postComment= async(req, res) => {

    try {
        // fetch the comment
        const { blog, users, message} = req.body;

        // create a new comment
        const newComment = new comment({
            blog,
            users,
            message
        });

        // save the comment
        const savedComment = await newComment.save();

        // find the post and push the comment id in that Blog
        const updatedBlog= await Blog.findByIdAndUpdate(blog, {$push: {comments: savedComment._id}}, {new: true})
                            .populate("comments")  // return the actual comments instead of id's
                            .exec();

        // send the response

        res.status(200).json({status:"success",updatedBlog});

    } catch (error) {
        res.status(500).json({status: "failed", error})
    }
}

