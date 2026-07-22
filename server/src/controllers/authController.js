import User from "../models/User.js";
import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {

    const {
      fullName,
      username,
      email,
      password,
    } = req.body;

    if (
      !fullName ||
      !username ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const usernameExists = await User.findOne({
      username,
    });

    if (usernameExists) {
      return res.status(400).json({
        success: false,
        message: "Username already taken",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const newUser = await User.create({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Registration Successful",

      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if fields are empty
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getProfile = async (req, res) => {

  try {

    res.status(200).json({
      success: true,
      user: req.user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};