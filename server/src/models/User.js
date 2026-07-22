import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    avatar: {
      type: String,
      default:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },

    bio: {
      type: String,
      default: "Hey there! I am using SocialFeed 🚀",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    lastSeen: {
      type: Date,
      default: Date.now,
    },

    isOnline: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;