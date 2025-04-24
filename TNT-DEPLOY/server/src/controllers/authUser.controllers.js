import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/authUser.models.js';
import dotenv from 'dotenv';

dotenv.config({
  path: "./.env"
});

const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', userId: newUser._id });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ message: 'Error during signup', error: err.message });
  }
};

// Login route
export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt for email:", email);  

  try {
    // Check if email is provided
    if (!email || !password) {
      console.log("Email or password missing");
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);  // User not found error
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Incorrect password for email:", email);  // Incorrect password error
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    console.log("Token generated for user:", email);  // Log token generation

    return res.json({ token, userId: user._id });
  } catch (err) {
    console.error("Error during login:", err);  // Catch and log errors during login
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};
