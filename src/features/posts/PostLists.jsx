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

  console.log(
    `Posts: ${posts}, Error: ${JSON.stringify(
      error
    )}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
  );

  if (isLoading || isFetching) {
    return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (error || isError || posts.length == 0) {
    console.log("Error caught");
    return <div>Error: {"An error occurred. Couldn't fetch posts"}</div>;
  } else {
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
  }
};
export default PostLists;
