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

