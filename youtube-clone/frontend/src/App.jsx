import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [sidebar, setSidebar] =
    useState(true);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header
        toggleSidebar={() =>
          setSidebar(!sidebar)
        }
      />

      <div className="flex">
        <Sidebar sidebar={sidebar} />

        <div
          className={`flex-1 transition-all duration-300 ${
            sidebar
              ? "ml-60"
              : "ml-20"
          }`}
        >
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;