const mongoose = require("mongoose");
const validator = require("validator");

const User_Schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
  },
  location: {
    type: String,
    default: "Not specified",
  },
  phone: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: "/images/profile.jpg", // default profile picture
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", User_Schema);
module.exports = User;
