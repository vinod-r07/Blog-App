const Blog= require("../modals/blog");
const Like= require("../modals/like");

exports.like= async(req, res) => {
      
      // fetching blog which is goin to be like and who is going to like
      const {blog, users} = req.body;

     try {
           // updating the blog likes
      const newLike= new Like({
        blog,
         users
      });

      const saveLiked= await newLike.save();

      // find the blog and update them
      const blogLiked= await Blog.findByIdAndUpdate(blog, {$push: {likes: saveLiked._id}}, {new: true})
                      .populate("likes")
                      .exec();

      res.status(200).json({
        status: "success",
        messsage: "Liked Blog",
       saveLiked
      })

     } catch (error) {

      res.status(500).json()
     }
}

exports.dislike= async(req, res) => {

    try {
           
    // flow
    // 1. delete the like object from Like Modal
    // 2. delete the like reference from blog modal

    const {blog, like} = req.body;

    // Like object deleted
    const disLike= await Like.findByIdAndDelete( like );

    const refDelete= await Blog.findByIdAndUpdate(blog, {$pull: {likes: like}}, {new: true} )
                    .populate("likes")
                    .exec();

    res.status(200).json({
      status: "success",
      message: "Disliked Blog",
      refDelete
    })

    } catch (error) {
      
      res.status(500).json({staus: "failed", message: "Something went wrong", error})

    }
}
