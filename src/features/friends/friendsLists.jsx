import ClipLoader from "react-spinners/ClipLoader";
import { useGetFriendsQuery } from "./friendsApi";
//import AllUsers from "./AllUsers";
import { useState } from "react";
import FriendCard from "../../pages/FriendCard";
import { useGetUserQuery } from "../register/userApi";
import './friendsList.scss';

const FriendsList = () => {
  const [following, setFollowing] = useState(true);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  console.log(user);
  const UserID = user.UserID;
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
    data: users,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetUserQuery();

  console.log(
    `Suggested: ${users}, error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
  );

  const handleClick = () => {
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
        {following
          ? friends &&
            friends.map((friend, index) => (
              <FriendCard key={index} user={friend} />
            ))
          : users &&
            users.map((user, index) => {
              <FriendCard key={index} user={user} />;
            })}
      </section>
    </div>
  );
};

export default FriendsList;
