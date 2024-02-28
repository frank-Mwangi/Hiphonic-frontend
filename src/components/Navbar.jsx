import React from "react";
import "./navbar.scss";
//import Navbody from "./Navbody";
//import Search from "./Search";
//import Navicons from "./Navicons";
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
//import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleClickNotif = () => {
    setShowNotification(!showNotification);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const togglesidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img className="menu1" src={menu} alt="no menu" />
        <img onClick={togglesidebar}  id="showMenu" className="menu" src={menu} alt="no menu" />
        <img src={logo} alt="no logo" />
        <h1>Hiphonic</h1>      

      </div>

      {isSidebarOpen && <Sidebar closeSidebar={togglesidebar}/>}

      <div className="navbody">
        <div>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="navicons">
          <img src={message} alt="no-icon" />
          <span onClick={handleClickNotif}>
            <img src={notification} alt="no-icon" />
            {showNotification && <Notifications closeNote={handleClickNotif} />}
          </span>
          <img src={profilePic} alt="no-icon" className="profilePic" />
          <img src={chevron} alt="no-icon" />
        </div>
      </div>
      {/* <Navbody /> */}
    </div>
  );
};

export default Navbar;
