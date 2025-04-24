
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import dashboardRoutes from './routes/dashboard.routes.js';
// import authRouter from './routes/auth.routes.js';

// importing routes
import authRouter from "./routes/authUser.routes.js";

dotenv.config({
  path: "./.env"
});

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
})
.catch((err) => {
  console.error('MongoDB connection error:', err)
})

// Routes
app.use('/api/auth', authRouter);  // Auth routes (signup, login)
// app.use('/api', dashboardRoutes);  // Dashboard route (protected)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
