import express from "express";
import { RegisterUser, LoginUser, GetUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/users", GetUsers);

export default router;
