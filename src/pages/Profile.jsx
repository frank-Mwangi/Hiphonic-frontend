import "./profile.scss";
import CompleteProfile from "../components/CompleteProfile";
import Intro from "../features/Intro";
import NewPost from "../components/NewPost";
//import Post from "../features/Post";
import Gallery from "../features/Gallery";
import UserPostList from "../features/posts/UserPostList";

// import { useEffect, useState } from "react";

const Main = () => {
  // const token = localStorage.getItem("token");
  // console.log("token is ", token);
  // const [auth, setAuth] = useState(false);

  // useEffect(() => {
  //   if (token != null) {
  //     setAuth(true);
  //   }
  // }, [token]);

  // console.log(auth);
  return (
    <>
      {/* {!auth ? (
        <>Not Authirzed</>
      ) : ( */}
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
          <UserPostList />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Main;
