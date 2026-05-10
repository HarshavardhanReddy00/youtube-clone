import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VideoPlayer from "../pages/VideoPlayer";
import Channel from "../pages/Channel";
import CreateChannel from "../pages/CreateChannel";
import UploadVideo from "../pages/UploadVideo";
import EditVideo from "../pages/EditVideo";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Shorts from "../pages/Shorts";
import Subscriptions from "../pages/Subscriptions";
import History from "../pages/History";
import Playlists from "../pages/Playlists";
import Shopping from "../pages/Shopping";
import Music from "../pages/Music";
import Movies from "../pages/Movies";
import Settings from "../pages/Settings";
import ReportHistory from "../pages/ReportHistory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/video/:id" element={<VideoPlayer />} />

      <Route path="/channel/:id" element={<Channel />} />

      <Route path="/create-channel" element={<CreateChannel />} />

      <Route path="/upload-video" element={<UploadVideo />} />

      <Route path="/edit-video/:id" element={<EditVideo />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />

      <Route path="/shorts" element={<Shorts />} />

<Route path="/subscriptions" element={<Subscriptions />}/>

<Route path="/history" element={<History />}/>

<Route path="/playlists" element={<Playlists />}/>

<Route path="/shopping" element={<Shopping />}/>

<Route path="/music" element={<Music />}/>

<Route path="/movies" element={<Movies />}
/>

<Route path="/settings" element={<Settings />}/>

<Route path="/report-history" element={<ReportHistory />}/>
</Routes>
  );
};

export default AppRoutes;