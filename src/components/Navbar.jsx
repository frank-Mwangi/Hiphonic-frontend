import React, { useEffect } from "react";
import "./navbar.scss";
//import Navbody from "./Navbody";
//import Search from "./Search";
//import Navicons from "./Navicons";
import logout from "../assets/logout-icon.png";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import message from "../assets/message.png";
import notification from "../assets/notification.png";
import profilePic from "../assets/Avatar.png";
import chevron from "../assets/chevron-down.png";
//import { notifContext } from "./Container";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Notifications from "../pages/Notifications";
import Sidebar from "./Sidebar";

import { useSocket } from "../socketContext";

import { useNavigate } from "react-router-dom";


//import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  // const [notifications,setNotifications ] = useState([]);
  
  // const socket = useSocket();

  // useEffect(() =>{
  //   socket?.on("getNotification", (data) =>{
  //     setNotifications((prev) =>[...prev, data]);
  //   })
  // },[socket]);

  // console.log(notifications)

  // const displayNotification=({senderName,type }) =>{
  //   let action;

  //   if (type ===1){
  //     action= "Liked"
  //   }else if(type ===2){
  //     action="commented"
  //   } else{
  //     action = "shared"
  //   }
  //   return(
  //     <span className="notification">{`${senderName} ${action} your post`}</span>
  //   )
  // }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);


  const handleClickNotif = () => {
    setShowNotification(!showNotification);
  };

  const togglesidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img className="menu1" src={menu} alt="no menu" />
        <img
          onClick={togglesidebar}
          id="showMenu"
          className="menu"
          src={menu}
          alt="no menu"
        />
        <img src={logo} alt="no logo" />
        <h1>Hiphonic</h1>
      </div>

      {isSidebarOpen && <Sidebar closeSidebar={togglesidebar} />}

      <div className="navbody">
        <div>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="navicons">
          <img src={message} alt="no-icon" />
          <span onClick={handleClickNotif}>
            <img src={notification} alt="no-icon" />
            {showNotification && <Notifications closeNote={handleClickNotif} />}
            <div className="counter">2</div>
          </span>
         
          <img src={profilePic} alt="no-icon" className="profilePic" />
          <span onClick={toggleLogout}>
            <img src={chevron} alt="no-icon" />
            {showLogout && (
              <button
                className="logout"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                <img src={logout} alt="" />
                Logout
              </button>
            )}
          </span>
        </div>
      </div>
      {/* <Navbody /> */}
    </div>
  );
};

export default Navbar;
