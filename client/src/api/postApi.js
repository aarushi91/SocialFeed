import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/posts",
});

// Create Post
export const createPost = (postData, token) => {
  return API.post("/create", postData, {
    headers: {
      Authorization: token,
    },
  });
};

// Get All Posts
export const getPosts = (token) => {
  return API.get("/", {
    headers: {
      Authorization: token,
    },
  });
};