import Channel from "../models/Channel.js";
import Video from "../models/Video.js";

// Create Channel
export const createChannel = async (req, res) => {
  try {
    const { channelName, description, banner } =
      req.body;

    // Check Existing Channel
    const existingChannel =
      await Channel.findOne({
        owner: req.user._id
      });

    if (existingChannel) {
      return res.status(400).json({
        message:
          "User already has a channel"
      });
    }

    const channel = await Channel.create({
      channelName,
      description,
      banner,
      owner: req.user._id
    });

    res.status(201).json(channel);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Logged In User Channel
export const getMyChannel = async (
  req,
  res
) => {
  try {
    const channel = await Channel.findOne({
      owner: req.user._id
    }).populate(
      "owner",
      "username email avatar"
    );

    if (!channel) {
      return res.status(404).json({
        message: "Channel not found"
      });
    }

    res.json(channel);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Single Channel
export const getChannel = async (req, res) => {
  try {
    const channel = await Channel.findById(
      req.params.id
    ).populate(
      "owner",
      "username avatar"
    );

    if (!channel) {
      return res.status(404).json({
        message: "Channel not found"
      });
    }

    res.json(channel);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Channel
export const updateChannel = async (
  req,
  res
) => {
  try {
    const channel = await Channel.findById(
      req.params.id
    );

    if (!channel) {
      return res.status(404).json({
        message: "Channel not found"
      });
    }

    if (
      channel.owner.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not Authorized"
      });
    }

    channel.channelName =
      req.body.channelName ||
      channel.channelName;

    channel.description =
      req.body.description ||
      channel.description;

    channel.banner =
      req.body.banner ||
      channel.banner;

    const updatedChannel =
      await channel.save();

    res.json(updatedChannel);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Channel
export const deleteChannel = async (
  req,
  res
) => {
  try {
    const channel = await Channel.findById(
      req.params.id
    );

    if (!channel) {
      return res.status(404).json({
        message: "Channel not found"
      });
    }

    if (
      channel.owner.toString() !==
      req.user._id.toString()
    ) {
      return res.status(401).json({
        message: "Not Authorized"
      });
    }

    // Delete All Videos Of Channel
    await Video.deleteMany({
      channel: channel._id
    });

    await channel.deleteOne();

    res.json({
      message:
        "Channel Deleted Successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Channel Videos
export const getChannelVideos = async (
  req,
  res
) => {
  try {
    const videos = await Video.find({
      channel: req.params.id
    }).populate(
      "uploader",
      "username avatar"
    );

    res.json(videos);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};