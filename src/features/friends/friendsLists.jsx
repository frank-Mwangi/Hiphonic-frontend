import ClipLoader from "react-spinners/ClipLoader";
import { useGetFriendsQuery } from "./friendsApi";
//import AllUsers from "./AllUsers";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import { useState, useEffect } from "react";
import FriendCard from "../../pages/FriendCard";
import { useGetUserQuery, useGetUsersQuery } from "../register/userApi";
import "./friendsList.scss";
import {
  useGetMessagesBySenderIDAndReceiverIDQuery,
  useGetMessagesBySenderIDQuery,
} from "../messages/messageApi";

const FriendsList = () => {
  const [following, setFollowing] = useState(true);
  const [showConversation, setShowConversation] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [client, setClient] = useState(null);
  const [showMessageInput, setShowMessageInput] = useState(false);

  const handleFriendMessageClick = (user) => {
    setSelectedUser(user);
    setShowConversation(true);
  };

  const loggedInUser = JSON.parse(localStorage.getItem("userDetails"));
  const UserID = loggedInUser.UserID;

  useEffect(() => {
    if (selectedUser) {
      const fetchData = async () => {
        try {
          // Fetch messages by sender ID and receiver ID
          const senderMessages =
            await useGetMessagesBySenderIDAndReceiverIDQuery(
              UserID,
              selectedUser.UserID
            ).unwrap();
          setMessages(senderMessages);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };

      fetchData();
    }
  }, [selectedUser]);

  useEffect(() => {
    const newClient = new W3CWebSocket("ws://localhost:5400");

    newClient.onopen = () => {
      console.log("WebSocket Client Connected");

      //const userID = JSON.parse(localStorage.getItem("userDetails")).UserID;
      newClient.send(JSON.stringify({ event: "messageID", userID }));
    };

    newClient.onmessage = (message) => {
      console.log("Received:", message);

      // Check if the message data is a Blob
      if (message.data instanceof Blob) {
        // Use FileReader to read the Blob content
        const reader = new FileReader();
        reader.onload = function (event) {
          try {
            const data = JSON.parse(event.target.result);
            console.log("Received JSON data:", data);

            // Check if the received data is a message intended for the current user
            if (data.sender === user.UserID) {
              console.log("the message being sent is ", data);
              setMessages((prevMessages) => [...prevMessages, data]);
            }
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        };
        reader.readAsText(message.data);
      } else {
        // Handle non-Blob data here (if necessary)
      }
    };

    newClient.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    setClient(newClient);

    return () => {
      if (newClient) {
        newClient.close();
      }
    };
  }, []);
  // SDSD

  const handleSendMessage = () => {
    if (
      client &&
      client.readyState === client.OPEN &&
      messageText.trim() !== ""
    ) {
      console.log("selecte user is", selectedUser);
      client.send(
        JSON.stringify({
          SenderID: user.UserID,
          ReceiverID: selectedUser.UserID,
          Content: messageText,
        })
      );
      setMessageText("");
      setShowMessageInput(false);
    }
  };

  //console.log(user);

  //console.log(UserID);

  const {
    data: friends,
    error: makosa,
    isLoading: inaload,
    isError: ikoNaMakosa,
    isFetching: inaFetch,
  } = useGetFriendsQuery(UserID);
  console.log(
    `Friends: ${friends}, error: ${makosa}, isLoading: ${inaload}, isError: ${ikoNaMakosa}, isFetching: ${inaFetch}`
  );

  //console.log("my messages are ", messages);

  // const {
  //   data: user1,
  //   error,
  //   isLoading,
  //   isError,
  //   isFetching,
  // } = useGetUserQuery(UserID);

  //console.log("User1 ni:", user1);

  const {
    data: allUsers,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetUsersQuery();

  console.log(allUsers);
  let nonFriends;

  if (allUsers) {
    // const filteredFriends = allUsers.filter(
    //   (user) => !friends.some((friend) => friend.Username === user.Username)
    // );

    // console.log("filtered Friends", filteredFriends);
    // const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    // const notFollowedUsers = users.filter(user => !followedUsers.find(followedUser => followedUser.id === user.id));

    // console.log(notFollowedUsers);

    nonFriends = allUsers.filter(
      (user) => !friends.find((friend) => friend.UserID == user.UserID)
    );
  }

  //console.log("Friends are: ", friends);

  //console.log("Non Friends are: ", nonFriends);

  // const handleClick = () => {
  //   console.log("users on click is ", typeof nonFriends, nonFriends);
  //   setFollowing(!following);
  // };

  const handleChildClick = (user) => {
    setShowConversation(true);
    setSelectedUser(user);
  };

  return (
    <div className="friends-list">
      {isError ||
        error ||
        ikoNaMakosa ||
        (makosa && <div>Error: {error.data}</div>)}
      {isLoading ||
        isFetching ||
        inaload ||
        (inaFetch && <ClipLoader color="#000" loading={true} size={150} />)}
      <div className="suggested-friends-title">
        <span onClick={() => setFollowing(false)}>Suggested</span>
        <span onClick={() => setFollowing(true)}>Following</span>
      </div>
      <section
        className="user-container"
        style={{ border: "solid 10px", display: "flex" }}
      >
        <div>
          {following ? (
            friends &&
            friends.map((friend, index) => (
              <FriendCard
                key={index}
                user={friend}
                onChildClick={() => handleChildClick(friend)}
              />
            ))
          ) : nonFriends.length > 0 ? (
            nonFriends.map(
              (
                user,
                index // Check this line
              ) => <FriendCard key={index} user={user} />
            )
          ) : (
            <p>No suggested friends</p>
          )}
        </div>
        <div>
          {showConversation && (
            <div>
              <h1>{selectedUser.Username} Chat Conversation History</h1>
              <div className="conversation">
                <ul>
                  {/* Display conversation history here */}
                  {messages.map((message, index) => (
                    <li key={index}>{message.message}</li>
                  ))}
                </ul>
              </div>
              <div className="message-input">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FriendsList;
