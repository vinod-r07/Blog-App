const mongoose= require("mongoose");

const commentSchema= new mongoose.Schema( {
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    users: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

module.exports= mongoose.model("Comment", commentSchema);