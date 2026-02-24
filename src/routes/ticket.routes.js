import express from "express";
import {
  CreateTicket,
  GetTickets,
  AssignTicket,
  DeleteTicket,
  StatusTicket,
} from "../controllers/ticket.controller.js";

const router = express.Router();

router.get("/", GetTickets);
router.post("/create", CreateTicket);
router.patch("/:id/assign", AssignTicket);
router.patch("/:id/status", StatusTicket);
router.delete("/:id", DeleteTicket);

export default router;
