import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "./container.scss";
import Rightbar from "./RightSidebar";
import Timeline from "../pages/Timeline";
import Friends from "../pages/Friends";
import Navbar from "./Navbar";
// import Login from "./Login";
import { useState, createContext } from "react";
import Notifications from "../pages/Notifications";
import Photos from "../pages/Photos";
import GroupsTop from "../pages/GroupsTop.jsx";
import Videos from "../pages/Videos.jsx";
import Event from "../pages/Event.jsx";

export const notifContext = createContext();
const Container = () => {
  const [notificationClicked, setNotificationClicked] = useState(false);
  return (
    <notifContext.Provider
      value={{ notificationClicked, setNotificationClicked }}
    >
      <div className="wholepage">
        <Navbar />
        <div className="container">
          <Sidebar />

          <Routes>
            <Route path="/notifications" element={<Notifications />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/home/" element={<MainContent />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/groups" element={<GroupsTop />} />
            <Route path="/events" element={<Event />} />
            <Route path="/videos" element={<Videos />} />

            <Route path="/photos" element={<Photos />} />
          </Routes>

          <Rightbar />
        </div>
      </div>
    </notifContext.Provider>
  );
};

export default Container;
