import React from "react";
import avi from "../assets/Avatar.png";
import liveVideo from "../assets/videos.png";
import image from "../assets/photo.png";
import star from "../assets/star.png";
import "./newpost.scss";

const NewPost = () => {
  return (
    <div className="newpost">
      <div className="input">
        <img src={avi} alt="no-pic" />
        <input type="text" name="" id="" placeholder="What's on your mind?" />
      </div>
      <div className="options">
        <div className="option">
          <img src={liveVideo} alt="" />
          <p>Live Video</p>
        </div>
        <div className="option">
          <img src={image} alt="" />
          <p>Image/Video</p>
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
