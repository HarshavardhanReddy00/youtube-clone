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

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-500px"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Channel
        </h1>

        <input
          type="text"
          placeholder="Channel Name"
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              channelName: e.target.value
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
          placeholder="Banner URL"
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              banner: e.target.value
            })
          }
        />

                <button className="w-full bg-red-600 py-3 rounded-lg">
          Create Channel
        </button>
      </form>
    </div>
  );
};

export default CreateChannel;