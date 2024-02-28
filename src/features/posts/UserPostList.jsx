import React from "react";
import { useGetPostsByUserQuery } from "./postApi";
import ClipLoader from "react-spinners/ClipLoader";

const UserPostList = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetPostsByUserQuery({ refetchOnReconnect: true });
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
      <h2>Posts here</h2>
      <section className="posts-container">
        {console.log(posts)}
        {posts && posts.map((post, index) => <Post key={index} post={post} />)}
      </section>
    </div>
  );
};

export default UserPostList;
