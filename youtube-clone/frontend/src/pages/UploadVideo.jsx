import { useState } from "react";

import axios from "../api/axios";

import { useNavigate } from "react-router-dom";

const UploadVideo = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/videos",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );

      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  