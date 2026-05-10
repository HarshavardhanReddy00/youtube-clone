import express from "express";

import {
  addComment,
  getComments,
  deleteComment,
  updateComment
} from "../controllers/commentController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Add Comment
router.post("/", protect, addComment);

// Get Comments of Particular Video
router.get("/:videoId", getComments);

// Update Comment
router.put("/:id", protect, updateComment);

// Delete Comment
router.delete("/:id", protect, deleteComment);

export default router;