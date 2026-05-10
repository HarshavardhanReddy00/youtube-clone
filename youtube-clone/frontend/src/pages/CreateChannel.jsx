import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const CreateChannel = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("youtubeUser"));

  const [formData, setFormData] = useState({
    channelName: "",
    description: "",
    banner: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "/channels",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );

      navigate(`/channel/${data._id}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  