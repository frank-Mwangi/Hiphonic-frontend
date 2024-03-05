import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "./Container.scss";
import Rightbar from "./RightSidebar";
import Timeline from "../pages/Timeline";
//import Friends from "../pages/Friends";
import Navbar from "./Navbar";
// import Login from "./Login";
import { useState, createContext } from "react";
import Notifications from "../pages/Notifications";
import Photos from "../pages/Photos";
import GroupsTop from "../pages/GroupsTop.jsx";
//import Videos from "../pages/Videos.jsx";
//import Event from "../pages/Event.jsx";
import FriendsList from "../features/friends/FriendsLists.jsx";
import Eventlist from "../pages/Eventlist.jsx";
import VideosList from "../features/videos/VideosList.jsx";
import PhotoLists from "../features/photos/photoLists.jsx";
import CommentList from "../features/comments/CommentList.jsx";
import CommentsPage from "../pages/CommentsPage.jsx";

import IndividualGroup from "../pages/IndividualGroup.jsx";

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
            <Route path="/home/*" element={<MainContent />} />
            <Route path="/timeline/*" element={<Timeline />} />
            <Route path="/friends" element={<FriendsList />} />
            <Route path="/groups" element={<GroupsTop />} />
            <Route path="/groups/:id" element={<IndividualGroup />} />

            <Route path="/events" element={<Eventlist />} />
            <Route path="/videos" element={<VideosList />} />
            <Route path="/comments/post/:PostID" element={<CommentsPage />} />
            <Route path="/photos" element={<PhotoLists />} />
          </Routes>

          <Rightbar />
        </div>
      </div>
    </notifContext.Provider>
  );
};

export default Container;
