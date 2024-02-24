import React from "react";
import search from "../assets/search.png";
import music from "../assets/music.mp4";
import kids from "../assets/kids.mp4";
import family from "../assets/family.mp4";
import cooking from "../assets/cooking.mp4";
import avi from "../assets/Avatar.png";
import dots from "../assets/vertical-dots.png";
import "./videos.scss";

const Videos = () => {
  return (
    <div className="videos-page">
      <div className="top">
        <div className="title">
          <h2>Video</h2>
          <div className="searchfield">
            <input type="text" placeholder="Search..." />
            <span>
              <img src={search} alt="" />
            </span>
          </div>
        </div>
        <div className="categories">
          <h4>Categories to explore</h4>
          <span>See all</span>
        </div>
        <div className="hero">
          <div className="card">
            <video src={music} controls></video>
            <div className="caption">
              <h5>Music</h5>
              <span className="cascaded-images"></span>
            </div>
            <button>See all</button>
          </div>
          <div className="card">
            <video src={family} controls></video>
            <div className="caption">
              <h5>Family</h5>
              <span className="cascaded-images"></span>
            </div>
            <button>See all</button>
          </div>
          <div className="card">
            <video src={kids} controls></video>
            <div className="caption">
              <h5>Kids</h5>
              <span className="cascaded-images"></span>
            </div>
            <button>See all</button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="handle">
          <div className="personal-details">
            <img src={avi} alt="no-avi" />
            <span>
              <h6>Angela Lee</h6>
              <p>56 mins ago</p>
            </span>
          </div>
          <span>
            <img src={dots} alt="no-icon" />
          </span>
        </div>
        <div className="text">
          <p>
            The happiness you get when you serve your food to family members and
            their smile and satisfaction is beyond. Do some experiment, feel the
            energy, share the happiness, fulfil your urge, and finally relieve
            your stress.
          </p>
        </div>
        <div className="video">
          <video src={cooking} controls></video>
        </div>
      </div>
    </div>
  );
};

export default Videos;
