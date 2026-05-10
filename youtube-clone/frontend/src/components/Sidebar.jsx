import {
  FaHome,
  FaHistory,
  FaMusic,
  FaGamepad,
  FaVideo,
  FaShoppingBag,
  FaFlag,
  FaCog,
  FaUser,
  FaList
} from "react-icons/fa";

import {
  Link,
  useLocation
} from "react-router-dom";

const Sidebar = ({ sidebar }) => {
  const location = useLocation();

  const menuItems = [
    {
      icon: <FaHome />,
      text: "Home",
      path: "/"
    },

    {
      icon: <FaVideo />,
      text: "Shorts",
      path: "/shorts"
    },

    {
      icon: <FaUser />,
      text: "Subscriptions",
      path: "/subscriptions"
    },

    {
      divider: true
    },

    {
      title: "You"
    },

    {
      icon: <FaUser />,
      text: "Your Channel",
      path: "/profile"
    },

    {
      icon: <FaHistory />,
      text: "History",
      path: "/history"
    },

    {
      icon: <FaList />,
      text: "Playlists",
      path: "/playlists"
    },

    {
      divider: true
    },

    {
      title: "Explore"
    },

    {
      icon: <FaShoppingBag />,
      text: "Shopping",
      path: "/shopping"
    },

    {
      icon: <FaMusic />,
      text: "Music",
      path: "/music"
    },

    {
      icon: <FaGamepad />,
      text: "Movies",
      path: "/movies"
    },

    {
      divider: true
    },

    {
      icon: <FaCog />,
      text: "Settings",
      path: "/settings"
    },

    {
      icon: <FaFlag />,
      text: "Report History",
      path: "/report-history"
    }
  ];

  return (
    <div
      className={`bg-black text-white h-screen fixed top-0 left-0 pt-20 border-r border-zinc-800 transition-all duration-300 overflow-y-auto ${
        sidebar ? "w-60" : "w-20"
      }`}
    >
      <div className="px-3">
        {menuItems.map((item, index) => {
          // DIVIDER

          if (item.divider) {
            return (
              <div
                key={index}
                className="border-t border-zinc-800 my-4"
              ></div>
            );
          }

          // SECTION TITLE

          if (item.title) {
            return (
              sidebar && (
                <h2
                  key={index}
                  className="text-gray-400 px-3 mb-3"
                >
                  {item.title}
                </h2>
              )
            );
          }

          // MENU ITEMS

          return (
            <Link
              key={index}
              to={item.path}
            >
              <button
                className={`w-full flex items-center rounded-xl hover:bg-zinc-800 transition-all duration-300 mb-1 ${
                  sidebar
                    ? "gap-4 px-4 py-3 justify-start"
                    : "justify-center py-4"
                } ${
                  location.pathname ===
                  item.path
                    ? "bg-zinc-800"
                    : ""
                }`}
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                {sidebar && (
                  <span className="text-sm font-medium">
                    {item.text}
                  </span>
                )}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;