import { Link } from "react-router-dom";

const ChannelVideoCard = ({
  video,
  handleDelete
}) => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <img
        src={video.thumbnailUrl}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          {video.title}
        </h2>

        <div className="flex gap-3 mt-4">
          <Link
            to={`/edit-video/${video._id}`}
            className="bg-blue-600 px-4 py-2 rounded-lg"
          >
            Edit
          </Link>

          <button
            onClick={() =>
              handleDelete(video._id)
            }
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelVideoCard;