import express from "express";
import {
  CreateComment,
  GetComments,
  UpdateComment,
  DeleteComment,
} from "../controllers/comments.controller.js";

const router = express.Router();

router.get("/:id", GetComments);
router.post("/:id/comments", CreateComment);
router.patch("/:comment_id", UpdateComment);
router.delete("/:comment_id", DeleteComment);

export default router;
