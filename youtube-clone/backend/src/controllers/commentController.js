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

// Update Comment
export const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(
      req.params.id
    );

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found"
      });
    }

    if (
      comment.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not Authorized"
      });
    }

    comment.text = req.body.text;

    const updatedComment = await comment.save();

    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Comment
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(
      req.params.id
    );

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found"
      });
    }

    if (
      comment.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not Authorized"
      });
    }

    await comment.deleteOne();

    res.json({
      message: "Comment Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};