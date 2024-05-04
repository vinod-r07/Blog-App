const mongoose= require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required: true,
        },
        postedDate: {
            type: Date,
            default: Date.now()
        },
        author:{
            type: String,
            required: true,
        },
        tags:[
            {
            type: String,
        }
        ],
        likes:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Like",
        }],

        comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }]
    }
);

module.exports = mongoose.model("Blog", blogSchema);