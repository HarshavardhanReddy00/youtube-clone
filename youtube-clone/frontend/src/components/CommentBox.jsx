const CommentBox = ({
  comment,
  handleDelete
}) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg mb-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">
            {comment.user?.username}
          </h3>

          <p className="text-gray-300 mt-2">
            {comment.text}
          </p>
        </div>

        <button
          onClick={() =>
            handleDelete(comment._id)
          }
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CommentBox;