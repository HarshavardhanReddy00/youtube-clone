import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import axios from "../api/axios";

import {
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaDownload,
  FaEllipsisV
} from "react-icons/fa";

const VideoPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [video, setVideo] =
    useState(null);

  const [videos, setVideos] =
    useState([]);

  const [comment, setComment] =
    useState("");
    
    const [openMenu, setOpenMenu] =
  useState(null);

const [editText, setEditText] =
  useState("");

const [editingComment, setEditingComment] =
  useState(null);

  const [subscribed, setSubscribed] =
  useState(false);

  const user = JSON.parse(
    localStorage.getItem(
      "youtubeUser"
    )
  );

  // FETCH VIDEO

  const fetchVideo = async () => {
    try {
      const { data } =
        await axios.get(
          `/videos/${id}`
        );

      setVideo(data);

      // INCREMENT VIEWS

      await axios.put(
        `/videos/${id}/views`
      );
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH VIDEOS

  const fetchVideos = async () => {
    try {
      const { data } =
        await axios.get("/videos");

      setVideos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideo();

    fetchVideos();
  }, [id]);

  
  // LIKE
  const handleLike = async () => {
    await axios.put(
      `/videos/${id}/like`
    );

    fetchVideo();
  };

  // DISLIKE

  const handleDislike = async () => {
    await axios.put(
      `/videos/${id}/dislike`
    );

    fetchVideo();
  };

  // SHARE

  const handleShare = async () => {
    await navigator.clipboard.writeText(
      window.location.href
    );

    alert("Link Copied");
  };

  // DOWNLOAD

  const handleDownload = () => {
    window.open(video.videoUrl);
  };

  // COMMENT

  const handleComment = async () => {
    if (!comment) return;

    await axios.post(
      `/videos/${id}/comment`,
      {
        user: user.username,
        text: comment
      }
    );

    setComment("");

    fetchVideo();
  };

    if (!video) {
    return (
      <div className="text-white bg-black h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  };

  // EDIT COMMENT

const handleEditComment =
  async (commentId) => {
    try {
      await axios.put(
        `/videos/${id}/comment/${commentId}`,
        {
          text: editText
        }
      );

      setEditingComment(null);

      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE COMMENT

const handleDeleteComment =
  async (commentId) => {
    try {
      await axios.delete(
        `/videos/${id}/comment/${commentId}`
      );

      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  };

  // SUBSCRIBE

const handleSubscribe =
  async () => {
    try {
      await axios.put(
        `/videos/${id}/subscribe`
      );

      setSubscribed(true);

      fetchVideo();
    } catch (error) {
      console.log(error);
    }
  };

    return (
    <div className="bg-black min-h-screen text-white p-5">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT */}

        <div className="lg:col-span-2">
          {/* VIDEO */}

          <video
            controls
            autoPlay
            className="w-full rounded-xl"
            src={video.videoUrl}
          ></video>

          {/* TITLE */}

          <h1 className="text-2xl font-bold mt-4">
            {video.title}
          </h1>

          {/* CHANNEL */}

          <div className="flex justify-between items-center mt-5 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex justify-center items-center font-bold text-xl">
                {video.uploader?.username[0].toUpperCase()}
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  {
                    video.uploader
                      ?.username
                  }
                </h2>

                <p className="text-gray-400 text-sm">
                  {
                    video.subscribers
                  } subscribers
                </p>
              </div>

              <button
  onClick={handleSubscribe}
  className={`px-5 py-2 rounded-full font-semibold ${
    subscribed
      ? "bg-zinc-700"
      : "bg-red-600 hover:bg-red-700"
  }`}
>
  {subscribed
    ? "Subscribed"
    : "Subscribe"}
</button>
            </div>

            {/* ACTIONS */}

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleLike}
                className="bg-zinc-800 px-5 py-2 rounded-full flex items-center gap-2"
              >
                <FaThumbsUp />
                {video.likes}
              </button>

              <button
                onClick={handleDislike}
                className="bg-zinc-800 px-5 py-2 rounded-full flex items-center gap-2"
              >
                <FaThumbsDown />
                {video.dislikes}
              </button>

              <button
                onClick={handleShare}
                className="bg-zinc-800 px-5 py-2 rounded-full flex items-center gap-2"
              >
                <FaShare />
                Share
              </button>

              <button
                onClick={handleDownload}
                className="bg-zinc-800 px-5 py-2 rounded-full flex items-center gap-2"
              >
                <FaDownload />
                Download
              </button>
            </div>
          </div>

          