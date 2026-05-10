import {
  FaYoutube,
  FaSearch,
  FaBars,
  FaBell,
  FaMicrophone
} from "react-icons/fa";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useState,
  useEffect,
  useRef
} from "react";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  // CREATE MENU

  const [openMenu, setOpenMenu] =
    useState(false);

  // PROFILE MENU

  const [openProfile, setOpenProfile] =
    useState(false);

  const menuRef = useRef();

  const profileRef = useRef();

  const user = JSON.parse(
    localStorage.getItem("youtubeUser")
  );

  // SEARCH

  const handleSearch = () => {
    navigate(`/?search=${search}`);
  };

  // LOGOUT

  const logout = () => {
    localStorage.removeItem(
      "youtubeUser"
    );

    navigate("/login");

    window.location.reload();
  };

  // CLOSE MENUS WHEN CLICK OUTSIDE

  useEffect(() => {
    const handler = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpenMenu(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(
          e.target
        )
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handler
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handler
      );
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-black text-white sticky top-0 z-50 border-b border-zinc-800">
      {/* LEFT */}

      <div className="flex items-center gap-4">
        <FaBars
          className="text-xl cursor-pointer"
          onClick={toggleSidebar}
        />

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <FaYoutube className="text-red-600 text-3xl" />

          <span className="font-bold text-2xl">
            YouTube
          </span>
        </Link>
      </div>

      {/* SEARCH */}

      <div className="flex items-center w-[40%] gap-3">
  {/* SEARCH BAR */}

  <div className="flex items-center flex-1">
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full bg-black border border-gray-700 rounded-l-full px-5 py-2 outline-none text-white"
    />

    <button
      onClick={handleSearch}
      className="bg-zinc-800 px-5 py-3 rounded-r-full border border-gray-700"
    >
      <FaSearch />
    </button>
  </div>

  {/* MIC ICON */}

  <button className="w-11 h-11 rounded-full bg-zinc-800 hover:bg-zinc-700 flex justify-center items-center">
    <FaMicrophone className="text-white text-lg" />
  </button>
</div>

      {/* RIGHT */}

      {!user ? (
        <Link
          to="/login"
          className="border border-blue-500 px-4 py-2 rounded-full hover:bg-zinc-900"
        >
          Sign In
        </Link>
      ) : (
        <div className="flex items-center gap-5 relative">
          {/* CREATE MENU */}

          <div
            className="relative"
            ref={menuRef}
          >
            <button
              onClick={() =>
                setOpenMenu(!openMenu)
              }
              className="bg-zinc-800 hover:bg-zinc-700 px-5 py-2 rounded-full flex items-center gap-2"
            >
              + Create
            </button>

            {/* CREATE DROPDOWN */}

            {openMenu && (
              <div className="absolute right-0 top-14 bg-zinc-900 border border-zinc-700 rounded-xl w-56 overflow-hidden shadow-2xl">
                <Link
                  to="/upload-video"
                  className="block px-5 py-4 hover:bg-zinc-800"
                  onClick={() =>
                    setOpenMenu(false)
                  }
                >
                  Upload Video
                </Link>

                <button
                  className="w-full text-left px-5 py-4 hover:bg-zinc-800"
                  onClick={() => {
                    alert(
                      "Go Live Feature Coming Soon"
                    );

                    setOpenMenu(false);
                  }}
                >
                  Go Live
                </button>
              </div>
            )}
          </div>

          {/* BELL */}

          <FaBell className="text-xl cursor-pointer" />

          {/* PROFILE */}

          <div
            className="relative"
            ref={profileRef}
          >
            <button
              onClick={() =>
                setOpenProfile(
                  !openProfile
                )
              }
              className="w-10 h-10 bg-orange-500 rounded-full flex justify-center items-center font-bold text-lg"
            >
              {user.username[0].toUpperCase()}
            </button>

            {/* PROFILE DROPDOWN */}

            {openProfile && (
              <div className="absolute right-0 top-14 bg-zinc-900 border border-zinc-700 rounded-xl w-56 overflow-hidden shadow-2xl">
                {/* USER INFO */}

                <div className="p-4 border-b border-zinc-700">
                  <h2 className="font-semibold text-lg">
                    {user.username}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    {user.email}
                  </p>
                </div>

                {/* MENU ITEMS */}

                <Link
                  to="/profile"
                  className="block px-5 py-4 hover:bg-zinc-800"
                  onClick={() =>
                    setOpenProfile(false)
                  }
                >
                  Profile
                </Link>

                <Link
                  to="/create-channel"
                  className="block px-5 py-4 hover:bg-zinc-800"
                  onClick={() =>
                    setOpenProfile(false)
                  }
                >
                  Create Channel
                </Link>

                <button
                  onClick={logout}
                  className="w-full text-left px-5 py-4 hover:bg-zinc-800 text-red-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;