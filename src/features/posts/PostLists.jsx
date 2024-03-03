import ClipLoader from "react-spinners/ClipLoader";
import Post from "../Post";
import { useGetPostsQuery } from "./postApi";
import "./postLists.scss";

const PostLists = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetPostsQuery({ refetchOnReconnect: true });

  // const response = useGetPostsQuery();
  console.log("Response ni: ", posts);
  console.log(
    `Posts: ${posts}, Error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
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
    <div className="postsList">
      <section className="posts-container">
        {posts &&
          [...posts]
            .sort((a, b) => b.PostID - a.PostID)
            .map((post, index) => <Post key={index} post={post} />)}
      </section>
    </div>
  );
};

export default PostLists;
