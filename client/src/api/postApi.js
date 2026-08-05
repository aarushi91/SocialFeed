import axios from "axios";

const API = "http://localhost:5000/api/posts";

export const createPost = (formData, token) => {
  return axios.post(
    `${API}/create`,
    formData,
    {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const getPosts = (token) => {
  return axios.get(API, {
    headers: {
      Authorization: token,
    },
  });
};

export const toggleLike = (id, token) => {
  return axios.put(
    `${API}/${id}/like`,
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const addComment = (id, text, token) => {
  return axios.post(
    `${API}/${id}/comment`,
    { text },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const deletePost = (id, token) => {
  return axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: token,
    },
  });
};

export const updatePost = (id, text, token) => {
  return axios.put(
    `${API}/${id}`,
    { text },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const deleteComment = (
  postId,
  commentId,
  token
) => {

  return axios.delete(

    `${API}/${postId}/comment/${commentId}`,

    {

      headers: {

        Authorization: token,

      },

    }

  );

};