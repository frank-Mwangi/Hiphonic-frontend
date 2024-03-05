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
    `Posts: ${posts}, Error: ${JSON.stringify(
      error
    )}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
  );

  if (isLoading || isFetching) {
    return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (isError || error) {
    return <div>Error: {error}</div>;
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

export default UserPostList;
