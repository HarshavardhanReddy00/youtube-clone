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

  