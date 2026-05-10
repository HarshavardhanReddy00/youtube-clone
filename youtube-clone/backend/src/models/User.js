import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    avatar: {
      type: String,
      default:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);