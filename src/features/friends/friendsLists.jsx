import ClipLoader from "react-spinners/ClipLoader";
import { useGetFriendsQuery } from "./friendsApi";
//import AllUsers from "./AllUsers";
import { useState } from "react";
import FriendCard from "../../pages/FriendCard";
import { useGetUserQuery, useGetUsersQuery } from "../register/userApi";
import "./friendsList.scss";

const FriendsList = () => {
  const [following, setFollowing] = useState(true);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  console.log(user);
  const UserID = user.UserID;
  console.log(UserID);
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

  const {
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetUserQuery(UserID);

  const { data: users2 } = useGetUsersQuery();

  console.log( users2 );
  let nonFriends; 
  if ( users2 )
  {
    
    const filteredFriends = users2.filter(
      (user) => !friends.some((friend) => friend.Username === user.Username)
    );

    console.log("filtered Friends", filteredFriends);
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    nonFriends = filteredFriends.filter(
      (user) => user.UserID !== userDetails.UserID
    );
  }
  

  console.log("Non Friends are: ", nonFriends);

  const handleClick = () =>
  {
    console.log("users on click is ",typeof(nonFriends), nonFriends);
    setFollowing(!following);
  };

  return (
    <div className="friends-list">
      {isError && <div>Error: {error.data}</div>}
      {isLoading ||
        (isFetching && <ClipLoader color="#000" loading={true} size={150} />)}
      <div className="suggested-friends-title">
        <span onClick={handleClick}>Following</span>
        <span onClick={handleClick}>Suggested</span>
      </div>
      <section className="user-container">
        {following ? (
          friends &&
          friends.map((friend, index) => (
            <FriendCard key={index} user={friend} />
          ))
        ) : nonFriends ? (
          nonFriends.map(
            (
              user,
              index // Check this line
            ) => <FriendCard key={index} user={user} />
          )
        ) : (
          <p>No suggested friends</p>
        )}
      </section>
    </div>
  );
};

export default FriendsList;
