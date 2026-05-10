import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "../models/User.js";
import Channel from "../models/Channel.js";
import Video from "../models/Video.js";
import Comment from "../models/Comment.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

console.log("MongoDB Connected");

// Clear Old Data
await User.deleteMany();
await Channel.deleteMany();
await Video.deleteMany();
await Comment.deleteMany();

console.log("Old Data Deleted");

// Create User
const user = await User.create({
  username: "Harsha",
  email: "harsha@gmail.com",
  password:
    "$2a$10$4u6n2I6fB9sB4zQ5mB7z8eM6KjPq7r1uD4x2nM3oP5sA9fXwYz"
});

// Create Channel
const channel = await Channel.create({
  channelName: "Harsha Tech",
  description:
    "MERN Stack Tutorials",
  banner:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  owner: user._id
});

// Create Videos
const videos = await Video.insertMany([
      // =====================================
      // ALL
      // =====================================

      {
        title: "React JS Full Course",

        description:
          "Complete React JS Tutorial",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "All",

        views: 12000,

        uploader: user._id
      },

      {
        title: "Node JS Tutorial",

        description:
          "Learn Node JS Backend",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "All",

        views: 8000,

        uploader: user._id
      },

      {
        title: "JavaScript Crash Course",

        description:
          "Master JavaScript Basics",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "All",

        views: 17000,

        uploader: user._id
      },

      // =====================================
      // MUSIC
      // =====================================

      {
        title: "LEO Theme Song",

        description:
          "Trending Tamil Theme Song",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "Music",

        views: 45000,

        uploader: user._id
      },

      {
        title: "Relaxing Piano Music",

        description:
          "Peaceful Piano Music",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "Music",

        views: 39000,

        uploader: user._id
      },

      {
        title: "Top Telugu Songs",

        description:
          "Best Telugu Songs Collection",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1507838153414-b4b713384a76",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "Music",

        views: 72000,

        uploader: user._id
      },

      // =====================================
      // GAMING
      // =====================================

      {
        title: "PUBG Gameplay",

        description:
          "Epic PUBG Gameplay",

        thumbnailUrl:
          "https://www.exitlag.com/blog/wp-content/uploads/2024/11/Free-Fire-Download-a-complete-guide-for-all-platforms.webp",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "Gaming",

        views: 56000,

        uploader: user._id
      },

      {
        title: "Free Fire Tournament",

        description:
          "Best Free Fire Match",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "Gaming",

        views: 67000,

        uploader: user._id
      },

      {
        title: "GTA 5 Mission",

        description:
          "GTA 5 Action Gameplay",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "Gaming",

        views: 92000,

        uploader: user._id
      },

      // =====================================
      // NEWS
      // =====================================

      {
        title: "Tech News Today",

        description:
          "Latest Technology News",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "News",

        views: 14000,

        uploader: user._id
      },

      {
        title: "World Breaking News",

        description:
          "International Headlines",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1495020689067-958852a7765e",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "News",

        views: 28000,

        uploader: user._id
      },

      {
        title: "India Political Updates",

        description:
          "Daily Political News",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "News",

        views: 35000,

        uploader: user._id
      },

      // =====================================
      // MOVIES
      // =====================================

      {
        title: "OG Movie Trailer",

        description:
          "Official OG Trailer",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "Movies",

        views: 89000,

        uploader: user._id
      },

      {
        title: "Salaar Action Scene",

        description:
          "High Voltage Action Scene",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "Movies",

        views: 102000,

        uploader: user._id
      },

      {
        title: "LEO Official Teaser",

        description:
          "LEO Official Teaser",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1536440136628-849c177e76a1",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "Movies",

        views: 132000,

        uploader: user._id
      },

      // =====================================
      // REACT
      // =====================================

      {
        title: "React Hooks Tutorial",

        description:
          "Learn useState and useEffect",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "React",

        views: 26000,

        uploader: user._id
      },

      {
        title: "React Router DOM",

        description:
          "Routing in React",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "React",

        views: 19000,

        uploader: user._id
      },

      {
        title: "MERN Stack Project",

        description:
          "Full Stack MERN Project",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "React",

        views: 41000,

        uploader: user._id
      },

      // =====================================
      // PROGRAMMING
      // =====================================

      {
        title: "Python Tutorial",

        description:
          "Learn Python Programming",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "Programming",

        views: 53000,

        uploader: user._id
      },

      {
        title: "Java Full Course",

        description:
          "Learn Java Programming",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",

        videoUrl:
          "https://www.w3schools.com/html/movie.mp4",

        category: "Programming",

        views: 47000,

        uploader: user._id
      },

      {
        title: "C++ DSA Tutorial",

        description:
          "Learn Data Structures",

        thumbnailUrl:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

        videoUrl:
          "https://www.w3schools.com/html/mov_bbb.mp4",

        category: "Programming",

        views: 68000,

        uploader: user._id
      }
]);

// Create Comments
await Comment.create({
  text: "Amazing Tutorial",

  user: user._id,

  video: videos[0]._id
});

console.log("Seed Data Inserted");

process.exit();