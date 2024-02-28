import React from "react";
import { useGetPostsByUserQuery } from "./postApi";
import Post from "../Post";
import ClipLoader from "react-spinners/ClipLoader";

const UserPostList = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const UserID = user.UserID;
  const {
    data: posts,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetPostsByUserQuery(UserID);
  console.log(
    `Posts: ${posts}, Error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
  );

  if (isLoading || isFetching) {
    return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (isError) {
    return <div>Error: {error.data.message}</div>;
  }
  return (
    <div className="postsList">
      <section className="posts-container">
        {posts && posts.map((post, index) => <Post key={index} post={post} />)}
      </section>
    </div>
  );
};

export default UserPostList;
