import Comment from "../models/Comment.js";

// Add Comment
export const addComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      text: req.body.text,
      user: req.user._id,
      video: req.body.videoId
    });

    const populatedComment = await Comment.findById(
      comment._id
    ).populate("user", "username avatar");

    res.status(201).json(populatedComment);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Comments
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      video: req.params.videoId
    })
      .populate("user", "username avatar")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

