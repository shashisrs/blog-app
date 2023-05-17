const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const savedPost = await post.save();
    res.status(200).json({
      post: savedPost,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("likes").populate("comments").exec();
    res.status(200).json({
      posts: posts,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
