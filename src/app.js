import express from "express";
import connectDB from "./config/db.js";
import { configDotenv } from "dotenv";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
import roleRoutes from "./routes/role.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import commentRoutes from "./routes/comments.routes.js";

const AppRouter = express.Router();

connectDB();
configDotenv();

AppRouter.use(morgan("dev"));

// User Routes
AppRouter.use("/auth", userRoutes);

// Role Routes -> This is for the intial role creation.
AppRouter.use("/role", roleRoutes);

// Ticket Routes
AppRouter.use("/ticket", ticketRoutes);

// Comments Routes
AppRouter.use("/comments", commentRoutes);

export default AppRouter;
