import axios from "axios";

import { BASE_URL } from "../config";

const API = axios.create({
  baseURL: `${BASE_URL}/api/auth`,
});

// Register
export const registerUser = (userData) => {
  return API.post("/register", userData);
};

// Login
export const loginUser = (userData) => {
  return API.post("/login", userData);
};

// Get Profile
export const getProfile = (token) => {
  return API.get("/profile", {
    headers: {
      Authorization: token,
    },
  });
};