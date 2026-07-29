import axios from "axios";

const API = "http://localhost:5000/api/posts";

// Create Post
export const createPost = (caption, token) => {
  return axios.post(
    `${API}/create`,
    { caption },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

// Get All Posts
export const getPosts = (token) => {
  return axios.get(API, {
    headers: {
      Authorization: token,
    },
  });
};

// Like / Unlike Post
export const toggleLike = (postId, token) => {
  return axios.put(
    `${API}/${postId}/like`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};