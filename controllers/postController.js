const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try{
        //fetch data from request's body
        const {title, body} = req.body;

        //create a post object
        const post = new Post({
            title, body,
        });

        //save the new post into the database
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        });

    }
    catch(err){
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
}


exports.getAllPosts = async (req, res) => {
    try{
        //fetch all posts from the database
        const posts = await Post.find()
            .populate("comments")
            .exec();

        res.json({
            posts,
        });

    }
    catch(err){
        return res.status(400).json({
            error: "Error while fetching posts",
        });
    }
}