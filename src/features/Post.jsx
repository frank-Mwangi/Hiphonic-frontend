
import avi from "../assets/Avatar.png";
import photo1 from "../assets/photo2.png";
import photo2 from "../assets/photo1.png";
import heart from "../assets/heart.png";
import comment from "../assets/message-circle.png";
import share from "../assets/share.png";
import emoji from "../assets/mood-smile.png";
import link from "../assets/link.png";
import "./post.scss";

const Post = () => {
  return (
    <div className="post">
      <div className="handle">
        <img src={avi} alt="no-avi" />
        <div className="name">
          <h4>Kaiser Soze</h4>
          <p>56 mins ago</p>
        </div>
      </div>
      <div className="textContent">
        <p>
          Here are some photography works that I made on the weekend with some
          of my friends, happy for that!
        </p>
      </div>
      <div className="images">
        <img className="img1" src={photo1} alt="no-pic" />
        <img src={photo2} alt="no-pic" />
      </div>
      <div className="impressions">
        <div className="impression">
          <img src={heart} alt="like-icon" />
          <p>
            2.6K
            <span> Likes</span>
          </p>
        </div>
        <div className="impression">
          <img src={comment} alt="comment-icon" />
          <p>
            297
            <span> Comments</span>
          </p>
        </div>
        <div className="impression">
          <img src={share} alt="share-icon" />
          <p>
            201
            <span> Share</span>
          </p>
        </div>
      </div>
      <form className="comment">
        <input
          type="text"
          name="comment"
          id="comment"
          className="write-comment"
          placeholder="Write your message ..."
        />
        <button>
          <img src={emoji} alt="" />
        </button>
        <button>
          <img src={link} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Post;
