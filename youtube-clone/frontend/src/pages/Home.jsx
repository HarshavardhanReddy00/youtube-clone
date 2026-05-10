import {
  useEffect,
  useState
} from "react";

import {
  useLocation,
  Link
} from "react-router-dom";

import axios from "../api/axios";

import VideoCard from "../components/VideoCard";

import FilterButtons from "../components/FilterButtons";

const Home = () => {
  const [videos, setVideos] =
    useState([]);

  const [category, setCategory] =
    useState("All");

  const location = useLocation();

  const query =
    new URLSearchParams(
      location.search
    );

  const search =
    query.get("search") || "";

  const user = JSON.parse(
    localStorage.getItem("youtubeUser")
  );

  const fetchVideos = async () => {
    try {
      const { data } =
        await axios.get(
          `/videos?category=${category}&search=${search}`
        );

      setVideos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchVideos();
    }
  }, [category, search]);

  // BEFORE LOGIN

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] text-gray-400">
        <h1 className="text-2xl mb-6">
          Please login to view videos
        </h1>

        <Link
          to="/login"
          className="bg-red-600 px-6 py-3 rounded-lg text-white"
        >
          Sign In
        </Link>
      </div>
    );
  }

  // AFTER LOGIN

  return (
    <div className="bg-black min-h-screen text-white">
      <FilterButtons
        setCategory={setCategory}
      />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {videos.map((video) => (
          <VideoCard
            key={video._id}
            video={video}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;