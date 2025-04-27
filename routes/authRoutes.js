import express from "express";
import { handleGoogleLogin } from "../controllers/authController";


// Create a new Express router instance
const router = express.Router();

router.post("/google", handleGoogleLogin); // POST /api/auth/google

export default router;