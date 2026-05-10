import express from "express";

import {
  getVideos,
  getSingleVideo,
  uploadVideo,
  updateVideo,
  deleteVideo,
  likeVideo,
  dislikeVideo,
  addComment,
  incrementViews,
  editComment,
  subscribeChannel,
  deleteComment
} from "../controllers/videoController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getVideos);

router.get("/:id", getSingleVideo);

router.post("/", protect, uploadVideo);

router.put("/:id", protect, updateVideo);

router.put("/:id/like",likeVideo);

router.put("/:id/dislike",dislikeVideo);

router.post("/:id/comment",addComment);

router.put("/:id/views",incrementViews);

router.delete("/:id", protect, deleteVideo);

router.put("/:id/subscribe",subscribeChannel);

router.put("/:videoId/comment/:commentId",editComment);

router.delete("/:videoId/comment/:commentId",deleteComment);

export default router;