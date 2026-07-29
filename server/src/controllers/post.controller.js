import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {

    const { caption } = req.body;

    if (!caption || caption.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Post caption is required",
      });
    }

    const newPost = await Post.create({
      author: req.user._id,
      text: caption,
    });

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      post: newPost,
    });

  } catch(error){
    console.error(error);
    res.status(500).json({
        success:false,
        message:error.message
    });
}
};

// Get All Posts
export const getPosts = async (req, res) => {
  try {

    const posts = await Post.find()
      .populate("author", "fullName username avatar")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      posts,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};