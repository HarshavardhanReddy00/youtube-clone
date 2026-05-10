import mongoose from "mongoose";

const channelSchema = mongoose.Schema(
  {
    channelName: String,

    description: String,

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    banner: String
  },
  { timestamps: true }
);

export default mongoose.model("Channel", channelSchema);