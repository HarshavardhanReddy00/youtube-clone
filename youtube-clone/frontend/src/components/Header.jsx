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

  