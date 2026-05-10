import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createChannel,
  getChannel,
  getMyChannel,
  updateChannel,
  deleteChannel,
  getChannelVideos
} from "../controllers/channelController.js";

const router = express.Router();

// Create Channel
router.post("/", protect, createChannel);

// Get Logged In User Channel
router.get("/my-channel", protect, getMyChannel);

// Get Single Channel
router.get("/:id", getChannel);

// Update Channel
router.put("/:id", protect, updateChannel);

// Delete Channel
router.delete("/:id", protect, deleteChannel);

// Get Videos Of Channel
router.get("/:id/videos", getChannelVideos);

export default router;