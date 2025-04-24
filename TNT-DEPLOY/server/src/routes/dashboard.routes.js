// import express from 'express';
// import { verifyToken } from '../middlewares/authMiddleware.middlewares.js'; // To check if JWT is valid
// import User from '../models/authUser.models.js'; // Assuming user model
// // import Post from '../models/post.models.js';  // Assuming a Post model for user's posts, if applicable

// const router = express.Router();

// // Protecting the route with verifyToken middleware to ensure only authenticated users can access the dashboard
// router.get('/dashboard', verifyToken, async (req, res) => {
//   try {
//     // Fetching user data based on the token's userId
//     const user = await User.findById(req.userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Example: Fetching user's posts (or any other data related to user)
//     const posts = await Post.find({ userId: req.userId });

//     // Returning dashboard data (user profile + posts)
//     return res.json({
//       user: {
//         username: user.username,
//         email: user.email,
//         accountType: user.accountType,
//         // Add more fields as needed
//       },
//       posts,  // Example: posts related to user
//     });

//   } catch (err) {
//     console.error("Error fetching dashboard data:", err);
//     return res.status(500).json({ message: 'Error fetching dashboard data', error: err.message });
//   }
// });

// export default router;
