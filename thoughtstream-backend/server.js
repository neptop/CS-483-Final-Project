/**
* @file server.js
* @description Main entry point for the ThoughtStream API.
* Initializes Express, connects to MongoDB, sets up middleware,
* and defines API routes.
*/
import express from "express"; // Web framework for Node.js
import dotenv from "dotenv"; // Loads environment variables from .env file
import cors from "cors"; // Enables Cross-Origin Resource Sharing
import connectDB from "./config/db.js"; // Database connection function
import diaryRoutes from "./routes/diaryRoutes.js"; // API routes for app
import authRoutes from "./routes/authRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";


// Load environment variables from .env into process.env
dotenv.config();

// Initialize an Express application
const app = express();

// Establish a connection to the MongoDB database
connectDB();

app.use(express.json()); // Parses JSON request bodies
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
})); // Allows cross-origin requests (for frontend interaction)


// Define API routes
// All requests to /api/diary are forwarded to diaryRoutes.js
app.use("/api/auth", authRoutes);
app.use("/api/diary", diaryRoutes); // Mount routes under /api/diary
app.use("/api/weather", weatherRoutes);

// Default route to check if the server is running
app.get("/", (req, res) => {
    res.send("Welcome to ThoughtStream API");
});

// Define the server port (uses environment variable or defaults to 5000)
const PORT = process.env.PORT || 5000;

// Start the Express server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});