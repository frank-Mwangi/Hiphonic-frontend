import React from "react";
import avi from "../assets/Avatar.png";
import avi1 from "../assets/Avatar (1).png";
import avi2 from "../assets/Avatar (2).png";
import avi3 from "../assets/Avatar (4).png";
import avi4 from "../assets/Avatar (5).png";
import avi5 from "../assets/Avatar (6).png";
import avi6 from "../assets/Avatar (7).png";
import avi7 from "../assets/Avatar (8).png";
import avi8 from "../assets/Avatar (6).png";
import avi9 from "../assets/Avatar (2).png";
import "./friends.scss";
import verticalDots from "../assets/vertical-dots.png";

const Friends = () => {
  const friends = [
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi,
    },
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi1,
    },
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi2,
    },
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi3,
    },
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi4,
    },
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi5,
    },
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi6,
    },
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi7,
    },
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi8,
    },
    {
      name: "Angela Lee",
      handle: "anglee",
      dp: avi9,
    },
  ];

  return (
    <div className="friends">
      {friends &&
        friends.map((friend, index) => {
          return (
            <div className="friend" key={index}>
              <div className="top">
                <div className="img">
                  <img src={friend.dp} alt="no-dp" />
                </div>
                <div className="details">
                  <h4>{friend.name}</h4>
                  <p>@{friend.handle}</p>
                </div>
                <div className="dots">
                  <img src={verticalDots} alt="" />
                </div>
              </div>
              <div className="bottom">
                <button>Message</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Friends;
