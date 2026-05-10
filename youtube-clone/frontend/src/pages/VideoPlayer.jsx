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
  

