import "./friendsCard.scss";
import avi from "../assets/Avatar.png";
import verticalDots from "../assets/vertical-dots.png";
import { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const FriendCard = ({ user, onChildClick }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMessageInput, setShowMessageInput] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [client, setClient] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    setShowDropDown(!showDropDown);
  };

  const handleRemoveFriend = () => {
    console.log("Friend removed");
    setShowDropDown(false);
  };


  const handleSendMessage = () => {
    if (
      client &&
      client.readyState === client.OPEN &&
      messageText.trim() !== ""
    ) {
      client.send(
        JSON.stringify({ recipient: user.UserID, message: messageText })
      );
      setMessageText("");
      setShowMessageInput(false);
    }
  };

  return (
    <div className="friend">
      <div className="top">
        <div className="img">
          <img src={avi} alt="no-dp" />
        </div>
        <div className="details">
          <h4>{user.Username}</h4>
          <p>{user.TagName}</p>
        </div>
        <div className="dots">
          <img onClick={handleClick} src={verticalDots} alt="" />
          {showDropDown && (
            <div className="dropdown">
              <button onClick={handleRemoveFriend}>Remove Friend</button>
            </div>
          )}
        </div>
      </div>
      <div className="bottom">
        <button onClick={onChildClick}>Message</button>
      </div>
    
    </div>
  );
};

export default FriendCard;
