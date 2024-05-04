// import the blog modal
const Blog= require("../modals/blog");

exports.createBlog = async(req, res) => {
    try {
        // fetch the details from the body
        const {title, description, image, author} = req.body;

        //create new Blog
        const newBlog = new Blog({
            title,
            description,
            image,
            author
        });

        // save the blog
        const blog = await newBlog.save();

        // send the json responce
        res.status(200).json({
            status: "success",
            blog
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "failed",
            error: error.message,
            data: "Internal server error"
        })
    }
}
