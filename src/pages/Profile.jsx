import React from "react";
import "./profile.scss";
import CompleteProfile from "../components/CompleteProfile";
import Intro from "../features/Intro";
import NewPost from "../components/NewPost";
import Post from "../features/Post";
import Gallery from "../features/Gallery";

const Main = () => {
  return (
    <div className="main">
      <div className="profile-info">
        <CompleteProfile />
        <Intro />
        <div className="buttons">
          <h4>Photos</h4>
          <p>See all</p>
        </div>
        <div className="photo-wrapper">
          <Gallery />
        </div>
      </div>
      <div className="timeline">
        <NewPost />
        <Post />
      </div>
    </div>
  );
};

export default Main;