import express from "express";
import {
  createPost,
  getPosts,
} from "../controllers/post.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Post
router.post("/create", authMiddleware, createPost);

// Get All Posts
router.get("/", authMiddleware, getPosts);

export default router;