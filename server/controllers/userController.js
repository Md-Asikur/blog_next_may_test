const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const {serialize}=require("cookie")
const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

const UserController = {};

UserController.registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      throw new Error("Username or email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const token = generateToken(savedUser);

    res.cookie("token", token, {
      httpOnly: true,
       maxAge: 24*60*60*1000, // 1 hour in milliseconds
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", // Adjust the sameSite value based on your requirements
      path: "/", // Set secure flag for production environment
    });

    res.status(201).json({ savedUser, token });
  } catch (error) {
    next(error);
  }
};

UserController.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
   console.log(req.body)
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Invalid username or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid username or password");
    }

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24*60*60*1000, // 1 hour in milliseconds
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", // Adjust the sameSite value based on your requirements
      path: "/", // Adjust the path value based on your requirements // Set secure flag for production environment
    });
//  res.setHeader("Set-Cookie", serialize("token", token, cookieOptions));
    res.json({ user, token });
  } catch (error) {
    next(error);
  }
};

UserController.getAllUser = async (req, res, next) => {
  try {
    const  userId  = req.user;
    const users = await User.find({_id:{$ne:userId}});
    if (!users) {
      throw new Error("No users found");
    }

    res.json(users);
  } catch (error) {
    next(error);
  }
};

UserController.getUserProfile = async (req, res, next) => {
  try {
    const  userId  = req.user;
    // console.log("userId",req.user)
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

UserController.updateUserProfile = async (req, res, next) => {
  try {
    const  userId  = req.user;
    const { username, email } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    user.username = username || user.username;
    user.email = email || user.email;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

UserController.deleteUserProfile = async (req, res, next) => {
  try {
    const  userId  = req.user;

    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("User not found");
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = UserController;
