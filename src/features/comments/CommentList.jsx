import ClipLoader from "react-spinners/ClipLoader";
import Post from "../Post";
//import "./postLists.scss";
import { useGetPostCommentsQuery } from "./commentApi";
import {
  ErrorToast,
  LoadingToast,
  SuccessToast,
} from "../../components/Toaster";
import Comment from "./Comment";

const CommentList = ({ PostID }) => {
  console.log(PostID);
  const {
    data: comments,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetPostCommentsQuery(PostID, { refetchOnReconnect: true });

  //   const [getPostComments, { isLoading }] = useGetPostCommentsQuery();
  //   try {
  //     LoadingToast();
  //     const response = await getPostComments(post.PostID).unwrap();
  //     SuccessToast(response.message);
  //   } catch (error) {
  //     LoadingToast(false);
  //     console.error(error);
  //     ErrorToast(error);
  //   }
  console.log(
    `Comments: ${comments}, Error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
  );

  if (isLoading || isFetching) {
    LoadingToast();
    return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (isError) {
    LoadingToast(false);
    return (
      <div>
        {ErrorToast(error.data ? error.data.message : "An error occurred")}
        Error: {error.data ? error.data.message : "An error occurred"}
      </div>
    );
  }
  return (
    <div className="postsList">
      <section className="posts-container">
        {comments &&
          [...comments]
            .sort((a, b) => b.CommentID - a.CommentID)
            .map((comment, index) => <Comment key={index} comment={comment} />)}
      </section>
    </div>
  );
};

export default CommentList;
