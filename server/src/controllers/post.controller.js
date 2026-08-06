import Post from "../models/Post.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const createPost = async (req, res) => {
  try {

    const { text } = req.body;

    let image = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "socialfeed/posts",
      });

      image = result.secure_url;

      fs.unlinkSync(req.file.path);
    }

    // Reject only if BOTH are missing
    if ((!text || text.trim() === "") && !image) {
      return res.status(400).json({
        success: false,
        message: "Please add text or an image",
      });
    }

    const newPost = await Post.create({
      author: req.user._id,
      text: text || "",
      image,
    });

    const populatedPost = await Post.findById(newPost._id)
      .populate("author", "fullName username avatar");

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      post: populatedPost,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// Get All Posts
export const getPosts = async (req, res) => {
  try {

    const posts = await Post.find()
      .populate("author", "fullName username avatar")
      .populate("comments.user", "fullName username avatar")
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

// Like / Unlike Post
export const toggleLike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const userId = req.user._id.toString();

    const alreadyLiked = post.likes.some(
      (id) => id.toString() === userId
    );

    if (alreadyLiked) {
      post.likes = post.likes.filter(
        (id) => id.toString() !== userId
      );
    } else {
      post.likes.push(req.user._id);
    }

    await post.save();

    res.json({
      success: true,
      likes: post.likes.length,
      liked: !alreadyLiked,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Add Comment
export const addComment = async (req, res) => {
  try {

    const { text } = req.body;

    let image = "";

    if (req.file) {

      image = `/uploads/${req.file.filename}`;

    }

    if (!text || text.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Comment cannot be empty",
      });
    }

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    post.comments.push({
      user: req.user._id,
      text,
    });

    await post.save();

    const updatedPost = await Post.findById(post._id)
      .populate("author", "fullName username avatar")
      .populate("comments.user", "fullName username avatar");

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      post: updatedPost,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// Delete Post
export const deletePost = async (req, res) => {
  try {

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    // Only author can delete
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this post",
      });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// Update Post
export const updatePost = async (req, res) => {

  try {

    const { text } = req.body;

    if ((!text || text.trim() === "") && !req.file) {
      return res.status(400).json({
        success: false,
        message: "Please add some text or an image",
      });
    }

    const post = await Post.findById(req.params.id);

    if (!post) {

      return res.status(404).json({
        success: false,
        message: "Post not found",
      });

    }

    // Only author can edit
    if (post.author.toString() !== req.user._id.toString()) {

      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });

    }

    post.text = text;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "socialfeed/posts",
      });

      post.image = result.secure_url;

      fs.unlinkSync(req.file.path);
    }

    await post.save();

    const updatedPost = await Post.findById(post._id)
      .populate("author", "fullName username avatar")
      .populate("comments.user", "fullName username avatar");

    res.status(200).json({

      success: true,
      message: "Post updated successfully",

      post: updatedPost,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};

export const deleteComment = async (req, res) => {

  try {

    const { postId, commentId } = req.params;

    const post = await Post.findById(postId);

    if (!post) {

      return res.status(404).json({
        success: false,
        message: "Post not found",
      });

    }

    const comment = post.comments.id(commentId);

    if (!comment) {

      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });

    }

    // Only the comment owner can delete it

    if (
      comment.user.toString() !==
      req.user._id.toString()
    ) {

      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });

    }

    comment.deleteOne();

    await post.save();

    const updatedPost = await Post.findById(postId)
      .populate("author", "fullName username avatar")
      .populate("comments.user", "fullName username avatar");

    res.json({

      success: true,

      message: "Comment deleted",

      post: updatedPost,

    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};