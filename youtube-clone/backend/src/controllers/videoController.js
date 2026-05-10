import Video from "../models/Video.js";

export const getVideos = async (req, res) => {
  try {
    const search = req.query.search || "";
    const category = req.query.category || "";

    let query = {};

    if (search) {
      query.title = {
        $regex: search,
        $options: "i"
      };
    }

    if (category && category !== "All") {
      query.category = category;
    }

    const videos = await Video.find(query)
      .populate("uploader", "username avatar");

    res.json(videos);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleVideo = async (req, res) => {
  const video = await Video.findById(req.params.id)
    .populate("uploader");

  res.json(video);
};

export const uploadVideo = async (req, res) => {
  const newVideo = await Video.create(req.body);

  res.json(newVideo);
};

export const updateVideo = async (req, res) => {
  const updated = await Video.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};

export const deleteVideo = async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);

  res.json({
    message: "Video Deleted"
  });
};

// LIKE VIDEO

export const likeVideo = async (
  req,
  res
) => {
  try {
    const video = await Video.findById(
      req.params.id
    );

    video.likes += 1;

    await video.save();

    res.json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DISLIKE VIDEO

export const dislikeVideo = async (
  req,
  res
) => {
  try {
    const video = await Video.findById(
      req.params.id
    );

    video.dislikes += 1;

    await video.save();

    res.json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// ADD COMMENT

export const addComment = async (
  req,
  res
) => {
  try {
    const video = await Video.findById(
      req.params.id
    );

    const comment = {
      user: req.body.user,
      text: req.body.text
    };

    video.comments.push(comment);

    await video.save();

    res.json(video.comments);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// INCREMENT VIEWS

export const incrementViews = async (
  req,
  res
) => {
  try {
    const video = await Video.findById(
      req.params.id
    );

    video.views += 1;

    await video.save();

    res.json(video);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// EDIT COMMENT

export const editComment = async (
  req,
  res
) => {
  try {
    const video = await Video.findById(
      req.params.videoId
    );

    const comment =
      video.comments.id(
        req.params.commentId
      );

    if (!comment) {
      return res.status(404).json({
        message:
          "Comment not found"
      });
    }

    comment.text = req.body.text;

    await video.save();

    res.json(video.comments);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE COMMENT

export const deleteComment =
  async (req, res) => {
    try {
      const video =
        await Video.findById(
          req.params.videoId
        );

      video.comments =
        video.comments.filter(
          (comment) =>
            comment._id.toString() !==
            req.params.commentId
        );

      await video.save();

      res.json(video.comments);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };

  // SUBSCRIBE CHANNEL

export const subscribeChannel =
  async (req, res) => {
    try {
      const video =
        await Video.findById(
          req.params.id
        );

      video.subscribers += 1;

      await video.save();

      res.json(video);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };