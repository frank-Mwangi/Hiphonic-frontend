import avi from "../assets/Avatar.png";
import liveVideo from "../assets/videos.png";
import image from "../assets/photo.png";
import star from "../assets/star.png";
import "./newpost.scss";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useAddPostMutation } from "../features/posts/postApi";
//import { useState } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import CreateVideo from "../features/videos/CreateVideo";
//import { addPost } from "../features/posts/postSlice";

const NewPost = ({ children }) => {
  const [addPost, { isLoading }] = useAddPostMutation();
  const [uploadVideo, setUploadVideo] = useState(false);
  const postRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postRef.current.value) {
      alert("Post cannot be blank");
    } else {
      addPost({
        UserID: user.UserID,
        Content: postRef.current.value,
      });
      postRef.current.value = null;
    }
  };

  const handleHitUpload = () => {
    setUploadVideo(!uploadVideo);
    console.log("Hit!");
  };
  return (
    <div className="newpost">
      {children}
      <div className="input">
        <img src={avi} alt="no-pic" />
        <input
          type="text"
          name=""
          id=""
          ref={postRef}
          placeholder="What's on your mind?"
        />
        <button onClick={handleSubmit} type="submit">
          <LuSend />
        </button>
      </div>
      <div className="options">
        <span className="option" onClick={handleHitUpload}>
          <button>
            <img src={liveVideo} alt="" />

            <p>Video</p>
          </button>
        </span>
        {uploadVideo &&
          createPortal(
            <CreateVideo closeModal={handleHitUpload} />,
            document.body
          )}
        <div className="option">
          <img src={image} alt="" />
          <p>Image</p>
        </div>
        <div className="option">
          <img src={star} alt="" />
          <p>Activity</p>
        </div>
      </div>
    </div>
  );
};
export default NewPost;
