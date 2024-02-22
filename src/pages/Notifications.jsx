import React from "react";
import avatar0 from "../assets/Avatar (1).png";
import avatar1 from "../assets/Avatar (2).png";
import avatar2 from "../assets/Avatar (4).png";
import avatar3 from "../assets/Avatar (5).png";
import avatar4 from "../assets/Avatar (6).png";
import avatar5 from "../assets/Avatar (7).png";
import avatar6 from "../assets/Avatar (8).png";
import "./notifications.scss";

const Notifications = ({ closeNote }) => {
  const notifs = [
    {
      icon: avatar0,
      name: "Bessie Cooper",
      message: "Started following you",
    },
    {
      icon: avatar1,
      name: "Marvin McKinney",
      message: "Joined the UI Official group",
    },
    {
      icon: avatar2,
      name: "Courtney Henry",
      message: "Joined the UI Official group",
    },
    {
      icon: avatar3,
      name: "Darrell Steward",
      message: "Joined the UI Official group",
    },
    {
      icon: avatar4,
      name: "Esther Howard",
      message: "Joined the UI Official group",
    },
    {
      icon: avatar5,
      name: "Esther Howard",
      message: "Joined the UI Official group",
    },
    {
      icon: avatar6,
      name: "Kathryn Murphy",
      message: "Joined the UI Official group",
    },
  ];

  return (
    <div className="notifs-container">
      <div className="notifs">
        <div className="heading">
          <h2>Notification</h2>
          <button onClick={closeNote}>X</button>
        </div>
        <div className="buttons">
          <span>All Notifications</span>
          <span>Unread</span>
        </div>

        {notifs &&
          notifs.map((item, index) => (
            <div className="notif" key={index}>
              <img src={item.icon} alt="no-icon" />
              <div className="notif-details">
                <h4>{item.name}</h4>
                <p>{item.message}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notifications;
