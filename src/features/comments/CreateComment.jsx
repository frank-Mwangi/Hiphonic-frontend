import {
  SuccessToast,
  ErrorToast,
  ToasterContainer,
  LoadingToast,
} from "../../components/Toaster";
import { useCreateCommentMutation } from "./commentApi";
import "./createComment.scss";

const CreateComment = ({ post, handleWriteComment, handleCommentCount }) => {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const [addComment, { isLoading }] = useCreateCommentMutation();
  const handleSubmit = async (e) => {
    // LoadingToast();
    e.preventDefault();
    if (e.target[0].value === "") {
      ErrorToast("Comment cannot be blank");
    } else {
      try {
        const response = await addComment({
          PostID: post.PostID,
          UserID: user.UserID,
          Content: e.target[0].value,
        }).unwrap();
        console.log(response);
        SuccessToast(response.message);
        e.target.reset();
        handleCommentCount();
        handleWriteComment();
      } catch (error) {
        console.error("Failed to add post:", error);
        ErrorToast(error);
      }
    }
  };

  return (
    <section className="comment-form">
      <ToasterContainer />
      <div className="comment-modal">
        <div className="form-title">
          <h2>Add a New Comment</h2>
          <button onClick={handleWriteComment}>X</button>
        </div>
        <form onSubmit={handleSubmit} className="comment-form">
          <label className="form-input" htmlFor="commentContent">
            Content:
            <textarea id="commentContent" name="commentContent" />
          </label>
          <button type="submit">
            {isLoading ? "Loading" : "Save Comment"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateComment;
