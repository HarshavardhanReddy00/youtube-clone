const Profile = () => {
  // GET USER FROM LOCAL STORAGE

  const user = JSON.parse(
    localStorage.getItem("youtubeUser")
  );

  return (
    <div className="bg-black min-h-screen text-white flex justify-center items-center">
      <div className="bg-zinc-900 p-10 rounded-2xl w-420px shadow-2xl border border-zinc-800">
        {/* PROFILE IMAGE */}

        <div className="flex justify-center">
          <div className="w-32 h-32 bg-orange-500 rounded-full flex justify-center items-center text-5xl font-bold">
            {user?.username
              ?.charAt(0)
              .toUpperCase()}
          </div>
        </div>

        {/* USERNAME */}

        <h1 className="text-4xl font-bold text-center mt-6">
          {user?.username}
        </h1>

        {/* EMAIL */}

        <p className="text-gray-400 text-center mt-3 text-lg">
          {user?.email}
        </p>

        {/* EXTRA DETAILS */}

        <div className="mt-8 border-t border-zinc-700 pt-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">
              Username
            </span>

            <span className="font-semibold">
              {user?.username}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">
              Email
            </span>

            <span className="font-semibold break-all">
              {user?.email}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">
              Account Status
            </span>

            <span className="text-green-500 font-semibold">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;