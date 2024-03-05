import React from "react";
import { useGetPostsByIDQuery } from "../features/posts/postApi";
import CommentList from "../features/comments/CommentList";
import Post from "../features/Post";
import ClipLoader from "react-spinners/ClipLoader";

const CommentsPage = ({ PostID }) => {
  const {
    data: post,
    isLoading,
    isFetching,
    error,
    isError,
  } = useGetPostsByIDQuery(PostID);
  console.log(
    `Post: ${post}, isLoading: ${isLoading}, isFetching: ${isFetching}, Error: ${Error}, isError: ${isError}`
  );
  if (isLoading || isFetching) {
    return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (isError) {
    return (
      <div>Error: {error.data ? error.data.message : "An error occurred"}</div>
    );
  }

  return (
    <div>
      <Post post={post} />
      <CommentList PostID={PostID} />
    </div>
  );
};

export default CommentsPage;
