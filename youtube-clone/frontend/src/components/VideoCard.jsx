import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video._id}`}>
      <div className="cursor-pointer">
        <img
          src={video.thumbnailUrl}
          className="rounded-xl w-full h-52 object-cover hover:rounded-none transition-all duration-300"
        />

        <div className="flex gap-3 mt-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full"></div>

          <div>
            <h2 className="font-semibold text-white">
              {video.title}
            </h2>

            <p className="text-gray-400 text-sm">
              {video.uploader?.username}
            </p>

            <p className="text-gray-400 text-sm">
              {video.views} views
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;