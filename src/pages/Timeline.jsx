import avatar0 from "../assets/Avatar.png";
import avatar1 from "../assets/Avatar (1).png";
import avatar2 from "../assets/Avatar (2).png";
import avatar3 from "../assets/Avatar (4).png";
import avatar4 from "../assets/Avatar (5).png";
import avatar5 from "../assets/Avatar (6).png";
import avatar6 from "../assets/Avatar (7).png";
import avatar7 from "../assets/Avatar (8).png";
import NewPost from "../components/NewPost";
//import Post from "../features/Post";
import "./timeline.scss";
import PostLists from "../features/posts/PostLists";

const Timeline = () => {
  const stories = [
    {
      handle: "anglee",
      icon: avatar0,
    },
    {
      handle: "anglee",
      icon: avatar1,
    },
    {
      handle: "anglee",
      icon: avatar2,
    },
    {
      handle: "anglee",
      icon: avatar3,
    },
    {
      handle: "anglee",
      icon: avatar4,
    },
    {
      handle: "anglee",
      icon: avatar5,
    },
    {
      handle: "anglee",
      icon: avatar6,
    },
    {
      handle: "anglee",
      icon: avatar7,
    },
    {
      handle: "anglee",
      icon: avatar3,
    },
  ];

  return (
    <div className="timeline">
      <div className="stories-wrap">
        <h1>Your Timeline</h1>
        <div className="stories">
          {stories &&
            stories.map((story, index) => {
              return (
                <div className="story" key={index}>
                  <img src={story.icon} alt="no-icon" />
                  <p>{story.handle}</p>
                </div>
              );
            })}
        </div>
      </div>
      <NewPost />
      <PostLists />
    </div>
  );
};

export default Timeline;
