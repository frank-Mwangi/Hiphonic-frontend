// import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import avi from "../../assets/Avatar.png";
// import photo1 from "../assets/photo2.png";
// import photo2 from "../assets/photo1.png";
import heart from "../../assets/heart.png";
import commenti from "../../assets/message-circle.png";
import share from "../../assets/share.png";
import verticaldots from "../../assets/vertical-dots.png";
// import emoji from "../assets/mood-smile.png";
// import link from "../assets/link.png";
import "./comment.scss";
// import { useGetPostsQuery } from "./posts/postApi";
import { useState } from "react";
//import CommentList from "./comments/CommentList";
import { Route, Routes } from "react-router-dom";
import { useDeleteCommentMutation } from "./commentApi";

const Comment = ({ comment }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const [deleteComment, { isLoading }] = useDeleteCommentMutation();

  const handleDelete = async () => {
    LoadingToast();
    try {
      const response = await deleteComment(comment.CommentID).unwrap();
      SuccessToast(response.message);
    } catch (error) {
      LoadingToast(false);
      ErrorToast(error.message);
    }
  };

  const user = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();

  return (
    <div className="comment-container">
      <section
        className="post"
        onClick={() => {
          setShowComments(!showComments);
        }}
      >
        <div className="handle">
          <img src={avi} alt="no-avi" />
          <div className="name">
            <h4>{comment.Username}</h4>
            <h5>{comment.TagName}</h5>
            <p>56 mins ago</p>
          </div>
        </div>
        <div className="textContent">
          <p>{comment.Content}</p>
        </div>
        {/* <div className="images">
            <img className="img1" src={photo1} alt="no-pic" />
            <img src={photo2} alt="no-pic" />
          </div> */}
        <div className="impressions">
          <div className="impression" onClick={() => setLikes(likes + 1)}>
            <img src={heart} alt="like-icon" />
            <p>
              {likes}
              <span> Likes</span>
            </p>
          </div>
          <div className="impression" onClick={() => setComments(comments + 1)}>
            <img src={commenti} alt="comment-icon" />
            <p>
              {comments}
              <span> Comments</span>
            </p>
          </div>
          <div className="impression" onClick={() => setShares(shares + 1)}>
            <img src={share} alt="share-icon" />
            <p>
              {shares}
              <span> Share</span>
            </p>
          </div>
          {user.UserID === comment.UserID && (
            <div
              className="impression"
              onClick={() => setShowOptions(!showOptions)}
            >
              <img src={verticaldots} alt="options" />
            </div>
          )}
          {showOptions && (
            <div className="options">
              <span onClick={handleEdit}>
                <img src={edit} alt="edit-icon" />
                <p>Edit</p>
              </span>
              <span onClick={handleDelete}>
                <img src={trash} alt="delete-icon" />
                <p>{isLoading ? "Deleting.." : "Delete"}</p>
              </span>
            </div>
          )}
        </div>

        {/* {console.log(post)} */}
      </section>
    </div>
  );
};

export default Comment;
