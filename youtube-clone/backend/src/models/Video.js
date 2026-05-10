import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    thumbnailUrl: {
      type: String,
      required: true
    },

    videoUrl: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    views: {
      type: Number,
      default: 0
    },

    likes: {
      type: Number,
      default: 0
    },

    dislikes: {
      type: Number,
      default: 0
    },

    subscribers: {
      type: Number,
      default: 0
    },

    comments: [commentSchema],

    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Video = mongoose.model(
  "Video",
  videoSchema
);

export default Video;