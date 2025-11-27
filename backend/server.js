import express from "express";
import userRoute from "./routes/user.route.js";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();

// Middleware
app.use(cors({
    origin: ["http://localhost:8081", "https://www.upsoma.in"]
}));
app.use(express.json());

// Routes
app.use("/", userRoute);

// Connect to database
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});