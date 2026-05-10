import {
  useEffect,
  useState
} from "react";

import {
  useParams,
  Link
} from "react-router-dom";

import axios from "../api/axios";

import ChannelVideoCard from "../components/ChannelVideoCard";

const Channel = () => {
  const { id } = useParams();

  const [channel, setChannel] =
    useState(null);

  const [videos, setVideos] =
    useState([]);

  const user = JSON.parse(
    localStorage.getItem("youtubeUser")
  );

  const fetchChannel = async () => {
    const { data } = await axios.get(
      `/channels/${id}`
    );

    setChannel(data);
  };

  const fetchVideos = async () => {
    const { data } = await axios.get(
      `/channels/${id}/videos`
    );

    setVideos(data);
  };

  useEffect(() => {
    fetchChannel();
    fetchVideos();
  }, []);

  const handleDelete = async (
    videoId
  ) => {
    await axios.delete(
      `/videos/${videoId}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    );

    fetchVideos();
  };

  if (!channel) return null;

  