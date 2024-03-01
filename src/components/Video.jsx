import React from "react";
import { useDeleteVideoMutation } from "../features/videos/videosApi";

const Video = ({ video }) => {
  const [deleteVideo] = useDeleteVideoMutation();
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const handleDelete = async (video) => {
    if (video.UserID == user.UserID) {
      await deleteVideo(video.VideoID).unwrap();
    }
  };
  return (
    <div className="card">
      <video src={video.VideoURL} controls></video>
      <div className="caption">
        <h5>{video.Category}</h5>
        <span className="cascaded-images"></span>
      </div>
      <button>See all</button>
    </div>
  );
};

export default Video;
