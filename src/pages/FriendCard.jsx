import "./friendsCard.scss";
import avi from "../assets/Avatar.png";
import verticalDots from "../assets/vertical-dots.png";
import { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {
  useAddFriendshipMutation,
  //  useDeleteFriendshipByIDMutation,
  useDeleteFriendshipMutation,
} from "../features/friends/friendsApi";
import {
  SuccessToast,
  ErrorToast,
  ToasterContainer,
  LoadingToast,
} from "../components/Toaster";

const FriendCard = ({ user, onChildClick }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMessageInput, setShowMessageInput] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [client, setClient] = useState(null);
  const [isFriend, setIsFriend] = useState(false);
  const [addFriendship, { isLoading }] = useAddFriendshipMutation();
  const [deleteFriendshipByID, { isLoading: itsLoading }] =
    useDeleteFriendshipMutation();
  const loggedInUser = JSON.parse(localStorage.getItem("userDetails"));

  //const UserID = user.UserID;
  //console.log("Who dis?", UserID);
  const handleClick = (e) => {
    e.preventDefault();
    setShowDropDown(!showDropDown);
  };
  // console.log("user ids",{ User1ID: loggedInUser.UserID, User2ID: user.UserID });
  const handleRemoveFriend = async () => {
    try {
      await deleteFriendshipByID ({User1ID:loggedInUser.UserID, User2ID
        :user.UserID});
      setIsFriend(false);
      setShowDropDown(false);
      SuccessToast("Friend removed successfully");
    } catch (error) {
      console.error("Error removing friend:", error);
      ErrorToast("Failed to remove friend. Please try again.");
    }
  };

  const handleAddFriend = async () => {
    try {
      console.log(user);
      await addFriendship({
        User1ID: loggedInUser.UserID,
        User2ID: user.UserID,
        FriendshipDate: new Date().toISOString(),
      });
      setIsFriend(true);
      setShowDropDown(false);
      SuccessToast("Friend added successfully");
    } catch (error) {
      console.error("Error adding friend:", error);
      ErrorToast("Failed to add friend. Please try again.");
    }
  };

  // const handleRemoveFriend = async () => {
  //   console.log("Friend removed");
  //   setShowDropDown(false);
  //   setIsFriend(false);
  //   setShowDropDown( false );

  // };

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
          <ToasterContainer />
          <h4>{user.Username}</h4>
          <p>{user.TagName}</p>
        </div>
        <div className="dots">
          <img onClick={handleClick} src={verticalDots} alt="" />
          {showDropDown && (
            <div className="dropdown">
              {isFriend ? (
                <button onClick={handleRemoveFriend}>
                  {itsLoading ? "Removing.." : "Remove Friend"}
                </button>
              ) : (
                <button onClick={handleAddFriend}>
                  {isLoading ? "Adding.." : "Add Friend"}
                </button>
              )}
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
//   <div className="friend">
//     <div className="top">
//       <div className="img">
//         <img src={avi} alt="no-dp" />
//       </div>
//       <div className="details">
//         <h4>{user.Username}</h4>
//         <p>{user.TagName}</p>
//       </div>
//       <div className="dots">
//         <img onClick={handleClick} src={verticalDots} alt="" />
//         {showDropDown && (
//           <div className="dropdown">
//             <button onClick={handleRemoveFriend}>Remove Friend</button>
//           </div>
//         )}
//       </div>
//     </div>
//     <div className="bottom">
//       <button onClick={onChildClick}>Message</button>
//     </div>

//   </div>
// );
// };

export default FriendCard;
