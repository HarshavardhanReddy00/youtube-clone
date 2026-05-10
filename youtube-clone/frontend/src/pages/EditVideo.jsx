import {
  useEffect,
  useState
} from "react";

import axios from "../api/axios";

import {
  useParams,
  useNavigate
} from "react-router-dom";

const EditVideo = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("youtubeUser")
  );

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      category: "",
      thumbnailUrl: "",
      videoUrl: ""
    });

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `/videos/${id}`
    );

    setFormData(data);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(
      `/videos/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    );

    navigate("/");
  };

  