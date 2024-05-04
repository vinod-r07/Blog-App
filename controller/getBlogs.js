const Blog= require("../modals/blog");

exports.getAllBlogs = async(req, res) => {
    try {
        const blogs = await Blog.find({}).sort({postedDate: -1}).populate("likes").populate("comments").exec();
        res.status(200).json(blogs);
        } catch (error) {
        res.status(500).json({
            message: error,
            data: "Oops, something went wrong"
        });
    }
}   

exports.getBlogById= async(req, res) => {
    const id= req.params.id;
    try{
        const blog= await Blog.findById(id);
        res.status(200).json({
            status: "success",
            data: blog
        });
    } catch (error) {
        res.status(500).json({
            message: error,
            data: "Oops, something went wrong"
        })
    }
}



