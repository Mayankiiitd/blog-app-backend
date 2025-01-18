const express  = require("express");
const router = express.Router();

//import controller
const {dummyLike, likePost, unlikePost} = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");



//Mapping creating
router.get("/dummyroute", dummyLike);

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);



//export router
module.exports = router;