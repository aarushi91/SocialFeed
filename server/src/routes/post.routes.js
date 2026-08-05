import express from "express";
import {
  createPost,
  getPosts,
  toggleLike,
  addComment,
  deletePost,
  updatePost,
  deleteComment
} from "../controllers/post.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Create Post
router.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  createPost
);

// Get All Posts
router.get("/", authMiddleware, getPosts);

// Like / Unlike Post
router.put("/:id/like", authMiddleware, toggleLike);

// Add Comment
router.post("/:id/comment", authMiddleware, addComment);

// Update Post
router.put("/:id", authMiddleware, updatePost);

// Delete Post
router.delete("/:id", authMiddleware, deletePost);

router.delete(
  "/:postId/comment/:commentId",
  authMiddleware,
  deleteComment
);

export default router;