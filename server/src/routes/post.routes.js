import express from "express";
import {
  createPost,
  getPosts,
  toggleLike,
  addComment,
} from "../controllers/post.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Post
router.post("/create", authMiddleware, createPost);

// Get All Posts
router.get("/", authMiddleware, getPosts);

// Like / Unlike Post
router.put("/:id/like", authMiddleware, toggleLike);

// Add Comment
router.post("/:id/comment", authMiddleware, addComment);

export default router;