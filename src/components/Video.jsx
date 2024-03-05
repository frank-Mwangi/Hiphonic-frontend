import React from "react";
import { useDeleteVideoMutation } from "../features/videos/videosApi";
import { SuccessToast } from "./Toaster";

const Video = ({ video }) => {
  const [deleteVideo, { isLoading }] = useDeleteVideoMutation();
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const handleDelete = async () => {
    console.log(video);
    response = await deleteVideo(video.VideoID).unwrap();
    console.log(response.message);
    SuccessToast(response.message);
  };
  return (
    <div className="card">
      <video src={video.VideoURL} controls></video>
      <div className="caption">
        <h5>{video.Category}</h5>
        <span className="cascadedd-images"></span>
      </div>
      <button>See all</button>
      {video.UserID == user.UserID && (
        <button onClick={handleDelete}>
          {isLoading ? "Deleting" : "Delete"}
        </button>
      )}
    </div>
  );
};

export default Video;
