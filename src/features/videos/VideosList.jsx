import React from "react";
import search from "../../assets/search.png";
//import music from "../../assets/music.mp4";
//import kids from "../../assets/kids.mp4";
//import family from "../../assets/family.mp4";
import cooking from "../../assets/cooking.mp4";
import avi from "../../assets/Avatar.png";
import dots from "../../assets/vertical-dots.png";
import "./videos.scss";
import {
  useGetVideosQuery,
  useGetVideosUploadedByUserQuery,
} from "./videosApi";
import Video from "../../components/Video";
import ClipLoader from "react-spinners/ClipLoader";

const VideosList = () => {
  const {
    data: videos,
    error,
    isError,
    loading,
    isLoading,
  } = useGetVideosQuery({ refetchOnReconnect: true });

  // console.log(
  //   `Videos: ${videos}, Error: ${error}, isError: ${isError}, Loading: ${loading}, isLoading: ${isLoading}`
  // );

  const user = JSON.parse(localStorage.getItem("userDetails"));
  const {
    data: userVideos,
    error: err,
    isError: isErr,
    loading: fetching,
    isLoading: isFetching,
  } = useGetVideosUploadedByUserQuery({ refetchOnReconnect: true });

  // console.log(
  //   `UserVideos: ${userVideos}, Error: ${err}, isError: ${isErr}, Loading: ${fetching}, isLoading: ${isFetching}`
  // );

  //   [...videos].sort((a, b) => {
  //     return b.id - a.id;
  //   });

  //[...userVideos].sort((a, b) => b.id - a.id);

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
          {(isLoading || loading) && (
            <ClipLoader color="#000" loading={true} size={150} />
          )}
          {isError && <div>Error: {error.data.message}</div>}
          {videos &&
            [...videos]
              .sort((a, b) => b.VideoID - a.VideoID)
              .map((video, index) => <Video key={index} video={video} />)}
        </div>
      </div>
      <div className="bottom">
        <div className="handle">
          <div className="personal-details">
            <img src={avi} alt="no-avi" />
            <span>
              <h6>{user.Username}</h6>
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
          {/* {(fetching || isFetching) && (
            <ClipLoader color="#000" loading={true} size={150} />
          )}
          {isErr && <div>Error: {err.data.message}</div>}
          {userVideos.length == 0 && (
            <div>
              <p>No videos found</p>
            </div>
          )}
          {<video src={userVideos[0].VideoURL} controls></video>} */}
          <video src={cooking} controls></video>
        </div>
      </div>
    </div>
  );
};

export default VideosList;
