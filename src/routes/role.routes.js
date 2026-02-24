import express from "express";
import { CreateRole, GetAllRoles } from "../controllers/role.controller.js";

const router = express.Router();

router.get("/getrole", GetAllRoles);
router.post("/register", CreateRole);

export default router;
