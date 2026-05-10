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

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-600px"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Upload Video
        </h1>

        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value
            })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Thumbnail URL"
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              thumbnailUrl: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Video URL"
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              videoUrl: e.target.value
            })
          }
        />

        <button className="w-full bg-red-600 py-3 rounded-lg">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadVideo;