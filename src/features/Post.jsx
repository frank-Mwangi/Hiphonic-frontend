// import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import avi from "../assets/Avatar.png";
// import photo1 from "../assets/photo2.png";
// import photo2 from "../assets/photo1.png";
import heart from "../assets/heart.png";
import comment from "../assets/message-circle.png";
import share from "../assets/share.png";
import verticaldots from "../assets/vertical-dots.png";
import trash from "../assets/delete.png";
import edit from "../assets/edit.png";
// import emoji from "../assets/mood-smile.png";
// import link from "../assets/link.png";
import "./post.scss";
// import { useGetPostsQuery } from "./posts/postApi";
import { useState } from "react";

import { useSocket } from "../socketContext";

import CommentList from "./comments/CommentList";
import { Route, Routes } from "react-router-dom";
import CommentsPage from "../pages/CommentsPage";
import { createPortal } from "react-dom";
import CreateComment from "./comments/CreateComment";
import { useDeletePostMutation, useUpdatePostMutation } from "./posts/postApi";
import {
  ErrorToast,
  LoadingToast,
  SuccessToast,
  ToasterContainer,
} from "../components/Toaster";
import EditPost from "./posts/EditPost";

const Post = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [shares, setShares] = useState(0);

  const socket = useSocket();

  const [showComments, setShowComments] = useState(false);
  const [writeComment, setWriteComment] = useState(false);
  const [showEditPostForm, setShowEditPostForm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const user = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();

  const [deletePost, { isLoading }] = useDeletePostMutation();
  //const [updatePost, { isLoading: loading }] = useUpdatePostMutation();

  const handleDelete = async () => {
    LoadingToast();
    try {
      const response = await deletePost(post.PostID).unwrap();
      SuccessToast(response.message);
    } catch (error) {
      LoadingToast(false);
      ErrorToast(error.message);
    }
  };

  const handleEdit = () => {
    setShowEditPostForm(!showEditPostForm);
  };

  // const handleEdit = async () => {
  //   LoadingToast();
  //   try {
  //     const response = await updatePost(post).unwrap()
  //     SuccessToast(response.message)
  //   } catch (error) {

  //   }
  // }

  const handlePostClick = () => {
    setShowComments(!showComments);
    // navigate(`/comments/post/${post.PostID}`);
  };

  const handleWriteComment = () => {
    setWriteComment(!writeComment);
  };

  const handleCommentCount = () => {
    setComments(comments + 1);
  };

  const handleNotification = (type) => {
    console.log("Sending notification...");
    console.log("Sender:", user.Username);
    console.log("Receiver:", post.Username);
    console.log("Type:", type);

    setLikes(true);

    socket.emit("sendNotification", {
      senderName: user.Username,
      receiverName: post.Username,
      type,
    });
  };

  return (
    <div>
      <ToasterContainer />
      <section className="post" onClick={handlePostClick}>
        <div className="handle">
          <img src={avi} alt="no-avi" />
          <div className="name">
            <h4>{post.Username}</h4>
            <h5>{post.TagName}</h5>
            <p>56 mins ago</p>
          </div>
        </div>
        <div className="textContent">
          <p>{post.Content}</p>
        </div>
        {/* <div className="images">
            <img className="img1" src={photo1} alt="no-pic" />
            <img src={photo2} alt="no-pic" />
          </div> */}

        <div className="impressions">
          <div className="impression" onClick={() => setLikes(likes + 1)}>
            <img
              src={heart}
              alt="like-icon"
              onClick={() => handleNotification(1)}
            />
            <p>
              {likes}
              <span> Likes</span>
            </p>
          </div>

          {/* <div className="impressions">
          <div className="impression" onClick={() => setLikes(likes + 1)}>
            <img src={heart} alt="like-icon" />
            <p>
              {likes}
              <span> Likes</span>
            </p>
          </div> */}
          <div className="impression" onClick={handleWriteComment}>
            <img src={comment} alt="comment-icon" />
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
          {user.UserID === post.UserID && (
            // <div
            //   className="impression"
            //   onClick={() => setShowOptions(!showOptions)}
            // >

            //   <img src={comment} alt="comment-icon"
            //   onClick={()=>handleNotification(2)}
            //   />
            //   <p>
            //     {comments}
            //     <span> Comments</span>
            //   </p>
            // </div>
            <div className="impression" onClick={() => setShares(shares + 1)}>
              <img
                src={share}
                alt="share-icon"
                onClick={() => handleNotification(3)}
              />
              <p>
                {shares}
                <span> Share</span>
              </p>

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
          {writeComment &&
            createPortal(
              <CreateComment
                handleWriteComment={handleWriteComment}
                handleCommentCount={handleCommentCount}
                post={post}
              />,
              document.getElementById("root")
            )}
          {showEditPostForm &&
            createPortal(
              <EditPost handleEdit={handleEdit} post={post} />,
              document.body
            )}
        </div>
        {/* <Routes>
          <Route
            path={`/comments/post/${post.PostID}`}
            element={<CommentsPage PostID={post.PostID} />}
          />
        </Routes> */}
        {/* {console.log(post)} */}
        {showComments && <CommentList PostID={post.PostID} />}
      </section>
    </div>
  );
};

export default Post;
