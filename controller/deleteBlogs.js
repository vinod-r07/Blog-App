const Blog= require("../modals/blog");

const deleteBlog= async(req, res) => {
    try {
        const blog= await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                blog
            }
        })}
        catch(err) {
            res.status(400).json({
                status: "fail",
                message: err
            })
        }
}

module.exports= deleteBlog;