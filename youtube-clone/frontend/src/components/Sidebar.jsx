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

  