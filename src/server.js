import express from "express";
import connectDB from "./config/db.js";
import { configDotenv } from "dotenv";
import morgan from "morgan";
import AppRouter from "./app.js";

const PORT = process.env.PORT || 3001;

const app = express();
connectDB();
configDotenv();

app.use(express.json());
app.use(morgan("dev"));
app.use(AppRouter);

app.listen(PORT, () => {
  console.log("Server is runnnig on port", PORT);
});
