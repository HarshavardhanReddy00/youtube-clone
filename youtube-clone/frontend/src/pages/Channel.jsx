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

  return (
    <div className="bg-black min-h-screen text-white">
      <img
        src={channel.banner}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <h1 className="text-4xl font-bold">
          {channel.channelName}
        </h1>

        <p className="text-gray-400 mt-3">
          {channel.description}
        </p>

        <Link
          to="/upload-video"
          className="inline-block bg-red-600 px-5 py-3 rounded-lg mt-5"
        >
          Upload Video
        </Link>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {videos.map((video) => (
            <ChannelVideoCard
              key={video._id}
              video={video}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Channel;