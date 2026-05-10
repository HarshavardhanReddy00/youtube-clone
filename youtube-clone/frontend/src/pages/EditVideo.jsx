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

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-600px"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Edit Video
        </h1>

        <input
          type="text"
          value={formData.title}
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value
            })
          }
        />

        <textarea
          value={formData.description}
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
          value={formData.category}
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
          value={formData.thumbnailUrl}
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
          value={formData.videoUrl}
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              videoUrl: e.target.value
            })
          }
        />

        <button className="w-full bg-blue-600 py-3 rounded-lg">
          Update Video
        </button>
      </form>
    </div>
  );
};

export default EditVideo;