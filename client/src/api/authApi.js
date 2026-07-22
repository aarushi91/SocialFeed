import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
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